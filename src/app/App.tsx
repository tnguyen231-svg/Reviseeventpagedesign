import resumeWorkshopImg from 'figma:asset/384bd3c96e408b216d2756141fba1f0c8d0299f9.png';
import resumeReviewHeadshotImg from 'figma:asset/ebaf45e804d2ca56d3448f6ebb439304ad533d6b.png';
import golfOpenHouseImg from 'figma:asset/60a52aff553eb4612d66220a9a02f4bc679ef87c.png';
import guestSpeakerImg from 'figma:asset/42d2b6f8e6287e58c55f6a2b6b2e9ecd340b3064.png';
import heroActivitiesImg from 'figma:asset/04304369fa768743b35b4911368a8321f292dac3.png';

import { Search, Star, Calendar, GraduationCap, Users, Camera, HelpCircle, ChevronDown, Menu, X, ArrowUp, MapPin, Building2, Trees, ShoppingBag, Theater, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { EventCard } from './components/event-card';
import { EventModal } from './components/event-modal';
import { Footer } from './components/footer';
import logoImg from 'figma:asset/721e527b47461bb53ccf0f4e3ee576ae7fab6faa.png';
import cookingClass1 from 'figma:asset/13e7ba988ca088a9b3f2c49cc8e4a607de177fda.png';
import cookingClass2 from 'figma:asset/5e08e929c3512f6263d63b25f82e3c3d5812f7b0.png';
import cookingClass3 from 'figma:asset/74d15416a33a1b06bf8aec3ebce007f05bb95292.png';
import teacherPresentation from 'figma:asset/abff1d6d6d57315a9d25958d1a02e1b6736d7d9f.png';
import heroImg1 from 'figma:asset/0767ca345d394e178aced72695f594371d98a8a6.png';
import heroImg2 from 'figma:asset/942be810f94c8b3031c0104ee438d7440d76bfcd.png';
import heroImg3 from 'figma:asset/13ce089fbd2ce76bcfeaa3cfc4eb9e9d451c7a39.png';
import ismcClubImg from 'figma:asset/d5fcca0243274a7cf34436eb82a941fdd05b4d62.png';
import mindfulLeadershipImg from 'figma:asset/0c90116e84258dcf5fa632b796b0a221193bfad6.png';
import commSkillsImg from 'figma:asset/e068ae47eabafa47d105e01000a2fdec95808839.png';
import intlCuisineImg from 'figma:asset/5381ecacee8435dd9462595ceac82bc6bf18cd32.png';
import caFoodShowImg from 'figma:asset/32148e76468a1804b9b1c91fcf76270866e83c70.png';
import friendsgivingImg from 'figma:asset/5acd8dd041bed6bfb623cb3305ee2c9c5f3f164a.png';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  featured?: boolean;
  capacity?: string;
  section: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'ISMC Club Challenge Event',
    date: 'March 15, 2026 • 2:00 PM - 5:00 PM',
    location: 'Computer Lab, Building A',
    category: 'Competition',
    image: ismcClubImg,
    description: 'Test your programming and problem-solving skills in an exciting team-based competition.',
    fullDescription: `Join the Information Systems and Management Club (ISMC) for an exciting afternoon of competitive programming and technical challenges.\n\nThis event brings together students passionate about technology, coding, and problem-solving. Teams will compete in various challenges including:\n- Algorithm design and optimization\n- Web development tasks\n- Database problem-solving\n- System design scenarios\n\nWhether you're a beginner or advanced programmer, there are challenges for all skill levels. Form a team with your friends or join individually and we'll match you with teammates. Prizes will be awarded to top-performing teams!\n\nRefreshments will be provided. Bring your laptop and be ready to code!`,
    featured: true,
    capacity: '80 participants',
    section: 'featured'
  },
  {
    id: 2,
    title: 'Cultivating Mindful Leadership Seminar',
    date: 'April 30, 2026 • 9:00 AM - 12:00 PM',
    location: 'Conference Center, Building B',
    category: 'Leadership',
    image: mindfulLeadershipImg,
    description: 'Develop mindful leadership skills and learn techniques to enhance your professional effectiveness.',
    fullDescription: `Join us for an inspiring seminar on cultivating mindful leadership in today's fast-paced world.\n\nThis interactive session will explore:\n- Principles of mindful leadership and self-awareness\n- Techniques for effective decision-making under pressure\n- Building resilient and collaborative teams\n- Managing stress and maintaining work-life balance\n- Practical mindfulness exercises for daily practice\n\nLed by renowned leadership coaches and mindfulness practitioners, this seminar is designed for students aspiring to leadership roles, current student organization leaders, and anyone interested in personal and professional development.\n\nLight refreshments will be provided. Space is limited, so register early!`,
    featured: true,
    capacity: '60 participants',
    section: 'featured'
  },
  {
    id: 3,
    title: 'Class of 2026 Graduation Ceremony',
    date: 'May 20, 2026 • 10:00 AM - 12:30 PM',
    location: 'University Auditorium',
    category: 'Academic',
    image: 'https://images.unsplash.com/photo-1738949538943-e54722a44ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc3MTk0MDc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Celebrate the achievements of our graduating class at this special commencement ceremony.',
    fullDescription: `Celebrate the achievements of our graduating class at this special commencement ceremony honoring the Class of 2026.\n\nThis formal ceremony will recognize the hard work and dedication of our graduates. Family members and friends are warmly invited to attend and celebrate this milestone.\n\nThe ceremony will feature keynote speakers, the conferral of degrees, and recognition of academic achievements. A reception will follow in the Grand Hall.`,
    capacity: '2,000 seats',
    section: 'upcoming'
  },
  {
    id: 4,
    title: 'Professional Communication Skills Through the ISM Club',
    date: 'April 8, 2026 • 2:00 PM - 5:00 PM',
    location: 'Conference Room, Building C',
    category: 'Professional Development',
    image: commSkillsImg,
    description: 'Enhance your professional communication skills with practical workshops and expert guidance.',
    fullDescription: `Join the Information Systems and Management (ISM) Club for an intensive workshop designed to elevate your professional communication skills.\n\nThis comprehensive session covers:\n- Effective business communication strategies\n- Professional email and written correspondence\n- Presentation skills and public speaking\n- Active listening and interpersonal communication\n- Networking and professional etiquette\n- Digital communication in the modern workplace\n\nLed by industry professionals and faculty advisors, this workshop combines theory with hands-on practice. Participants will engage in role-playing exercises, group discussions, and receive personalized feedback.\n\nWhether you're preparing for internships, job interviews, or enhancing your leadership capabilities, this workshop will provide essential skills for success in any professional environment.\n\nRefreshments will be provided. Limited seats available - register early!`,
    capacity: '45 participants',
    section: 'upcoming'
  },
  {
    id: 5,
    title: 'International Cuisine Presentation',
    date: 'March 28, 2026 • 5:00 PM - 8:00 PM',
    location: 'University Culinary Arts Center',
    category: 'Cultural',
    image: intlCuisineImg,
    description: 'Experience authentic international cuisine prepared and presented by talented culinary students.',
    fullDescription: `Join us for an extraordinary culinary journey around the world, featuring authentic dishes prepared and presented by our talented culinary arts students.\n\nThis special presentation showcases:\n- Live cooking demonstrations from various cultures\n- Traditional recipes and cooking techniques\n- Cultural storytelling through food\n- Tasting opportunities of international dishes\n- Meet the student chefs and learn their culinary inspirations\n- Recipe cards and cooking tips to take home\n\nFrom Asian delicacies to European classics, Mediterranean flavors to Latin American specialties, experience the rich diversity of world cuisine all in one evening.\n\nTickets are $20 for students and include all tastings. A portion of proceeds supports the Culinary Arts scholarship fund. Limited seats available - reserve your spot today!`,
    capacity: '150 attendees',
    section: 'upcoming'
  },
  {
    id: 6,
    title: 'Culinary Arts Showcase',
    date: 'April 12, 2026 • 6:00 PM - 9:00 PM',
    location: 'University Dining Hall',
    category: 'Cultural',
    image: cookingClass1,
    description: 'Discover culinary traditions from around the world prepared by our talented students.',
    fullDescription: `Discover culinary traditions from around the world prepared by our talented students and guest chefs.\n\nThis evening celebration of food and culture features:\n- Live cooking demonstrations\n- Tasting stations with international cuisine\n- Meet the chefs sessions\n- Recipe sharing and cooking tips\n\nTickets are $15 for students and include all tastings. A portion of proceeds supports the Culinary Arts scholarship fund.`,
    capacity: '200 attendees',
    section: 'student'
  },
  {
    id: 7,
    title: 'ISM Club Resume Workshop',
    date: 'March 22, 2026 • 1:00 PM - 4:00 PM',
    location: 'Career Services Center, Building C',
    category: 'Career',
    image: resumeWorkshopImg,
    description: 'Get expert feedback on your resume and learn how to craft a standout professional profile.',
    fullDescription: `Join the Information Systems and Management (ISM) Club for a comprehensive resume workshop designed to help you create a professional resume that stands out to employers.\\n\\nThis hands-on workshop includes:\\n- One-on-one resume reviews with career advisors\\n- Best practices for resume formatting and design\\n- How to highlight your skills and achievements effectively\\n- Tailoring your resume for specific industries and positions\\n- Common mistakes to avoid\\n- Cover letter writing tips\\n- LinkedIn profile optimization\\n\\nBring your current resume (or draft) on a laptop for personalized feedback. Our experienced career counselors and industry professionals will provide actionable advice to strengthen your application materials.\\n\\nWhether you're applying for internships, part-time positions, or preparing for your post-graduation job search, this workshop will give you the tools and confidence to present yourself professionally.\\n\\nRefreshments will be provided. Limited spots available - register early!`,
    capacity: '40 participants',
    section: 'academic'
  },
  {
    id: 8,
    title: 'Culinary Excellence at California Food Expo',
    date: 'March 20, 2026 • 10:00 AM - 6:00 PM',
    location: 'California Convention Center',
    category: 'Exhibition',
    image: caFoodShowImg,
    description: 'Stanton culinary students showcase innovative food products at California\'s premier industry exhibition.',
    fullDescription: `Join us in celebrating our culinary students' exceptional representation at the California Food Expo, one of the premier food industry exhibitions on the West Coast.\\n\\nThis prestigious event showcases:\\n- Student-led professional exhibition booth featuring NAFTA Distributors products\\n- Live product demonstrations and expert tastings\\n- Professional networking with industry leaders, distributors, and buyers\\n- Hands-on experience with the latest food trends and technologies\\n- Career connections with potential employers and industry partners\\n- Real-world business development and marketing experience\\n\\nOur talented students represent Stanton University's renowned Culinary Arts and Food Science programs, showcasing their industry knowledge and professional skills to thousands of food industry professionals, distributors, retailers, and culinary enthusiasts.\\n\\nThis invaluable opportunity allows students to gain real-world exhibition experience, build meaningful industry connections, apply classroom knowledge in a professional setting, and develop essential business and presentation skills that will serve them throughout their careers.\\n\\nTransportation and industry badges provided. Register early as student participant spots are limited!`,
    capacity: '20 student participants',
    section: 'student'
  },
  {
    id: 9,
    title: 'Resume Review & Professional Headshot Workshop',
    date: 'April 18, 2026 • 10:00 AM - 4:00 PM',
    location: 'Career Services Center, Building C',
    category: 'Career',
    image: resumeReviewHeadshotImg,
    description: 'Get personalized resume feedback and professional headshots for your career portfolio.',
    fullDescription: `Elevate your professional presence with our comprehensive Resume Review & Professional Headshot Workshop - a one-stop opportunity to perfect your career application materials.\\n\\nThis exclusive full-day workshop offers:\\n- **One-on-One Resume Reviews**: Meet individually with experienced career advisors and industry professionals for personalized feedback on your resume\\n- **Professional Headshot Photography**: Get a complimentary professional headshot photo perfect for LinkedIn, job applications, and professional portfolios\\n- **Resume Optimization**: Learn best practices for formatting, content, and tailoring your resume to specific industries\\n- **Personal Branding Session**: Understand how to create a cohesive professional brand across all platforms\\n- **Cover Letter Consultation**: Get tips on writing compelling cover letters that complement your resume\\n- **LinkedIn Profile Review**: Optimize your online professional presence\\n\\nWhat to Expect:\\n- 30-minute individual resume review sessions (appointments scheduled upon registration)\\n- Professional photography station with quick turnaround - receive your edited photos within 48 hours\\n- Drop-in consultation area for quick questions\\n- Bring your current resume on a laptop or printed copy\\n- Dress professionally for your headshot (solid colors recommended, avoid busy patterns)\\n\\nPerfect for students preparing for internships, job searches, graduate school applications, or anyone looking to update their professional materials. All services are completely free for Stanton University students!\\n\\nSpace is limited for individual resume review sessions - register early to secure your preferred time slot. Walk-ins welcome for headshots based on availability.`,
    capacity: '50 scheduled appointments + walk-ins',
    section: 'academic'
  },
  {
    id: 11,
    title: 'Friendsgiving Meet & Greet',
    date: 'November 22, 2026 • 4:00 PM - 7:00 PM',
    location: 'Student Union Lounge',
    category: 'Social',
    image: friendsgivingImg,
    description: 'Celebrate friendship and gratitude at our annual Friendsgiving gathering.',
    fullDescription: `Join fellow students for a warm and welcoming Friendsgiving celebration - a perfect opportunity to connect with friends old and new before the holiday break.\n\nThis special event features:\n- Potluck-style dinner with traditional Thanksgiving favorites\n- Icebreaker activities and networking games\n- Gratitude wall where students can share what they're thankful for\n- Photo booth with festive props\n- Prizes and giveaways throughout the evening\n- Music and entertainment\n\nWhether you're staying on campus for the holidays or looking to connect with the Stanton community, this is the perfect opportunity to build friendships and create lasting memories. International students especially welcome!\n\nIf you'd like to contribute a dish, please sign up during registration. Otherwise, just bring yourself and an appetite for fun and friendship!\n\nFree admission for all students. Space is limited, so RSVP early!`,
    capacity: '100 students',
    section: 'student'
  },
  {
    id: 12,
    title: 'Voice of Experience',
    date: 'April 25, 2026 • 9:00 AM - 5:00 PM',
    location: 'Science Building Auditorium',
    category: 'Professional Development',
    image: teacherPresentation,
    description: 'Learn from industry leaders and successful alumni sharing their career journeys and insights.',
    fullDescription: `Join us for an inspiring day of knowledge sharing and networking at our annual "Voice of Experience" event.\\n\\nThis premier professional development event brings together distinguished industry leaders, successful alumni, and experienced professionals to share their career journeys, insights, and lessons learned.\\n\\nEvent highlights include:\\n- Keynote presentations from industry veterans\\n- Panel discussions on career pathways and industry trends\\n- Breakout sessions by field (Business, Technology, Healthcare, Engineering, Arts)\\n- Q&A sessions with speakers\\n- Networking opportunities with professionals and alumni\\n- Career advice and mentorship connections\\n- Industry insights and best practices\\n\\nWhether you're exploring career options, seeking mentorship, or looking to expand your professional network, this event offers invaluable opportunities to learn from those who've successfully navigated their career paths.\\n\\nPerfect for students at all levels - from freshmen exploring majors to seniors preparing for graduation. Hear real-world perspectives that you won't find in textbooks.\\n\\nFree admission for all students. Lunch will be provided. Register early as seating is limited!`,
    capacity: '300 attendees',
    section: 'academic'
  }
];

const sections = [
  { id: 'featured', name: 'Featured Events', icon: Star, description: 'Don\'t miss these highlighted events' },
  { id: 'upcoming', name: 'Upcoming Events', icon: Calendar, description: 'Mark your calendar' },
  { id: 'student', name: 'Student Activities', icon: Users, description: 'For students, by students' },
  { id: 'academic', name: 'Academic & Career', icon: GraduationCap, description: 'Professional development opportunities' }
];

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Admissions', href: '#', hasDropdown: true },
  { name: 'Academics', href: '#', hasDropdown: true },
  { name: 'Student Services', href: '#', hasDropdown: true },
  { name: 'About', href: '#', hasDropdown: true },
  { name: 'Athletics', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Donate', href: '#' }
];

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const heroImages = [heroImg3, heroImg2];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const getEventsBySection = (sectionId: string) => {
    return filteredEvents.filter(event => event.section === sectionId);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header - No conditional content to prevent flickering */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={logoImg} 
                alt="Stanton University" 
                className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'}`} 
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white bg-[#002D72] hover:bg-[#001F52] hover:scale-105 rounded transition-all duration-200 whitespace-nowrap"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#002D72]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-sm font-medium text-white bg-[#002D72] hover:bg-[#001F52] hover:scale-105 rounded transition-all duration-200"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-24" />

      {/* Hero Section */}
      <section className="relative h-[600px] bg-[#002D72]">
        {/* Hero Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src={heroActivitiesImg} 
            alt="Stanton University - Student Life and Campus Activities" 
            className="w-full h-full object-cover"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>
        
        {/* Lighter Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            Activities & Events
          </h1>
          <p className="text-xl text-white/95 max-w-2xl mb-8 drop-shadow-xl">
            Experience the vibrant campus life at Stanton University. From academic events to cultural celebrations, there's always something happening on campus.
          </p>
          
          {/* Search Bar in Hero */}
          <div className="max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#002D72]" />
              <input
                type="text"
                placeholder="Search for events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border-0 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:bg-white shadow-xl text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {sections.map((section) => {
          const sectionEvents = getEventsBySection(section.id);
          if (sectionEvents.length === 0) return null;

          return (
            <section key={section.id} className="mb-20">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#002D72] p-4 rounded-xl shadow-lg">
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{section.name}</h2>
                  <p className="text-gray-600 mt-1">{section.description}</p>
                </div>
              </div>

              {/* Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sectionEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    {...event}
                    onClick={() => handleEventClick(event)}
                  />
                ))}
              </div>
            </section>
          );
        })}

        {/* Past Events Gallery Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#002D72] p-4 rounded-xl shadow-lg">
              <Camera className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Past Events Gallery</h2>
              <p className="text-gray-600 mt-1">Highlights from recent campus events</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group shadow-lg bg-gray-100">
              <img 
                src={cookingClass3} 
                alt="Culinary Event" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Culinary Arts Showcase 2025</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group shadow-lg bg-gray-100">
              <img 
                src={golfOpenHouseImg} 
                alt="Golf Open House" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Golf Open House</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group shadow-lg bg-gray-100">
              <img 
                src={guestSpeakerImg} 
                alt="Guest Speaker Series" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Guest Speaker Series</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Participate Section */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-[#002D72] p-4 rounded-xl shadow-lg">
              <HelpCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">How to Participate</h2>
              <p className="text-gray-600 mt-1">Get involved in campus life</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#002D72]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-[#002D72]">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Browse Events</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore upcoming activities and events that match your interests. Use the search feature to find exactly what you're looking for.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#002D72]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-[#002D72]">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Register</h3>
              <p className="text-gray-600 leading-relaxed">
                Click on any event to see details and register online. Most events are free for students, though some may have limited capacity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#002D72]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-[#002D72]">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Attend & Enjoy</h3>
              <p className="text-gray-600 leading-relaxed">
                Show up and make the most of your Stanton experience. Connect with peers, learn new skills, and create lasting memories.
              </p>
            </div>
          </div>
        </section>

        {/* Getting Around Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#002D72] p-4 rounded-xl shadow-lg">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Getting Around</h2>
              <p className="text-gray-600 mt-1">Explore nearby attractions and cultural destinations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Museums & Galleries */}
            <div className="relative overflow-hidden rounded-2xl group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1521483756775-c37af386fce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBtdXNldW0lMjBnYWxsZXJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcyMDg0NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Art Museum" 
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <div className="bg-white/20 backdrop-blur-sm w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Museums & Galleries</h3>
                <p className="text-white/90 text-sm mb-3 leading-relaxed">
                  City Art Museum, Natural History Museum, Contemporary Gallery - all within 2 miles.
                </p>
                <a href="#" className="text-white text-sm font-semibold hover:underline flex items-center gap-2">
                  Explore Museums
                  <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                </a>
              </div>
            </div>

            {/* Public Libraries & Study Spaces */}
            <div className="relative overflow-hidden rounded-2xl group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1758885698366-47d44c6ec6ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBsaWJyYXJ5JTIwcmVhZGluZyUyMHN0dWR5JTIwc3BhY2V8ZW58MXx8fHwxNzcyMDg1MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Public Library" 
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <div className="bg-white/20 backdrop-blur-sm w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Libraries & Study Spaces</h3>
                <p className="text-white/90 text-sm mb-3 leading-relaxed">
                  City Central Library, Academic Resource Center - quiet study spaces and research materials.
                </p>
                <a href="#" className="text-white text-sm font-semibold hover:underline flex items-center gap-2">
                  Find Libraries
                  <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                </a>
              </div>
            </div>

            {/* Parks & Recreation */}
            <div className="relative overflow-hidden rounded-2xl group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1768894609464-89523a11aa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwcGFyayUyMG91dGRvb3IlMjBuYXR1cmV8ZW58MXx8fHwxNzcyMDg0NzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="City Park" 
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <div className="bg-white/20 backdrop-blur-sm w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                  <Trees className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Parks & Recreation</h3>
                <p className="text-white/90 text-sm mb-3 leading-relaxed">
                  Central Park, Riverside Trail, Botanical Gardens - perfect for outdoor activities.
                </p>
                <a href="#" className="text-white text-sm font-semibold hover:underline flex items-center gap-2">
                  Find Parks
                  <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info Banner */}
          <div className="mt-8 bg-gradient-to-r from-[#002D72] to-[#0047AB] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Discover the Area</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Transportation Access</h4>
                <p className="text-white/90 leading-relaxed">
                  All attractions are easily accessible via public transportation, rideshare, or bike. Most museums offer student discounts with your Stanton University ID.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Weekend Adventures</h4>
                <p className="text-white/90 leading-relaxed">
                  Make the most of your time at Stanton by exploring the vibrant cultural scene. Join organized student trips or venture out on your own to discover hidden gems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-300 mb-6">
              <Search className="w-20 h-20 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No events found</h3>
            <p className="text-gray-600 text-lg">
              Try adjusting your search to find what you're looking for
            </p>
          </div>
        )}
      </main>

      {/* Event Modal */}
      <EventModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        event={selectedEvent}
      />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#002D72] hover:bg-[#001F52] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Footer Spacer - Blue background to cover white gap */}
      <div className="bg-[#002D72] pt-16">
        <Footer />
      </div>
    </div>
  );
}