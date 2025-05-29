// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The description of the access credential.
   * 
   * @example
   * test
   */
  description?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the database account that is used to access the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pwd123
   */
  password?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the access credential. The name must be 1 to 16 characters in length and can contain letters, digits, and underscores (_). If you leave this parameter empty, the value of the Username parameter is used.
   * 
   * @example
   * testsecret
   */
  secretName?: string;
  /**
   * @remarks
   * Specifies whether to check the connectivity to the instance by using the name and password of the database account.
   * 
   * @example
   * true
   */
  testConnection?: boolean;
  /**
   * @remarks
   * The name of the database account that is used to access the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * testacc
   */
  username?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      description: 'Description',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      secretName: 'SecretName',
      testConnection: 'TestConnection',
      username: 'Username',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      description: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      secretName: 'string',
      testConnection: 'boolean',
      username: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

