import React from 'react';

interface LoadingSkeletonProps {
  count: number;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse relative max-w-[260px] w-full bg-inherit"
        >
          <div className="bg-gray-700 h-[200px] rounded-xl w-full"></div>
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <div className="h-6 bg-gray-700 rounded w-2/3"></div>
              <div className="h-6 bg-gray-700 rounded w-1/4"></div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
