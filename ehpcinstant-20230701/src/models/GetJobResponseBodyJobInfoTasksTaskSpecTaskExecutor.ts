// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutorVM } from "./GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutorVm";


export class GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor extends $dara.Model {
  VM?: GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutorVM;
  static names(): { [key: string]: string } {
    return {
      VM: 'VM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VM: GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutorVM,
    };
  }

  validate() {
    if(this.VM && typeof (this.VM as any).validate === 'function') {
      (this.VM as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

