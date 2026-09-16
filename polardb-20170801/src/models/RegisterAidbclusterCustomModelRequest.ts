// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterAIDBClusterCustomModelRequest extends $dara.Model {
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
   * The model path within the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * models/qwen3
   */
  customOssBucketPath?: string;
  /**
   * @remarks
   * The ID of the PolarDB AI 3.0 logical instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pm-2ze4x2mwo81knj08a
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The display name shown in the candidate list and the initial client-facing invocation name.
   * 
   * @example
   * my-qwen3
   */
  displayModelName?: string;
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
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      customOssBucketName: 'CustomOssBucketName',
      customOssBucketPath: 'CustomOssBucketPath',
      DBClusterId: 'DBClusterId',
      displayModelName: 'DisplayModelName',
      modelName: 'ModelName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customOssBucketName: 'string',
      customOssBucketPath: 'string',
      DBClusterId: 'string',
      displayModelName: 'string',
      modelName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

