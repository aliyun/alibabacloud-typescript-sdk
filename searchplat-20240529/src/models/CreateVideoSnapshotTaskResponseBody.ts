// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVideoSnapshotTaskResponseBodyResult extends $dara.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
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

export class CreateVideoSnapshotTaskResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: CreateVideoSnapshotTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: CreateVideoSnapshotTaskResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

