// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallSummaryInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content. Valid values:
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
   * The type of the user. Valid values:
   * 
   * **buy**: Paid user
   * 
   * **free**: Free user
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

