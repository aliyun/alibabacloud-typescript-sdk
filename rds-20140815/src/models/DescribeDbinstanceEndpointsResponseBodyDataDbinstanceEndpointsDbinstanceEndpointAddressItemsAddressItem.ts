// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItemsAddressItem extends $dara.Model {
  /**
   * @remarks
   * The endpoints of the instance.
   * 
   * @example
   * rm****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 10.71.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The type of the IP address. Valid values:
   * 
   * *   **Public**: Internet
   * *   **Private**: internal network
   * 
   * @example
   * Private
   */
  ipType?: string;
  /**
   * @remarks
   * The port number of the endpoint.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp12u14ecz****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp17xdic25d****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      ipAddress: 'IpAddress',
      ipType: 'IpType',
      port: 'Port',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      ipAddress: 'string',
      ipType: 'string',
      port: 'string',
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

