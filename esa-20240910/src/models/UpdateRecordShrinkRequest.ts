// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The origin authentication settings for the CNAME record.
   */
  authConfShrink?: string;
  /**
   * @remarks
   * The use case for proxy acceleration. Omit this parameter if proxy acceleration is disabled. Valid values:
   * 
   * - **video_image**: Video and images.
   * 
   * - **api**: APIs.
   * 
   * - **web**: Web pages.
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * A comment for the record.
   * 
   * @example
   * This is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * The DNS data for the record. The required content varies based on the record type. For more information, see <props="china">[Documentation](https://help.aliyun.com/document_detail/2708761.html)<props="intl">[Documentation](https://www.alibabacloud.com/help/doc-detail/2708761.html).
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
   * The origin HOST policy. This policy, which applies only to CNAME records, determines the value of the `HOST` header in requests sent to the origin. Valid values:
   * 
   * - **follow_hostname**: Follows the host record.
   * 
   * - **follow_origin_domain**: Follows the origin domain name.
   * 
   * @example
   * follow_origin_domain
   */
  hostPolicy?: string;
  httpPorts?: string;
  httpsPorts?: string;
  /**
   * @remarks
   * Indicates whether to enable proxy acceleration for the record. Only CNAME and A/AAAA records support proxy acceleration. Valid values:
   * 
   * - **true**: Enables proxy acceleration.
   * 
   * - **false**: Disables proxy acceleration.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The record ID. Call the [ListRecords](https://help.aliyun.com/document_detail/2850265.html) operation to get this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @remarks
   * The origin type for the CNAME record. This parameter is required for CNAME records. Valid values:
   * 
   * - **OSS**: An OSS origin.
   * 
   * - **S3**: An S3 origin.
   * 
   * - **LB**: A load balancer origin.
   * 
   * - **OP**: An origin address pool origin.
   * 
   * - **Domain**: A standard domain name origin.
   * 
   * If this parameter is omitted or left empty, the default value is `Domain`.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The record\\"s time to live (TTL) in seconds. The value must be an integer from **30 to 86400** or 1. A value of 1 sets the TTL to automatic.
   * 
   * @example
   * 30
   */
  ttl?: number;
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

