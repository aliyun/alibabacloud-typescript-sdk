// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBProxyEndpointAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3a****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The network type of the database proxy endpoint. Valid values:
   * 
   * *   **Public**
   * *   **VPC** (default)
   * 
   * >  If the RDS instance runs MySQL, this parameter is required.
   * 
   * @example
   * Public
   */
  DBProxyConnectStringNetType?: string;
  /**
   * @remarks
   * The ID of the database proxy endpoint. You can call the DescribeDBProxyEndpoint operation to query the ID of the database proxy endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * ta9um4****
   */
  DBProxyEndpointId?: string;
  /**
   * @remarks
   * A deprecated parameter. You do not need to specify this parameter.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  /**
   * @remarks
   * The prefix of the new database proxy endpoint. A custom value is supported.
   * 
   * >  You must specify at least one of the **DBProxyNewConnectString** and **DBProxyNewConnectStringPort** parameters.
   * 
   * @example
   * test123456
   */
  DBProxyNewConnectString?: string;
  /**
   * @remarks
   * The port number that is associated with the database proxy endpoint. A custom value is supported.
   * 
   * >  You must specify at least one of the **DBProxyNewConnectString** and **DBProxyNewConnectStringPort** parameters.
   * 
   * @example
   * 3307
   */
  DBProxyNewConnectStringPort?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBProxyConnectStringNetType: 'DBProxyConnectStringNetType',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyEngineType: 'DBProxyEngineType',
      DBProxyNewConnectString: 'DBProxyNewConnectString',
      DBProxyNewConnectStringPort: 'DBProxyNewConnectStringPort',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBProxyConnectStringNetType: 'string',
      DBProxyEndpointId: 'string',
      DBProxyEngineType: 'string',
      DBProxyNewConnectString: 'string',
      DBProxyNewConnectStringPort: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
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

