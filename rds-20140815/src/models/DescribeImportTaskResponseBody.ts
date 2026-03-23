// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Account name.
   * 
   * @example
   * myadmin
   */
  account?: string;
  /**
   * @remarks
   * Milvus version number.
   * 
   * @example
   * 5.7
   */
  dbVersion?: string;
  /**
   * @remarks
   * Detailed information about the job
   * 
   * @example
   * Error Message
   */
  detail?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A103039D-B1B2-4C57-B989-7D7C0DA95426
   */
  requestId?: string;
  /**
   * @remarks
   * Source instance category.  
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
   * Source IP address for access.
   * 
   * @example
   * 59.172.25.122
   */
  sourceIp?: string;
  /**
   * @remarks
   * Source MySQL port
   * 
   * @example
   * 3306
   */
  sourcePort?: string;
  /**
   * @remarks
   * Task Status
   * 
   * @example
   * Importing
   */
  status?: string;
  /**
   * @remarks
   * Name of the target disaster recovery instance to switch to.
   * 
   * @example
   * rm-t4neh0q12v1******
   */
  targetInstanceName?: string;
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * 416980000
   */
  taskId?: number;
  /**
   * @remarks
   * Task Name.
   * 
   * @example
   * test01
   */
  taskName?: string;
  /**
   * @remarks
   * Task Type, used to query jobs of specific types. Separate multiple types with commas. A maximum of 30 types are supported. The default value is empty, indicating no restriction.
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

