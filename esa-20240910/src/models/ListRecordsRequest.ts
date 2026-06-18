// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The business scenario for acceleration. Use this parameter to filter results. Valid values:
   * 
   * - **image_video**: Images and videos.
   * 
   * - **api**: API.
   * 
   * - **web**: Web page.
   * 
   * @example
   * web
   */
  bizName?: string;
  customPort?: string;
  /**
   * @remarks
   * The page number. Defaults to **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Defaults to **500**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters the results based on whether the record is proxied. Valid values:
   * 
   * - **true**: The record is proxied.
   * 
   * - **false**: The record is not proxied.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * The match type for the record name search. Defaults to **exact**. Valid values:
   * 
   * - **prefix**: Prefix match.
   * 
   * - **suffix**: Suffix match.
   * 
   * - **exact**: Exact match.
   * 
   * - **fuzzy**: Fuzzy match.
   * 
   * @example
   * fuzzy
   */
  recordMatchType?: string;
  /**
   * @remarks
   * The record name. Use this parameter to filter query results.
   * 
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The site ID. You can get this ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * Filters the results by the record\\"s origin type. This filter applies only to CNAME records. Valid values:
   * 
   * - **OSS**: OSS origin.
   * 
   * - **S3**: S3 origin.
   * 
   * - **LB**: Load balancer origin.
   * 
   * - **OP**: Origin pool.
   * 
   * - **Domain**: Domain origin.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The DNS record type. Use this parameter to filter results.
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

