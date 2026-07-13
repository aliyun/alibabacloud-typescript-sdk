// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRecordInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * 00efd71a-7************
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the domain name group.
   * 
   * @example
   * 2****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the domain name group.
   * 
   * @example
   * MyGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The resolution line.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The lock status of the DNS record. Valid values: true and **false**.
   * 
   * @example
   * true
   */
  locked?: boolean;
  /**
   * @remarks
   * The priority of the MX record.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The Punycode for the Chinese domain name.
   * 
   * @example
   * xn--fsq270a.com
   */
  punyCode?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * @
   */
  RR?: string;
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * @example
   * 9******
   */
  recordId?: string;
  /**
   * @remarks
   * The remarks for the DNS record.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the DNS record. Valid values:
   * 
   * Enable: The DNS record is enabled.
   * 
   * Disable: The DNS record is paused.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * The time to live (TTL). This specifies the duration for which the DNS record is cached on a local DNS server.
   * 
   * @example
   * 600
   */
  TTL?: number;
  /**
   * @remarks
   * The record type.
   * 
   * @example
   * MX
   */
  type?: string;
  /**
   * @remarks
   * The record value.
   * 
   * @example
   * 1.1.XX.XX
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      domainName: 'DomainName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      line: 'Line',
      locked: 'Locked',
      priority: 'Priority',
      punyCode: 'PunyCode',
      RR: 'RR',
      recordId: 'RecordId',
      remark: 'Remark',
      requestId: 'RequestId',
      status: 'Status',
      TTL: 'TTL',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      domainName: 'string',
      groupId: 'string',
      groupName: 'string',
      line: 'string',
      locked: 'boolean',
      priority: 'number',
      punyCode: 'string',
      RR: 'string',
      recordId: 'string',
      remark: 'string',
      requestId: 'string',
      status: 'string',
      TTL: 'number',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

