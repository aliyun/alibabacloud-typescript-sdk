// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceEndpointAddressRequest extends $dara.Model {
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
   * The prefix of the public endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-*****
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The endpoint ID of the instance. You can call the DescribeDBInstanceEndpoints operation to query the endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-****
   */
  DBInstanceEndpointId?: string;
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
   * The network type of the endpoint. Only Internet is supported. Set the value to **Public**.
   * 
   * This parameter is required.
   * 
   * @example
   * Public
   */
  ipType?: string;
  /**
   * @remarks
   * The port number of the public endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute operation to obtain the ID of the resource group.
   * 
   * @example
   * rg-acfmy****
   */
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

