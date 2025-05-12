// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceDuplication } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceDuplication";
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceInput } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceInput";


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSlice extends $dara.Model {
  /**
   * @remarks
   * The start point in time and duration of the similar audio clip in the audio file that has similar fingerprints to the input audio in the audio fingerprint library.
   */
  duplication?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceDuplication;
  /**
   * @remarks
   * The start point in time and duration of the similar audio clip in the input audio.
   */
  input?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceInput;
  /**
   * @remarks
   * The similarity of the input audio against the audio file that has similar fingerprints to the input audio in the audio fingerprint library.
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
      duplication: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceDuplication,
      input: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceInput,
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

