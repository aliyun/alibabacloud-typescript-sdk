// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataAssetsGovernObjectStatusRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to notify the owner. This parameter takes effect only when the status is reverted to NEW.
   */
  alertOwners?: boolean;
  /**
   * @remarks
   * The list of governance object IDs.
   * 
   * This parameter is required.
   */
  governObjectIds?: number[];
  /**
   * @remarks
   * The operation description.
   * 
   * @example
   * Issue fixed
   */
  remark?: string;
  /**
   * @remarks
   * The target status. Valid values: FINISHED / NEW / IGNORE / CANCEL_IGNORE.
   * 
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
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The update command.
   * 
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

