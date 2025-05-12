// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceDuplication extends $dara.Model {
  /**
   * @remarks
   * The duration of the similar video clip in the video file that has similar fingerprints to the input video in the video fingerprint library.
   * 
   * @example
   * 48
   */
  duration?: string;
  /**
   * @remarks
   * The start point in time of the similar video clip in the video file that has similar fingerprints to the input video in the video fingerprint library.
   * 
   * @example
   * 1260
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

