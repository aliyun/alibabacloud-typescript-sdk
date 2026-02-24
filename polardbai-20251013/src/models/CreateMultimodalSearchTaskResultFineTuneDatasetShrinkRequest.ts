// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultimodalSearchTaskResultFineTuneDatasetShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  DBClusterId?: string;
  /**
   * @example
   * 多模态数据集
   */
  datasetDescription?: string;
  /**
   * @example
   * dataset-1
   */
  datasetName?: string;
  resultIndexShrink?: string;
  /**
   * @example
   * ["raw", "rerank"]
   */
  resultMode?: string;
  /**
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 476751c5-*****-39f6aff1df96
   */
  taskId?: string;
  /**
   * @example
   * 100
   */
  topN?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      datasetDescription: 'DatasetDescription',
      datasetName: 'DatasetName',
      resultIndexShrink: 'ResultIndex',
      resultMode: 'ResultMode',
      sourceRegionId: 'SourceRegionId',
      taskId: 'TaskId',
      topN: 'TopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasetDescription: 'string',
      datasetName: 'string',
      resultIndexShrink: 'string',
      resultMode: 'string',
      sourceRegionId: 'string',
      taskId: 'string',
      topN: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

