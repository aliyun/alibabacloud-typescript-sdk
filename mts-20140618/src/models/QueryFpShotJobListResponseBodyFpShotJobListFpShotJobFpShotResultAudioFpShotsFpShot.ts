// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlices } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlices";


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShot extends $dara.Model {
  /**
   * @remarks
   * The audio files that have similar fingerprints to the input audio in the audio fingerprint library.
   */
  fpShotSlices?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlices;
  /**
   * @remarks
   * The unique primary key of the input audio.
   * 
   * @example
   * 498ac941373341599c4777c8d884****
   */
  primaryKey?: string;
  /**
   * @remarks
   * The overall similarity of the input audio against audio files that have similar fingerprints to the input audio in the audio fingerprint library.
   * 
   * @example
   * 0
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
      fpShotSlices: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlices,
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

