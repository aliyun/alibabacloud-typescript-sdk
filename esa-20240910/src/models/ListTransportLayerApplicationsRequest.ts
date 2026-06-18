// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransportLayerApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The match type for the host record of the Layer 4 application. The default is an exact search. Valid values:
   * 
   * - fuzzy: fuzzy search.
   * 
   * - exact: exact search.
   * 
   * - prefix: prefix search.
   * 
   * - suffix: suffix search.
   * 
   * @example
   * fuzzy
   */
  matchType?: string;
  /**
   * @remarks
   * The page number. The minimum value is 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 500.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * The host record of the Layer 4 application.
   * 
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The site ID. Call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain it.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456******
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      matchType: 'MatchType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recordName: 'RecordName',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recordName: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

