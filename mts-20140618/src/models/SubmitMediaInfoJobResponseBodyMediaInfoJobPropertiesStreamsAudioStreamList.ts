// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamListAudioStream } from "./SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamListAudioStream";


export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamList extends $dara.Model {
  audioStream?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamListAudioStream },
    };
  }

  validate() {
    if(Array.isArray(this.audioStream)) {
      $dara.Model.validateArray(this.audioStream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

