// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TaskExecError } from "./TaskExecError";


export class PipelineStatus extends $dara.Model {
  latestExecError?: TaskExecError;
  /**
   * @example
   * Success
   */
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      latestExecError: 'latestExecError',
      phase: 'phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestExecError: TaskExecError,
      phase: 'string',
    };
  }

  validate() {
    if(this.latestExecError && typeof (this.latestExecError as any).validate === 'function') {
      (this.latestExecError as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

