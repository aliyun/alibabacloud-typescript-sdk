// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TaskInvocation } from "./TaskInvocation";
import { TaskExecError } from "./TaskExecError";


export class TaskStatus extends $dara.Model {
  executionDetails?: string[];
  invocations?: TaskInvocation[];
  latestExecError?: TaskExecError;
  /**
   * @example
   * Success
   */
  phase?: string;
  /**
   * @example
   * 123
   */
  statusGeneration?: number;
  static names(): { [key: string]: string } {
    return {
      executionDetails: 'executionDetails',
      invocations: 'invocations',
      latestExecError: 'latestExecError',
      phase: 'phase',
      statusGeneration: 'statusGeneration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionDetails: { 'type': 'array', 'itemType': 'string' },
      invocations: { 'type': 'array', 'itemType': TaskInvocation },
      latestExecError: TaskExecError,
      phase: 'string',
      statusGeneration: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.executionDetails)) {
      $dara.Model.validateArray(this.executionDetails);
    }
    if(Array.isArray(this.invocations)) {
      $dara.Model.validateArray(this.invocations);
    }
    if(this.latestExecError && typeof (this.latestExecError as any).validate === 'function') {
      (this.latestExecError as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

