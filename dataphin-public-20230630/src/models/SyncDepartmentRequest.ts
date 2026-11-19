// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncDepartmentRequestSyncDepartmentCommandDepartmentList extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the department.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  departmentId?: string;
  /**
   * @remarks
   * The display name of the department.
   * 
   * This parameter is required.
   * 
   * @example
   * R&D Center
   */
  departmentName?: string;
  /**
   * @remarks
   * The unique identifier of the parent department. If the department has no parent, the value is null.
   * 
   * @example
   * 10001
   */
  parentDepartmentId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
      parentDepartmentId: 'ParentDepartmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      departmentName: 'string',
      parentDepartmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDepartmentRequestSyncDepartmentCommand extends $dara.Model {
  /**
   * @remarks
   * The department list (full organization tree).
   * 
   * This parameter is required.
   */
  departmentList?: SyncDepartmentRequestSyncDepartmentCommandDepartmentList[];
  static names(): { [key: string]: string } {
    return {
      departmentList: 'DepartmentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentList: { 'type': 'array', 'itemType': SyncDepartmentRequestSyncDepartmentCommandDepartmentList },
    };
  }

  validate() {
    if(Array.isArray(this.departmentList)) {
      $dara.Model.validateArray(this.departmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDepartmentRequest extends $dara.Model {
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
  /**
   * @remarks
   * The request command.
   * 
   * This parameter is required.
   */
  syncDepartmentCommand?: SyncDepartmentRequestSyncDepartmentCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      syncDepartmentCommand: 'SyncDepartmentCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      syncDepartmentCommand: SyncDepartmentRequestSyncDepartmentCommand,
    };
  }

  validate() {
    if(this.syncDepartmentCommand && typeof (this.syncDepartmentCommand as any).validate === 'function') {
      (this.syncDepartmentCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

