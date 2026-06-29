// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantResourcePermissionRequestGrantCommandResourceList extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * hadoop.300000806.data_distill.behavior_gameinfor_01
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

export class GrantResourcePermissionRequestGrantCommand extends $dara.Model {
  /**
   * @remarks
   * The expiration timestamp, in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1717343597000
   */
  effectiveEnd?: string;
  /**
   * @remarks
   * The operation types.
   * 
   * This parameter is required.
   */
  operateList?: string[];
  /**
   * @remarks
   * The reason for the authorization.
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
  resourceList?: GrantResourcePermissionRequestGrantCommandResourceList[];
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
   * The authorized users pending authorization.
   * 
   * This parameter is required.
   */
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      effectiveEnd: 'EffectiveEnd',
      operateList: 'OperateList',
      reason: 'Reason',
      resourceList: 'ResourceList',
      resourceType: 'ResourceType',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveEnd: 'string',
      operateList: { 'type': 'array', 'itemType': 'string' },
      reason: 'string',
      resourceList: { 'type': 'array', 'itemType': GrantResourcePermissionRequestGrantCommandResourceList },
      resourceType: 'string',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.operateList)) {
      $dara.Model.validateArray(this.operateList);
    }
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    if(Array.isArray(this.userIdList)) {
      $dara.Model.validateArray(this.userIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantResourcePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The grant request.
   * 
   * This parameter is required.
   */
  grantCommand?: GrantResourcePermissionRequestGrantCommand;
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
      grantCommand: 'GrantCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantCommand: GrantResourcePermissionRequestGrantCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.grantCommand && typeof (this.grantCommand as any).validate === 'function') {
      (this.grantCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

