// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action (settings) that Cloud Firewall performs on the traffic in the access control policy of the virtual private cloud (VPC) firewall. Valid values:
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique identity ID of the access control policy of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * 4037fbf7-3e39-4634-92a4-d0155247****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The page number in a paged query. Settings the current page number for paging.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The description of the access control policy of the virtual private cloud (VPC) firewall. Fuzzy queries are supported.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy of the virtual private cloud (VPC) firewall. Fuzzy queries are supported.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The language type for requests and responses.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of a member account of the current Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The number of access control policies for the virtual private cloud (VPC) firewall on each page in a paged query. Settings the number of policies per page for paging.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The protocol type of the traffic in the access control policy of the virtual private cloud (VPC) firewall. Valid values:
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The enabled status of the access control policy. Valid values:
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The recurrence type of the policy validity period for the access control policy. Valid values:
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy of the virtual private cloud (VPC) firewall. Fuzzy queries are supported.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewall. Valid values:
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

