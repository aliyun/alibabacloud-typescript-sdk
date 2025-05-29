// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo extends $dara.Model {
  /**
   * @remarks
   * The type of the endpoint.
   * 
   * @example
   * Intranet
   */
  addressType?: string;
  /**
   * @remarks
   * The endpoint that is used to connect to the instance.
   * 
   * @example
   * gp-xxxxxxx.gpdb.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 127.0.0.1
   */
  IPAddress?: string;
  /**
   * @remarks
   * The type of the IP address.
   * 
   * *   Valid values for instances in the classic network: Inner and Public.
   * *   Valid values for instances in a virtual private cloud (VPC): Private and Public.
   * 
   * @example
   * Inner
   */
  IPType?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 3432
   */
  port?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * @example
   * vpc-xxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID. Multiple IDs are separated by commas (,).
   * 
   * @example
   * vsw-xxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the instance that is deployed in a VPC.
   * 
   * @example
   * vpc-xxxxxxx
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      connectionString: 'ConnectionString',
      IPAddress: 'IPAddress',
      IPType: 'IPType',
      port: 'Port',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      connectionString: 'string',
      IPAddress: 'string',
      IPType: 'string',
      port: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

