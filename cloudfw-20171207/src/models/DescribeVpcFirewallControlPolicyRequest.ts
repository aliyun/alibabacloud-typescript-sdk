// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic in the access control policy of the virtual private cloud (VPC) firewalls. Valid values:
   * 
   * - **accept**: allows the traffic.
   * - **drop**: denies the traffic.
   * - **log**: monitors the traffic.
   * 
   * > If you do not specify this parameter, all actions are queried.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique identifier of the access control policy of the virtual private cloud (VPC) firewalls.
   * 
   * @example
   * 4037fbf7-3e39-4634-92a4-d0155247****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The page number of the current page for a paged query.
   * > You must specify both CurrentPage and PageSize or omit both. If you specify only one of them, the operation returns the ErrorParametersPageSizeOrNo (400) error.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The description of the access control policy of the virtual private cloud (VPC) firewalls. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy of the virtual private cloud (VPC) firewalls. Fuzzy match is supported.
   * 
   * > Destination can be a single CIDR block, a domain name, or an address book name.
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
   * The UID of the member account of the current Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The number of access control policies of the virtual private cloud (VPC) firewalls to return on each page for a paged query.
   * 
   * Maximum value: 50.
   * 
   * > You must specify both CurrentPage and PageSize or omit both. If you specify only one of them, the operation returns the ErrorParametersPageSizeOrNo (400) error.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The protocol type of the traffic in the access control policy of the virtual private cloud (VPC) firewalls. Valid values:
   * 
   * - **TCP**
   * - **UDP**
   * - **ICMP**
   * - **ANY**: all protocol types.
   * 
   * > If you do not specify this parameter, all protocol types are queried.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The enabling status of the access control policy. Valid values:
   * 
   * - **true**: The access control policy is enabled.
   * - **false**: The access control policy is disabled.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The recurrence type of the policy validity period for the access control policy. Valid values:
   * - **Permanent** (default): always.
   * - **None**: a specific single time.
   * - **Daily**: every day.
   * - **Weekly**: every week.
   * - **Monthly**: every month.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy of the virtual private cloud (VPC) firewalls. Fuzzy match is supported.
   * 
   * > Source can be a single CIDR block or an address book name.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewalls. Valid values:
   * 
   * - If the virtual private cloud (VPC) firewalls protect traffic between two VPCs connected by CEN, set this parameter to the instance ID of the CEN instance.
   * 
   * - If the virtual private cloud (VPC) firewalls protect traffic between two VPCs connected by Express Connect, set this parameter to the instance ID of the virtual private cloud (VPC) firewalls.
   * 
   * > You can call the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to obtain the instance ID.
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

