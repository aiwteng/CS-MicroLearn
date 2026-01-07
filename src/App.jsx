import React, { useMemo, useState } from 'react';
import { PlayCircle, Lock, CheckCircle, Clock, Code, Trophy, ArrowRight, BookOpen, Zap, LogIn, Mail, KeyRound, LogOut, User, Award, Flame, Medal, Bell, X, Search, Filter, Star } from 'lucide-react';

// ============================================
// DATA AND TYPES
// ============================================

const SKILLS_DATA = [
  {
    id: 'python-loops',
    title: 'Python Loops',
    category: 'Fundamentals',
    duration: '7 min',
    xp: 50,
    difficulty: 'Beginner',
    prerequisites: ['Python Basic Syntax', 'Variables'],
    whatYouWillBuild: 'A number guessing game loop',
    completed: false,
    locked: false,
    description: 'Master for and while loops with practical examples',
    objectives: ['Understand loop syntax', 'Use break and continue', 'Iterate over collections'],
    videoUrl: '#',
    quiz: [
      {
        question: 'What does "break" do in a loop?',
        options: ['Pauses the loop', 'Exits the loop immediately', 'Skips to next iteration', 'Restarts the loop'],
        correct: 1
      },
      {
        question: 'Which loop checks the condition after execution?',
        options: ['for loop', 'while loop', 'do-while loop', 'None'],
        correct: 2
      }
    ],
    codeChallenge: {
      prompt: 'Write a loop that prints numbers 1 to 5',
      starterCode: '# Write your code here\nfor i in range(?):\n    print(?)',
      solution: 'for i in range(1, 6):\n    print(i)'
    }
  },
  {
    id: 'array-logic',
    title: 'Array Logic',
    category: 'Data Structures',
    duration: '8 min',
    xp: 60,
    difficulty: 'Intermediate',
    prerequisites: ['Lists', 'Loops'],
    whatYouWillBuild: 'A shopping cart total calculator',
    completed: false,
    locked: false,
    description: 'Learn array manipulation and common patterns',
    objectives: ['Access array elements', 'Use array methods', 'Solve array problems'],
    videoUrl: '#',
    quiz: [
      {
        question: 'How do you access the first element of an array?',
        options: ['array[1]', 'array[0]', 'array.first()', 'array.get(0)'],
        correct: 1
      },
      {
        question: 'What method adds an element to the end of an array?',
        options: ['add()', 'push()', 'append()', 'insert()'],
        correct: 1
      }
    ],
    codeChallenge: {
      prompt: 'Find the sum of all numbers in an array',
      starterCode: '# Write your code here\nnumbers = [1, 2, 3, 4, 5]\ntotal = 0\n# Add your solution',
      solution: 'for num in numbers:\n    total += num\nprint(total)'
    }
  },
  {
    id: 'recursion-basics',
    title: 'Recursion Basics',
    difficulty: 'Advanced',
    prerequisites: ['Functions', 'Control Flow'],
    whatYouWillBuild: 'A fractal tree generator',
    category: 'Advanced',
    duration: '10 min',
    xp: 80,
    completed: false,
    locked: true,
    description: 'Understand recursive thinking and base cases',
    objectives: ['Define recursion', 'Identify base cases', 'Write recursive functions'],
    videoUrl: '#',
    quiz: [
      {
        question: 'What is a base case in recursion?',
        options: ['The starting point', 'The condition to stop recursion', 'The recursive call', 'The return value'],
        correct: 1
      },
      {
        question: 'What happens without a base case?',
        options: ['Nothing', 'Infinite recursion', 'Syntax error', 'Faster execution'],
        correct: 1
      }
    ],
    codeChallenge: {
      prompt: 'Write a recursive function to calculate factorial',
      starterCode: '# Write your code here\ndef factorial(n):\n    # Add your solution\n    pass',
      solution: 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n-1)'
    }
  },
  {
    id: 'sorting-algorithms',
    title: 'Sorting Algorithms',
    difficulty: 'Intermediate',
    prerequisites: ['Arrays', 'Loops', 'Conditionals'],
    whatYouWillBuild: 'A custom visualization of sorting',
    category: 'Algorithms',
    duration: '12 min',
    xp: 100,
    completed: false,
    locked: true,
    description: 'Master bubble sort, merge sort, and quick sort',
    objectives: ['Understand time complexity', 'Implement sorting algorithms', 'Compare sorting methods'],
    videoUrl: '#',
    quiz: [
      {
        question: 'What is the best time complexity of quick sort?',
        options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
        correct: 1
      },
      {
        question: 'Which sorting algorithm is stable?',
        options: ['Quick sort', 'Heap sort', 'Merge sort', 'Selection sort'],
        correct: 2
      }
    ],
    codeChallenge: {
      prompt: 'Implement bubble sort for an array',
      starterCode: '# Write your code here\ndef bubble_sort(arr):\n    # Add your solution\n    pass',
      solution: 'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr'
    }
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    difficulty: 'Intermediate',
    prerequisites: ['Sorted Arrays', 'While Loops'],
    whatYouWillBuild: 'A dictionary word finder',
    category: 'Algorithms',
    duration: '9 min',
    xp: 70,
    completed: false,
    locked: true,
    description: 'Learn efficient searching in sorted arrays',
    objectives: ['Understand divide and conquer', 'Implement binary search', 'Analyze search complexity'],
    videoUrl: '#',
    quiz: [
      {
        question: 'What is the time complexity of binary search?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        correct: 1
      },
      {
        question: 'Binary search requires the array to be:',
        options: ['Large', 'Sorted', 'Unsorted', 'Empty'],
        correct: 1
      }
    ],
    codeChallenge: {
      prompt: 'Implement binary search to find a target value',
      starterCode: '# Write your code here\ndef binary_search(arr, target):\n    # Add your solution\n    pass',
      solution: 'def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1'
    }
  },
  {
    difficulty: 'Advanced',
    prerequisites: ['Arrays', 'Functions'],
    whatYouWillBuild: 'A simple caching system',

    id: 'hash-tables',
    title: 'Hash Tables',
    category: 'Data Structures',
    duration: '11 min',
    xp: 90,
    completed: false,
    locked: true,
    description: 'Master hash maps and collision handling',
    objectives: ['Understand hashing concepts', 'Handle collisions', 'Use dictionaries effectively'],
    videoUrl: '#',
    quiz: [
      {
        question: 'What is the average time complexity for hash table lookup?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correct: 0
      },
      {
        question: 'What is a collision in hash tables?',
        options: ['Memory overflow', 'Two keys hash to same index', 'Table is full', 'Invalid key'],
        correct: 1
      }
    ],
    codeChallenge: {
      prompt: 'Find the first duplicate in an array using a hash set',
      starterCode: '# Write your code here\ndef find_duplicate(arr):\n    # Add your solution\n    pass',
      solution: 'def find_duplicate(arr):\n    seen = set()\n    for num in arr:\n        if num in seen:\n            return num\n        seen.add(num)\n    return None'
    }
  }
];

// ============================================
// SCREEN 0: LOGIN
// ============================================

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      onLogin(email);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <Code className="w-10 h-10 text-cyan-600" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">CS MicroLearn</h1>
          <p className="text-cyan-100">Master computer science, one skill at a time</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome Back</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@university.edu"
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors mt-6"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
          </div>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-cyan-600 hover:text-cyan-700">
              Forgot password?
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-cyan-600 hover:text-cyan-700 font-semibold">
                Sign up free
              </a>
            </p>
          </div>
        </div>

        {/* Demo Hint */}
        <div className="mt-6 text-center">
          <p className="text-white text-sm bg-white bg-opacity-20 rounded-lg px-4 py-2 inline-block">
            💡 Demo: Enter any email and password to continue
          </p>
        </div>
      </div>
    </div>
  );
};

// ============================================
// COMPONENT: NOTIFICATIONS PANEL
// ============================================

const NotificationsPanel = ({ onClose }) => {
  const notifications = [
    { id: 1, title: 'New skill added', message: 'Check out "Advanced Recursion"!', type: 'info', time: '2m ago' },
    { id: 2, title: 'Streak milestone', message: 'You reached a 3-day streak!', type: 'success', time: '1h ago' },
    { id: 3, title: 'Badge unlocked', message: 'You earned the "First Skill" badge', type: 'award', time: '1d ago' }
  ];

  return (
    <div className="absolute top-16 right-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
        <h3 className="font-bold text-gray-900 flex items-center gap-2">
          <Bell className="w-4 h-4 text-cyan-600" /> Notifications
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map(n => (
          <div key={n.id} className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
            <div className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${n.type === 'info' ? 'bg-blue-500' : n.type === 'success' ? 'bg-green-500' : 'bg-amber-500'}`} />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">{n.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{n.message}</p>
                <span className="text-[10px] text-gray-400 mt-2 block">{n.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 text-center bg-gray-50 border-t border-gray-100">
        <button className="text-xs font-semibold text-cyan-600 hover:text-cyan-700">Mark all as read</button>
      </div>
    </div>
  );
};

// ============================================
// SCREEN 1: DASHBOARD
// ============================================

const DashboardScreen = ({ userProgress, skills, onSkillSelect, userName, onLogout, onProfile }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showNotifications, setShowNotifications] = useState(false);

  const categories = ['All', ...new Set(skills.map(s => s.category))];

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 mb-6 relative">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome back, {userName}! 👋</h1>
              <p className="text-gray-600 mt-1">Continue your learning journey</p>
            </div>
            <div className="flex gap-3 md:gap-4 items-center justify-between md:justify-end flex-wrap relative">
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative"
                >
                  <Bell className="w-6 h-6" />
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                {showNotifications && <NotificationsPanel onClose={() => setShowNotifications(false)} />}
              </div>

              <button
                onClick={onProfile}
                className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-3 md:px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm md:text-base border-2 border-gray-200"
                title="Profile"
              >
                <User className="w-4 h-4 md:w-5 md:h-5" />
                Profile
              </button>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-600">{userProgress.currentXP}</div>
                <div className="text-xs md:text-sm text-gray-500">Total XP</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-500">{userProgress.streak}</div>
                <div className="text-xs md:text-sm text-gray-500">Day Streak 🔥</div>
              </div>
              <button
                onClick={onLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 md:px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm md:text-base"
                title="Logout"
              >
                <LogOut className="w-4 h-4 md:w-5 md:h-5" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search skills by title or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Chips - Desktop (can be horizontal scroll on mobile) */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-colors ${selectedCategory === cat
                      ? 'bg-cyan-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Tree / Browse Grid */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Browse All Skills</h2>
          <span className="text-sm text-gray-500">{filteredSkills.length} skills found</span>
        </div>

        {filteredSkills.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => {
              const isCompleted = userProgress.completedSkills.includes(skill.id);
              return (
                <div
                  key={skill.id}
                  onClick={() => onSkillSelect(skill)}
                  className={`bg-white rounded-xl shadow-sm p-6 transition-all cursor-pointer ${skill.locked
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:shadow-lg hover:scale-105'
                    }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                      {skill.category}
                    </span>
                    {isCompleted && <CheckCircle className="w-6 h-6 text-green-500" />}
                    {skill.locked && <Lock className="w-6 h-6 text-gray-400" />}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{skill.description}</p>

                  {/* Difficulty Badge */}
                  <div className="mb-4">
                    <span className={`text-xs px-2 py-1 rounded border ${skill.difficulty === 'Beginner' ? 'bg-green-50 text-green-700 border-green-200' :
                        skill.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                          'bg-red-50 text-red-700 border-red-200'
                      }`}>
                      {skill.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {skill.duration}
                    </div>
                    <div className="flex items-center text-indigo-600 font-semibold">
                      <Zap className="w-4 h-4 mr-1" />
                      {skill.xp} XP
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">No skills found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 text-cyan-600 font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================
// SCREEN 1.5: PROFILE
// ============================================

const ProfileScreen = ({ userName, setUserName, userEmail, userProgress, totalSkills, onBack, onLogout }) => {
  const [draftName, setDraftName] = useState(userName);

  const stats = useMemo(() => {
    const completedCount = userProgress.completedSkills.length;
    const completionPct = totalSkills > 0 ? Math.round((completedCount / totalSkills) * 100) : 0;

    const badges = [
      {
        id: 'first-skill',
        title: 'First Skill',
        description: 'Complete 1 skill',
        unlocked: completedCount >= 1,
        Icon: Award,
        accent: 'text-amber-600 bg-amber-50 border-amber-200'
      },
      {
        id: 'xp-500',
        title: 'XP Collector',
        description: 'Reach 500 XP',
        unlocked: userProgress.currentXP >= 500,
        Icon: Trophy,
        accent: 'text-cyan-600 bg-cyan-50 border-cyan-200'
      },
      {
        id: 'streak-3',
        title: 'On Fire',
        description: 'Maintain a 3-day streak',
        unlocked: userProgress.streak >= 3,
        Icon: Flame,
        accent: 'text-orange-600 bg-orange-50 border-orange-200'
      },
      {
        id: 'completion-50',
        title: 'Halfway There',
        description: 'Complete 50% of skills',
        unlocked: completionPct >= 50,
        Icon: Medal,
        accent: 'text-indigo-600 bg-indigo-50 border-indigo-200'
      }
    ];

    const unlockedBadges = badges.filter(b => b.unlocked).length;
    return { completedCount, completionPct, badges, unlockedBadges };
  }, [userProgress.completedSkills.length, userProgress.currentXP, userProgress.streak, totalSkills]);

  const initials = useMemo(() => {
    const cleaned = (userName || '').trim();
    if (!cleaned) return 'U';
    const parts = cleaned.split(/\s+/).filter(Boolean);
    const first = parts[0]?.[0] ?? 'U';
    const second = (parts.length > 1 ? parts[parts.length - 1]?.[0] : cleaned[1]) ?? '';
    return (first + second).toUpperCase();
  }, [userName]);

  const saveName = () => {
    const next = draftName.trim();
    if (next) setUserName(next);
    else setDraftName(userName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="text-cyan-700 hover:text-cyan-800 font-semibold"
          >
            ← Back to Dashboard
          </button>
          <button
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white flex items-center justify-center text-xl font-bold">
                  {initials}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-cyan-700 bg-cyan-50 inline-flex px-3 py-1 rounded-full">Student</div>
                  <h1 className="text-2xl font-bold text-gray-900 mt-2">{userName}</h1>
                  {userEmail && <p className="text-sm text-gray-500 mt-1">{userEmail}</p>}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Display name</label>
                <div className="flex gap-2">
                  <input
                    value={draftName}
                    onChange={(e) => setDraftName(e.target.value)}
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                  <button
                    onClick={saveName}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-4 py-3 rounded-xl transition-colors"
                  >
                    Save
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Prototype-only: name changes aren’t saved after refresh.</p>
              </div>
            </div>
          </div>

          {/* Progress + Badges */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Progress Summary</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-cyan-50 rounded-xl p-4 border-2 border-cyan-100">
                  <div className="text-sm text-gray-600">Total XP</div>
                  <div className="text-3xl font-bold text-cyan-700 mt-1">{userProgress.currentXP}</div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-100">
                  <div className="text-sm text-gray-600">Streak</div>
                  <div className="text-3xl font-bold text-orange-600 mt-1">{userProgress.streak} 🔥</div>
                </div>
                <div className="bg-indigo-50 rounded-xl p-4 border-2 border-indigo-100">
                  <div className="text-sm text-gray-600">Skills Completed</div>
                  <div className="text-3xl font-bold text-indigo-700 mt-1">{stats.completedCount}/{totalSkills}</div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Overall completion</span>
                  <span className="font-semibold text-gray-900">{stats.completionPct}%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-gradient-to-r from-cyan-500 to-teal-500"
                    style={{ width: `${stats.completionPct}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Badges</h2>
                <div className="text-sm text-gray-500">Unlocked: <span className="font-semibold text-gray-900">{stats.unlockedBadges}</span>/{stats.badges.length}</div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {stats.badges.map(({ id, title, description, unlocked, Icon, accent }) => (
                  <div
                    key={id}
                    className={`rounded-xl border-2 p-4 flex gap-3 items-start ${unlocked ? accent : 'border-gray-200 bg-gray-50 opacity-70'}`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${unlocked ? 'bg-white bg-opacity-40' : 'bg-white'} `}>
                      <Icon className={`w-5 h-5 ${unlocked ? '' : 'text-gray-400'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-900">{title}</h3>
                        {unlocked ? (
                          <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full">Unlocked</span>
                        ) : (
                          <span className="text-xs font-semibold text-gray-600 bg-white px-2 py-1 rounded-full border border-gray-200">Locked</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// SCREEN 2: SKILL OVERVIEW
// ============================================

const OverviewScreen = ({ selectedSkill, onBack, onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="text-cyan-600 hover:text-cyan-700 mb-6 flex items-center"
        >
          ← Back to Dashboard
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                {selectedSkill.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mt-3">{selectedSkill.title}</h1>
              <p className="text-gray-600 mt-2 text-lg">{selectedSkill.description}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-indigo-600">{selectedSkill.xp} XP</div>
              <div className="text-sm text-gray-500 flex items-center mt-1">
                <Clock className="w-4 h-4 mr-1" />
                {selectedSkill.duration}
              </div>
            </div>
          </div>

          {/* Key Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <div className="flex items-center gap-2 mb-2 text-blue-700 font-semibold">
                <Medal className="w-5 h-5" /> Difficulty
              </div>
              <div className="text-gray-900 font-medium">{selectedSkill.difficulty || 'All Levels'}</div>
            </div>

            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
              <div className="flex items-center gap-2 mb-2 text-amber-700 font-semibold">
                <BookOpen className="w-5 h-5" /> Prerequisites
              </div>
              <div className="text-gray-900 font-medium text-sm">
                {selectedSkill.prerequisites && selectedSkill.prerequisites.length > 0
                  ? selectedSkill.prerequisites.join(', ')
                  : 'None'}
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
              <div className="flex items-center gap-2 mb-2 text-purple-700 font-semibold">
                <Code className="w-5 h-5" /> What you'll build
              </div>
              <div className="text-gray-900 font-medium text-sm">{selectedSkill.whatYouWillBuild || 'Practice Exercises'}</div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Learning Objectives</h2>
            <ul className="space-y-3">
              {selectedSkill.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onStart}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <PlayCircle className="w-6 h-6" />
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// SCREEN 3: VIDEO LESSON
// ============================================

const VideoScreen = ({ selectedSkill, videoProgress, onComplete }) => {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Video Player */}
          <div className="aspect-video bg-gradient-to-br from-cyan-900 to-teal-900 flex items-center justify-center relative">
            <PlayCircle className="w-24 h-24 text-white opacity-80" />
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {selectedSkill.title} - Lesson Video
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-700 h-2">
            <div
              className="bg-cyan-500 h-2 transition-all duration-300"
              style={{ width: `${videoProgress}%` }}
            />
          </div>

          {/* Controls */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{selectedSkill.title}</h2>

            {/* Interactive Pause Point */}
            {videoProgress < 100 && (
              <div className="bg-cyan-900 bg-opacity-50 border-2 border-cyan-500 rounded-xl p-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="bg-cyan-500 rounded-full p-2 flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">Quick Check!</h3>
                    <p className="text-gray-300 text-sm">Can you think of a real-world example where loops are useful?</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={onComplete}
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              {videoProgress < 100 ? 'Complete Video' : 'Continue to Practice'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// SCREEN 4: CODING ACTIVITY
// ============================================

const CodingScreen = ({ selectedSkill, onSubmit }) => {
  const [code, setCode] = useState(selectedSkill.codeChallenge.starterCode);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-8 h-8 text-cyan-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Coding Challenge</h2>
              <p className="text-gray-400">{selectedSkill.codeChallenge.prompt}</p>
            </div>
          </div>

          {/* Code Editor */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="bg-gray-700 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-300 text-sm ml-2">main.py</span>
                </div>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full bg-gray-900 text-green-400 font-mono p-4 focus:outline-none resize-none"
                  rows={10}
                  spellCheck={false}
                />
              </div>
            </div>

            {/* Output Panel */}
            <div>
              <div className="bg-gray-900 rounded-lg p-4 h-full">
                <h3 className="text-white font-semibold mb-2">Output Console</h3>
                <div className="text-gray-400 font-mono text-sm">
                  <div>Ready to run...</div>
                  <div className="text-green-400 mt-2">Click "Run Code" to test your solution</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-xl transition-colors">
              Run Code
            </button>
            <button
              onClick={onSubmit}
              className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Submit & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// SCREEN 5: QUIZ
// ============================================

const QuizScreen = ({ selectedSkill, quizAnswers, onAnswerSelect, onSubmit }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Knowledge Check</h2>
          <p className="text-gray-600 mb-8">Test your understanding of {selectedSkill.title}</p>

          {selectedSkill.quiz.map((q, qIdx) => (
            <div key={qIdx} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Question {qIdx + 1}: {q.question}
              </h3>
              <div className="space-y-3">
                {q.options.map((option, oIdx) => {
                  const isSelected = quizAnswers[qIdx] === oIdx;
                  const isCorrect = oIdx === q.correct;
                  const showFeedback = quizAnswers[qIdx] !== undefined;

                  return (
                    <button
                      key={oIdx}
                      onClick={() => onAnswerSelect(qIdx, oIdx)}
                      disabled={showFeedback}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${showFeedback
                        ? isCorrect
                          ? 'border-green-500 bg-green-50'
                          : isSelected
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-200'
                        : isSelected
                          ? 'border-cyan-500 bg-cyan-50'
                          : 'border-gray-200 hover:border-cyan-300'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900">{option}</span>
                        {showFeedback && isCorrect && (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              {quizAnswers[qIdx] !== undefined && (
                <div className={`mt-3 p-4 rounded-lg ${quizAnswers[qIdx] === q.correct ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}>
                  {quizAnswers[qIdx] === q.correct
                    ? '✓ Correct! Well done.'
                    : `✗ Not quite. The correct answer is: ${q.options[q.correct]}`
                  }
                </div>
              )}
            </div>
          ))}

          <button
            onClick={onSubmit}
            disabled={Object.keys(quizAnswers).length < selectedSkill.quiz.length}
            className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors"
          >
            Complete Skill
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// SCREEN 6: PROGRESS UPDATE
// ============================================

const ProgressScreen = ({ selectedSkill, userProgress, onContinue }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
          <div className="bg-cyan-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-12 h-12 text-cyan-600" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-3">Skill Unlocked! 🎉</h1>
          <p className="text-xl text-gray-600 mb-8">
            You've mastered <span className="font-semibold text-cyan-600">{selectedSkill.title}</span>
          </p>

          <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl p-6 mb-8">
            <div className="text-4xl font-bold">{selectedSkill.xp} XP</div>
            <div className="text-cyan-100">Total: {userProgress.currentXP} XP</div>
          </div>

          <div className="space-y-3">
            <button
              onClick={onContinue}
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 rounded-xl transition-colors"
            >
              Continue Learning
            </button>
            <button
              onClick={onContinue}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 rounded-xl transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// MAIN APP COMPONENT
// ============================================

const MicrolearningPlatform = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [videoProgress, setVideoProgress] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [userProgress, setUserProgress] = useState({
    completedSkills: ['python-basics', 'variables'],
    currentXP: 250,
    streak: 5
  });

  const handleLogin = (email) => {
    const name = email.split('@')[0];
    setUserName(name.charAt(0).toUpperCase() + name.slice(1));
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setUserEmail('');
    setCurrentScreen('dashboard');
    setSelectedSkill(null);
    setQuizAnswers({});
    setVideoProgress(0);
  };

  const handleSkillSelect = (skill) => {
    if (!skill.locked) {
      setSelectedSkill(skill);
      setCurrentScreen('overview');
    }
  };

  const startLesson = () => {
    setCurrentScreen('video');
    setVideoProgress(0);
  };

  const completeVideo = () => {
    setVideoProgress(100);
    setCurrentScreen('coding');
  };

  const submitCode = () => {
    setCurrentScreen('quiz');
  };

  const handleAnswerSelect = (questionIdx, answerIdx) => {
    setQuizAnswers({ ...quizAnswers, [questionIdx]: answerIdx });
  };

  const submitQuiz = () => {
    const skill = selectedSkill;
    setUserProgress(prev => ({
      ...prev,
      completedSkills: [...prev.completedSkills, skill.id],
      currentXP: prev.currentXP + skill.xp
    }));
    setCurrentScreen('progress');
  };

  const goToDashboard = () => {
    setCurrentScreen('dashboard');
    setSelectedSkill(null);
    setQuizAnswers({});
  };

  const goToProfile = () => {
    setCurrentScreen('profile');
  };

  // Show login screen if not logged in
  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Router for screens after login
  const screens = {
    dashboard: (
      <DashboardScreen
        userProgress={userProgress}
        skills={SKILLS_DATA}
        onSkillSelect={handleSkillSelect}
        userName={userName}
        onLogout={handleLogout}
        onProfile={goToProfile}
      />
    ),
    profile: (
      <ProfileScreen
        userName={userName}
        setUserName={setUserName}
        userEmail={userEmail}
        userProgress={userProgress}
        totalSkills={SKILLS_DATA.length}
        onBack={goToDashboard}
        onLogout={handleLogout}
      />
    ),
    overview: (
      <OverviewScreen
        selectedSkill={selectedSkill}
        onBack={goToDashboard}
        onStart={startLesson}
      />
    ),
    video: (
      <VideoScreen
        selectedSkill={selectedSkill}
        videoProgress={videoProgress}
        onComplete={completeVideo}
      />
    ),
    coding: (
      <CodingScreen
        selectedSkill={selectedSkill}
        onSubmit={submitCode}
      />
    ),
    quiz: (
      <QuizScreen
        selectedSkill={selectedSkill}
        quizAnswers={quizAnswers}
        onAnswerSelect={handleAnswerSelect}
        onSubmit={submitQuiz}
      />
    ),
    progress: (
      <ProgressScreen
        selectedSkill={selectedSkill}
        userProgress={userProgress}
        onContinue={goToDashboard}
      />
    )
  };

  return screens[currentScreen];
};

export default MicrolearningPlatform;
