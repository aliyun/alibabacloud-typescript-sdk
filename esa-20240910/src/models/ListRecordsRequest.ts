// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The business scenario for record acceleration. Used as a filter condition for queries. Valid values:
   * - **image_video**: Image and video.
   * - **api**: API.
   * - **web**: Web page.
   * 
   * @example
   * web
   */
  bizName?: string;
  customPort?: string;
  /**
   * @remarks
   * The page number for paginated queries. The value must be greater than or equal to 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paginated queries. Valid values: 1 to 500. Default value: **500**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether proxy acceleration is enabled for the record. Used as a filter condition for queries. Valid values:
   * 
   * - **true**: Proxy enabled.
   * - **false**: Proxy acceleration disabled.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The search matching mode for record names. Defaults to exact match. Valid values:
   * 
   * - **prefix**: Prefix match.
   * - **suffix**: Suffix match.
   * - **exact**: Exact match.
   * - **fuzzy**: Fuzzy match.
   * 
   * @example
   * fuzzy
   */
  recordMatchType?: string;
  /**
   * @remarks
   * Record name. Used as a filter condition for queries.
   * 
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The origin type of the record. Used as a filter condition for queries (only CNAME records can be filtered by this field). Valid values:
   * - **OSS**: OSS origin.
   * - **S3**: S3 origin.
   * - **LB**: Load balancer origin.
   * - **OP**: Origin pool.
   * - **Domain**: Standard domain origin.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The DNS record type of the record. Used as a filter condition for queries.
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

