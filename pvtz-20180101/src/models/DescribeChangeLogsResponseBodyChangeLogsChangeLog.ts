// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChangeLogsResponseBodyChangeLogsChangeLog extends $dara.Model {
  /**
   * @remarks
   * The operation content.
   * 
   * @example
   * Add RR:test.03 Type:A Line:default TTL:300 Value:172.20.XX.XX
   */
  content?: string;
  /**
   * @remarks
   * The operator ID.
   * 
   * @example
   * 141339776561****
   */
  creatorId?: string;
  /**
   * @remarks
   * The subtype of the operator. Valid values:
   * 
   * *   CUSTOMER: Alibaba Cloud account
   * *   SUB: RAM user
   * *   STS: assumed role that obtains the Security Token Service (STS) token of a RAM role
   * *   OTHER: other types
   * 
   * @example
   * SUB
   */
  creatorSubType?: string;
  /**
   * @remarks
   * The operator type. No value or **USER** is returned for this parameter.
   * 
   * @example
   * USER
   */
  creatorType?: string;
  /**
   * @remarks
   * The operator ID.
   * 
   * @example
   * 141339776561****
   */
  creatorUserId?: string;
  /**
   * @remarks
   * The unique ID of the zone, user-defined line, forwarding rule, outbound endpoint, or inbound endpoint.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  entityId?: string;
  /**
   * @remarks
   * The name of the object on which the operation was performed, such as the domain name, user-defined line, cache retention domain name, forwarding rule, outbound endpoint, or inbound endpoint.
   * 
   * @example
   * test-api.com
   */
  entityName?: string;
  /**
   * @remarks
   * The ID of the operation log.
   * 
   * @example
   * 90761578646770****
   */
  id?: number;
  /**
   * @remarks
   * The specific operation performed on the object, such as adding, deleting, modifying, or associating the object.
   * 
   * @example
   * add
   */
  operAction?: string;
  /**
   * @remarks
   * The public IP address of the operator terminal. If the IP address of the operator terminal is a private IP address, the value of this parameter is the public IP address to which the private IP address is mapped after network address translation (NAT).
   * 
   * @example
   * 192.0.XX.XX
   */
  operIp?: string;
  /**
   * @remarks
   * The type of the object on which the operation was performed. Valid values:
   * 
   * *   **PV_ZONE**: the built-in authoritative zone
   * *   **PV_RECORD**: the DNS record
   * *   **RESOLVER_RULE**: the forwarding rule
   * *   **CUSTOM_LINE**: the user-defined line
   * *   **RESOLVER_ENDPOINT**: the outbound endpoint
   * *   **INBOUND_ENDPOINT**: the inbound endpoint
   * *   **CACHE_RESERVE_DOMAIN**: the cache retention domain name
   * 
   * @example
   * PV_ZONE
   */
  operObject?: string;
  /**
   * @remarks
   * The time when the operation is performed. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-24T07:35Z
   */
  operTime?: string;
  /**
   * @remarks
   * The time when the operation was performed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516779348000
   */
  operTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      creatorId: 'CreatorId',
      creatorSubType: 'CreatorSubType',
      creatorType: 'CreatorType',
      creatorUserId: 'CreatorUserId',
      entityId: 'EntityId',
      entityName: 'EntityName',
      id: 'Id',
      operAction: 'OperAction',
      operIp: 'OperIp',
      operObject: 'OperObject',
      operTime: 'OperTime',
      operTimestamp: 'OperTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      creatorId: 'string',
      creatorSubType: 'string',
      creatorType: 'string',
      creatorUserId: 'string',
      entityId: 'string',
      entityName: 'string',
      id: 'number',
      operAction: 'string',
      operIp: 'string',
      operObject: 'string',
      operTime: 'string',
      operTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

