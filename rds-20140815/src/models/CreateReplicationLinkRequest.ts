// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReplicationLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DR instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp1trqb4p1xd****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run before the system creates the DR instance. Valid values:
   * 
   * *   **true**: performs a dry run but does not create the instance. The system checks the request parameters, request syntax, limits, and available resources.
   * *   **false** (default): performs a dry run and the actual request. If the request passes the dry run, the instance is directly created.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The account of the database that is used for data synchronization.
   * 
   * @example
   * testdbuser
   */
  replicatorAccount?: string;
  /**
   * @remarks
   * The password of the account.
   * 
   * @example
   * testpassword
   */
  replicatorPassword?: string;
  /**
   * @remarks
   * The endpoint of the source ApsaraDB RDS for PostgreSQL instance or the IP address of the source ApsaraDB RDS for SQL Server instance.
   * 
   * @example
   * pgm-****.pg.rds.aliyuncs.com
   */
  sourceAddress?: string;
  /**
   * @remarks
   * The type of the source instance. Valid values:
   * 
   * *   **other**: other instances. **SQL Server instances are not supported.**
   * *   **aliyunRDS**: an ApsaraDB RDS instance.
   * 
   * @example
   * aliyunRDS
   */
  sourceCategory?: string;
  /**
   * @remarks
   * The name of the source instance. If you set **SourceCategory** to **aliyunRDS**, this parameter is required.
   * 
   * @example
   * testInstance
   */
  sourceInstanceName?: string;
  /**
   * @remarks
   * The region ID of the source instance. If you set **SourceCategory** to **aliyunRDS**, this parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  sourceInstanceRegionId?: string;
  /**
   * @remarks
   * The port of the source instance.
   * 
   * @example
   * 5432
   */
  sourcePort?: number;
  /**
   * @remarks
   * The IP address of the DR instance of the ApsaraDB RDS for SQL Server instance.
   * 
   * @example
   * 192.XXX.XX.XXX
   */
  targetAddress?: string;
  /**
   * @remarks
   * The task ID of the successful dry run.
   * 
   * @example
   * 439946016
   */
  taskId?: number;
  /**
   * @remarks
   * The task name of the dry run. You can specify a custom task name. If you do not specify this parameter, ApsaraDB RDS automatically generates a task name.
   * 
   * @example
   * test01
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dryRun: 'DryRun',
      replicatorAccount: 'ReplicatorAccount',
      replicatorPassword: 'ReplicatorPassword',
      sourceAddress: 'SourceAddress',
      sourceCategory: 'SourceCategory',
      sourceInstanceName: 'SourceInstanceName',
      sourceInstanceRegionId: 'SourceInstanceRegionId',
      sourcePort: 'SourcePort',
      targetAddress: 'TargetAddress',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dryRun: 'boolean',
      replicatorAccount: 'string',
      replicatorPassword: 'string',
      sourceAddress: 'string',
      sourceCategory: 'string',
      sourceInstanceName: 'string',
      sourceInstanceRegionId: 'string',
      sourcePort: 'number',
      targetAddress: 'string',
      taskId: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

