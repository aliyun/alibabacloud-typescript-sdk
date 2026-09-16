// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterAIDBClusterCustomModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the registration is newly created. A value of false indicates that an existing registration was updated.
   * 
   * @example
   * true
   */
  created?: boolean;
  /**
   * @remarks
   * The display name and initial client-facing invocation name.
   * 
   * @example
   * my-qwen3
   */
  displayModelName?: string;
  /**
   * @remarks
   * The model registration ID.
   * 
   * @example
   * 123456
   */
  modelId?: number;
  /**
   * @remarks
   * The custom model registration key.
   * 
   * @example
   * Qwen3-32B
   */
  modelName?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * custom
   */
  modelType?: string;
  /**
   * @remarks
   * The normalized OSS path.
   * 
   * @example
   * /my-model-bucket/models/qwen3
   */
  ossPath?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3AA6E0E4-1234-5678-90AB-1234567890AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'Created',
      displayModelName: 'DisplayModelName',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelType: 'ModelType',
      ossPath: 'OssPath',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'boolean',
      displayModelName: 'string',
      modelId: 'number',
      modelName: 'string',
      modelType: 'string',
      ossPath: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

