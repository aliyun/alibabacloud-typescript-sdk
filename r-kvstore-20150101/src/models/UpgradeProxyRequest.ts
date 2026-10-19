// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1vgja77wl7pb****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The IDs of the proxy nodes to upgrade, separated by commas (,). This parameter is valid only for Classic Edition instances.
   * 
   * @example
   * r-bp1vgja77wl7pb****-proxy-0
   */
  proxyInstanceIds?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The time when the upgrade is performed. Valid values:
   * 
   * * **Immediately**: The upgrade is immediately performed. This is the default value.
   * * **MaintainTime**: The upgrade is performed within the O&M window of the instance.
   * 
   * > You can call [ModifyInstanceMaintainTime](https://help.aliyun.com/document_detail/473775.html) to modify the O&M window of a Redis instance.
   * 
   * @example
   * Immediately
   */
  switchTimeMode?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      proxyInstanceIds: 'ProxyInstanceIds',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      switchTimeMode: 'SwitchTimeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      proxyInstanceIds: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      switchTimeMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

