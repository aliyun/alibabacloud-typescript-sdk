// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetListenerAccessControlStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the whitelist. Valid values:
   * 
   * *   **open_white_list**: enables the whitelist.
   * *   **close**: disables the whitelist.
   * 
   * >  After the whitelist is enabled, if no IP address is added to the whitelist, the CLB instance does not distribute network traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * open_white_list
   */
  accessControlStatus?: string;
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
   * 
   * Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the CLB instance.
   * 
   * >  This parameter is required when listeners that use different protocols listen on the same port.
   * 
   * @example
   * https
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-8vb86hxixo8lvsja8****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the Classic Load Balancer (CLB) instance is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessControlStatus: 'AccessControlStatus',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlStatus: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

