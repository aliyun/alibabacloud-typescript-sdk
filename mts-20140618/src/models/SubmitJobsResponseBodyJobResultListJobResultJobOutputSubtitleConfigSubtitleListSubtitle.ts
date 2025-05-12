// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleListSubtitle extends $dara.Model {
  /**
   * @remarks
   * The audio track. Format: `0:{Stream}:{Stream sequence number}`, which is `0:a:{audio_index}`. The value of Stream is a, which indicates an audio stream. The sequence number is the index of the audio stream in the list and starts from 0.
   * 
   * @example
   * 0:a:0
   */
  map?: string;
  static names(): { [key: string]: string } {
    return {
      map: 'Map',
    };
  }

  static types(): { [key: string]: any } {
    return {
      map: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

