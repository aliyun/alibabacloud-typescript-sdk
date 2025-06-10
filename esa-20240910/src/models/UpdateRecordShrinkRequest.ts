// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The origin authentication information of the CNAME record.
   */
  authConfShrink?: string;
  /**
   * @remarks
   * The business scenario of the record for acceleration. Leave the parameter empty if your record is not proxied. Valid values:
   * 
   * *   **video_image**: video and image.
   * *   **api**: API.
   * *   **web**: web page.
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * The comments of the record.
   * 
   * @example
   * This is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * The DNS record information. The format of this field varies based on the record type. For more information, see [Add DNS records](https://www.alibabacloud.com/help/doc-detail/2708761.html).
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
   * *   **follow_hostname**: match the requested domain name.
   * *   **follow_origin_domain**: match the origin\\"s domain name.
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
   * The record ID, which can be obtained by calling [ListRecords](https://help.aliyun.com/document_detail/2850265.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @remarks
   * The type of the origin for the CNAME record. This parameter is required when you add a CNAME record. Valid values:
   * 
   * *   **OSS** : OSS origin.
   * *   **S3** : S3 origin.
   * *   **LB**: Load Balancer origin.
   * *   **OP**: origin in an origin pool.
   * *   **Domain**: common domain name.
   * 
   * If you leave the parameter empty or set its value as null, the default is Domain, which is common domain name.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The TTL of the record. Unit: seconds. The range is 30 to 86,400, or 1. If the value is 1, the TTL of the record is determined by the system.
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

