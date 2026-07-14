// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a region, including instance IDs.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * adbtest
   */
  database?: string;
  ownerId?: number;
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
   * The name of the schema that contains the table.
   * 
   * This parameter is required.
   * 
   * @example
   * public
   */
  schema?: string;
  /**
   * @remarks
   * The access credential. Created by calling the CreateSecret operation.
   * 
   * > When you access this operation by using a RAM user, you must have the UseSecret or GetSecretValue permission on this SecretArn.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:gpdb:cn-beijing:1033**:secret/testsecret-eG2AQGRIwQ0zFp4VA7mYL3uiCXTfDQbQ
   */
  secretArn?: string;
  /**
   * @remarks
   * The table name.
   * 
   * This parameter is required.
   * 
   * @example
   * mytable
   */
  table?: string;
  /**
   * @remarks
   * The ID of the workspace that consists of multiple database instances. This parameter and DBInstanceId cannot both be empty. If both this parameter and DBInstanceId are specified, this parameter takes precedence.
   * 
   * @example
   * gp-ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      schema: 'Schema',
      secretArn: 'SecretArn',
      table: 'Table',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      ownerId: 'number',
      regionId: 'string',
      schema: 'string',
      secretArn: 'string',
      table: 'string',
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

