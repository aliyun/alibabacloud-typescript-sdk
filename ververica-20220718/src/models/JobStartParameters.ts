// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LocalVariable } from "./LocalVariable";
import { DeploymentRestoreStrategy } from "./DeploymentRestoreStrategy";


export class JobStartParameters extends $dara.Model {
  /**
   * @remarks
   * The deployment ID.
   * 
   * @example
   * 737d0921-c5ac-47fc-9ba9-07a1e0b4****
   */
  deploymentId?: string;
  jobId?: string;
  /**
   * @remarks
   * The variables.
   */
  localVariables?: LocalVariable[];
  /**
   * @remarks
   * The queue in which the deployment is running.
   * 
   * @example
   * default-queue
   */
  resourceQueueName?: string;
  /**
   * @remarks
   * The configuration of the start offset of the deployment.
   */
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

