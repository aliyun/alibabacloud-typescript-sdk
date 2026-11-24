// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp16qstyvxj9gpqw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The index of the physical network card specified for the ENI.
   * 
   * > The valid values of NetworkCardIndex depend on the instance family. If the instance type does not support NetworkCard, this parameter cannot be specified. If it is supported, see [Instance families](https://help.aliyun.com/document_detail/25378.html) for valid values.
   * 
   * @example
   * 0
   */
  networkCardIndex?: number;
  /**
   * @remarks
   * The ID of the Elastic Network Interface (ENI) network interface controller (NIC).
   * 
   * This parameter is required.
   * 
   * @example
   * eni-bp17pdijfczax1huji****
   */
  networkInterfaceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the trunk ENI.
   * > This parameter is not available.
   * 
   * @example
   * eni-f8zapqwj1v1j4ia3****
   */
  trunkNetworkInstanceId?: string;
  /**
   * @remarks
   * > **[Deprecated]**
   * 
   * @example
   * null
   */
  waitForNetworkConfigurationReady?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkCardIndex: 'NetworkCardIndex',
      networkInterfaceId: 'NetworkInterfaceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trunkNetworkInstanceId: 'TrunkNetworkInstanceId',
      waitForNetworkConfigurationReady: 'WaitForNetworkConfigurationReady',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkCardIndex: 'number',
      networkInterfaceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trunkNetworkInstanceId: 'string',
      waitForNetworkConfigurationReady: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

