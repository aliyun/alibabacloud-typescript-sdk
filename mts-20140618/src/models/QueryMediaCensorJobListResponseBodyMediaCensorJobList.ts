// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJob } from "./QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJob";


export class QueryMediaCensorJobListResponseBodyMediaCensorJobList extends $dara.Model {
  mediaCensorJob?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJob[];
  static names(): { [key: string]: string } {
    return {
      mediaCensorJob: 'MediaCensorJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaCensorJob: { 'type': 'array', 'itemType': QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJob },
    };
  }

  validate() {
    if(Array.isArray(this.mediaCensorJob)) {
      $dara.Model.validateArray(this.mediaCensorJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

