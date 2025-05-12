// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSliceInputFragment extends $dara.Model {
  /**
   * @remarks
   * The duration of the similar text snippet in the input text.
   * 
   * @example
   * 3
   */
  duration?: string;
  /**
   * @remarks
   * The start time of the similar text snippet in the input text.
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

