// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that is performed on traffic. Valid values:
   * 
   * - **accept**: allows the traffic.
   * 
   * - **drop**: denies the traffic.
   * 
   * - **log**: monitors the traffic.
   * 
   * > If you do not set this parameter, policies of all actions are queried.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * @example
   * 4037fbf7-3e39-4634-92a4-d0155247****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The description of the access control policy. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Fuzzy match is supported.
   * 
   * > The value can be a CIDR block, a domain name, or an address book.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The language of the request and response.
   * 
   * Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The protocol type in the access control policy. Valid values:
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * - **ICMP**
   * 
   * - **ANY**: all protocols
   * 
   * > If you do not set this parameter, policies of all protocols are queried.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. Valid values:
   * 
   * - **true**: enabled
   * 
   * - **false**: disabled
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The recurrence type of the access control policy. Valid values:
   * 
   * - **Permanent** (default): The policy is always in effect.
   * 
   * - **None**: The policy is a one-time policy.
   * 
   * - **Daily**: The policy recurs daily.
   * 
   * - **Weekly**: The policy recurs weekly.
   * 
   * - **Monthly**: The policy recurs monthly.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Fuzzy match is supported.
   * 
   * > The value can be a CIDR block or an address book.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The instance ID of the VPC boundary firewall. You can specify one of the following IDs:
   * 
   * - The ID of a Cloud Enterprise Network (CEN) instance if the firewall protects traffic between two VPCs connected via the CEN instance.
   * 
   * - The instance ID of the VPC boundary firewall if the firewall protects traffic between two VPCs connected via an Express Connect circuit.
   * 
   * > You can call the [DescribeVpcFirewallList](https://help.aliyun.com/document_detail/159760.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      currentPage: 'CurrentPage',
      description: 'Description',
      destination: 'Destination',
      lang: 'Lang',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
      proto: 'Proto',
      release: 'Release',
      repeatType: 'RepeatType',
      source: 'Source',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      currentPage: 'string',
      description: 'string',
      destination: 'string',
      lang: 'string',
      memberUid: 'string',
      pageSize: 'string',
      proto: 'string',
      release: 'string',
      repeatType: 'string',
      source: 'string',
      vpcFirewallId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

