// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyResourcePermissionRequestApplyCommandGrantToUsers extends $dara.Model {
  /**
   * @remarks
   * The account type.
   * 
   * This parameter is required.
   * 
   * @example
   * PERSONAL
   */
  accountType?: string;
  /**
   * @remarks
   * The expiration date of the permission. Format: yyyy-MM-dd.
   * 
   * @example
   * 2026-12-31
   */
  periodEnd?: string;
  /**
   * @remarks
   * The type of the permission validity period.
   * 
   * @example
   * DAYS_30
   */
  periodType?: string;
  /**
   * @remarks
   * The project ID of the production account. This parameter is required when the account type is PRODUCE.
   * 
   * @example
   * 7298904510790528
   */
  projectId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 300001186
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      periodEnd: 'PeriodEnd',
      periodType: 'PeriodType',
      projectId: 'ProjectId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      periodEnd: 'string',
      periodType: 'string',
      projectId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyResourcePermissionRequestApplyCommandResourceList extends $dara.Model {
  /**
   * @remarks
   * The list of column names specified for column-level permissions. This parameter is required when the granularity is COLUMN.
   */
  columnList?: string[];
  /**
   * @remarks
   * The resource ID, which is the GUID of the table metadata.
   * 
   * This parameter is required.
   * 
   * @example
   * dp_ds_table_xxx
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnList)) {
      $dara.Model.validateArray(this.columnList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyResourcePermissionRequestApplyCommand extends $dara.Model {
  /**
   * @remarks
   * The list of users to whom permissions are granted.
   * 
   * This parameter is required.
   */
  grantToUsers?: ApplyResourcePermissionRequestApplyCommandGrantToUsers[];
  /**
   * @remarks
   * The permission granularity. Valid values: TABLE (table-level permissions) and COLUMN (column-level permissions).
   * 
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  granularity?: string;
  /**
   * @remarks
   * The list of operation types.
   * 
   * This parameter is required.
   */
  operateList?: string[];
  /**
   * @remarks
   * The reason for the application. This parameter is required and cannot be empty or contain only whitespace characters.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * The list of resources for which permissions are applied.
   * 
   * This parameter is required.
   */
  resourceList?: ApplyResourcePermissionRequestApplyCommandResourceList[];
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * PHYSICAL_TABLE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      grantToUsers: 'GrantToUsers',
      granularity: 'Granularity',
      operateList: 'OperateList',
      reason: 'Reason',
      resourceList: 'ResourceList',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantToUsers: { 'type': 'array', 'itemType': ApplyResourcePermissionRequestApplyCommandGrantToUsers },
      granularity: 'string',
      operateList: { 'type': 'array', 'itemType': 'string' },
      reason: 'string',
      resourceList: { 'type': 'array', 'itemType': ApplyResourcePermissionRequestApplyCommandResourceList },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.grantToUsers)) {
      $dara.Model.validateArray(this.grantToUsers);
    }
    if(Array.isArray(this.operateList)) {
      $dara.Model.validateArray(this.operateList);
    }
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyResourcePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The permission application request.
   * 
   * This parameter is required.
   */
  applyCommand?: ApplyResourcePermissionRequestApplyCommand;
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
  static names(): { [key: string]: string } {
    return {
      applyCommand: 'ApplyCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyCommand: ApplyResourcePermissionRequestApplyCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.applyCommand && typeof (this.applyCommand as any).validate === 'function') {
      (this.applyCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

