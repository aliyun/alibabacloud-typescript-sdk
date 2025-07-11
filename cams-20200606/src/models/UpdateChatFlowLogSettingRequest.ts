// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChatFlowLogSettingRequest extends $dara.Model {
  /**
   * @remarks
   * Flow code.
   * 
   * @example
   * f4912c16943b4dfba44bd6fedacf****
   */
  flowCode?: string;
  /**
   * @remarks
   * Setting ID.
   * 
   * @example
   * 100
   */
  id?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Log enable status, enum values:
   * - ENABLED: Enabled, enables log writing
   * - DISABLED: Create or retain related resources, but do not enable log writing
   * - DELETED: Delete, and decide whether to delete related resources based on options
   * 
   * @example
   * ENABLED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      flowCode: 'FlowCode',
      id: 'Id',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowCode: 'string',
      id: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

