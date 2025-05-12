// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResults } from "./QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResults";


export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimeline extends $dara.Model {
  /**
   * @remarks
   * The moderation results that include information such as labels and scores.
   */
  censorResults?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResults;
  /**
   * @remarks
   * The OSS object that is generated as the output snapshot.
   * 
   * > In the example, {Count} is a placeholder. The OSS objects that are generated as output snapshots are named `output00001-****.jpg, output00002-****.jpg`, and so on.
   * 
   * @example
   * output{Count}.jpg
   */
  object?: string;
  /**
   * @remarks
   * The position in the video. Format: `hh:mm:ss[.SSS]`.
   * 
   * @example
   * 00:02:59.999
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      censorResults: 'CensorResults',
      object: 'Object',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResults: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResults,
      object: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    if(this.censorResults && typeof (this.censorResults as any).validate === 'function') {
      (this.censorResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

