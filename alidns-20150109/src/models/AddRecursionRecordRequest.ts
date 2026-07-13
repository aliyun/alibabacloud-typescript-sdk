// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRecursionRecordRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a unique value on your client. The token must be unique for each request. It can contain only ASCII characters and must not exceed 64 characters in length.
   * 
   * @example
   * 6447728c8578e66aacf062d2df4446dc
   */
  clientToken?: string;
  /**
   * @remarks
   * The priority of the MX record. A smaller value indicates a higher priority. Valid values: 1 to 99.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The DNS resolution line. The default value is **default**. For more information, see:
   * 
   * <props="china">
   * 
   * [DNS resolution lines](https://help.aliyun.com/document_detail/29807.html)
   * 
   * 
   * 
   * <props="intl">
   * 
   * [DNS resolution lines](https://www.alibabacloud.com/help/en/doc-detail/29807.htm)
   * 
   * @example
   * default
   */
  requestSource?: string;
  /**
   * @remarks
   * The host record. The host record is the prefix of a domain name. Common examples include www, @, \\* (for wildcard DNS), and mail (for mailboxes).
   * 
   * For example, to resolve @.example.com, set the host record to "@", not an empty string.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The time to live (TTL) in seconds. This is the duration for which the record is cached. Supported values: 5, 30, 60, 3600 (1 hour), 43200 (12 hours), and 86400 (24 hours). Default value: 60.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record. The following record types are supported: A: An IPv4 record that maps a domain name to an IPv4 address. AAAA: An IPv6 record that maps a domain name to an IPv6 address. CNAME: A canonical name record that points a domain name to another domain name. MX: A mail exchanger record that points a domain name to a mail server address. TXT: A text record that contains any human-readable text. SRV: A service record that identifies a server that provides a specific service. This is common in directory management for Microsoft systems. NS: A name server record that delegates a subdomain to another DNS provider for resolution. CAA: A Certification Authority Authorization record that restricts which certification authorities (CAs) can issue certificates for a domain. URL: A URL record that points a domain name to an existing site. SVCB: A service binding record that is used for service discovery. It provides information about supported protocols and service parameters through a DNS record. HTTPS: A record type specific to HTTPS services. An HTTPS record can define secure HTTPS connection protocols and optimal service endpoint addresses.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 192.168.0.1
   */
  userClientIp?: string;
  /**
   * @remarks
   * The record value. Enter a value that corresponds to the specified record type.
   * 
   * @example
   * 1.1.1.1
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. Valid values are integers from 1 to 100. The default value is 1. Set different weights for each address. DNS queries then return addresses based on the specified weight ratio.
   * 
   * @example
   * 2
   */
  weight?: number;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * 173671468000011
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      priority: 'Priority',
      requestSource: 'RequestSource',
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
      priority: 'number',
      requestSource: 'string',
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

