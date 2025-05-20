// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocExtractionResultResponseBodyDataKvListInfoContextConfidence extends $dara.Model {
  /**
   * @remarks
   * Key confidence level
   * 
   * @example
   * 0.9994202852249146
   */
  keyConfidence?: number;
  /**
   * @remarks
   * value confidence level
   * 
   * @example
   * 0.9794202852249146
   */
  valueConfidence?: number;
  static names(): { [key: string]: string } {
    return {
      keyConfidence: 'keyConfidence',
      valueConfidence: 'valueConfidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyConfidence: 'number',
      valueConfidence: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

