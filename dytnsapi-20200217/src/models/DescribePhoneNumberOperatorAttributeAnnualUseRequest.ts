// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberOperatorAttributeAnnualUseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mask?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

