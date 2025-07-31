// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResourcePermissionRequestCheckCommandResourceList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
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

export class CheckResourcePermissionRequestCheckCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UPDATE
   */
  operate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceList?: CheckResourcePermissionRequestCheckCommandResourceList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PHYSICAL_TABLE
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323231
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      operate: 'Operate',
      resourceList: 'ResourceList',
      resourceType: 'ResourceType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operate: 'string',
      resourceList: { 'type': 'array', 'itemType': CheckResourcePermissionRequestCheckCommandResourceList },
      resourceType: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourcePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  checkCommand?: CheckResourcePermissionRequestCheckCommand;
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
      checkCommand: 'CheckCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCommand: CheckResourcePermissionRequestCheckCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.checkCommand && typeof (this.checkCommand as any).validate === 'function') {
      (this.checkCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

