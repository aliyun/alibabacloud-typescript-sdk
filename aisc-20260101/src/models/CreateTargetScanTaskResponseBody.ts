// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTargetScanTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the scan task. The initial task status is PREPARING (asynchronous preparation in progress). You can call ListScanTasksByTarget to query the task status and progress.
   * 
   * @example
   * task-abc123def4567
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTargetScanTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation result, which contains the TaskId of the new scan task.
   */
  data?: CreateTargetScanTaskResponseBodyData;
  /**
   * @remarks
   * The unique identifier of the request, which is used for troubleshooting and log tracing.
   * 
   * @example
   * 1EBD0C05-6C1F-4C95-9C63-XXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateTargetScanTaskResponseBodyData,
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

