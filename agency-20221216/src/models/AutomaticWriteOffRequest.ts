// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AutomaticWriteOffRequest extends $dara.Model {
  /**
   * @remarks
   * The automatic write-off amount. This parameter is required if automatic write-off is enabled. Valid values: 100, 500, and 1000.
   * 
   * @example
   * 100
   */
  automaticWriteOffAmount?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic write-off and set the automatic write-off amount. Valid values:
   * - true: Enables automatic write-off and sets the automatic write-off amount.
   * - false: Disables automatic write-off.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  automaticWriteOffEnabled?: boolean;
  /**
   * @remarks
   * The UID of the customer.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  customerUid?: number;
  /**
   * @remarks
   * The language. If this parameter is not specified, English is used by default. Valid values:
   * - en: English.
   * - zh: Chinese.
   * - ja: Japanese.
   * 
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

