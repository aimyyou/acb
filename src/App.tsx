import { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, Home, Search, PlusSquare, PlaySquare, User, ChevronLeft, MoreHorizontal, X } from 'lucide-react';
import { mainPost, users } from './data';

type ViewState = 'feed' | 'comments' | 'profile' | 'postDetail';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('feed');
  const [previousView, setPreviousView] = useState<ViewState>('feed');
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [viewingPost, setViewingPost] = useState<{ post: any, user: any } | null>(null);

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const navigateToProfile = (user: any) => {
    setPreviousView(currentView);
    setSelectedUser(user);
    setCurrentView('profile');
    setViewingPost(null);
  };

  const navigateToComments = () => {
    setPreviousView(currentView);
    setCurrentView('comments');
  };

  const navigateToFeed = () => {
    setPreviousView('feed');
    setCurrentView('feed');
    setViewingPost(null);
  };

  const openPostDetail = (post: any, user: any) => {
    setPreviousView(currentView);
    setViewingPost({ post, user });
    setCurrentView('postDetail');
  };

  const goBack = () => {
    setCurrentView(previousView);
    if (previousView === 'feed') setViewingPost(null);
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-md bg-white min-h-screen shadow-xl relative flex flex-col">
        
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white sticky top-0 z-10">
          {currentView === 'feed' && (
            <>
              <div className="font-bold text-xl tracking-tight">Inbyeol</div>
              <div className="flex space-x-4">
                <Heart className="w-6 h-6" />
                <MessageCircle className="w-6 h-6" />
              </div>
            </>
          )}
          {currentView === 'comments' && (
            <>
              <button onClick={goBack} className="p-1 -ml-1">
                <ChevronLeft className="w-7 h-7" />
              </button>
              <div className="font-semibold text-lg flex-1 text-center mr-6">댓글</div>
            </>
          )}
          {currentView === 'profile' && (
            <>
              <button onClick={goBack} className="p-1 -ml-1">
                <ChevronLeft className="w-7 h-7" />
              </button>
              <div className="font-semibold text-lg flex-1 text-center font-mono">{selectedUser?.username}</div>
              <MoreHorizontal className="w-6 h-6" />
            </>
          )}
          {currentView === 'postDetail' && (
            <>
              <button onClick={goBack} className="p-1 -ml-1">
                <ChevronLeft className="w-7 h-7" />
              </button>
              <div className="font-semibold text-lg flex-1 text-center mr-6">게시물</div>
            </>
          )}
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto pb-16">
          {currentView === 'feed' && (
            <div className="flex flex-col">
              {/* Post Header */}
              <div className="flex items-center px-3 py-3">
                <img 
                  src={mainPost.user.avatar} 
                  alt={mainPost.user.username} 
                  className="w-8 h-8 rounded-full object-cover border border-gray-200"
                  referrerPolicy="no-referrer"
                />
                <span className="ml-3 font-semibold text-sm">{mainPost.user.username}</span>
                <MoreHorizontal className="w-5 h-5 ml-auto text-gray-500" />
              </div>

              {/* Post Image */}
              <img 
                src={mainPost.image} 
                alt="Post content" 
                className="w-full aspect-square object-cover cursor-pointer"
                onClick={() => openPostDetail(mainPost, mainPost.user)}
                referrerPolicy="no-referrer"
              />

              {/* Post Actions */}
              <div className="px-3 py-3">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex space-x-4">
                    <Heart 
                      className={`w-6 h-6 cursor-pointer transition-colors ${likedPosts.has(mainPost.id) ? 'text-red-500 fill-red-500' : 'hover:text-gray-500'}`} 
                      onClick={() => toggleLike(mainPost.id)}
                    />
                    <MessageCircle 
                      className="w-6 h-6 hover:text-gray-500 cursor-pointer" 
                      onClick={navigateToComments}
                    />
                    <Send className="w-6 h-6 hover:text-gray-500 cursor-pointer" />
                  </div>
                  <Bookmark className="w-6 h-6 hover:text-gray-500 cursor-pointer" />
                </div>
                
                <div className="font-semibold text-sm mb-1">
                  좋아요 {mainPost.likes + (likedPosts.has(mainPost.id) ? 1 : 0)}개
                </div>
                
                <div className="text-sm">
                  <span className="font-semibold mr-2">{mainPost.user.username}</span>
                  <span className="whitespace-pre-wrap">{mainPost.caption}</span>
                </div>
                
                <div 
                  className="text-gray-500 text-sm mt-2 cursor-pointer"
                  onClick={navigateToComments}
                >
                  댓글 {mainPost.comments.length}개 모두 보기
                </div>
              </div>
            </div>
          )}

          {currentView === 'comments' && (
            <div className="flex flex-col">
              {/* Original Post Caption in Comments */}
              <div className="flex px-4 py-4 border-b border-gray-200">
                <img 
                  src={mainPost.user.avatar} 
                  alt={mainPost.user.username} 
                  className="w-9 h-9 rounded-full object-cover border border-gray-200 mt-1"
                  referrerPolicy="no-referrer"
                />
                <div className="ml-3 flex-1">
                  <span className="font-semibold text-sm mr-2">{mainPost.user.username}</span>
                  <span className="text-sm whitespace-pre-wrap">{mainPost.caption}</span>
                </div>
              </div>

              {/* Comments List */}
              <div className="flex flex-col px-4 py-2">
                {mainPost.comments.map(comment => (
                  <div key={comment.id} className="flex py-3">
                    <img 
                      src={comment.user.avatar} 
                      alt={comment.user.username} 
                      className="w-9 h-9 rounded-full object-cover border border-gray-200 mt-1 cursor-pointer"
                      onClick={() => navigateToProfile(comment.user)}
                      referrerPolicy="no-referrer"
                    />
                    <div className="ml-3 flex-1">
                      <div className="text-sm">
                        <span 
                          className="font-semibold mr-2 cursor-pointer hover:underline"
                          onClick={() => navigateToProfile(comment.user)}
                        >
                          {comment.user.username}
                        </span>
                        <span>{comment.text}</span>
                      </div>
                      <div className="flex items-center mt-2 space-x-4 text-xs text-gray-500 font-semibold">
                        <span>1시간 전</span>
                        <span>좋아요 {comment.likes}개</span>
                        <span>답글 달기</span>
                      </div>
                    </div>
                    <div className="ml-2 flex items-center">
                      <Heart className="w-3 h-3 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentView === 'profile' && selectedUser && (
            <div className="flex flex-col">
              {/* Profile Info */}
              <div className="px-4 py-6 flex items-center">
                <img 
                  src={selectedUser.avatar} 
                  alt={selectedUser.username} 
                  className="w-20 h-20 rounded-full object-cover border border-gray-200"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 ml-8 flex justify-between text-center">
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">{selectedUser.posts.length}</span>
                    <span className="text-sm text-gray-500">게시물</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">{selectedUser.followers}</span>
                    <span className="text-sm text-gray-500">팔로워</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">{selectedUser.following}</span>
                    <span className="text-sm text-gray-500">팔로잉</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="px-4 pb-4">
                <div className="font-semibold text-sm mb-1">{selectedUser.name}</div>
                <div className="text-sm whitespace-pre-wrap">{selectedUser.bio}</div>
              </div>

              {/* Action Buttons */}
              <div className="px-4 pb-4 flex space-x-2">
                <button className="flex-1 bg-gray-100 font-semibold text-sm py-1.5 rounded-lg">팔로잉</button>
                <button className="flex-1 bg-gray-100 font-semibold text-sm py-1.5 rounded-lg">메시지</button>
                <button className="bg-gray-100 p-1.5 rounded-lg"><User className="w-5 h-5" /></button>
              </div>

              {/* Grid Tabs */}
              <div className="flex border-t border-gray-200">
                <div className="flex-1 flex justify-center py-3 border-b-2 border-black">
                  <svg aria-label="게시물" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect>
                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line>
                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line>
                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line>
                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line>
                  </svg>
                </div>
                <div className="flex-1 flex justify-center py-3 text-gray-400">
                  <PlaySquare className="w-6 h-6" />
                </div>
                <div className="flex-1 flex justify-center py-3 text-gray-400">
                  <User className="w-6 h-6" />
                </div>
              </div>

              {/* Posts Grid */}
              <div className="grid grid-cols-3 gap-0.5">
                {selectedUser.posts.map((post: any) => (
                  <div 
                    key={post.id} 
                    className="aspect-square relative group cursor-pointer"
                    onClick={() => openPostDetail(post, selectedUser)}
                  >
                    <img 
                      src={post.image} 
                      alt="Post" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentView === 'postDetail' && viewingPost && (
            <div className="flex flex-col animate-in fade-in slide-in-from-right duration-300">
              {/* Post Header */}
              <div className="flex items-center px-3 py-3 border-b border-gray-100">
                <img 
                  src={viewingPost.user.avatar} 
                  alt={viewingPost.user.username} 
                  className="w-8 h-8 rounded-full object-cover border border-gray-200"
                  referrerPolicy="no-referrer"
                />
                <span className="ml-3 font-semibold text-sm">{viewingPost.user.username}</span>
                <MoreHorizontal className="w-5 h-5 ml-auto text-gray-500" />
              </div>

              {/* Post Image */}
              <div className="w-full bg-black flex items-center justify-center">
                <img 
                  src={viewingPost.post.image} 
                  alt="Post Detail" 
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Post Actions */}
              <div className="px-3 py-3">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex space-x-4">
                    <Heart 
                      className={`w-6 h-6 cursor-pointer transition-colors ${likedPosts.has(viewingPost.post.id) ? 'text-red-500 fill-red-500' : 'hover:text-gray-500'}`} 
                      onClick={() => toggleLike(viewingPost.post.id)}
                    />
                    <MessageCircle className="w-6 h-6 hover:text-gray-500 cursor-pointer" />
                    <Send className="w-6 h-6 hover:text-gray-500 cursor-pointer" />
                  </div>
                  <Bookmark className="w-6 h-6 hover:text-gray-500 cursor-pointer" />
                </div>
                
                <div className="font-semibold text-sm mb-1">
                  좋아요 {viewingPost.post.likes + (likedPosts.has(viewingPost.post.id) ? 1 : 0)}개
                </div>
                
                <div className="text-sm">
                  <span className="font-semibold mr-2">{viewingPost.user.username}</span>
                  <span className="whitespace-pre-wrap">{viewingPost.post.caption}</span>
                  <div className="mt-2 text-blue-800 space-x-1">
                    {viewingPost.post.hashtags?.map((tag: string) => (
                      <span key={tag} className="cursor-pointer hover:underline">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Comments List */}
                <div className="mt-4 space-y-4 border-t border-gray-100 pt-4">
                  {viewingPost.post.comments?.map((comment: any) => (
                    <div key={comment.id} className="flex py-1">
                      <img 
                        src={comment.user.avatar} 
                        alt={comment.user.username} 
                        className="w-8 h-8 rounded-full object-cover border border-gray-200 mt-1 cursor-pointer"
                        onClick={() => navigateToProfile(comment.user)}
                        referrerPolicy="no-referrer"
                      />
                      <div className="ml-3 flex-1">
                        <div className="text-sm">
                          <span 
                            className="font-semibold mr-2 cursor-pointer hover:underline"
                            onClick={() => navigateToProfile(comment.user)}
                          >
                            {comment.user.username}
                          </span>
                          <span>{comment.text}</span>
                        </div>
                        <div className="flex items-center mt-1 space-x-4 text-xs text-gray-500 font-semibold">
                          <span>1시간 전</span>
                          <span>좋아요 {comment.likes}개</span>
                        </div>
                      </div>
                      <div className="ml-2 flex items-center">
                        <Heart className="w-3 h-3 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Bottom Navigation */}
        <nav className="flex justify-around items-center py-3 border-t border-gray-200 bg-white absolute bottom-0 w-full z-10">
          <Home className={`w-6 h-6 cursor-pointer ${currentView === 'feed' ? 'text-black' : 'text-gray-500'}`} onClick={navigateToFeed} />
          <Search className="w-6 h-6 text-gray-500 cursor-pointer" />
          <PlusSquare className="w-6 h-6 text-gray-500 cursor-pointer" />
          <PlaySquare className="w-6 h-6 text-gray-500 cursor-pointer" />
          <div className="w-6 h-6 rounded-full border border-gray-300 overflow-hidden cursor-pointer">
            <img src="https://picsum.photos/seed/user/150/150" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </nav>
      </div>
    </div>
  );
}
