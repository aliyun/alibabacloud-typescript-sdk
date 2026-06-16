// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditWorkspaceQueueRequestResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The maximum resource capacity of the Workspace Queue.
   * 
   * @example
   * 1000
   */
  cu?: number;
  /**
   * @example
   * 100
   */
  gpu?: number;
  /**
   * @example
   * 0.5
   */
  maxCu?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      gpu: 'gpu',
      maxCu: 'maxCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      gpu: 'number',
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
   * The environment types.
   */
  environments?: string[];
  gpuSpec?: string[];
  /**
   * @remarks
   * The resource specifications.
   */
  resourceSpec?: EditWorkspaceQueueRequestResourceSpec;
  /**
   * @remarks
   * The Workspace ID.
   * 
   * @example
   * w-975bcfda9625****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the Workspace Queue.
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
      environments: 'environments',
      gpuSpec: 'gpuSpec',
      resourceSpec: 'resourceSpec',
      workspaceId: 'workspaceId',
      workspaceQueueName: 'workspaceQueueName',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environments: { 'type': 'array', 'itemType': 'string' },
      gpuSpec: { 'type': 'array', 'itemType': 'string' },
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

