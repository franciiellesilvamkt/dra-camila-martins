
import React, { useState } from 'react';

interface GalleryProps {
  images: string[];
  title?: string;
  subtitle?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ images, title, subtitle }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 px-6 bg-white">
      {title && (
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-2">{title}</h2>
          {subtitle && <p className="text-neutral-500 max-w-md mx-auto">{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 max-w-4xl mx-auto">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-lg transition-shadow"
            onClick={() => setSelectedImage(img)}
          >
            <img 
              src={img} 
              alt={`Resultado ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <p className="text-[10px] text-neutral-400 text-center mt-6">
        *Resultados podem variar de pessoa para pessoa.
      </p>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <button className="absolute -top-12 right-0 text-white text-3xl font-light">×</button>
            <img 
              src={selectedImage} 
              alt="Zoom" 
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
