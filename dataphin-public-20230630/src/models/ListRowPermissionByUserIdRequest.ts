// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRowPermissionByUserIdRequestListRowPermissionByUserIdQuery extends $dara.Model {
  /**
   * @remarks
   * The specified operator.
   * 
   * This parameter is required.
   * 
   * @example
   * 30008888
   */
  operator?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The page size.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      pageNum: 'number',
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

export class ListRowPermissionByUserIdRequest extends $dara.Model {
  /**
   * @remarks
   * The request command.
   * 
   * This parameter is required.
   */
  listRowPermissionByUserIdQuery?: ListRowPermissionByUserIdRequestListRowPermissionByUserIdQuery;
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
      listRowPermissionByUserIdQuery: 'ListRowPermissionByUserIdQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listRowPermissionByUserIdQuery: ListRowPermissionByUserIdRequestListRowPermissionByUserIdQuery,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.listRowPermissionByUserIdQuery && typeof (this.listRowPermissionByUserIdQuery as any).validate === 'function') {
      (this.listRowPermissionByUserIdQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

