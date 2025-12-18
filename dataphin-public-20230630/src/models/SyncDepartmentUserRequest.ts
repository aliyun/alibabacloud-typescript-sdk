// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncDepartmentUserRequestSyncDepartmentUserCommandDeptUserMapping extends $dara.Model {
  departmentIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30000001
   */
  sourceUserId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentIdList: 'DepartmentIdList',
      sourceUserId: 'SourceUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentIdList: { 'type': 'array', 'itemType': 'string' },
      sourceUserId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.departmentIdList)) {
      $dara.Model.validateArray(this.departmentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDepartmentUserRequestSyncDepartmentUserCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deptUserMapping?: SyncDepartmentUserRequestSyncDepartmentUserCommandDeptUserMapping[];
  static names(): { [key: string]: string } {
    return {
      deptUserMapping: 'DeptUserMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptUserMapping: { 'type': 'array', 'itemType': SyncDepartmentUserRequestSyncDepartmentUserCommandDeptUserMapping },
    };
  }

  validate() {
    if(Array.isArray(this.deptUserMapping)) {
      $dara.Model.validateArray(this.deptUserMapping);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDepartmentUserRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  syncDepartmentUserCommand?: SyncDepartmentUserRequestSyncDepartmentUserCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      syncDepartmentUserCommand: 'SyncDepartmentUserCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      syncDepartmentUserCommand: SyncDepartmentUserRequestSyncDepartmentUserCommand,
    };
  }

  validate() {
    if(this.syncDepartmentUserCommand && typeof (this.syncDepartmentUserCommand as any).validate === 'function') {
      (this.syncDepartmentUserCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

