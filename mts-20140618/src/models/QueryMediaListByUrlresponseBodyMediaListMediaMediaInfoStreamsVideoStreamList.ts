// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStream } from "./QueryMediaListByUrlresponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStream";


export class QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList extends $dara.Model {
  videoStream?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStream },
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

