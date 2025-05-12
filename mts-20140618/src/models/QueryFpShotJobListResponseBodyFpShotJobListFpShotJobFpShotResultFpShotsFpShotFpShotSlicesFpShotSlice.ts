// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceDuplication } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceDuplication";
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceInput } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceInput";


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSlice extends $dara.Model {
  /**
   * @remarks
   * The start point in time and duration of the similar video clip in the video file that has similar fingerprints to the input video in the video fingerprint library.
   */
  duplication?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceDuplication;
  /**
   * @remarks
   * The start time and duration of the similar video clip in the input video.
   */
  input?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceInput;
  /**
   * @remarks
   * The similarity of the input video clip against the video file that has similar fingerprints to the input video in the video fingerprint library.
   * 
   * @example
   * 0
   */
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      duplication: 'Duplication',
      input: 'Input',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duplication: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceDuplication,
      input: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceInput,
      similarity: 'string',
    };
  }

  validate() {
    if(this.duplication && typeof (this.duplication as any).validate === 'function') {
      (this.duplication as any).validate();
    }
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

