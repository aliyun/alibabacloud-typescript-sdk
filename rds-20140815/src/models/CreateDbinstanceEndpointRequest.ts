// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceEndpointRequestNodeItems extends $dara.Model {
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
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rn-xxxx-****
   */
  nodeId?: string;
  /**
   * @remarks
   * The current weight of the node. Read traffic is distributed based on this value.
   * 
   * Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, and you must ensure that the value is unique among different requests. The value can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6000170000591aed949d0f****
   */
  clientToken?: string;
  /**
   * @remarks
   * The prefix of the internal endpoint.
   * 
   * When you create an endpoint, an internal endpoint is automatically created. This parameter specifies the prefix of the internal endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-****-ro
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The custom description of the endpoint.
   * 
   * @example
   * for readonly business
   */
  DBInstanceEndpointDescription?: string;
  /**
   * @remarks
   * The endpoint type. Valid values:
   * 
   * - Primary: the read/write endpoint of the instance.
   * 
   * - Readonly: the read-only endpoint of the instance.
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
   * The list of nodes associated with the endpoint.
   * 
   * This parameter is required.
   */
  nodeItems?: CreateDBInstanceEndpointRequestNodeItems[];
  /**
   * @remarks
   * The port number for the internal network connection. You can specify a custom port number when you create an internal network connection.
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
   * The IP address for the internal network connection.
   * 
   * @example
   * 172.16.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute operation to query the resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vSwitch for the internal network connection.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1kqp****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC for the internal network connection.
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
      nodeItems: 'NodeItems',
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
      nodeItems: { 'type': 'array', 'itemType': CreateDBInstanceEndpointRequestNodeItems },
      port: 'string',
      privateIpAddress: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeItems)) {
      $dara.Model.validateArray(this.nodeItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

