// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReplicationLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the disaster recovery instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2zeytekus0r******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for creating the synchronization link of the disaster recovery instance. Valid values:
   * 
   * - **true**: Executes a dry run without creating the instance. The system checks items such as request parameters, request format, business limits, and inventory.
   * - **false** (default): Sends a normal request and creates the instance after the check is passed.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The database account used for data synchronization.
   * 
   * @example
   * testdbuser
   */
  replicatorAccount?: string;
  /**
   * @remarks
   * The password of the synchronization account.
   * 
   * @example
   * testpassword
   */
  replicatorPassword?: string;
  /**
   * @remarks
   * The endpoint of the PostgreSQL source instance or the IP address of the SQL Server source instance.
   * 
   * @example
   * PostgreSQL：pgm-****.pg.rds.aliyuncs.com
   * SQL Server：10.XX.XXX.XXX
   */
  sourceAddress?: string;
  /**
   * @remarks
   * The category of the source instance. Valid values:
   * - **other**: Other. (**Not supported for SQL Server.**)
   * - **aliyunRDS**: ApsaraDB RDS instance.
   * 
   * @example
   * aliyunRDS
   */
  sourceCategory?: string;
  /**
   * @remarks
   * The name of the source instance. This parameter is required when **SourceCategory** is set to **aliyunRDS**.
   * 
   * @example
   * rm-2zeaaz62s18******
   */
  sourceInstanceName?: string;
  /**
   * @remarks
   * The region ID of the source instance. This parameter is required when **SourceCategory** is set to **aliyunRDS**.
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
   * The IP address of the SQL Server disaster recovery instance.
   * 
   * @example
   * 192.XXX.XX.XXX
   */
  targetAddress?: string;
  /**
   * @remarks
   * The ID of a successful dry run task.
   * 
   * @example
   * 43994****
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the dry run task. You can specify a custom name. If you do not specify this parameter, the system automatically generates a name.
   * 
   * @example
   * zbtest
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

