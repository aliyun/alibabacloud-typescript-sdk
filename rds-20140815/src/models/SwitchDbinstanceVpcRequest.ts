// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchDBInstanceVpcRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The private IP address of the instance. The IP address must be within the CIDR block of the vSwitch specified by the **VSwitchId** parameter.
   * > You can call the DescribeVSwitches operation to query the CIDR block of the vSwitch.
   * 
   * @example
   * 10.23.XX.XX
   */
  privateIpAddress?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The VPC ID.
   * 
   * > The VPC and the ApsaraDB RDS instance must be in the same region.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf6f7l4fg90****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * > The vSwitch and the ApsaraDB RDS instance must be in the same zone.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-uf6adz52c2p****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      privateIpAddress: 'PrivateIpAddress',
      resourceOwnerId: 'ResourceOwnerId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      privateIpAddress: 'string',
      resourceOwnerId: 'number',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

