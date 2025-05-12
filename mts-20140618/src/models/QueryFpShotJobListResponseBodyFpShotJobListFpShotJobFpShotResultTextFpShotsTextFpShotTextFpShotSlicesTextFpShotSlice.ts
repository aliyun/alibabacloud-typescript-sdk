// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSliceInputFragment } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSliceInputFragment";


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSlice extends $dara.Model {
  /**
   * @remarks
   * The text snippet that has similar fingerprints to the input text in the text fingerprint library.
   * 
   * @example
   * It\\"s snowy today.
   */
  duplicationText?: string;
  /**
   * @remarks
   * The start point in time and duration of the similar text snippet in the input text.
   */
  inputFragment?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSliceInputFragment;
  /**
   * @remarks
   * The input text for text fingerprint analysis.
   * 
   * @example
   * It\\"s snowy today.
   */
  inputText?: string;
  /**
   * @remarks
   * The similarity of the input text against the text snippet that has similar fingerprints to the input text in the text fingerprint library.
   * 
   * @example
   * 1.0
   */
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      duplicationText: 'DuplicationText',
      inputFragment: 'InputFragment',
      inputText: 'InputText',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duplicationText: 'string',
      inputFragment: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSliceInputFragment,
      inputText: 'string',
      similarity: 'string',
    };
  }

  validate() {
    if(this.inputFragment && typeof (this.inputFragment as any).validate === 'function') {
      (this.inputFragment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

