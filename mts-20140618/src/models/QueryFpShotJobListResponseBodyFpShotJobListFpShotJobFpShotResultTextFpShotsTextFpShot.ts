// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlices } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlices";


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShot extends $dara.Model {
  /**
   * @remarks
   * The unique primary key of the input text.
   * 
   * @example
   * 3e34ac649945b53a1b0f863ce030****
   */
  primaryKey?: string;
  /**
   * @remarks
   * The similarity of the input text against text snippets that have similar fingerprints to the input text in the text fingerprint library.
   * 
   * @example
   * 1.0
   */
  similarity?: string;
  /**
   * @remarks
   * The text snippets that have similar fingerprints to the input text in the text fingerprint library.
   */
  textFpShotSlices?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlices;
  static names(): { [key: string]: string } {
    return {
      primaryKey: 'PrimaryKey',
      similarity: 'Similarity',
      textFpShotSlices: 'TextFpShotSlices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryKey: 'string',
      similarity: 'string',
      textFpShotSlices: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlices,
    };
  }

  validate() {
    if(this.textFpShotSlices && typeof (this.textFpShotSlices as any).validate === 'function') {
      (this.textFpShotSlices as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

