// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeLindormV2StreamEngineRequest extends $dara.Model {
  customConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  quantity?: number;
  resourceGroupName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  specId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  upgradeType?: string;
  static names(): { [key: string]: string } {
    return {
      customConfig: 'CustomConfig',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      quantity: 'Quantity',
      resourceGroupName: 'ResourceGroupName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      spec: 'Spec',
      specId: 'SpecId',
      upgradeType: 'UpgradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customConfig: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      quantity: 'number',
      resourceGroupName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      spec: 'string',
      specId: 'string',
      upgradeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

