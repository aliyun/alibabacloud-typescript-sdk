// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConnectionStringRequest extends $dara.Model {
  /**
   * @remarks
   * The current endpoint of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com
   */
  currentConnectionString?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * * **Private**: virtual private cloud (VPC).
   * * **Public**: Internet.
   * 
   * @example
   * Public
   */
  IPType?: string;
  /**
   * @remarks
   * The prefix of the new endpoint. The endpoint of the instance is in the format of `<prefix>.redis.rds.aliyuncs.com`. The prefix must start with a lowercase letter and can contain lowercase letters and digits. The prefix must be 8 to 40 characters in length.
   * > You must specify at least one of the request parameters **NewConnectionString** and **Port**.
   * 
   * @example
   * standardredis123
   */
  newConnectionString?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The service port number of the instance. Valid values: **1** to **65535**.
   * > You must specify at least one of the request parameters **NewConnectionString** and **Port**.
   * 
   * @example
   * 6379
   */
  port?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      currentConnectionString: 'CurrentConnectionString',
      DBInstanceId: 'DBInstanceId',
      IPType: 'IPType',
      newConnectionString: 'NewConnectionString',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      port: 'Port',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentConnectionString: 'string',
      DBInstanceId: 'string',
      IPType: 'string',
      newConnectionString: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      port: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

