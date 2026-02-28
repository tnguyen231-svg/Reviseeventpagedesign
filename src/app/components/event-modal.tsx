import { X, Calendar, MapPin, Tag, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    date: string;
    location: string;
    category: string;
    image: string;
    description: string;
    fullDescription: string;
    capacity?: string;
  } | null;
}

export function EventModal({ isOpen, onClose, event }: EventModalProps) {
  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                      <Tag className="w-4 h-4" />
                      <span>{event.category}</span>
                    </div>
                    <h2 className="text-white text-3xl font-bold">
                      {event.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Meta Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#002D72]/10 p-2 rounded-lg">
                        <Calendar className="w-5 h-5 text-[#002D72]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Date & Time</p>
                        <p className="text-sm font-medium text-gray-900">{event.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-[#002D72]/10 p-2 rounded-lg">
                        <MapPin className="w-5 h-5 text-[#002D72]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Location</p>
                        <p className="text-sm font-medium text-gray-900">{event.location}</p>
                      </div>
                    </div>

                    {event.capacity && (
                      <div className="flex items-center gap-3">
                        <div className="bg-[#002D72]/10 p-2 rounded-lg">
                          <Users className="w-5 h-5 text-[#002D72]" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase">Capacity</p>
                          <p className="text-sm font-medium text-gray-900">{event.capacity}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">About This Event</h3>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {event.fullDescription}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <button className="w-full bg-[#002D72] hover:bg-[#001F52] text-white font-medium py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl">
                      Register for Event
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}