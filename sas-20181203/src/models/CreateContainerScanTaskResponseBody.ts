// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerScanTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether you can create more scan tasks.
   * 
   * @example
   * true
   */
  canCreate?: boolean;
  /**
   * @remarks
   * The collection time.
   * 
   * @example
   * 1644286364150
   */
  collectTime?: number;
  /**
   * @remarks
   * The execution time of the task.
   * 
   * @example
   * 1644286364150
   */
  execTime?: number;
  /**
   * @remarks
   * The number of scan tasks that are complete.
   * 
   * @example
   * 33
   */
  finishCount?: number;
  /**
   * @remarks
   * The progress of the task.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The execution result of the task.
   * 
   * @example
   * SUCCESS
   */
  result?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * fc98d58eb56f699d49bf7ebbd6d7****
   */
  taskId?: string;
  /**
   * @remarks
   * The total number of scan tasks.
   * 
   * @example
   * 62
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      canCreate: 'CanCreate',
      collectTime: 'CollectTime',
      execTime: 'ExecTime',
      finishCount: 'FinishCount',
      progress: 'Progress',
      result: 'Result',
      status: 'Status',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canCreate: 'boolean',
      collectTime: 'number',
      execTime: 'number',
      finishCount: 'number',
      progress: 'number',
      result: 'string',
      status: 'string',
      taskId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerScanTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateContainerScanTaskResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9F4E6157-9600-5588-86B9-38F09067****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateContainerScanTaskResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

