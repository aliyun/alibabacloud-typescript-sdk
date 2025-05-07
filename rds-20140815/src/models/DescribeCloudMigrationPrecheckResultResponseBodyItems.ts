// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudMigrationPrecheckResultResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The content of the assessment report.
   * 
   * @example
   * [Check rds empty]\\nCheck rds databases: success\\n[Check source connectivity]\\nCheck ip connectable: success\\nCheck port connectable: success\\nCheck database connectable: success\\nCheck account replication privilege: success\\nCheck account createrole privilege: success\\nCheck account monitor privilege: success\\n[Check source version]\\nCheck major version consistent: success\\n[Check source glibc version]\\nCheck source glibc version compatible: warning(warning:source glibc version is not compatible with rds pg)\\n[Check disk size]\\nCheck disk size enough: success\\n[Check wal keep size]\\nCheck wal keep size large enough: success\\n[Check spec params]\\nCheck if spec params too large: success\\n [Check triggers]\\nCheck triggers compatible: success\\n[Check user functions]\\nCheck user functions compatible: success\\n*Migrate check success*
   */
  detail?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2022-02-25T06:57:41Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the task was modified.
   * 
   * @example
   * 2022-02-25T06:58:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * migratetest
   */
  sourceAccount?: string;
  /**
   * @remarks
   * The environment in which the self-managed PostgreSQL instance runs.
   * 
   * *   **idcOnVpc**: The self-managed PostgreSQL instance resides in a data center. The data center can communicate with the VPC to which the ApsaraDB RDS for PostgreSQL instance belongs.
   * *   **ecsOnVpc**: The self-managed PostgreSQL instance resides on an ECS instance.
   * 
   * @example
   * ecsonvpc
   */
  sourceCategory?: string;
  /**
   * @remarks
   * The private IP address that is used to connect to the self-managed PostgreSQL instance.
   * 
   * @example
   * 172.2.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * 123456
   */
  sourcePassword?: string;
  /**
   * @remarks
   * The port number that is used to connect to the self-managed PostgreSQL instance.
   * 
   * @example
   * 5432
   */
  sourcePort?: number;
  /**
   * @remarks
   * A reserved parameter. The return value of this parameter is empty.
   * 
   * @example
   * null
   */
  targetEip?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pgm-bp102g323jd4****
   */
  targetInstanceName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 440420798
   */
  taskId?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * lxbv6rtxno8
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      sourceAccount: 'SourceAccount',
      sourceCategory: 'SourceCategory',
      sourceIpAddress: 'SourceIpAddress',
      sourcePassword: 'SourcePassword',
      sourcePort: 'SourcePort',
      targetEip: 'TargetEip',
      targetInstanceName: 'TargetInstanceName',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      sourceAccount: 'string',
      sourceCategory: 'string',
      sourceIpAddress: 'string',
      sourcePassword: 'string',
      sourcePort: 'number',
      targetEip: 'string',
      targetInstanceName: 'string',
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

