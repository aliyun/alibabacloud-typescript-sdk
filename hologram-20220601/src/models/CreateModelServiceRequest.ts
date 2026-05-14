// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelServiceRequest extends $dara.Model {
  /**
   * @example
   * api-key-xxx
   */
  apiKey?: string;
  /**
   * @example
   * 16
   */
  cpu?: number;
  /**
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @example
   * 64
   */
  gpuMemory?: number;
  /**
   * @example
   * 64
   */
  memory?: number;
  /**
   * @example
   * {"timeout":600,"max_retries":10,"max_retry_delay":8,"initial_retry_delay":0.5}
   */
  modelParams?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my_model
   */
  modelServiceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen3.5-plus
   */
  modelType?: string;
  /**
   * @example
   * bailian
   */
  provider?: string;
  /**
   * @example
   * 2
   */
  serviceCount?: number;
  /**
   * @example
   * embedding
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      cpu: 'cpu',
      gpu: 'gpu',
      gpuMemory: 'gpuMemory',
      memory: 'memory',
      modelParams: 'modelParams',
      modelServiceName: 'modelServiceName',
      modelType: 'modelType',
      provider: 'provider',
      serviceCount: 'serviceCount',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      cpu: 'number',
      gpu: 'number',
      gpuMemory: 'number',
      memory: 'number',
      modelParams: 'string',
      modelServiceName: 'string',
      modelType: 'string',
      provider: 'string',
      serviceCount: 'number',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

