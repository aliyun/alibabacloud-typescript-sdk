// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCatalogAssetsRequestListCatalogAssetsQuery extends $dara.Model {
  /**
   * @remarks
   * The asset type. Default value: TABLE. Valid values:
   * - TABLE: table, including views and materialized views.
   * - INDEX: technical metric.
   * - BIZ_INDEX: business metric.
   * - API: API.
   * - PAGE: dashboard.
   * 
   * @example
   * TABLE
   */
  assetType?: string;
  /**
   * @remarks
   * The search keyword. Used when queryMode is set to ASSET_SEARCH. Supports keyword matching against the asset full name, asset name, asset display name, and asset description. If this parameter is not specified, all assets are queried.
   * 
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @remarks
   * The asset name. Used when queryMode is set to EXACT_MATCH. If this parameter is not specified, all assets are queried.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The page size. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query type. Determines whether to use name for exact matching or keyword for fuzzy search. Default value: EXACT_MATCH. Valid values:
   * - EXACT_MATCH: exact match.
   * - ASSET_SEARCH: fuzzy search.
   * 
   * @example
   * EXACT_MATCH
   */
  queryMode?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      keyword: 'Keyword',
      name: 'Name',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryMode: 'QueryMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      keyword: 'string',
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      queryMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCatalogAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The query parameters.
   * 
   * This parameter is required.
   */
  listCatalogAssetsQuery?: ListCatalogAssetsRequestListCatalogAssetsQuery;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listCatalogAssetsQuery: 'ListCatalogAssetsQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listCatalogAssetsQuery: ListCatalogAssetsRequestListCatalogAssetsQuery,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.listCatalogAssetsQuery && typeof (this.listCatalogAssetsQuery as any).validate === 'function') {
      (this.listCatalogAssetsQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

