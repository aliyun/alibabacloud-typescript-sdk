// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LocalVariable } from "./LocalVariable";
import { DeploymentRestoreStrategy } from "./DeploymentRestoreStrategy";


export class JobStartParameters extends $dara.Model {
  deploymentId?: string;
  jobId?: string;
  localVariables?: LocalVariable[];
  /**
   * @example
   * default-queue
   */
  resourceQueueName?: string;
  restoreStrategy?: DeploymentRestoreStrategy;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      jobId: 'jobId',
      localVariables: 'localVariables',
      resourceQueueName: 'resourceQueueName',
      restoreStrategy: 'restoreStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      jobId: 'string',
      localVariables: { 'type': 'array', 'itemType': LocalVariable },
      resourceQueueName: 'string',
      restoreStrategy: DeploymentRestoreStrategy,
    };
  }

  validate() {
    if(Array.isArray(this.localVariables)) {
      $dara.Model.validateArray(this.localVariables);
    }
    if(this.restoreStrategy && typeof (this.restoreStrategy as any).validate === 'function') {
      (this.restoreStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

