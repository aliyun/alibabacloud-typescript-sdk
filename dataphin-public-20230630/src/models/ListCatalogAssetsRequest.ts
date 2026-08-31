// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCatalogAssetsRequestListCatalogAssetsQuery extends $dara.Model {
  /**
   * @remarks
   * The asset type. Default value: TABLE. Valid values:
   * - TABLE: tables, including views and materialized views.
   * - INDEX: technical metrics.
   * - BIZ_INDEX: business metrics.
   * - API
   * - PAGE: dashboards.
   * 
   * @example
   * TABLE
   */
  assetType?: string;
  /**
   * @remarks
   * The search keyword. Used when queryMode is set to ASSET_SEARCH. Supports keyword matching against the asset full name, asset name, asset display name, and asset description. If not specified, all assets are returned by default.
   * 
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @remarks
   * The asset name. Used when queryMode is set to EXACT_MATCH. If not specified, all assets are returned by default.
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
   * The query type. Determines whether to use name for exact match or keyword for fuzzy search. Default value: EXACT_MATCH. Valid values:
   * - EXACT_MATCH: exact match.
   * - ASSET_SEARCH: fuzzy search.
   * 
   * @example
   * EXACT_MATCH
   */
  queryMode?: string;
  /**
   * @remarks
   * The list of folder IDs to which the assets belong. Multiple folders are matched with OR logic. Only the specified folders are matched, and subfolders are not included.
   */
  shelveDirectoryIds?: number[];
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      keyword: 'Keyword',
      name: 'Name',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryMode: 'QueryMode',
      shelveDirectoryIds: 'ShelveDirectoryIds',
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
      shelveDirectoryIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.shelveDirectoryIds)) {
      $dara.Model.validateArray(this.shelveDirectoryIds);
    }
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
  /**
   * @remarks
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      listCatalogAssetsQuery: 'ListCatalogAssetsQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listCatalogAssetsQuery: ListCatalogAssetsRequestListCatalogAssetsQuery,
      opTenantId: 'number',
      opUserId: 'string',
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

