// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceMajorVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the upgrade is executed. Valid values:
   * * **Immediately**: The upgrade is executed immediately. This is the default value.
   * * **MaintainTime**: The upgrade is executed during the maintenance window.
   * 
   * > You can call the [ModifyInstanceMaintainTime](https://help.aliyun.com/document_detail/473775.html) operation to modify the maintenance window of the instance.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The target major version for the instance upgrade.
   * - For cloud-native instances, valid values are 6.0 and 7.0.
   * - For classic instances, valid values are 4.0 (not recommended) and 5.0.
   * > Only upgrades to the same deployment mode are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.0
   */
  majorVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
      instanceId: 'InstanceId',
      majorVersion: 'MajorVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: 'string',
      instanceId: 'string',
      majorVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

