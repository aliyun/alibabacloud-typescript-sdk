// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransportLayerApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The query type for the host record of Layer 4 applications. The following four types are supported, and the default is exact match.
   * 
   * - fuzzy: Fuzzy match.
   * - exact: Exact match.
   * - prefix: Prefix match.
   * - suffix: Suffix match.
   * 
   * @example
   * fuzzy
   */
  matchType?: string;
  /**
   * @remarks
   * The page number for paginated queries. The value must be greater than or equal to 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paginated queries. Valid values: 1-500.
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
   * Site ID. You can obtain it by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
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

