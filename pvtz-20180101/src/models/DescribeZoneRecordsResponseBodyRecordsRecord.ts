// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZoneRecordsResponseBodyRecordsRecord extends $dara.Model {
  /**
   * @remarks
   * The time when the DNS record was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-03-14T03:47Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the DNS record was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672740294000
   */
  createTimestamp?: number;
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
   * The priority of the mail exchanger (MX) record.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * @example
   * 246959****
   */
  recordId?: number;
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
   * The hostname.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The state of the DNS record. Valid values:
   * 
   * *   ENABLE: The DNS record is enabled.
   * *   DISABLE: The DNS record is disabled.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The time to live (TTL) period.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record. Valid values:
   * 
   * *   **A**: An A record points a domain name to an IPv4 address.
   * *   **AAAA**: An AAAA record points a domain name to an IPv6 address.
   * *   **CNAME**: A canonical name (CNAME) record points a domain name to another domain name.
   * *   **TXT**: A text (TXT) record usually serves as a Sender Policy Framework (SPF) record to prevent email spam. The record value of the TXT record can be up to 255 characters in length.
   * *   **MX**: A mail exchanger (MX) record points a domain name to a mail server address.
   * *   **PTR**: A pointer (PTR) points an IP address to a domain name.
   * *   **SRV**: A service (SRV) record specifies a server that hosts a specific service.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The time when the DNS record was updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-08T02:31Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the DNS record was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1654777678000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The record value.
   * 
   * @example
   * 127.0.XX.XX
   */
  value?: string;
  /**
   * @remarks
   * The weight value of the address. You can set a different weight value for each address. This way, addresses are returned based on the weight values for DNS requests. A weight value must be an integer that ranges from 1 to 100.
   * 
   * @example
   * 1
   */
  weight?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * a49f55537f3b0b1e6e43add0bf5f****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      line: 'Line',
      priority: 'Priority',
      recordId: 'RecordId',
      remark: 'Remark',
      rr: 'Rr',
      status: 'Status',
      ttl: 'Ttl',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      value: 'Value',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      line: 'string',
      priority: 'number',
      recordId: 'number',
      remark: 'string',
      rr: 'string',
      status: 'string',
      ttl: 'number',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      value: 'string',
      weight: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

