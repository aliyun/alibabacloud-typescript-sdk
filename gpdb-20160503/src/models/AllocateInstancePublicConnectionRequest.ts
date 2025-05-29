// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateInstancePublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * 
   * *   **primary**: primary endpoint
   * *   **cluster**: instance endpoint. This value is supported only for an instance that contains multiple coordinator nodes.
   * 
   * >  The default value is primary.
   * 
   * @example
   * primary
   */
  addressType?: string;
  /**
   * @remarks
   * The prefix of the endpoint.
   * 
   * Specify a prefix for the endpoint. Example: `gp-bp12ga6v69h86****`. In this example, the endpoint is `gp-bp12ga6v69h86****.gpdb.rds.aliyuncs.com`.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The port number. Example: 5432.
   * 
   * This parameter is required.
   * 
   * @example
   * 5432
   */
  port?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      port: 'Port',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      connectionStringPrefix: 'string',
      DBInstanceId: 'string',
      ownerId: 'number',
      port: 'string',
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

