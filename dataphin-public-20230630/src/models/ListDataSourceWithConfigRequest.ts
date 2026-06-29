// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceWithConfigRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * Data source name
   * 
   * @example
   * vcns-test
   */
  name?: string;
  /**
   * @remarks
   * Data source owner
   */
  ownerList?: string[];
  /**
   * @remarks
   * Page number. The value starts from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Number of records per page
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Data source scope. Valid values:
   * - STREAMING: Real-time
   * - OFFLINE: Offline
   * - DIP_META_SYNC: Meta warehouse initialization
   * - DATA_DISTILL: Data distillation
   * - CUMPUTE_SOURCE_SHADOW: Shadow compute source
   * - LABEL: Label
   * - ALL: Offline + Real-time
   */
  scopeList?: string[];
  /**
   * @remarks
   * Tag marked when creating the data source
   * 
   * @example
   * xx测试
   */
  tag?: string;
  /**
   * @remarks
   * Data source type
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
   * Paginated query
   * 
   * This parameter is required.
   */
  listQuery?: ListDataSourceWithConfigRequestListQuery;
  /**
   * @remarks
   * Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListDataSourceWithConfigRequestListQuery,
      opTenantId: 'number',
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

