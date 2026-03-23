// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceEndpointAddressRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  connectionString?: string;
  connectionStringPrefix?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceEndpointId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  port?: string;
  privateIpAddress?: string;
  resourceOwnerId?: number;
  vSwitchId?: string;
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

