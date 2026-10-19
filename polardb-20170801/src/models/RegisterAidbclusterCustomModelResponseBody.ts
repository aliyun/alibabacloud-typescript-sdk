// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterAIDBClusterCustomModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a new registration is created. A value of false indicates that an existing registration is updated.
   * 
   * @example
   * true
   */
  created?: boolean;
  /**
   * @remarks
   * The display name and the initial invocation name for clients.
   * 
   * @example
   * my-qwen3
   */
  displayModelName?: string;
  /**
   * @remarks
   * The image import status. The initial value is Importing after an image is registered.
   * 
   * @example
   * Importing
   */
  imageImportStatus?: string;
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
      imageImportStatus: 'ImageImportStatus',
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
      imageImportStatus: 'string',
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

