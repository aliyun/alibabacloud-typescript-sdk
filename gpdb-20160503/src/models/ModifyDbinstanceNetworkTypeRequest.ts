// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceNetworkTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The new network type of the instance. Valid values:
   * 
   * *   VPC
   * *   Classic
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The internal IP address of the instance.
   * 
   * @example
   * 10.10.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the instance.
   * 
   * @example
   * vpc-bp19ame5m1r3oejns****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the instance. This parameter must be specified when VPCId is specified.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      instanceNetworkType: 'InstanceNetworkType',
      privateIpAddress: 'PrivateIpAddress',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      instanceNetworkType: 'string',
      privateIpAddress: 'string',
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

