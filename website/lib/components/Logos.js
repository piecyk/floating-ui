import {FloatingDelayGroup} from '@floating-ui/react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from './Tooltip';

export function Logos({items}) {
  return (
    <div className="flex flex-wrap justify-center my-10 invert dark:invert-0">
      <FloatingDelayGroup delay={{open: 1000, close: 200}}>
        {items.map((item) => (
          <Tooltip key={item.label} content={item.label}>
            <TooltipTrigger asChild>
              <a
                href={item.url}
                className="inline-block mb-6 opacity-70 dark:opacity-30 hover:opacity-100 transition-opacity px-4 mx-0.5"
                rel="noopener noreferrer"
              >
                <img
                  className="h-12"
                  loading="lazy"
                  src={item.logo}
                  alt={item.label}
                  width={48}
                  height={48}
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </FloatingDelayGroup>
    </div>
  );
}
