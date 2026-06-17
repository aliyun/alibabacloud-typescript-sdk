// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic.
   * 
   * Valid values:
   * 
   * - **accept**: Allow
   * 
   * - **drop**: Deny
   * 
   * - **log**: Monitor
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
   * 323f0697-2a21-4e43-b142-*****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The page number of the current page for a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The description of the access control policy. Fuzzy queries are supported.
   * 
   * > If you do not set this parameter, the descriptions of all policies are queried.
   * 
   * @example
   * test-description
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Fuzzy queries are supported. The value of this parameter varies based on the value of the DestinationType parameter.
   * 
   * - If DestinationType is set to `net`, the value of this parameter is a CIDR block. Example: 10.0.3.0/24.
   * 
   * - If DestinationType is set to `domain`, the value of this parameter is a domain name. Example: aliyun.
   * 
   * - If DestinationType is set to `group`, the value of this parameter is the name of an address book. Example: db_group.
   * 
   * - If DestinationType is set to `location`, the value of this parameter is a region name. For more information, see [AddControlPolicy](https://help.aliyun.com/document_detail/474128.html). Example: ["BJ11", "ZB"].
   * 
   * > If you do not set this parameter, all types of destination addresses are queried.
   * 
   * @example
   * x.x.x.x/32
   */
  destination?: string;
  /**
   * @remarks
   * The traffic direction of the access control policy. Valid values:
   * 
   * - **out**: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
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
   * The ID of the NAT Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-xxxxxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paged query. The default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The protocol type of the traffic in the access control policy. Valid values:
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * - **ICMP**
   * 
   * - **ANY** (all protocol types)
   * 
   * > If you do not set this parameter, all protocol types are queried.
   * 
   * @example
   * ANY
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. By default, an access control policy is enabled after it is created. Valid values:
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
   * The recurrence type for the policy validity period. Valid values:
   * 
   * - **Permanent** (default): always
   * 
   * - **None**: one-time
   * 
   * - **Daily**: daily
   * 
   * - **Weekly**: weekly
   * 
   * - **Monthly**: monthly
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Fuzzy queries are supported. The value of this parameter varies based on the value of the SourceType parameter.
   * 
   * - If SourceType is set to `net`, the value of this parameter is a CIDR block. Example: 192.0.XX.XX/24.
   * 
   * - If SourceType is set to `group`, the value of this parameter is the name of an address book. Example: db_group. If you leave this parameter empty, all source addresses are queried.
   * 
   * - If SourceType is set to `location`, the value of this parameter is a source region. Example: Beijing or beijing. You can use either Chinese or English to specify the region.
   * 
   * > If you do not set this parameter, all types of source addresses are queried.
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

