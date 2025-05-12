// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream } from "./QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream";


export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList extends $dara.Model {
  videoStream?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream },
    };
  }

  validate() {
    if(Array.isArray(this.videoStream)) {
      $dara.Model.validateArray(this.videoStream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

