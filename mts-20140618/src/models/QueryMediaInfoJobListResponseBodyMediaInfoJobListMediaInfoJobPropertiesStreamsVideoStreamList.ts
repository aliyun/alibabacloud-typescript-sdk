// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamListVideoStream } from "./QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamListVideoStream";


export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamList extends $dara.Model {
  videoStream?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamListVideoStream },
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

