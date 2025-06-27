// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRecordsResponseBodyDomainRecordsRecord extends $dara.Model {
  /**
   * @remarks
   * The time when the DNS record was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970.
   * 
   * @example
   * 1666501957000
   */
  createTimestamp?: number;
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
   * The resolution line.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * Indicates whether the DNS record is locked.
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
   * 5
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
   * The time-to-live (TTL) of the cached DNS record. Unit: seconds.
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
   * The time when the DNS record was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970.
   * 
   * @example
   * 1676872961000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The record value.
   * 
   * @example
   * mail1.hichina.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the DNS record.
   * 
   * @example
   * 2
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
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
      updateTimestamp: 'UpdateTimestamp',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
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
      updateTimestamp: 'number',
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

