import {Image} from '@shopify/hydrogen';

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
export function ProductGallery({media, className}) {
  if (!media.length) {
    return null;
  }

  return (
    <div
      className={"carousel h-[62vh] sm:h-[70vh] lg:h-[90vh] w-full overflow-scroll py-6 pl-6"}
    >
      <div className="flex h-full w-full sm:w-[50%]">
        {media.map((med, i) => {
          const isFirst = i === 0;
          const isFourth = i === 3;
          const isFullWidth = i % 3 === 0;

          const image =
            med.__typename === 'MediaImage'
              ? {...med.image, altText: med.alt || 'Product image'}
              : null;

          return (
            <div className='h-full w-full flex-grow flex-shrink-0 pr-6'  key={med.id || image?.id}>
              {image && (
                  <Image
                    loading={i === 0 ? 'eager' : 'lazy'}
                    data={image}
                    aspectRatio={'3/4'}
                    // sizes={
                    //   isFirst || isFourth
                    //     ? '(min-width: 48em) 60vw, 90vw'
                    //     : '(min-width: 48em) 30vw, 90vw'
                    // }
                    className="h-full p-4 w-full object-cover my-shadow bg-gray-100"
                  />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
