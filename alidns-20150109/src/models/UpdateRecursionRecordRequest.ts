// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecursionRecordRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that ensures the idempotence of a request. Generate a unique value for this parameter on your client. The value can be up to 64 ASCII characters in length.
   * 
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @remarks
   * The priority of the MX record. A smaller value indicates a higher priority. The value can be an integer from 1 to 99.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * This parameter is required.
   * 
   * @example
   * 9*******
   */
  recordId?: string;
  /**
   * @remarks
   * The resolution line. The default value is **default**. For more information, see:
   * 
   * <props="china">
   * 
   * [Lines](https://help.aliyun.com/document_detail/29807.html)
   * 
   * 
   * 
   * <props="intl">
   * 
   * [Lines](https://www.alibabacloud.com/help/en/doc-detail/29807.htm)
   * 
   * @example
   * WebSDK
   */
  requestSource?: string;
  /**
   * @remarks
   * The host record. This is the prefix of a domain name. Common prefixes are www, @, \\* for wildcard DNS, and mail for mailboxes.
   * 
   * For example, to resolve @.example.com, set the host record to "@". Do not leave it empty.
   * 
   * @example
   * test
   */
  rr?: string;
  /**
   * @remarks
   * The Time to Live (TTL) in seconds. Only the following values are supported: 5, 30, 60, 3600 (1 hour), 43200 (12 hours), and 86400 (24 hours). The default value is 60.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record. The following types are supported: A: An IPv4 record that maps a domain name to an IPv4 address. AAAA: An IPv6 record that maps a domain name to an IPv6 address. CNAME: An alias record that points a domain name to another domain name. MX: A mail exchanger record that points a domain name to a mail server address. TXT: A text record that contains arbitrary human-readable text. SRV: A service record that identifies a server for a specific service. This is common in directory management for Microsoft systems.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The record value. Enter a value that corresponds to the DNS record type.
   * 
   * @example
   * 1.1.XX.XX
   */
  value?: string;
  /**
   * @remarks
   * The weight. An integer from 1 to 100, inclusive. The default value is 1. You can set different weights for each address. DNS queries return addresses in proportion to their weights.
   * 
   * @example
   * 2
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      priority: 'Priority',
      recordId: 'RecordId',
      requestSource: 'RequestSource',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      priority: 'number',
      recordId: 'string',
      requestSource: 'string',
      rr: 'string',
      ttl: 'number',
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

