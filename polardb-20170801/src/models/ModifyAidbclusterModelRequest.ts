// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAIDBClusterModelRequest extends $dara.Model {
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
   * The new customer-facing invocation name. If you do not specify this parameter, the existing invocation name is retained.
   * 
   * @example
   * my-flagship-chat
   */
  displayModelName?: string;
  /**
   * @remarks
   * Specifies whether to only preview the modification.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The target model name. Select a value from the ModelName values returned by DescribeAvailableModels.
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
  /**
   * @remarks
   * The worker restart mode. Valid values: inPlace and recreate.
   * 
   * @example
   * inPlace
   */
  restartMode?: string;
  /**
   * @remarks
   * The maximum number of workers to restart per batch within a single MSD. Valid values: 1 to 30. This parameter takes effect only when RestartMode is set to inPlace.
   * 
   * @example
   * 8
   */
  workerBatchSize?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      displayModelName: 'DisplayModelName',
      dryRun: 'DryRun',
      modelName: 'ModelName',
      regionId: 'RegionId',
      restartMode: 'RestartMode',
      workerBatchSize: 'WorkerBatchSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      displayModelName: 'string',
      dryRun: 'boolean',
      modelName: 'string',
      regionId: 'string',
      restartMode: 'string',
      workerBatchSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

