// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic.
   * 
   * Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: denies the traffic.
   * *   **log**: monitors the traffic.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * @example
   * 303f0697-2a21-4e43-b142-4a77adf7b358
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
   * > If you do not specify this parameter, the descriptions of all policies are queried.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Fuzzy match is supported. The value of this parameter varies based on the value of the DestinationType parameter.
   * 
   * *   If DestinationType is set to `net`, the value of Destination must be a CIDR block. Example: 10.0.3.0/24.
   * *   If DestinationType is set to `domain`, the value of Destination must be a domain name. Example: aliyun.
   * *   If DestinationType is set to `group`, the value of Destination must be the name of an address book. Example: db_group.
   * *   If DestinationType is set to `location`, the value of Destination is a location. For more information about location codes, see [AddControlPolicy](https://help.aliyun.com/document_detail/474128.html). Example: ["BJ11", "ZB"].
   * 
   * > If you do not specify this parameter, all types of destination addresses are queried.
   * 
   * @example
   * x.x.x.x/32
   */
  destination?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies. Valid values:
   * 
   * *   **out**: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
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
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-xxxxxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The type of the protocol in the access control policy. Valid values:
   * 
   * *   **TCP**
   * *   **UDP**
   * *   **ICMP**
   * *   **ANY**: all types of protocols
   * 
   * > If you do not specify this parameter, access control policies of all protocol types are queried.
   * 
   * @example
   * ANY
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether the access control policy is enabled. By default, an access control policy is enabled after it is created. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * *   **None**: The policy takes effect only once.
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
   * The source address in the access control policy. Fuzzy match is supported. The value of this parameter varies based on the value of the SourceType parameter.
   * 
   * *   If SourceType is set to `net`, the value of Source must be a CIDR block. Example: 192.0.XX.XX/24.
   * *   If SourceType is set to `group`, the value of Source must be the name of an address book. Example: db_group. If the db_group address book does not contain addresses, all source addresses are queried.
   * *   If SourceType is set to `location`, the value of Source must be a location. Example: beijing.
   * 
   * > If you do not specify this parameter, all types of source addresses are queried.
   * 
   * @example
   * 1.1.1.1/32
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      currentPage: 'CurrentPage',
      description: 'Description',
      destination: 'Destination',
      direction: 'Direction',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      pageSize: 'PageSize',
      proto: 'Proto',
      release: 'Release',
      repeatType: 'RepeatType',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      currentPage: 'string',
      description: 'string',
      destination: 'string',
      direction: 'string',
      lang: 'string',
      natGatewayId: 'string',
      pageSize: 'string',
      proto: 'string',
      release: 'string',
      repeatType: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

