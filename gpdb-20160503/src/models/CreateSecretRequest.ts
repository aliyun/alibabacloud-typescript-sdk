// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance IDs.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The description of the credential. The description can be up to 255 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password for database access.
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
   * The name of the credential. The name can contain letters, digits, and underscores (_), and must be 1 to 16 characters in length. If this parameter is left empty, the value of the Username parameter is used as the secret name.
   * 
   * @example
   * testsecret
   */
  secretName?: string;
  /**
   * @remarks
   * Specifies whether to test the instance connection by using the username and password.
   * 
   * @example
   * true
   */
  testConnection?: boolean;
  /**
   * @remarks
   * The username for database access.
   * 
   * > Limits:
   * > - The username can contain lowercase letters, digits, and underscores (_), and must start with a lowercase letter.
   * > - The username can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testacc
   */
  username?: string;
  /**
   * @remarks
   * The ID of the workspace that consists of multiple database instances. This parameter and the DBInstanceId parameter cannot be left empty at the same time. If both parameters are specified, this parameter takes precedence.
   * 
   * @example
   * gp-ws-*****
   */
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

