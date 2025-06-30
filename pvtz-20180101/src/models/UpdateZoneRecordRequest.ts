// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateZoneRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
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
   * The resolution line. Default value: default.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The priority of the MX record. You can set priorities for different email servers. Valid values: 1 to 99. A smaller value indicates a higher priority.
   * 
   * >  This parameter is required if the type of the DNS record is MX.
   * 
   * @example
   * 60
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the DNS record. You can call the DescribeZoneRecords operation to query a list of DNS records.
   * 
   * This parameter is required.
   * 
   * @example
   * 172223****
   */
  recordId?: number;
  /**
   * @remarks
   * The hostname. The hostname is the prefix of the subdomain name for zone. Example: www, @, \\* (used for wildcard DNS resolution), and mail (used for specifying the mail server that receives emails).
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
   * The TTL period. Valid values: 5, 30, 60, 3600, 43200, and 86400. Unit: seconds.
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
   * 192.16.XX.XX
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

