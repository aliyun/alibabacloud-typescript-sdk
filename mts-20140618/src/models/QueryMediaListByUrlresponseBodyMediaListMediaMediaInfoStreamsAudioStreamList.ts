// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsAudioStreamListAudioStream } from "./QueryMediaListByUrlresponseBodyMediaListMediaMediaInfoStreamsAudioStreamListAudioStream";


export class QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList extends $dara.Model {
  audioStream?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsAudioStreamListAudioStream },
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

