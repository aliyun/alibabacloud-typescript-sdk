// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallSummaryInfoRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
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

