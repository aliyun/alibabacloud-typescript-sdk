// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceWithConfigRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * vcns-test
   */
  name?: string;
  /**
   * @remarks
   * The owners of the data sources.
   */
  ownerList?: string[];
  /**
   * @remarks
   * The page number. The starting page is 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The usage scopes of the data sources. Valid values:
   * - STREAMING: Real-time.
   * - OFFLINE: Offline.
   * - DIP_META_SYNC: Metadata warehouse initialization.
   * - DATA_DISTILL: Data distillation.
   * - CUMPUTE_SOURCE_SHADOW: Shadow compute source.
   * - LABEL: Label.
   * - ALL: Offline and real-time.
   */
  scopeList?: string[];
  /**
   * @remarks
   * The tag specified during data source creation.
   * 
   * @example
   * xx test
   */
  tag?: string;
  /**
   * @remarks
   * The data source types.
   */
  typeList?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ownerList: 'OwnerList',
      page: 'Page',
      pageSize: 'PageSize',
      scopeList: 'ScopeList',
      tag: 'Tag',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ownerList: { 'type': 'array', 'itemType': 'string' },
      page: 'number',
      pageSize: 'number',
      scopeList: { 'type': 'array', 'itemType': 'string' },
      tag: 'string',
      typeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ownerList)) {
      $dara.Model.validateArray(this.ownerList);
    }
    if(Array.isArray(this.scopeList)) {
      $dara.Model.validateArray(this.scopeList);
    }
    if(Array.isArray(this.typeList)) {
      $dara.Model.validateArray(this.typeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceWithConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The paged query parameters.
   * 
   * This parameter is required.
   */
  listQuery?: ListDataSourceWithConfigRequestListQuery;
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
   * The operator user ID.
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
      listQuery: ListDataSourceWithConfigRequestListQuery,
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

