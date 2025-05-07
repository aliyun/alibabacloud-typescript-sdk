// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceEndpointAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6000170000591aed949d0f****
   */
  clientToken?: string;
  /**
   * @remarks
   * The endpoint that you want to modify. The endpoint can be a public endpoint or an internal endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The prefix of the new endpoint. You can modify only the prefix of the endpoint that is specified by the ConnectionString parameter.
   * 
   * @example
   * rm-bp181qoj4s34m33****
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The endpoint ID of the instance. You can call the DescribeDBInstanceEndpoints operation to query the endpoint ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-****
   */
  DBInstanceEndpointId?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The port number of the new endpoint.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The IP address of the internal endpoint.
   * 
   * @example
   * 172.16.XX.XX
   */
  privateIpAddress?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The vSwitch ID of the internal endpoint.
   * 
   * @example
   * vsw-bp12u14ecz****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID of the internal endpoint.
   * 
   * @example
   * vpc-bp17xdic25d****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionString: 'ConnectionString',
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceEndpointId: 'DBInstanceEndpointId',
      DBInstanceId: 'DBInstanceId',
      port: 'Port',
      privateIpAddress: 'PrivateIpAddress',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionString: 'string',
      connectionStringPrefix: 'string',
      DBInstanceEndpointId: 'string',
      DBInstanceId: 'string',
      port: 'string',
      privateIpAddress: 'string',
      resourceOwnerId: 'number',
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

