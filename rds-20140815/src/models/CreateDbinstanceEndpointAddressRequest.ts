// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceEndpointAddressRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  ipType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  port?: string;
  resourceGroupId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceEndpointId: 'DBInstanceEndpointId',
      DBInstanceId: 'DBInstanceId',
      ipType: 'IpType',
      port: 'Port',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionStringPrefix: 'string',
      DBInstanceEndpointId: 'string',
      DBInstanceId: 'string',
      ipType: 'string',
      port: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

