// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRecordInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * 00efd71a-770e-4255-b54e-6fe5659baffe
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * dns-example.top
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the domain name group.
   * 
   * @example
   * 2223
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
   * The DNS resolution line.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The lock state of the DNS record. Valid values: **true and false**.
   * 
   * @example
   * true
   */
  locked?: boolean;
  /**
   * @remarks
   * The priority of the mail exchanger (MX) record.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The Punycode for the domain name. This parameter is returned only for Chinese domain names.
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
   * 9999985
   */
  recordId?: string;
  /**
   * @remarks
   * The description of your DNS record.
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
   * Enable: enabled
   * 
   * Disable: disabled
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * The time for which the DNS record is cached in a local DNS system.
   * 
   * @example
   * 600
   */
  TTL?: number;
  /**
   * @remarks
   * The type of the DNS record.
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

