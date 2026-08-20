// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateZoneRecordRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. The client generates the value, which must be unique among different requests. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 6447728c8578e66aacf062d2df4446dc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * Default value: en
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The DNS resolution line. The default value is default.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The priority of the MX record. You can set different priorities for mail servers. Valid values: 1 to 99. A smaller value indicates a higher priority.
   * 
   * > This parameter is required if the record type is MX.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the DNS record. To obtain the ID, call the DescribeZoneRecords operation to query a list of DNS records.
   * 
   * This parameter is required.
   * 
   * @example
   * 172223****
   */
  recordId?: number;
  /**
   * @remarks
   * The host record. This is the prefix of a domain name. Common examples include www, @, \\* (for wildcard DNS), and mail (for mailboxes).
   * 
   * For example, to resolve @.example.com, set the host record to "@", not an empty string.
   * 
   * This parameter is required.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The time to live (TTL) in seconds (s). Valid values: 5, 30, 60, 3600 (1 hour), 43200 (12 hours), and 86400 (1 day).
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record. The following types are supported:
   * 
   * - **A**: Maps a domain name to an IPv4 address in dotted decimal notation.
   * 
   * - **AAAA**: Maps a domain name to an IPv6 address.
   * 
   * - **CNAME**: Maps a domain name to another domain name.
   * 
   * - **TXT**: A text record. The text can be up to 255 characters in length. TXT records are often used for Sender Policy Framework (SPF) records to prevent spam.
   * 
   * - **MX**: Maps a domain name to the domain name of a mail server.
   * 
   * - **PTR**: Maps an IP address to a domain name.
   * 
   * - **SRV**: A service record that specifies the server for a specific service. The format is: Priority Weight Port Target. Each part must be separated by a space.
   * 
   * > Before adding a PTR record, configure a reverse lookup zone. For more information, see [Reverse DNS lookup and PTR records](https://help.aliyun.com/document_detail/2592976.html)
   * 
   * This parameter is required.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The record value. Enter a value that corresponds to the record type.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.16.XX.XX
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. Valid values are integers from 1 to 100. The default value is 1. You can set different weights for records to return IP addresses in proportion to their weights.
   * 
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      line: 'Line',
      priority: 'Priority',
      recordId: 'RecordId',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      userClientIp: 'UserClientIp',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      line: 'string',
      priority: 'number',
      recordId: 'number',
      rr: 'string',
      ttl: 'number',
      type: 'string',
      userClientIp: 'string',
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

