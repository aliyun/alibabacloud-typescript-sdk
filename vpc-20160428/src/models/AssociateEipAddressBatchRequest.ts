// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateEipAddressBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the cloud service instance to which you want to associate the EIPs.
   * 
   * You can enter the instance ID of a NAT gateway or secondary elastic network interfaces (ENIs).
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-hp3akk9irtd69jad****
   */
  bindedInstanceId?: string;
  /**
   * @remarks
   * The type of the instance to which you want to associate the EIPs. Valid values:
   * - **Nat**: NAT gateway.
   * - **NetworkInterface**: secondary elastic network interfaces (ENIs).
   * 
   * This parameter is required.
   * 
   * @example
   * Nat
   */
  bindedInstanceType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of EIPs that you want to associate with the cloud service instance.
   * 
   * You must specify at least one EIP and can specify up to 50 EIPs.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The association mode. Set the value to **MULTI_BINDED**, which indicates the multi-EIP to ENI mode.
   * 
   * This parameter is required only when **InstanceType** is set to **NetworkInterface**.
   * 
   * @example
   * MULTI_BINDED
   */
  mode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the EIPs that you want to associate with the cloud service instances.
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bindedInstanceId: 'BindedInstanceId',
      bindedInstanceType: 'BindedInstanceType',
      clientToken: 'ClientToken',
      instanceIds: 'InstanceIds',
      mode: 'Mode',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindedInstanceId: 'string',
      bindedInstanceType: 'string',
      clientToken: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

