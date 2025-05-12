// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJob } from "./QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJob";


export class QueryMediaInfoJobListResponseBodyMediaInfoJobList extends $dara.Model {
  mediaInfoJob?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJob[];
  static names(): { [key: string]: string } {
    return {
      mediaInfoJob: 'MediaInfoJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfoJob: { 'type': 'array', 'itemType': QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJob },
    };
  }

  validate() {
    if(Array.isArray(this.mediaInfoJob)) {
      $dara.Model.validateArray(this.mediaInfoJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

