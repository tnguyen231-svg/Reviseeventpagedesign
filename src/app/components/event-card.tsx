import { Calendar, MapPin, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
  onClick: () => void;
}

export function EventCard({
  title,
  date,
  location,
  category,
  image,
  description,
  featured = false,
  onClick
}: EventCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all ${
        featured ? 'ring-2 ring-[#002D72]' : ''
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />
        {featured && (
          <div className="absolute top-4 right-4 bg-[#002D72] text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-3 text-gray-900 group-hover:text-[#002D72] transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Meta Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-700">
            <Calendar className="w-4 h-4 text-[#002D72]" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="w-4 h-4 text-[#002D72]" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}