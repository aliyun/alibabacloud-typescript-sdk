// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataDomainsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The IDs of the business units to which the data domains belong.
   */
  bizUnitIdList?: number[];
  /**
   * @remarks
   * The search keyword. You can search by data domain name, code, or description.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The IDs of the parent data domains.
   */
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
   * The query request.
   * 
   * This parameter is required.
   */
  listQuery?: ListDataDomainsRequestListQuery;
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

