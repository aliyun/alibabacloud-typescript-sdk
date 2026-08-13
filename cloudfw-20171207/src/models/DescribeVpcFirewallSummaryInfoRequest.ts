// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallSummaryInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The language type. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The user type. Valid values:
   * 
   * **buy**: paid user.
   * 
   * **free**: free user.
   * 
   * @example
   * buy
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

