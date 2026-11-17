// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceSpec } from "./ResourceSpec";


export class BatchEditQueueSpec extends $dara.Model {
  /**
   * @remarks
   * The description of the queue. If this parameter is not specified, the description is not modified.
   * 
   * @example
   * Development and debugging queue
   */
  description?: string;
  /**
   * @remarks
   * The runtime environments. If this parameter is not specified, the runtime environments are not modified.
   */
  environments?: string[];
  /**
   * @remarks
   * The list of GPU instance types. If this parameter is not specified, the GPU specifications are not modified.
   */
  gpuSpec?: string[];
  /**
   * @remarks
   * The resource specifications, which represent the absolute target value. If this parameter is not specified, only the description, environments, or GPU specifications are modified, and the quota is not recalculated.
   */
  resourceSpec?: ResourceSpec;
  /**
   * @remarks
   * The name of the queue.
   * 
   * This parameter is required.
   * 
   * @example
   * dev_queue
   */
  workspaceQueueName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      environments: 'environments',
      gpuSpec: 'gpuSpec',
      resourceSpec: 'resourceSpec',
      workspaceQueueName: 'workspaceQueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      environments: { 'type': 'array', 'itemType': 'string' },
      gpuSpec: { 'type': 'array', 'itemType': 'string' },
      resourceSpec: ResourceSpec,
      workspaceQueueName: 'string',
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

