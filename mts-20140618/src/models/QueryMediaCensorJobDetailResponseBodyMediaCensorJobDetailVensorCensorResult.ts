// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResults } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResults";
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelines } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelines";


export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResult extends $dara.Model {
  /**
   * @remarks
   * A collection of the moderation results. The information includes the summary of various scenarios such as pornographic content and terrorist content.
   */
  censorResults?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResults;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * ea04afcca7cd4e80b9ece8fbb251****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The moderation results that are sorted in ascending order by time.
   */
  videoTimelines?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelines;
  static names(): { [key: string]: string } {
    return {
      censorResults: 'CensorResults',
      nextPageToken: 'NextPageToken',
      videoTimelines: 'VideoTimelines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResults: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResults,
      nextPageToken: 'string',
      videoTimelines: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelines,
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

