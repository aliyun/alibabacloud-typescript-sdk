// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecursionRecordWeightEnableStatusRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of a request. The client generates the value of this parameter. The value must be unique for each request and can be up to 64 ASCII characters in length.
   * 
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable the weight algorithm. Valid values: \\*\\*enable\\*\\* and \\*\\*disable\\*\\*.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The DNS resolution line. The default value is **default**. For more information, see [DNS resolution lines](https://help.aliyun.com/document_detail/29807.html).
   * 
   * <props="china">
   * 
   * [Resolution Line Enumeration](https://help.aliyun.com/document_detail/29807.html)
   * 
   * 
   * 
   * <props="intl">
   * 
   * [Enumeration of DNS record lines](https://www.alibabacloud.com/help/zh/doc-detail/29807.htm)
   * 
   * @example
   * default
   */
  requestSource?: string;
  /**
   * @remarks
   * The host record.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The type of the DNS record. The following types are supported: \\*\\*A\\*\\*, which maps a domain name to an IPv4 address. \\*\\*AAAA\\*\\*, which maps a domain name to an IPv6 address. \\*\\*CNAME\\*\\*, an alias record that points a domain name to another domain name. \\*\\*MX\\*\\*, a mail exchanger record that points a domain name to a mail server address. \\*\\*TXT\\*\\*, an arbitrary, human-readable text DNS record. \\*\\*SRV\\*\\*, a service record that identifies a server that provides a specific service, commonly used for directory management in Microsoft systems.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The zone ID for the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * 176432424234
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enableStatus: 'EnableStatus',
      requestSource: 'RequestSource',
      rr: 'Rr',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enableStatus: 'string',
      requestSource: 'string',
      rr: 'string',
      type: 'string',
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

