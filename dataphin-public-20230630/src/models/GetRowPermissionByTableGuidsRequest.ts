// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRowPermissionByTableGuidsRequestGetRowPermissionByTableGuidsQuery extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  tableGuids?: string[];
  static names(): { [key: string]: string } {
    return {
      tableGuids: 'TableGuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableGuids)) {
      $dara.Model.validateArray(this.tableGuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRowPermissionByTableGuidsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  getRowPermissionByTableGuidsQuery?: GetRowPermissionByTableGuidsRequestGetRowPermissionByTableGuidsQuery;
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
      getRowPermissionByTableGuidsQuery: 'GetRowPermissionByTableGuidsQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getRowPermissionByTableGuidsQuery: GetRowPermissionByTableGuidsRequestGetRowPermissionByTableGuidsQuery,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.getRowPermissionByTableGuidsQuery && typeof (this.getRowPermissionByTableGuidsQuery as any).validate === 'function') {
      (this.getRowPermissionByTableGuidsQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

