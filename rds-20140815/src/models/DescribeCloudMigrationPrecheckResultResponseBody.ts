// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudMigrationPrecheckResultResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The content of the pre-check report for cloud migration.
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
   * The type of the self-managed PostgreSQL database. Valid values:
   * 
   * - **idcOnVpc**: a self-managed PostgreSQL database in an on-premises data center that is connected to a VPC.
   * - **ecsOnVpc**: a self-managed PostgreSQL database on an Alibaba Cloud ECS instance.
   * 
   * @example
   * ecsonvpc
   */
  sourceCategory?: string;
  /**
   * @remarks
   * The internal IP address of the self-managed PostgreSQL database.
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
   * The port of the self-managed PostgreSQL database.
   * 
   * @example
   * 5432
   */
  sourcePort?: number;
  /**
   * @remarks
   * A reserved parameter. The query result is empty.
   * 
   * @example
   * null
   */
  targetEip?: string;
  /**
   * @remarks
   * The instance ID of the target instance.
   * 
   * @example
   * pgm-bp102g323jd4****
   */
  targetInstanceName?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 440420798
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the task.
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

export class DescribeCloudMigrationPrecheckResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of pre-check reports for one-click cloud migration.
   */
  items?: DescribeCloudMigrationPrecheckResultResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7E4A6E1B-789B-5F16-9736-39AA57FC7374
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeCloudMigrationPrecheckResultResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

