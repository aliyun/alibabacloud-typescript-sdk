// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The time when you want to restart the instance. Default value: Immediately. Valid values:
   * 
   * *   **Immediately**: immediately restarts the instance.
   * *   **MaintainTime**: restarts the instance during the maintenance window.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * Specifies whether to update to the latest minor version when the instance is restarted. Valid values:
   * 
   * *   **true**: updates the minor version.
   * *   **false**: does not update the minor version.
   * 
   * > The default value is **true**.
   * 
   * @example
   * true
   */
  upgradeMinorVersion?: boolean;
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      upgradeMinorVersion: 'UpgradeMinorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      upgradeMinorVersion: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

