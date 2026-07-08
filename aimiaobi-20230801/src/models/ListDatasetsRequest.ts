// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsRequest extends $dara.Model {
  /**
   * @remarks
   * A keyword within the dataset description to filter results.
   * 
   * @example
   * xx
   */
  datasetDescription?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @remarks
   * The dataset name. The name must be globally unique.
   * 
   * @example
   * businessDataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The dataset type.
   * 
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  /**
   * @remarks
   * The end of the creation time range.
   * 
   * @example
   * 创建时间-结束
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to return configuration and usage information. Default value: false.
   */
  includeConfig?: boolean;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Specifies the dataset search setting.
   * 
   * @example
   * 3
   */
  searchDatasetEnable?: number;
  /**
   * @remarks
   * The start of the creation time range.
   * 
   * @example
   * 创建时间-开始
   */
  startTime?: string;
  /**
   * @remarks
   * The unique ID of the Model Studio workspace. For more information, see [Get workspaceId](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      endTime: 'EndTime',
      includeConfig: 'IncludeConfig',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchDatasetEnable: 'SearchDatasetEnable',
      startTime: 'StartTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      datasetType: 'string',
      endTime: 'string',
      includeConfig: 'boolean',
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

