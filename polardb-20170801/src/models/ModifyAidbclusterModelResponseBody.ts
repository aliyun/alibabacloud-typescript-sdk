// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAIDBClusterModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the request is a dry-run request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The model type of the instance.
   * 
   * @example
   * custom
   */
  modelType?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3AA6E0E4-1234-5678-90AB-1234567890AB
   */
  requestId?: string;
  /**
   * @remarks
   * The resolved target model name.
   * 
   * @example
   * Qwen3-32B
   */
  targetModelName?: string;
  /**
   * @remarks
   * The resolved target OSS path.
   * 
   * @example
   * /my-model-bucket/models/qwen3
   */
  targetOssPath?: string;
  /**
   * @remarks
   * The ID of the asynchronous task. This parameter is empty when DryRun is set to true.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  /**
   * @remarks
   * The number of change batches.
   * 
   * @example
   * 1
   */
  totalBatches?: number;
  /**
   * @remarks
   * The number of affected model serving instances.
   * 
   * @example
   * 2
   */
  totalMsds?: number;
  /**
   * @remarks
   * The change warnings returned by the upstream. The caller must display these warnings.
   */
  warnings?: string[];
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      modelType: 'ModelType',
      requestId: 'RequestId',
      targetModelName: 'TargetModelName',
      targetOssPath: 'TargetOssPath',
      taskId: 'TaskId',
      totalBatches: 'TotalBatches',
      totalMsds: 'TotalMsds',
      warnings: 'Warnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      modelType: 'string',
      requestId: 'string',
      targetModelName: 'string',
      targetOssPath: 'string',
      taskId: 'number',
      totalBatches: 'number',
      totalMsds: 'number',
      warnings: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.warnings)) {
      $dara.Model.validateArray(this.warnings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

