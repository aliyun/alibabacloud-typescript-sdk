// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The business scenario of the record for acceleration. Valid values:
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
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **500**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters by whether the record is proxied. Valid values:
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
   * The match mode to search for the record name. Default value: exact. Valid values:
   * 
   * *   **prefix**: match by prefix.
   * *   **suffix**: match by suffix.
   * *   **exact**: exact match.
   * *   **fuzzy**: fuzzy match.
   * 
   * @example
   * fuzzy
   */
  recordMatchType?: string;
  /**
   * @remarks
   * The record name. This parameter specifies a filter condition for the query.
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
   * The origin type of the record. Only CNAME records can be filtered by using this field. Valid values:
   * 
   * *   **OSS**: OSS bucket.
   * *   **S3**: S3 bucket.
   * *   **LB**: load balancer.
   * *   **OP**: origin pool.
   * *   **Domain**: domain name.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The DNS record type.
   * 
   * @example
   * CNAME
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      proxied: 'Proxied',
      recordMatchType: 'RecordMatchType',
      recordName: 'RecordName',
      siteId: 'SiteId',
      sourceType: 'SourceType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      proxied: 'boolean',
      recordMatchType: 'string',
      recordName: 'string',
      siteId: 'number',
      sourceType: 'string',
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

