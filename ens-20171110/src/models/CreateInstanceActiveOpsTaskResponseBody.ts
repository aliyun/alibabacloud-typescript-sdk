// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstanceActiveOpsTask } from "./InstanceActiveOpsTask";


export class CreateInstanceActiveOpsTaskResponseBody extends $dara.Model {
  instanceActiveOpsTask?: InstanceActiveOpsTask;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceActiveOpsTask: 'InstanceActiveOpsTask',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceActiveOpsTask: InstanceActiveOpsTask,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceActiveOpsTask && typeof (this.instanceActiveOpsTask as any).validate === 'function') {
      (this.instanceActiveOpsTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

