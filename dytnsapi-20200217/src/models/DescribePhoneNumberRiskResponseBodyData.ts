// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberRiskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

