// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The retention period of the classic network endpoint. Valid values: **14**, **30**, **60**, and **120**. Unit: days.
   * 
   * > 
   * 
   * *   This parameter is available and required only when the **RetainClassic** parameter is set to **True**.
   * 
   * *   After you complete the switchover operation, you can also call the [ModifyInstanceNetExpireTime](https://help.aliyun.com/document_detail/473793.html) operation to modify the retention period of the classic network endpoint.
   * 
   * @example
   * 30
   */
  classicExpiredDays?: string;
  /**
   * @remarks
   * The ID of the instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query the ID of the instance.
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
   * Specifies whether to retain the original classic network endpoint after you switch the instance from classic network to VPC. Default value: False. Valid values:
   * 
   * *   **True**: retains the classic network endpoint.
   * *   **False**: does not retain the classic network endpoint.
   * 
   * > This parameter is available only when the network type of the instance is classic network.
   * 
   * @example
   * True
   */
  retainClassic?: string;
  securityToken?: string;
  /**
   * @remarks
   * The network type to which you want to switch. If you want to switch to VPC network, Set the value to **VPC**.
   * 
   * @example
   * VPC
   */
  targetNetworkType?: string;
  /**
   * @remarks
   * The ID of the vSwitch that belongs to the VPC to which you want to switch. You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to query the vSwitch ID.
   * 
   * >  The vSwitch and the instance must be deployed in the same zone.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which you want to switch. You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to query the VPC ID.
   * 
   * > 
   * 
   * *   The VPC and the instance must be deployed in the same region.
   * 
   * *   After you set this parameter, you must also set the **VSwitchId** parameter.
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

