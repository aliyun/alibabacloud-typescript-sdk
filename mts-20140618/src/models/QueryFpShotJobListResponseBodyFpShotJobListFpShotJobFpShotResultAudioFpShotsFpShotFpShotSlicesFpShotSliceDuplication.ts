// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceDuplication extends $dara.Model {
  /**
   * @remarks
   * The duration of the similar audio clip in the audio file that has similar fingerprints to the input audio in the audio fingerprint library.
   * 
   * @example
   * 3
   */
  duration?: string;
  /**
   * @remarks
   * The start point in time of the similar audio clip in the audio file that has similar fingerprints to the input audio in the audio fingerprint library.
   * 
   * @example
   * 0
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

