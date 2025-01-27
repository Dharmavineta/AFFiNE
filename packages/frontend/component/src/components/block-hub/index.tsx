import { rootBlockHubAtom } from '@affine/workspace/atom';
import { useAtomValue } from 'jotai';
import { useEffect, useRef } from 'react';

export const RootBlockHub = () => {
  const ref = useRef<HTMLDivElement>(null);
  const blockHub = useAtomValue(rootBlockHubAtom);
  useEffect(() => {
    if (ref.current) {
      const div = ref.current;
      if (blockHub) {
        if (div.hasChildNodes()) {
          (div.firstChild as ChildNode).remove();
        }
        div.append(blockHub);
      }
    }
  }, [blockHub]);
  return <div ref={ref} data-testid="block-hub" />;
};
