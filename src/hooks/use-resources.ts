import { useQuery } from '@tanstack/react-query';

import { CloudinaryResource } from '@/types/cloudinary';

interface UseResources{
    initialResources: Array<CloudinaryResource>
}

export function useResources(options: UseResources){
    const {data: resources} = useQuery({
        queryKey: ['resources'],
        queryFn: async () => {
          const {data} = await fetch('/api/resources')
            .then(response => response.json());
          return data;
        },
        initialData: options?.initialResources,
      })
    
    return {
      resources
    }

}