// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceQueueRequestResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The resource limit of the workspace.
   * 
   * @example
   * 1000
   */
  cu?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 100
   */
  gpu?: number;
  /**
   * @remarks
   * The number of GPU machines. This parameter is valid only when the billing method is set to subscription.
   * 
   * @example
   * 8
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

export class CreateWorkspaceQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Ray Cluster for dev.
   */
  description?: string;
  /**
   * @remarks
   * The list of GPU instance types.
   */
  gpuSpec?: string[];
  /**
   * @remarks
   * The instance ID of the Ray cluster.
   * 
   * @example
   * ray-k7nm8ahl5te4tg91-ey7blpbg
   */
  instanceId?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - PayAsYouGo: pay-as-you-go.
   * - Pre: subscription.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * Specifies whether resource prefetch is enabled.
   */
  preheat?: boolean;
  /**
   * @remarks
   * The queue type, such as CPU or GPU.
   * 
   * @example
   * CPU
   */
  queueCategory?: string;
  /**
   * @remarks
   * The resource specifications.
   */
  resourceSpec?: CreateWorkspaceQueueRequestResourceSpec;
  /**
   * @remarks
   * The ID of the workspace.
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
      gpuSpec: 'gpuSpec',
      instanceId: 'instanceId',
      paymentType: 'paymentType',
      preheat: 'preheat',
      queueCategory: 'queueCategory',
      resourceSpec: 'resourceSpec',
      workspaceId: 'workspaceId',
      workspaceQueueName: 'workspaceQueueName',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gpuSpec: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      paymentType: 'string',
      preheat: 'boolean',
      queueCategory: 'string',
      resourceSpec: CreateWorkspaceQueueRequestResourceSpec,
      workspaceId: 'string',
      workspaceQueueName: 'string',
      regionId: 'string',
    };
  }

  validate() {
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

