// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResults } from "./QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResults";
import { QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelines } from "./QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelines";


export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResult extends $dara.Model {
  /**
   * @remarks
   * A collection of the moderation results. The information includes the summary about various scenarios such as pornographic content and terrorist content.
   */
  censorResults?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResults;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * ea04afcca7cd4e80b9ece8fbb251****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The moderation results that are sorted in ascending order by time.
   */
  videoTimelines?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelines;
  static names(): { [key: string]: string } {
    return {
      censorResults: 'CensorResults',
      nextPageToken: 'NextPageToken',
      videoTimelines: 'VideoTimelines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResults: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResults,
      nextPageToken: 'string',
      videoTimelines: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelines,
    };
  }

  validate() {
    if(this.censorResults && typeof (this.censorResults as any).validate === 'function') {
      (this.censorResults as any).validate();
    }
    if(this.videoTimelines && typeof (this.videoTimelines as any).validate === 'function') {
      (this.videoTimelines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

