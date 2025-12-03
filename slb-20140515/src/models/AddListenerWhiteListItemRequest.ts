// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddListenerWhiteListItemRequest extends $dara.Model {
  /**
   * @remarks
   * The frontend port that is used by the CLB instance.
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
   * lb-bp1o94dp5i6ea*******
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP addresses or CIDR blocks that you want to add to the whitelist.
   * 
   * This parameter takes effect when the **AccessControlStatus** parameter of the listener is set to **open_white_list**.
   * 
   * Separate multiple IP addresses or CIDR blocks with commas (,).
   * 
   * You cannot enter **0.0.0.0** or **0.0.0.0/0**. To disable access control, you can call the [SetListenerAccessControlStatus](https://help.aliyun.com/document_detail/27599.html) operation to set the value of the **AccessControlStatus** parameter to **close**.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceItems?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceItems: 'SourceItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceItems: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

