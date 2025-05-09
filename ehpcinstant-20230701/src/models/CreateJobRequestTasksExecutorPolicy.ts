// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateJobRequestTasksExecutorPolicyArraySpec } from "./CreateJobRequestTasksExecutorPolicyArraySpec";


export class CreateJobRequestTasksExecutorPolicy extends $dara.Model {
  arraySpec?: CreateJobRequestTasksExecutorPolicyArraySpec;
  /**
   * @example
   * 1
   */
  maxCount?: number;
  static names(): { [key: string]: string } {
    return {
      arraySpec: 'ArraySpec',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arraySpec: CreateJobRequestTasksExecutorPolicyArraySpec,
      maxCount: 'number',
    };
  }

  validate() {
    if(this.arraySpec && typeof (this.arraySpec as any).validate === 'function') {
      (this.arraySpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

