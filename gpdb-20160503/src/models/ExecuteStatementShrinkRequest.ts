// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteStatementShrinkRequest extends $dara.Model {
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
   * The list of configuration parameters.
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The vector dataset parameters.
   * > If WorkspaceId is not empty, this parameter is required.
   */
  ragWorkspaceCollectionShrink?: string;
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
   * The run type. Valid values:
   * - synchronous: synchronous execution.
   * - asynchronous: asynchronous execution. Currently not supported.
   * 
   * @example
   * synchronous
   */
  runType?: string;
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
   * The SQL statement to execute.
   * 
   * @example
   * select * from table1
   */
  sql?: string;
  /**
   * @remarks
   * The list of multiple SQL statements.
   */
  sqlsShrink?: string;
  /**
   * @remarks
   * The name of the execution statement. This parameter takes effect only when RunType is set to asynchronous.
   * 
   * @example
   * test
   */
  statementName?: string;
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
      parametersShrink: 'Parameters',
      ragWorkspaceCollectionShrink: 'RagWorkspaceCollection',
      regionId: 'RegionId',
      runType: 'RunType',
      secretArn: 'SecretArn',
      sql: 'Sql',
      sqlsShrink: 'Sqls',
      statementName: 'StatementName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      ownerId: 'number',
      parametersShrink: 'string',
      ragWorkspaceCollectionShrink: 'string',
      regionId: 'string',
      runType: 'string',
      secretArn: 'string',
      sql: 'string',
      sqlsShrink: 'string',
      statementName: 'string',
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

