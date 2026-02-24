// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultimodalSearchTaskResultFineTuneDatasetRequest extends $dara.Model {
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
  resultIndex?: number[];
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
      resultIndex: 'ResultIndex',
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
      resultIndex: { 'type': 'array', 'itemType': 'number' },
      resultMode: 'string',
      sourceRegionId: 'string',
      taskId: 'string',
      topN: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultIndex)) {
      $dara.Model.validateArray(this.resultIndex);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

