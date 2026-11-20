// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The API key for Alibaba Cloud Model Studio. Log on to the Model Studio console or use the API to obtain the key. This parameter is required only for Alibaba Cloud Model Studio models.
   * 
   * @example
   * api-key-xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The CPU specifications. This parameter is required only for Hologres AI nodes.
   * 
   * @example
   * 16
   */
  cpu?: number;
  /**
   * @remarks
   * The GPU specifications. This parameter is required only for Hologres AI nodes.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The GPU memory specifications. This parameter is required only for Hologres AI nodes.
   * 
   * @example
   * 64
   */
  gpuMemory?: number;
  /**
   * @remarks
   * The memory specifications. This parameter is required only for Hologres AI nodes.
   * 
   * @example
   * 64
   */
  memory?: number;
  /**
   * @remarks
   * The model parameters. Refer to the default parameters returned by ListModelCatalog. You can pass the parameters directly or modify them as needed before passing. This parameter is required only for Alibaba Cloud Model Studio models.
   * 
   * @example
   * {"timeout":600,"max_retries":10,"max_retry_delay":8,"initial_retry_delay":0.5}
   */
  modelParams?: string;
  /**
   * @remarks
   * The custom service name.
   * 
   * This parameter is required.
   * 
   * @example
   * my_model
   */
  modelServiceName?: string;
  /**
   * @remarks
   * The model name. To query Alibaba Cloud Model Studio models, call ListModelCatalog. To query Hologres AI nodes, call GetAvailableModelsResource.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen3.5-plus
   */
  modelType?: string;
  /**
   * @remarks
   * The underlying model provider.
   * 
   * @example
   * bailian
   */
  provider?: string;
  /**
   * @remarks
   * The number of service replicas. This parameter is required only for Hologres AI nodes.
   * 
   * @example
   * 2
   */
  serviceCount?: number;
  /**
   * @remarks
   * The model type, such as chat/completions or embedding. Refer to the types returned by ListModelCatalog and create the model as needed.
   * 
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

