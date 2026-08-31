// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataAssetsGovernObjectStatusRequestUpdateCommand extends $dara.Model {
  alertOwners?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  governObjectIds?: number[];
  /**
   * @example
   * 问题已修复
   */
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FINISHED
   */
  targetStatus?: string;
  static names(): { [key: string]: string } {
    return {
      alertOwners: 'AlertOwners',
      governObjectIds: 'GovernObjectIds',
      remark: 'Remark',
      targetStatus: 'TargetStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertOwners: 'boolean',
      governObjectIds: { 'type': 'array', 'itemType': 'number' },
      remark: 'string',
      targetStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.governObjectIds)) {
      $dara.Model.validateArray(this.governObjectIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataAssetsGovernObjectStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateDataAssetsGovernObjectStatusRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      updateCommand: UpdateDataAssetsGovernObjectStatusRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

