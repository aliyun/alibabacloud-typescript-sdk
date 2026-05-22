// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The origin authentication information of the CNAME record.
   */
  authConfShrink?: string;
  /**
   * @remarks
   * The business scenario of the record for acceleration. Leave the parameter empty if your record is not proxied. Valid values:
   * 
   * *   **image_video**: video and image.
   * *   **api**: API.
   * *   **web**: web page.
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * The comment of the record. The maximum length is 100 characters.
   * 
   * @example
   * This is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * The DNS record information. The format of this field varies based on the record type. For more information, see [References](https://www.alibabacloud.com/help/doc-detail/2708761.html) .
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
   * The origin host policy. This policy takes effect when the record type is CNAME. You can set the policy in two modes:
   * 
   * *   follow_hostname: Follow the host record.
   * *   follow_origin_domain: match the origin\\"s domain name.
   * 
   * @example
   * follow_origin_domain
   */
  hostPolicy?: string;
  /**
   * @remarks
   * Specifies whether to proxy the record. Only CNAME and A/AAAA records can be proxied. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The origin type for the CNAME record. This parameter is required when you add a CNAME record. Valid values:
   * 
   * *   **OSS**: OSS bucket.
   * *   **S3**: S3 bucket.
   * *   **LB**: load balancer.
   * *   **OP**: origin pool.
   * *   **Domain**: domain name.
   * 
   * If you do not pass this parameter or if you leave its value empty, Domain is used by default.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record. For example, A/AAAA, TXT, MX, or CNAME.
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

