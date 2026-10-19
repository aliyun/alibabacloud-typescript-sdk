// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterAIDBClusterCustomModelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The container startup environment variables. Variable names cannot be empty or contain whitespace. Variable values can be empty strings.
   * 
   * @example
   * {"HF_HOME":"/cache/hf","EMPTY_VALUE":""}
   */
  containerEnvShrink?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * my-model-bucket
   */
  customOssBucketName?: string;
  /**
   * @remarks
   * The model path in the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * models/qwen3
   */
  customOssBucketPath?: string;
  /**
   * @remarks
   * The GPU instance type used for model deployment. Required when configuring deployment parameters.
   * 
   * @example
   * polardb.gpu.gn8is.4xlarge
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The direct startup command for the model container.
   * 
   * @example
   * python -m vllm.entrypoints.openai.api_server
   */
  directCommand?: string;
  /**
   * @remarks
   * The display name in the candidate list and the initial invocation name for clients.
   * 
   * @example
   * my-qwen3
   */
  displayModelName?: string;
  /**
   * @remarks
   * The full reference of the customer-owned inference image, in the format of registry/repository:tag.
   * 
   * @example
   * registry.example.com/customer/model:v1
   */
  imageName?: string;
  /**
   * @remarks
   * The inference engine. Required when configuring deployment parameters. Valid values: vllm and sglang.
   * 
   * @example
   * vllm
   */
  inferenceEngine?: string;
  /**
   * @remarks
   * The custom model registration key and model directory name.
   * 
   * This parameter is required.
   * 
   * @example
   * Qwen3-32B
   */
  modelName?: string;
  /**
   * @remarks
   * The model startup parameters. Parameter keys must start with --.
   * 
   * @example
   * {"--max-model-len":"32768"}
   */
  modelParamsShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The password or temporary token for the customer image repository. Required when ImageName is specified.
   * 
   * @example
   * temporary-token
   */
  registryPassword?: string;
  /**
   * @remarks
   * The username for the customer image repository. Required when ImageName is specified.
   * 
   * @example
   * temporary-user
   */
  registryUsername?: string;
  static names(): { [key: string]: string } {
    return {
      containerEnvShrink: 'ContainerEnv',
      customOssBucketName: 'CustomOssBucketName',
      customOssBucketPath: 'CustomOssBucketPath',
      DBInstanceClass: 'DBInstanceClass',
      directCommand: 'DirectCommand',
      displayModelName: 'DisplayModelName',
      imageName: 'ImageName',
      inferenceEngine: 'InferenceEngine',
      modelName: 'ModelName',
      modelParamsShrink: 'ModelParams',
      regionId: 'RegionId',
      registryPassword: 'RegistryPassword',
      registryUsername: 'RegistryUsername',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerEnvShrink: 'string',
      customOssBucketName: 'string',
      customOssBucketPath: 'string',
      DBInstanceClass: 'string',
      directCommand: 'string',
      displayModelName: 'string',
      imageName: 'string',
      inferenceEngine: 'string',
      modelName: 'string',
      modelParamsShrink: 'string',
      regionId: 'string',
      registryPassword: 'string',
      registryUsername: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

