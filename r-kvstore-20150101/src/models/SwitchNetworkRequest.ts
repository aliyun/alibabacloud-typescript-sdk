// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The retention period of the classic network endpoint. Valid values: **14**, **30**, **60**, and **120**. Unit: days.
   * 
   * > * This parameter is active and required only when **RetainClassic** is set to **True**.
   * > * After the switchover is complete, you can call the [ModifyInstanceNetExpireTime](https://help.aliyun.com/document_detail/473793.html) operation to change the retention period of the classic network endpoint.
   * 
   * @example
   * 30
   */
  classicExpiredDays?: string;
  /**
   * @remarks
   * The ID of the instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query the instance ID.
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
   * Specifies whether to retain the original classic network endpoint when you switch the instance from the classic network to a VPC. Valid values:
   * * **True**: Retained.
   * * **False**: Not retained. This is the default value.
   * 
   * > This parameter is active only when the network type of the instance is the classic network.
   * 
   * @example
   * True
   */
  retainClassic?: string;
  securityToken?: string;
  /**
   * @remarks
   * The network type to which you want to switch the instance. Set the value to **VPC**.
   * 
   * @example
   * VPC
   */
  targetNetworkType?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the destination VPC. You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to query the vSwitch ID.
   * > The destination vSwitch must be in the same zone as the instance.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination VPC. You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to query the VPC ID.
   * 
   * > * The destination VPC must be in the same region as the instance.
   * > * If you specify this parameter, you must also specify the **VSwitchId** parameter.
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

