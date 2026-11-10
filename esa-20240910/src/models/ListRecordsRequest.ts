// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The business scenario for record acceleration. This parameter is used as a filter condition for the query. Valid values:
   * - **image_video**: images and videos
   * - **api**: APIs
   * - **web**: web pages
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * Specifies whether a custom port is enabled for the record. Valid values:
   * 
   * - on: enabled
   * - off: disabled
   * 
   * @example
   * off
   */
  customPort?: string;
  /**
   * @remarks
   * The page number for paging. The value must be greater than or equal to 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging. Valid values: 1 to 500. Default value: **500**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether proxy acceleration is enabled for the record. This parameter is used as a filter condition for the query. Valid values:
   * 
   * - **true**: Proxy acceleration is enabled.
   * - **false**: Proxy acceleration is disabled.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The search match mode for the record name. Default value: exact. Valid values:
   * 
   * - **prefix**: prefix match
   * - **suffix**: suffix match
   * - **exact**: exact match
   * - **fuzzy**: fuzzy match
   * 
   * @example
   * fuzzy
   */
  recordMatchType?: string;
  /**
   * @remarks
   * The record name. This parameter is used as a filter condition for the query.
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
   * The origin server type of the record. This parameter is used as a filter condition for the query. Only CNAME records can be filtered by this field. Valid values:
   * - **OSS**: OSS origin server
   * - **S3**: S3 origin server
   * - **LB**: load balancing origin server
   * - **OP**: IPAM pool origin server
   * - **Domain**: regular domain name origin server
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The DNS record type of the record. This parameter is used as a filter condition for the query.
   * 
   * @example
   * CNAME
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      customPort: 'CustomPort',
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
      customPort: 'string',
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

