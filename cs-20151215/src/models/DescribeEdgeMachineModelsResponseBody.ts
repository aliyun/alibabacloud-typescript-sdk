// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeMachineModelsResponseBodyModels extends $dara.Model {
  /**
   * @remarks
   * The number of vCores.
   * 
   * @example
   * 6
   */
  cpu?: number;
  /**
   * @remarks
   * The CPU architecture.
   * 
   * @example
   * x86_64/arm64
   */
  cpuArch?: string;
  /**
   * @remarks
   * The time when the cloud-native box was created.
   * 
   * @example
   * 2021-07-07T20:44:00+08:00
   */
  created?: string;
  /**
   * @remarks
   * The description of the cloud-native box.
   * 
   * @example
   * B010
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the cloud-native box model manages the Docker runtime.
   * 
   * @example
   * 0/1
   */
  manageRuntime?: number;
  /**
   * @remarks
   * The memory. Unit: GB.
   * 
   * @example
   * 8
   */
  memory?: number;
  /**
   * @remarks
   * The model of the cloud-native box.
   * 
   * @example
   * ACK-V-B010
   */
  model?: string;
  /**
   * @remarks
   * The ID of the cloud-native box.
   * 
   * @example
   * c34cc753-8908-4739-bd10-ebd922a4****
   */
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      cpuArch: 'cpu_arch',
      created: 'created',
      description: 'description',
      manageRuntime: 'manage_runtime',
      memory: 'memory',
      model: 'model',
      modelId: 'model_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      cpuArch: 'string',
      created: 'string',
      description: 'string',
      manageRuntime: 'number',
      memory: 'number',
      model: 'string',
      modelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeMachineModelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud-native box models.
   */
  models?: DescribeEdgeMachineModelsResponseBodyModels[];
  static names(): { [key: string]: string } {
    return {
      models: 'models',
    };
  }

  static types(): { [key: string]: any } {
    return {
      models: { 'type': 'array', 'itemType': DescribeEdgeMachineModelsResponseBodyModels },
    };
  }

  validate() {
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

