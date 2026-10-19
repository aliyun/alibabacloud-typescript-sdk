// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The retention period of the classic network connectivity endpoint. Valid values: **14**, **30**, **60**, and **120**. Unit: days.
   * 
   * > * This parameter is active and required only when **RetainClassic** is set to **True**.
   * > * After the switchover is complete, you can invoke [ModifyInstanceNetExpireTime](https://help.aliyun.com/document_detail/473793.html) to modify the retention period of the classic network connectivity endpoint.
   * 
   * @example
   * 30
   */
  classicExpiredDays?: string;
  /**
   * @remarks
   * The instance ID. You can call [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) to query the instance ID.
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
  /**
   * @remarks
   * Specifies whether to retain the classic network connectivity endpoint when you switch the instance from the classic network to a VPC. Valid values:
   * * **True**: The classic network endpoint is retained.
   * * **False**: The classic network endpoint is not retained. This is the default value.
   * 
   * > This parameter is active only when the network type of the instance is classic network.
   * 
   * @example
   * True
   */
  retainClassic?: string;
  securityToken?: string;
  /**
   * @remarks
   * The network type to which you want to switch. Set the value to **VPC**.
   * 
   * @example
   * VPC
   */
  targetNetworkType?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the destination VPC. You can call [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) to query vSwitch IDs.
   * > The vSwitch must be in the same zone as the instance.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which you want to switch. You can call [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) to query VPC IDs.
   * 
   * > * The VPC must be in the same region as the instance.
   * > * After you specify this parameter, you must also specify the **VSwitchId** parameter.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      classicExpiredDays: 'ClassicExpiredDays',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retainClassic: 'RetainClassic',
      securityToken: 'SecurityToken',
      targetNetworkType: 'TargetNetworkType',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classicExpiredDays: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retainClassic: 'string',
      securityToken: 'string',
      targetNetworkType: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

