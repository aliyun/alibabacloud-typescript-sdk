// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShots } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShots";
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShots } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShots";
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShots } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShots";


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResult extends $dara.Model {
  /**
   * @remarks
   * The audio fingerprint analysis results.
   */
  audioFpShots?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShots;
  /**
   * @remarks
   * The video fingerprint analysis results.
   */
  fpShots?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShots;
  /**
   * @remarks
   * The text fingerprint analysis results.
   */
  textFpShots?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShots;
  static names(): { [key: string]: string } {
    return {
      audioFpShots: 'AudioFpShots',
      fpShots: 'FpShots',
      textFpShots: 'TextFpShots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFpShots: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShots,
      fpShots: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShots,
      textFpShots: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShots,
    };
  }

  validate() {
    if(this.audioFpShots && typeof (this.audioFpShots as any).validate === 'function') {
      (this.audioFpShots as any).validate();
    }
    if(this.fpShots && typeof (this.fpShots as any).validate === 'function') {
      (this.fpShots as any).validate();
    }
    if(this.textFpShots && typeof (this.textFpShots as any).validate === 'function') {
      (this.textFpShots as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

