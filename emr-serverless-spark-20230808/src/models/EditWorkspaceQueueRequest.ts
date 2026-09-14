// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditWorkspaceQueueRequestResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The resource upper limit of the workspace queue.
   * 
   * @example
   * 1000
   */
  cu?: number;
  /**
   * @remarks
   * The number of GPU cards.
   * 
   * @example
   * 100
   */
  gpu?: number;
  /**
   * @remarks
   * The number of GPU machines.
   */
  gpuMachineNum?: number;
  /**
   * @remarks
   * The maximum number of CUs.
   * 
   * @example
   * 0.5
   */
  maxCu?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      gpu: 'gpu',
      gpuMachineNum: 'gpuMachineNum',
      maxCu: 'maxCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      gpu: 'number',
      gpuMachineNum: 'number',
      maxCu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditWorkspaceQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test queue
   */
  description?: string;
  /**
   * @remarks
   * The environment type of the queue.
   */
  environments?: string[];
  /**
   * @remarks
   * The list of GPU models.
   */
  gpuSpec?: string[];
  instanceId?: string;
  /**
   * @remarks
   * The resource quota.
   */
  resourceSpec?: EditWorkspaceQueueRequestResourceSpec;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-975bcfda9625****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace queue.
   * 
   * @example
   * dev_queue
   */
  workspaceQueueName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      environments: 'environments',
      gpuSpec: 'gpuSpec',
      instanceId: 'instanceId',
      resourceSpec: 'resourceSpec',
      workspaceId: 'workspaceId',
      workspaceQueueName: 'workspaceQueueName',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      environments: { 'type': 'array', 'itemType': 'string' },
      gpuSpec: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      resourceSpec: EditWorkspaceQueueRequestResourceSpec,
      workspaceId: 'string',
      workspaceQueueName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.environments)) {
      $dara.Model.validateArray(this.environments);
    }
    if(Array.isArray(this.gpuSpec)) {
      $dara.Model.validateArray(this.gpuSpec);
    }
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

