// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteStatementRequestRagWorkspaceCollection } from "./ExecuteStatementRequestRagWorkspaceCollection";


export class ExecuteStatementRequest extends $dara.Model {
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
   * The name of the database.
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
   * The configuration parameters.
   */
  parameters?: any[];
  ragWorkspaceCollection?: ExecuteStatementRequestRagWorkspaceCollection;
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
   * The execution type. Valid values:
   * 
   * *   synchronous
   * *   asynchronous (not supported)
   * 
   * @example
   * synchronous
   */
  runType?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the access credential for the created Data API account. You can call the CreateSecret operation to create an access credential.
   * 
   * >  To call the ExecuteStatement operation as a Resource Access Management (RAM) user, the RAM user must have the permissions to call the UseSecret or GetSecretValue operation on the ARN of the access credential.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:gpdb:cn-beijing:1033**:secret/testsecret-eG2AQGRIwQ0zFp4VA7mYL3uiCXTfDQbQ
   */
  secretArn?: string;
  /**
   * @remarks
   * The SQL statements that you want to execute.
   * 
   * @example
   * select * from table1
   */
  sql?: string;
  /**
   * @remarks
   * The SQL statements.
   */
  sqls?: string[];
  /**
   * @remarks
   * The name of the set of SQL statements that you want to execute. This parameter takes effect when the RunType parameter is set to asynchronous.
   * 
   * @example
   * test
   */
  statementName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      ownerId: 'OwnerId',
      parameters: 'Parameters',
      ragWorkspaceCollection: 'RagWorkspaceCollection',
      regionId: 'RegionId',
      runType: 'RunType',
      secretArn: 'SecretArn',
      sql: 'Sql',
      sqls: 'Sqls',
      statementName: 'StatementName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      ownerId: 'number',
      parameters: { 'type': 'array', 'itemType': 'any' },
      ragWorkspaceCollection: ExecuteStatementRequestRagWorkspaceCollection,
      regionId: 'string',
      runType: 'string',
      secretArn: 'string',
      sql: 'string',
      sqls: { 'type': 'array', 'itemType': 'string' },
      statementName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(this.ragWorkspaceCollection && typeof (this.ragWorkspaceCollection as any).validate === 'function') {
      (this.ragWorkspaceCollection as any).validate();
    }
    if(Array.isArray(this.sqls)) {
      $dara.Model.validateArray(this.sqls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

