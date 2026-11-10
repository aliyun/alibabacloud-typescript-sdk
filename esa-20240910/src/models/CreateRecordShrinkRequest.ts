// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The origin server authentication information for a CNAME record.
   */
  authConfShrink?: string;
  /**
   * @remarks
   * The business scenario used to tag the DNS record. This parameter is required when proxy acceleration is enabled for the DNS record. That is, the Proxied parameter is set to true. This parameter is not required when proxy acceleration is disabled. That is, the Proxied parameter is set to false. Valid values:
   * - **image_video**: Images and videos.
   * - **api**: API operations.
   * - **web**: Web pages.
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * The description of the record. The description can be up to 100 characters in length.
   * 
   * @example
   * This is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * The DNS information of the record. The required content for this field varies based on the record type. For more information, see
   * <props="china">[Documentation](https://help.aliyun.com/document_detail/2708761.html)<props="intl">[Documentation](https://www.alibabacloud.com/help/doc-detail/2708761.html)
   * .
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "value":"2.2.2.2"
   * }
   */
  dataShrink?: string;
  /**
   * @remarks
   * The back-to-origin host policy. This parameter takes effect when the record type is CNAME. Settings for the host policy in back-to-origin requests. Two patterns are available:
   * 
   * - **follow_hostname**: Follows the request host.
   * - **follow_origin_domain**: Follows the Origin Domain Name.
   * 
   * @example
   * follow_origin_domain
   */
  hostPolicy?: string;
  /**
   * @remarks
   * The HTTP port. By default, port 80 is supported.
   * 
   * @example
   * 80,2052,2082,2086,2095,8080,8880
   */
  httpPorts?: string;
  /**
   * @remarks
   * The HTTPS port. By default, port 443 is supported.
   * 
   * @example
   * 443,2053,2083,2087,2096,8443
   */
  httpsPorts?: string;
  /**
   * @remarks
   * Specifies whether to enable proxy acceleration for the record. Proxy acceleration can be enabled only for CNAME, A, or AAAA records. That is, the Type parameter is set to CNAME, A, or AAAA. Valid values:
   * - **true**: Enables proxy acceleration.
   * - **false**: Disables proxy acceleration.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The record name.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The site ID. You can obtain the site ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The origin server type for a CNAME record. This parameter is required when you add a CNAME record. That is, the Type parameter is set to CNAME. Valid values:
   * 
   * - **OSS**: OSS origin server.
   * - **S3**: S3 origin server.
   * - **LB**: Load balancing origin server.
   * - **OP**: IPAM pool origin server.
   * - **Domain**: Common domain name origin server.
   * 
   * If this parameter is not specified or is left empty, the default value is Domain, which indicates a common domain name origin server.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The time-to-live (TTL) of the record, in seconds. A value of 1 indicates that the TTL is automatically determined.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The DNS record type, such as **A/AAAA**, **CNAME**, or **TXT**.
   * 
   * This parameter is required.
   * 
   * @example
   * A/AAAA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authConfShrink: 'AuthConf',
      bizName: 'BizName',
      comment: 'Comment',
      dataShrink: 'Data',
      hostPolicy: 'HostPolicy',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      proxied: 'Proxied',
      recordName: 'RecordName',
      siteId: 'SiteId',
      sourceType: 'SourceType',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfShrink: 'string',
      bizName: 'string',
      comment: 'string',
      dataShrink: 'string',
      hostPolicy: 'string',
      httpPorts: 'string',
      httpsPorts: 'string',
      proxied: 'boolean',
      recordName: 'string',
      siteId: 'number',
      sourceType: 'string',
      ttl: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

