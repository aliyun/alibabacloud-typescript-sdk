// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceEndpointShrinkRequest extends $dara.Model {
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
  nodeItemsShrink?: string;
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

