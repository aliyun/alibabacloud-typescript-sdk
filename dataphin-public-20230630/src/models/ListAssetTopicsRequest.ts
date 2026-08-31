// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetTopicsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The asset type. Valid values: TABLE, INDEX, API, DASHBOARD.
   * 
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  assetType?: string;
  /**
   * @remarks
   * The keyword for the topic name. Maximum length: 256 characters.
   * 
   * @example
   * Core Metrics
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 9770420
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 50. Valid values: 1 to 200.
   * 
   * @example
   * 7428337
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      keyword: 'Keyword',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetTopicsRequest extends $dara.Model {
  /**
   * @remarks
   * The query parameters.
   * 
   * This parameter is required.
   */
  listQuery?: ListAssetTopicsRequestListQuery;
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
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListAssetTopicsRequestListQuery,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.listQuery && typeof (this.listQuery as any).validate === 'function') {
      (this.listQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

