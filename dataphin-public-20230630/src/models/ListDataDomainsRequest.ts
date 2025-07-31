// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataDomainsRequestListQuery extends $dara.Model {
  bizUnitIdList?: number[];
  /**
   * @example
   * test
   */
  keyword?: string;
  parentIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      bizUnitIdList: 'BizUnitIdList',
      keyword: 'Keyword',
      parentIdList: 'ParentIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitIdList: { 'type': 'array', 'itemType': 'number' },
      keyword: 'string',
      parentIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.bizUnitIdList)) {
      $dara.Model.validateArray(this.bizUnitIdList);
    }
    if(Array.isArray(this.parentIdList)) {
      $dara.Model.validateArray(this.parentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListDataDomainsRequestListQuery;
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
      listQuery: ListDataDomainsRequestListQuery,
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

