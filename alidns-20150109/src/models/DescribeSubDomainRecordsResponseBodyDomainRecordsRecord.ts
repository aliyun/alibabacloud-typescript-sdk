// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubDomainRecordsResponseBodyDomainRecordsRecord extends $dara.Model {
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
   * The DNS resolution line.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The lock status of the DNS record.
   * 
   * @example
   * false
   */
  locked?: boolean;
  /**
   * @remarks
   * The priority of the mail exchanger (MX) record.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * www
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
   * The description of the DNS record.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The status of the DNS record.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * The time-to-live (TTL) of the DNS record.
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
   * CNAME
   */
  type?: string;
  /**
   * @remarks
   * The record value.
   * 
   * @example
   * example.net
   */
  value?: string;
  /**
   * @remarks
   * The weight of the DNS record.
   * 
   * @example
   * 10
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      line: 'Line',
      locked: 'Locked',
      priority: 'Priority',
      RR: 'RR',
      recordId: 'RecordId',
      remark: 'Remark',
      status: 'Status',
      TTL: 'TTL',
      type: 'Type',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      line: 'string',
      locked: 'boolean',
      priority: 'number',
      RR: 'string',
      recordId: 'string',
      remark: 'string',
      status: 'string',
      TTL: 'number',
      type: 'string',
      value: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

