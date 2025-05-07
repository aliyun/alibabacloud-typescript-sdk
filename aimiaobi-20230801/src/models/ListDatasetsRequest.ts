// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * businessDataset
   */
  datasetName?: string;
  /**
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  /**
   * @example
   * 创建时间-结束
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 3
   */
  searchDatasetEnable?: number;
  /**
   * @example
   * 创建时间-开始
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchDatasetEnable: 'SearchDatasetEnable',
      startTime: 'StartTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      datasetType: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'string',
      searchDatasetEnable: 'number',
      startTime: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

