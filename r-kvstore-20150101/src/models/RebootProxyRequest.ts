// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1ymwrhvq79zj****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The IDs of the proxy nodes that you want to restart or rebuild. Separate multiple IDs with commas (,).
   * 
   * @example
   * 90310144,90310144
   */
  proxyList?: string;
  /**
   * @remarks
   * The IDs of the hosts on which the proxy nodes are deployed. Separate multiple IDs with commas (,).
   * 
   * @example
   * 36912280,36912282
   */
  proxyNodeList?: string;
  /**
   * @remarks
   * The type of operation that you want to perform. Valid values:
   * 
   * *   **reboot**: restarts the proxy node.
   * *   **rebuild**: rebuilds the proxy node.
   * 
   * @example
   * reboot
   */
  rebootMode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      proxyList: 'ProxyList',
      proxyNodeList: 'ProxyNodeList',
      rebootMode: 'RebootMode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      proxyList: 'string',
      proxyNodeList: 'string',
      rebootMode: 'string',
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

