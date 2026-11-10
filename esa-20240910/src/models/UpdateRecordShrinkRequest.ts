// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The origin server authentication information for a CNAME record.
   */
  authConfShrink?: string;
  /**
   * @remarks
   * The business scenario when record acceleration is enabled. This parameter is not required for records without acceleration enabled. Valid values:
   * - **video_image**: Video and image.
   * - **api**: API.
   * - **web**: Web page.
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * The description of the record.
   * 
   * @example
   * This is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * The DNS information of the record. The required content for this field varies based on the record type. For more information, see <props="china">[Documentation](https://help.aliyun.com/document_detail/2708761.html)<props="intl">[Documentation](https://www.alibabacloud.com/help/doc-detail/2708761.html).
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
   * The back-to-origin host policy. This parameter takes effect when the record type is CNAME and specifies the host header policy for back-to-origin requests. Valid values:
   * 
   * - **follow_hostname**: Follows the host record.
   * - **follow_origin_domain**: Follows the origin domain name.
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
   * Specifies whether to enable proxy acceleration for the record. Only CNAME, A, and AAAA records support proxy acceleration. Valid values:
   * - **true**: Enables proxy acceleration.
   * - **false**: Disables proxy acceleration.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The ID of the record. You can obtain the ID by calling the [ListRecords](https://help.aliyun.com/document_detail/2850265.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @remarks
   * The origin server type for a CNAME record. This parameter is required when you add a CNAME record. Valid values:
   * 
   * - **OSS**: OSS origin server.
   * - **S3**: S3 origin server.
   * - **LB**: Load balancer origin server.
   * - **OP**: Origin address pool origin server.
   * - **Domain**: Common domain name origin server.
   * 
   * If this parameter is not specified or is left empty, the default value is **Domain**, which indicates a common domain name origin server.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The time-to-live (TTL) of the record, in seconds. Valid values: **30** to **86400**, or **1**. A value of 1 indicates that the TTL is automatic.
   * 
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The DNS record type. Examples include A, AAAA, CNAME, and TXT.
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
      recordId: 'RecordId',
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
      recordId: 'number',
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

