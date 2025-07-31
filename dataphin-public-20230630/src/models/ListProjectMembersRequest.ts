// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectMembersRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      pageNo: 'number',
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

export class ListProjectMembersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1030111021
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1030111021
   */
  listQuery?: ListProjectMembersRequestListQuery;
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
      id: 'Id',
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      listQuery: ListProjectMembersRequestListQuery,
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

