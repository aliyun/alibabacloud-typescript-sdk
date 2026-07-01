// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LocalVariable } from "./LocalVariable";
import { DeploymentRestoreStrategy } from "./DeploymentRestoreStrategy";


export class JobStartParameters extends $dara.Model {
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * 737d0921-c5ac-47fc-9ba9-07a1e0b4****
   */
  deploymentId?: string;
  /**
   * @remarks
   * Job instance ID
   */
  jobId?: string;
  /**
   * @remarks
   * Job variables
   */
  localVariables?: LocalVariable[];
  /**
   * @remarks
   * Resource queue for job execution
   * 
   * @example
   * default-queue
   */
  resourceQueueName?: string;
  /**
   * @remarks
   * Job start offset settings
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

