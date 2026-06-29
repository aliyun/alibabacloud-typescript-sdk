// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeResourcePermissionRequestRevokeCommandResourceList extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * odps.300002102.beginner_test.amin_table
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeResourcePermissionRequestRevokeCommand extends $dara.Model {
  /**
   * @remarks
   * The list of operations.
   */
  operateList?: string[];
  /**
   * @remarks
   * The reason for revoking the authorization.
   * 
   * @example
   * xx
   */
  reason?: string;
  /**
   * @remarks
   * The list of resources.
   * 
   * This parameter is required.
   */
  resourceList?: RevokeResourcePermissionRequestRevokeCommandResourceList[];
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
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 13131
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      operateList: 'OperateList',
      reason: 'Reason',
      resourceList: 'ResourceList',
      resourceType: 'ResourceType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateList: { 'type': 'array', 'itemType': 'string' },
      reason: 'string',
      resourceList: { 'type': 'array', 'itemType': RevokeResourcePermissionRequestRevokeCommandResourceList },
      resourceType: 'string',
      userId: 'string',
    };
  }

  validate() {
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

export class RevokeResourcePermissionRequest extends $dara.Model {
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
   * The authorization revocation request.
   * 
   * This parameter is required.
   */
  revokeCommand?: RevokeResourcePermissionRequestRevokeCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      revokeCommand: 'RevokeCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      revokeCommand: RevokeResourcePermissionRequestRevokeCommand,
    };
  }

  validate() {
    if(this.revokeCommand && typeof (this.revokeCommand as any).validate === 'function') {
      (this.revokeCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

