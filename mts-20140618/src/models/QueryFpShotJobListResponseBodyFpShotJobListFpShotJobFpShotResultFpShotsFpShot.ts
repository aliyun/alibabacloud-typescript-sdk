// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlices } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlices";


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShot extends $dara.Model {
  /**
   * @remarks
   * The video files that have similar fingerprints to the input video in the video fingerprint library.
   */
  fpShotSlices?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlices;
  /**
   * @remarks
   * The unique primary key of the input video.
   * 
   * @example
   * 498ac941373341599c4777c8d884****
   */
  primaryKey?: string;
  /**
   * @remarks
   * The overall similarity of the input video against video files that have similar fingerprints to the input video in the video fingerprint library.
   * 
   * >  The overall similarity is the average value of the similarities of the input video clips with the clips of the video that has a similar fingerprint. If multiple video files that have similar fingerprints to the input video exist in the video fingerprint library, the similarities of the input video against multiple similar video clips are returned.
   * 
   * @example
   * 0.8914769887924194
   */
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotSlices: 'FpShotSlices',
      primaryKey: 'PrimaryKey',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotSlices: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlices,
      primaryKey: 'string',
      similarity: 'string',
    };
  }

  validate() {
    if(this.fpShotSlices && typeof (this.fpShotSlices as any).validate === 'function') {
      (this.fpShotSlices as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

