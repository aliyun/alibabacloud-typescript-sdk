// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityClassifyRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The data level ID.
   * 
   * @example
   * 1
   */
  levelIndex?: number;
  /**
   * @remarks
   * The classification name. Fuzzy match is supported.
   * 
   * @example
   * Personal Information
   */
  name?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of effective statuses. Valid values: ENABLE, DISABLE.
   * 
   * @example
   * ["ENABLE"]
   */
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      levelIndex: 'LevelIndex',
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelIndex: 'number',
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityClassifyRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions.
   */
  listQuery?: ListSecurityClassifyRequestListQuery;
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
      listQuery: ListSecurityClassifyRequestListQuery,
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

