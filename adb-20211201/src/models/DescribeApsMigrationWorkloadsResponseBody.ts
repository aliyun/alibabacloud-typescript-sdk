// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsMigrationWorkloadsResponseBodyMigrationWorkloads extends $dara.Model {
  /**
   * @remarks
   * The number of ACUs.
   * 
   * @example
   * -
   */
  acuCount?: number;
  /**
   * @remarks
   * The time when the task was created. The time is in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format and in UTC.
   * 
   * @example
   * 2021-06-21T02:15:16Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * -
   */
  failedMsg?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The maximum response time.
   * 
   * @example
   * 1000
   */
  maxRT?: string;
  /**
   * @remarks
   * The time when the task was modified. The time is in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format and in UTC.
   * 
   * @example
   * 2021-06-21T02:15:16Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * TEST-001
   */
  name?: string;
  /**
   * @remarks
   * The OSS address.
   * 
   * @example
   * oss://******
   */
  ossLocation?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * COMPLETED
   */
  state?: string;
  /**
   * @remarks
   * The destination type.
   * 
   * @example
   * OSS
   */
  targetType?: string;
  /**
   * @remarks
   * The subtask type.
   * 
   * @example
   * test
   */
  workloadSubType?: string;
  static names(): { [key: string]: string } {
    return {
      acuCount: 'AcuCount',
      createTime: 'CreateTime',
      failedMsg: 'FailedMsg',
      id: 'Id',
      maxRT: 'MaxRT',
      modifyTime: 'ModifyTime',
      name: 'Name',
      ossLocation: 'OssLocation',
      state: 'State',
      targetType: 'TargetType',
      workloadSubType: 'WorkloadSubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acuCount: 'number',
      createTime: 'string',
      failedMsg: 'string',
      id: 'string',
      maxRT: 'string',
      modifyTime: 'string',
      name: 'string',
      ossLocation: 'string',
      state: 'string',
      targetType: 'string',
      workloadSubType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsMigrationWorkloadsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of migration workloads.
   */
  migrationWorkloads?: DescribeApsMigrationWorkloadsResponseBodyMigrationWorkloads[];
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******-3EEC-57F0-9F06-******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      migrationWorkloads: 'MigrationWorkloads',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationWorkloads: { 'type': 'array', 'itemType': DescribeApsMigrationWorkloadsResponseBodyMigrationWorkloads },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.migrationWorkloads)) {
      $dara.Model.validateArray(this.migrationWorkloads);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

