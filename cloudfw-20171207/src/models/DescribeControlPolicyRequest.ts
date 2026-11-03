// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic that matches the access control policy. Valid values:
   * 
   * - **accept**: Allow
   * 
   * - **drop**: Deny
   * 
   * - **log**: Monitor
   * 
   * > If you do not specify this parameter, all action types are queried.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique ID of the access control policy. You must specify at least one of AclUuid and Direction. If you specify AclUuid, you can query the policy by its ID.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The page number of the current page returned for a paged query during paging.
   * 
   * Default value: 1.
   * 
   * This parameter is required.
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
   * Allow access to the office CIDR block
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Fuzzy match is supported. The value of Destination varies based on the destination type (DestinationType).
   * 
   * - If DestinationType is set to `net`, the destination address is a CIDR block. Example: 10.0.3.0/24.
   * 
   * - If DestinationType is set to `domain`, the destination address is a domain name. Example: aliyun.
   * 
   * - If DestinationType is set to `group`, the destination address is the name of an address book. Example: db_group.
   * 
   * - If DestinationType is set to `location`, the destination address is an area name. For more information about the area positional encoding, see AddControlPolicy. Example: ["BJ11", "ZB"].
   * 
   * > If you do not specify this parameter in the Settings, all types of destination addresses are queried.
   * 
   * @example
   * 192.0.XX.XX
   */
  destination?: string;
  /**
   * @remarks
   * The traffic direction controlled by the access control policy. Valid values: in (inbound) and out (outbound). You must specify at least one of Direction and AclUuid. If AclUuid is not specified, you must specify a non-empty Direction. Otherwise, ErrorParametersDirection is returned.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The IP address version. Valid values:
   * 
   * - **4** (default): IPv4
   * 
   * - **6**: IPv6
   * 
   * @example
   * 6
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paged query during paging.
   * 
   * This parameter is required.
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
   * - **UDP**
   * - **ICMP**
   * - **ANY** (all protocol types)
   * > If you do not specify this parameter, all protocol types are queried.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether the access control policy is enabled. Valid values:
   * 
   * - **true**: The access control policy is enabled.
   * 
   * - **false**: The access control policy is disabled.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The recurrence type of the Policy Validity Period for the access control policy. Valid values:
   * - **Permanent** (default): Always
   * - **None**: One-time
   * - **Daily**: Daily
   * - **Weekly**: Weekly
   * - **Monthly**: Monthly
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Fuzzy match is supported. The value of Source varies based on the value of SourceType.
   * 
   * - If SourceType is set to `net`, the source address is a CIDR block. Example: 192.0.XX.XX/24.
   * 
   * - If SourceType is set to `group`, the source address is the name of a source address book. Example: db_group. If this parameter is left empty, all access sources are queried.
   * 
   * - If SourceType is set to `location`, the source address is a source region. Example: Beijing or beijing. Both Chinese and English region names are supported.
   * 
   * > If you do not specify this parameter, all types of access sources are queried.
   * 
   * @example
   * 192.0.XX.XX
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
      ipVersion: 'IpVersion',
      lang: 'Lang',
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
      ipVersion: 'string',
      lang: 'string',
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

