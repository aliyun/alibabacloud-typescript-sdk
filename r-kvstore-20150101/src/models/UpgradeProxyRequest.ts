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
   * The IDs of the proxy nodes that you want to update. Separate multiple IDs with commas (,). This parameter is valid only for Redis Open-Source Edition classic instances.
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
   * The time to execute the specification change. Valid values:
   * 
   * *   **Immediately** (default): immediately executes the change.
   * *   **MaintainTime**: executes the change during the maintenance window of the instance.
   * 
   * > You can call the [ModifyInstanceMaintainTime](https://help.aliyun.com/document_detail/61000.html) operation to modify the maintenance window of an instance.
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

