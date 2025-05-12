// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamListAudioStream } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamListAudioStream";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamList extends $dara.Model {
  audioStream?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamListAudioStream },
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

