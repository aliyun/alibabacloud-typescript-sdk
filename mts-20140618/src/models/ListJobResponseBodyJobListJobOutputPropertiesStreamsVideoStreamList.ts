// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream } from "./ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream";


export class ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList extends $dara.Model {
  videoStream?: ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream },
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

