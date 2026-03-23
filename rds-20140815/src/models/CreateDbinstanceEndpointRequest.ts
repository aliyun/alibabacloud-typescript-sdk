// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceEndpointRequestNodeItems extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeId?: string;
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
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  connectionStringPrefix?: string;
  DBInstanceEndpointDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceEndpointType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeItems?: CreateDBInstanceEndpointRequestNodeItems[];
  /**
   * @remarks
   * This parameter is required.
   */
  port?: string;
  privateIpAddress?: string;
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
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

