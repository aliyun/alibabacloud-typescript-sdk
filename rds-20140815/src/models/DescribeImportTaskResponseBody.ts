// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportTaskResponseBody extends $dara.Model {
  /**
   * @example
   * myadmin
   */
  account?: string;
  /**
   * @example
   * 5.7
   */
  dbVersion?: string;
  /**
   * @example
   * Error Message
   */
  detail?: string;
  /**
   * @example
   * A103039D-B1B2-4C57-B989-7D7C0DA95426
   */
  requestId?: string;
  /**
   * @example
   * aliyunRDS
   */
  sourceCategory?: string;
  /**
   * @example
   * 59.172.25.122
   */
  sourceIp?: string;
  /**
   * @example
   * 3306
   */
  sourcePort?: string;
  /**
   * @example
   * Importing
   */
  status?: string;
  /**
   * @example
   * rm-t4neh0q12v1******
   */
  targetInstanceName?: string;
  /**
   * @example
   * 416980000
   */
  taskId?: number;
  /**
   * @example
   * test01
   */
  taskName?: string;
  /**
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

