// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCatalogAssetsRequestListCatalogAssetsQuery extends $dara.Model {
  /**
   * @example
   * TABLE
   */
  assetType?: string;
  /**
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @example
   * abc
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * This parameter is required.
   */
  listCatalogAssetsQuery?: ListCatalogAssetsRequestListCatalogAssetsQuery;
  /**
   * @remarks
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

