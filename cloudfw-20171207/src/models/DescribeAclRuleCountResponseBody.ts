// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclRuleCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of inbound access control policies on the Internet border.
   * 
   * @example
   * 2
   */
  internetInAclCount?: number;
  /**
   * @remarks
   * The number of outbound access control policies that are created for the Internet firewall.
   * 
   * @example
   * 3
   */
  internetOutAclCount?: number;
  /**
   * @remarks
   * The number of inbound access control policies on the NAT boundary.>Notice:  This field is deprecated.
   * 
   * @example
   * 0
   */
  natInAclCount?: number;
  /**
   * @remarks
   * The number of outbound access control policies on the NAT boundary.
   * 
   * @example
   * 2
   */
  natOutAclCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 27936D6C-1B7A-5A5A-B9E4-FBEBBDAA****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of policies.
   * 
   * @example
   * 8
   */
  totalAclCount?: number;
  /**
   * @remarks
   * The number of access control policies on the VPC border.
   * 
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

