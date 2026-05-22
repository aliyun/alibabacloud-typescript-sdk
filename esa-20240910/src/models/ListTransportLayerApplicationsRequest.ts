// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransportLayerApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * Query type for the transport layer application host record, supporting the following 4 types, with exact query as the default.
   * 
   * - fuzzy: Fuzzy query.
   * - exact: Exact query.
   * - prefix: Prefix match query.
   * - suffix: Suffix match query.
   * 
   * @example
   * fuzzy
   */
  matchType?: string;
  /**
   * @remarks
   * Page number set for pagination. Starting value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size. The maximum value is 500.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * Host record of the transport layer application.
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

