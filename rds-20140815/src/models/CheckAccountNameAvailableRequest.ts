// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAccountNameAvailableRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the account.
   * 
   * *   The value must be unique.
   * 
   * *   The value must start with a lowercase letter, and end with a lowercase letter or a digit.
   * 
   * *   The value can contain lowercase letters, digits, and underscores (_).
   * 
   * *   The length of the value must meet the following requirements:
   * 
   *     *   If the instance runs MySQL 5.7 or MySQL 8.0, the value must be 2 to 32 characters in length.
   *     *   If the instance runs MySQL 5.6, the value must be 2 to 16 characters in length.
   *     *   If the instance runs SQL Server, the value must be 2 to 64 characters in length.
   *     *   If the instance runs PostgreSQL with cloud disks, the value must be 2 to 63 characters in length.
   *     *   If the instance runs PostgreSQL with local disks, the value must be 2 to 16 characters in length.
   *     *   If the instance runs MariaDB, the value must be 2 to 16 characters in length.
   * 
   * *   For more information about invalid characters, see [Forbidden keywords table](https://help.aliyun.com/document_detail/26317.html).
   * 
   * This parameter is required.
   * 
   * @example
   * DatabaseTest
   */
  accountName?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

