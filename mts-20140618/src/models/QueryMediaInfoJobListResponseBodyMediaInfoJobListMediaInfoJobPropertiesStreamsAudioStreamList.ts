// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamListAudioStream } from "./QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamListAudioStream";


export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamList extends $dara.Model {
  audioStream?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamListAudioStream },
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

