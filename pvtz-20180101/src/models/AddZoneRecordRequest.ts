// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddZoneRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6447728c8578e66aacf062d2df4446dc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The DNS request source. Valid values:
   * 
   * *   default: the default resolution line. The default line is equivalent to a global line. We recommend that you configure a default line to ensure that a DNS record can be returned if no intelligent line is matched.
   * *   Alibaba Cloud lines: indicate that DNS requests are originated from Alibaba Cloud, including Alibaba Cloud public cloud, Alibaba Finance Cloud, and Alibaba Gov Cloud.
   * *   Custom lines: You can configure custom lines so that Private DNS can return specific IP addresses for DNS requests that are originated from a specific CIDR block.
   * 
   * > 
   * 
   * *   Only built-in authoritative acceleration zones support custom lines.
   * 
   * *   Set Line to default if you want to choose the default line. Set Line to a specific line code if you want to choose an Alibaba Cloud line or a custom line. Example: aliyun_r_cn-beijing-a.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The priority of the mail exchanger (MX) record. Valid values: **1 to 99**. A smaller value indicates a higher priority.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The description of the DNS record.
   * 
   * @example
   * en
   */
  remark?: string;
  /**
   * @remarks
   * The hostname. The hostname is the prefix of the subdomain name for the zone. Example: www, @, \\* (used for wildcard DNS resolution), and mail (used for specifying the mail server that receives emails).
   * 
   * For example, if you want to resolve the domain name @.exmaple.com, you must set Rr to @ instead of leaving Rr empty.
   * 
   * This parameter is required.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The time to live (TTL) period. Valid values: 5, 30, 60, 3600, 43200, and 86400. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record. Valid values:
   * 
   * *   **A**: An A record maps a domain name to an IPv4 address in the dotted decimal notation format.
   * *   **AAAA**: An AAAA record maps a domain name to an IPv6 address.
   * *   **CNAME**: A canonical name (CNAME) record maps a domain name to another domain name.
   * *   **TXT**: A text (TXT) record usually serves as a Sender Policy Framework (SPF) record to prevent email spam. The record value of the TXT record can be up to 255 characters in length.
   * *   **MX**: A mail exchanger (MX) record maps a domain name to the domain name of a mail server.
   * *   **PTR**: A pointer (PTR) record maps an IP address to a domain name.
   * *   **SRV**: A service (SRV) record specifies a server that hosts a specific service. Enter a record value in the format of Priority Weight Port Destination domain name. Separate these items with spaces.
   * 
   * >  Before you add a PTR record, you must configure a reverse lookup zone. For more information, see [Add PTR records](https://help.aliyun.com/document_detail/2592976.html).
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
   * The record value. You need to enter the record value based on the DNS record type.
   * 
   * This parameter is required.
   * 
   * @example
   * 114.55.XX.XX
   */
  value?: string;
  /**
   * @remarks
   * The weight value of the address. You can set a different weight value for each address. This way, addresses are returned based on the weight values for DNS requests. A weight value must be an integer that ranges from 1 to 100. Default value: 1.
   * 
   * @example
   * 1
   */
  weight?: number;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
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

