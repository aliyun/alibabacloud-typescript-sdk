// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberAnalysisAIResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned code.
   * 
   * *   YES: The specified phone number is valid.
   * *   NO: The specified phone number is invalid.
   * *   UNKNOWN: The specified phone number is unknown
   * 
   * @example
   * YES
   */
  code?: string;
  /**
   * @remarks
   * The specified phone number.
   * 
   * @example
   * 187****5620
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

