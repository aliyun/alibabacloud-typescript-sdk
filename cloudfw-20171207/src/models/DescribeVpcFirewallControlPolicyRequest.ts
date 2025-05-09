// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: blocks the traffic.
   * *   **log**: monitors the traffic.
   * 
   * > If you do not specify this parameter, access control policies are queried based on all actions.
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
   * The number of the page to return.
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
   * > The value of this parameter can be a CIDR block or an address book name.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
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
   * The number of entries to return on each page.
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
   * *   **TCP**
   * *   **UDP**
   * *   **ICMP**
   * *   **ANY**: all protocol types
   * 
   * > If you do not specify this parameter, access control policies of all protocol types are queried.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The recurrence type for the access control policy to take effect. Valid values:
   * 
   * *   **Permanent** (default): The policy always takes effect.
   * *   **None**: The policy takes effect for only once.
   * *   **Daily**: The policy takes effect on a daily basis.
   * *   **Weekly**: The policy takes effect on a weekly basis.
   * *   **Monthly**: The policy takes effect on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Fuzzy match is supported.
   * 
   * > The value of this parameter can be a CIDR block or an address book name.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall. Valid values:
   * 
   * *   If the VPC firewall protects the traffic between two VPCs that are connected by using a CEN instance, the value of this parameter must be the ID of the CEN instance.
   * *   If the VPC firewall protects the traffic between two VPCs that are connected by using an Express Connect circuit, the value of this parameter must be the instance ID of the VPC firewall.
   * 
   * > You can call the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to query the ID.
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

