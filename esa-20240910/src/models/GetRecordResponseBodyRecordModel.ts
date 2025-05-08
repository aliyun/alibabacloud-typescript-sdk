// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRecordResponseBodyRecordModelAuthConf } from "./GetRecordResponseBodyRecordModelAuthConf";
import { GetRecordResponseBodyRecordModelData } from "./GetRecordResponseBodyRecordModelData";


export class GetRecordResponseBodyRecordModel extends $dara.Model {
  /**
   * @remarks
   * The origin authentication information of the CNAME record.
   */
  authConf?: GetRecordResponseBodyRecordModelAuthConf;
  /**
   * @remarks
   * The business scenario of the record for acceleration. Leave this parameter empty if your record is not proxied. Valid values:
   * 
   * *   **image_video**
   * *   **api**
   * *   **web**
   * 
   * @example
   * image_video
   */
  bizName?: string;
  /**
   * @remarks
   * The comments of the record.
   * 
   * @example
   * This is a comment.
   */
  comment?: string;
  /**
   * @remarks
   * The time when the record was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-10T13:30:39Z
   */
  createTime?: string;
  /**
   * @remarks
   * The DNS record information. The content returned by this parameter varies based on the record type.
   * 
   * @example
   * {"value":"1.1.1.1"}
   */
  data?: GetRecordResponseBodyRecordModelData;
  /**
   * @remarks
   * The origin host policy. This policy takes effect when the record type is CNAME. Valid values:
   * 
   * *   follow_hostname: matches the requested domain name.
   * *   follow_origin_domain: matches the origin\\"s domain name.
   * 
   * @example
   * follow_origin_domain
   */
  hostPolicy?: string;
  /**
   * @remarks
   * Indicates whether the record is proxied. Only CNAME and A/AAAA records can be proxied. Valid values:
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
   * The CNAME. If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured then.
   * 
   * @example
   * a.example.com.cnamezone.com
   */
  recordCname?: string;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @remarks
   * The record name.
   * 
   * @example
   * a.example.com
   */
  recordName?: string;
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
   * If you do not pass this parameter or if you leave its value empty, Domain is returned by default.
   * 
   * @example
   * OSS
   */
  recordSourceType?: string;
  /**
   * @remarks
   * The type of the DNS record, such as **A/AAAA, CNAME, and TXT**.
   * 
   * @example
   * A/AAAA
   */
  recordType?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The website name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
   * 
   * @example
   * 20
   */
  ttl?: number;
  /**
   * @remarks
   * The time when the record was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-27T02:26:22Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      authConf: 'AuthConf',
      bizName: 'BizName',
      comment: 'Comment',
      createTime: 'CreateTime',
      data: 'Data',
      hostPolicy: 'HostPolicy',
      proxied: 'Proxied',
      recordCname: 'RecordCname',
      recordId: 'RecordId',
      recordName: 'RecordName',
      recordSourceType: 'RecordSourceType',
      recordType: 'RecordType',
      siteId: 'SiteId',
      siteName: 'SiteName',
      ttl: 'Ttl',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConf: GetRecordResponseBodyRecordModelAuthConf,
      bizName: 'string',
      comment: 'string',
      createTime: 'string',
      data: GetRecordResponseBodyRecordModelData,
      hostPolicy: 'string',
      proxied: 'boolean',
      recordCname: 'string',
      recordId: 'number',
      recordName: 'string',
      recordSourceType: 'string',
      recordType: 'string',
      siteId: 'number',
      siteName: 'string',
      ttl: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.authConf && typeof (this.authConf as any).validate === 'function') {
      (this.authConf as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

