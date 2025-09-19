// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateOnceTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether you can create more scan tasks. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * > By default, a maximum of 10 scan tasks can be running at the same time. If 10 image scan tasks are running, you cannot create a scan task by calling this operation. You must wait for at least one of the 10 existing scan tasks to complete before you can create a scan task.
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
   * 1670307567000
   */
  collectTime?: number;
  /**
   * @remarks
   * The number of scan tasks that are complete.
   * 
   * @example
   * 61
   */
  finishCount?: number;
  /**
   * @remarks
   * The ID of the last scan task.
   * 
   * @example
   * 38730bb078f4a1461d4ed283994c****
   */
  lastTask?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 8BB6B8FA-39E8-5654-A309-8EED13B1****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the scan task.
   * 
   * @example
   * 38730bb078f4a1461d4ed283994c****
   */
  taskId?: string;
  /**
   * @remarks
   * The total number of scan tasks.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      canCreate: 'CanCreate',
      collectTime: 'CollectTime',
      finishCount: 'FinishCount',
      lastTask: 'LastTask',
      requestId: 'RequestId',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canCreate: 'boolean',
      collectTime: 'number',
      finishCount: 'number',
      lastTask: 'string',
      requestId: 'string',
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

