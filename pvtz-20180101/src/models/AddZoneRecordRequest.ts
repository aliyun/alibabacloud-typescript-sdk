// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddZoneRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. A client generates this value to ensure that it is unique among different requests. The value can be up to 64 ASCII characters in length.
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
   * The source of the DNS resolution request. Valid values:
   * 
   * - default: The default line. This is equivalent to a global line. Configure a default line to ensure that a DNS record is returned even if no smart line is hit.
   * 
   * - Alibaba Cloud line: The DNS resolution request comes from Alibaba Cloud, including Public Cloud, Alibaba Finance Cloud, and Alibaba Gov Cloud.
   * 
   * - Custom line: Customize internal domain name resolution to return a specific IP address for DNS query requests from a specific IP address segment.
   * 
   * > * Only zones in built-in authoritative acceleration regions support adding DNS resolution request source lines.
   * >
   * > * To use the default line, enter "default". For Alibaba Cloud lines and custom lines, enter the specified line code. Example: aliyun_r_cn-beijing-a
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The priority of the MX record. A smaller value indicates a higher priority. Valid values: **[1, 99]**.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * en
   */
  remark?: string;
  /**
   * @remarks
   * The host record. A host record is the prefix of a domain name. Common host records include www, @, \\* (for wildcard DNS), and mail (for mailboxes).
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
   * The time to live (TTL). The unit is seconds (s). Valid values are 5, 30, 60, 3600 (1 hour), 43200 (12 hours), and 86400 (1 day). The default value is 60.
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
   * - **SRV**: Specifies the server for a specific service. The format is: Priority Weight Port Target. Separate each value with a space.
   * 
   * > Before adding a PTR record, configure a reverse lookup zone. For more information, see [Reverse DNS lookups and PTR records](https://help.aliyun.com/document_detail/2592976.html).
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
   * The record value. Enter a value based on the DNS record type.
   * 
   * This parameter is required.
   * 
   * @example
   * 114.55.XX.XX
   */
  value?: string;
  /**
   * @remarks
   * The weight. Valid values are integers from 1 to 100. The default value is 1. Set different weights for each address to return addresses based on the weight ratio for DNS queries.
   * 
   * @example
   * 1
   */
  weight?: number;
  /**
   * @remarks
   * The ID of the zone. This is the unique identifier of the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      line: 'Line',
      priority: 'Priority',
      remark: 'Remark',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      userClientIp: 'UserClientIp',
      value: 'Value',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      line: 'string',
      priority: 'number',
      remark: 'string',
      rr: 'string',
      ttl: 'number',
      type: 'string',
      userClientIp: 'string',
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

