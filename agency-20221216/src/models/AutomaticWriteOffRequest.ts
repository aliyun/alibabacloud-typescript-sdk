// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AutomaticWriteOffRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  automaticWriteOffAmount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  automaticWriteOffEnabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  customerUid?: number;
  /**
   * @example
   * en
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      automaticWriteOffAmount: 'AutomaticWriteOffAmount',
      automaticWriteOffEnabled: 'AutomaticWriteOffEnabled',
      customerUid: 'CustomerUid',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      automaticWriteOffAmount: 'number',
      automaticWriteOffEnabled: 'boolean',
      customerUid: 'number',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

