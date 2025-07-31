// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceWithConfigRequestListQuery extends $dara.Model {
  /**
   * @example
   * vcns-test
   */
  name?: string;
  ownerList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  scopeList?: string[];
  tag?: string;
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
   * This parameter is required.
   */
  listQuery?: ListDataSourceWithConfigRequestListQuery;
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

