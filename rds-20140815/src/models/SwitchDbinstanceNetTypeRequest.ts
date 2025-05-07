// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchDBInstanceNetTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The prefix of the custom endpoint. The prefix must be 8 to 64 characters in length and can contain letters and digits. It must start with a lowercase letter. A valid endpoint is in the following format: Prefix.Database engine.rds.aliyuncs.com. Example: test1234.mysql.rds.aliyuncs.com.
   * 
   * This parameter is required.
   * 
   * @example
   * new**********
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **Normal**
   * *   **ReadWriteSplitting**
   * 
   * By default, the system returns both types of endpoints.
   * 
   * @example
   * Normal
   */
  connectionStringType?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1**************
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the port that is used to connect to the instance. Valid values: **3001 to 3999**.
   * 
   * @example
   * 3306
   */
  port?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionStringPrefix: 'ConnectionStringPrefix',
      connectionStringType: 'ConnectionStringType',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      port: 'Port',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionStringPrefix: 'string',
      connectionStringType: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
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

