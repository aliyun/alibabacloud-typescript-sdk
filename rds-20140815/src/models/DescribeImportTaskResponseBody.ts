// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * myadmin
   */
  account?: string;
  /**
   * @remarks
   * The Milvus version number.
   * 
   * @example
   * 5.7
   */
  dbVersion?: string;
  /**
   * @remarks
   * The detailed information about the task.
   * 
   * @example
   * Error Message
   */
  detail?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A103039D-B1B2-4C57-B989-7D7C0DA95426
   */
  requestId?: string;
  /**
   * @remarks
   * The category of the source instance.
   * 
   * - **ECS**: Alibaba Cloud ECS.
   * - **other**: Other.
   * 
   * @example
   * aliyunRDS
   */
  sourceCategory?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 59.172.25.122
   */
  sourceIp?: string;
  /**
   * @remarks
   * The source MySQL port.
   * 
   * @example
   * 3306
   */
  sourcePort?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Importing
   */
  status?: string;
  /**
   * @remarks
   * The name of the destination disaster recovery instance for the switchover.
   * 
   * @example
   * rm-t4neh0q12v1******
   */
  targetInstanceName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 416980000
   */
  taskId?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * test01
   */
  taskName?: string;
  /**
   * @remarks
   * The task type. This parameter is used to query tasks of specific types. Separate multiple task types with commas (,). A maximum of 30 task types are supported. If this parameter is left empty, tasks of all types are queried.
   * 
   * @example
   * import
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      dbVersion: 'DbVersion',
      detail: 'Detail',
      requestId: 'RequestId',
      sourceCategory: 'SourceCategory',
      sourceIp: 'SourceIp',
      sourcePort: 'SourcePort',
      status: 'Status',
      targetInstanceName: 'TargetInstanceName',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      dbVersion: 'string',
      detail: 'string',
      requestId: 'string',
      sourceCategory: 'string',
      sourceIp: 'string',
      sourcePort: 'string',
      status: 'string',
      targetInstanceName: 'string',
      taskId: 'number',
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

