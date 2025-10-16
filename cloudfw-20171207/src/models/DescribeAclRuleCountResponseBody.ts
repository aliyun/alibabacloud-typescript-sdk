// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclRuleCountResponseBody extends $dara.Model {
  /**
   * @example
   * 2
   */
  internetInAclCount?: number;
  /**
   * @example
   * 3
   */
  internetOutAclCount?: number;
  /**
   * @example
   * 0
   */
  natInAclCount?: number;
  /**
   * @example
   * 2
   */
  natOutAclCount?: number;
  /**
   * @example
   * 27936D6C-1B7A-5A5A-B9E4-FBEBBDAA****
   */
  requestId?: string;
  /**
   * @example
   * 8
   */
  totalAclCount?: number;
  /**
   * @example
   * 3
   */
  vpcAclCount?: number;
  static names(): { [key: string]: string } {
    return {
      internetInAclCount: 'InternetInAclCount',
      internetOutAclCount: 'InternetOutAclCount',
      natInAclCount: 'NatInAclCount',
      natOutAclCount: 'NatOutAclCount',
      requestId: 'RequestId',
      totalAclCount: 'TotalAclCount',
      vpcAclCount: 'VpcAclCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetInAclCount: 'number',
      internetOutAclCount: 'number',
      natInAclCount: 'number',
      natOutAclCount: 'number',
      requestId: 'string',
      totalAclCount: 'number',
      vpcAclCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

