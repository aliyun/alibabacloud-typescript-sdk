// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceEndpointShrinkRequest extends $dara.Model {
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
   * The prefix of the internal endpoint.
   * 
   * When you create any type of endpoint, an internal endpoint is automatically created for the endpoint. This parameter specifies the prefix of the internal endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-****-ro
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The user-defined description of the endpoint.
   * 
   * @example
   * for readonly business
   */
  DBInstanceEndpointDescription?: string;
  /**
   * @remarks
   * The endpoint type. Valid values:
   * 
   * *   Primary: read/write endpoint of the instance
   * *   Readonly: read-only endpoint of the instance
   * 
   * This parameter is required.
   * 
   * @example
   * Readonly
   */
  DBInstanceEndpointType?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The information about the endpoint.
   * 
   * This parameter is required.
   */
  nodeItemsShrink?: string;
  /**
   * @remarks
   * The port number of the internal endpoint. You can specify the port number for the internal endpoint.
   * 
   * Valid values: 3000 to 5999.
   * 
   * This parameter is required.
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
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute operation to obtain the ID of the resource group.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The vSwitch ID of the internal endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1kqp****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID of the internal endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-xxxmmxjqqi****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceEndpointDescription: 'DBInstanceEndpointDescription',
      DBInstanceEndpointType: 'DBInstanceEndpointType',
      DBInstanceId: 'DBInstanceId',
      nodeItemsShrink: 'NodeItems',
      port: 'Port',
      privateIpAddress: 'PrivateIpAddress',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionStringPrefix: 'string',
      DBInstanceEndpointDescription: 'string',
      DBInstanceEndpointType: 'string',
      DBInstanceId: 'string',
      nodeItemsShrink: 'string',
      port: 'string',
      privateIpAddress: 'string',
      resourceGroupId: 'string',
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

