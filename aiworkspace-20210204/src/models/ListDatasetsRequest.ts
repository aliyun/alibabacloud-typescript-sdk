// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the dataset\\"s visibility.
   * 
   * - `PUBLIC`: The dataset is publicly accessible.
   * 
   * - `PRIVATE`: The dataset is privately accessible.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The data source type. To specify multiple types, separate them with commas (,). Valid values:
   * 
   * - `NAS`: The data source is NAS.
   * 
   * - `OSS`: The data source is OSS.
   * 
   * @example
   * OSS
   */
  dataSourceTypes?: string;
  /**
   * @remarks
   * The data type of the dataset. To specify multiple data types, separate them with commas (,). Valid values:
   * 
   * - `VIDEO`: video.
   * 
   * - `COMMON`: general.
   * 
   * - `TEXT`: text.
   * 
   * - `PIC`: image.
   * 
   * - `AUDIO`: audio.
   * 
   * @example
   * COMMON,TEXT
   */
  dataTypes?: string;
  /**
   * @remarks
   * A comma-separated list of dataset IDs.
   * 
   * @example
   * d-rcdg3wxxxxxhc5jk87
   */
  datasetIds?: string;
  /**
   * @remarks
   * The dataset edition. Valid values:
   * 
   * - `BASIC`: Basic edition. Does not support file metadata management.
   * 
   * - `ADVANCED`: Advanced edition. This edition is supported only for OSS datasets. Each version can manage metadata for up to 1 million files.
   * 
   * - `LOGICAL`: Logical edition. This edition is supported only for OSS datasets and is suitable for most use cases. Each version can manage metadata for up to 1 million files. You must use an SDK with this edition.
   * 
   * @example
   * BASIC
   */
  edition?: string;
  /**
   * @remarks
   * A label used to filter datasets. The operation returns datasets whose label key or value contains the specified string.
   * 
   * @example
   * test
   */
  label?: string;
  /**
   * @remarks
   * The dataset name. Fuzzy search is supported.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The sort order for the results, based on the `SortBy` parameter. The default is `ASC`.
   * 
   * - `ASC`: ascending order.
   * 
   * - `DESC`: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number for the paged query. Starts at 1. The default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of datasets to return per page. The default is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The dataset properties. To specify multiple properties, separate them with commas (,). Valid values:
   * 
   * - `DIRECTORY`: A folder.
   * 
   * - `FILE`: A file.
   * 
   * @example
   * FILE
   */
  properties?: string;
  /**
   * @remarks
   * The dataset provider. Set this parameter to `pai` to query public datasets on the PAI platform.
   * 
   * @example
   * pai
   */
  provider?: string;
  /**
   * @remarks
   * A filter for shared datasets.
   * 
   * - `TO_ME`: Returns only datasets shared with you.
   * 
   * - `BY_ME`: Returns only datasets that you have shared with others and displays details of the sharing configuration.
   * 
   * - If this parameter is omitted or empty, the operation returns all datasets in the current workspace, including those shared with you.
   * 
   * @example
   * BY_ME
   */
  shareScope?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The source dataset ID for an iTAG annotation set.
   * 
   * @example
   * d-rcdg3wxxxxxhc5jk87
   */
  sourceDatasetId?: string;
  /**
   * @remarks
   * The source ID. The value of this parameter varies based on the `SourceTypes` value:
   * 
   * - If `SourceTypes` is `USER`, you can specify a custom value for `SourceId`.
   * 
   * - If `SourceTypes` is `ITAG`, `SourceId` is the ID of the iTAG task.
   * 
   * - If `SourceTypes` is `PAI_PUBLIC_DATASET`, this parameter is empty by default.
   * 
   * @example
   * d-rbvg5wzljzjhc9ks92
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type. To specify multiple types, separate them with commas (,).
   * 
   * @example
   * USER,ITAG
   */
  sourceTypes?: string;
  /**
   * @remarks
   * The ID of the workspace that contains the dataset. For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * If this parameter is not specified, the default workspace is used. An error is returned if the default workspace does not exist.
   * 
   * @example
   * 324**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      dataSourceTypes: 'DataSourceTypes',
      dataTypes: 'DataTypes',
      datasetIds: 'DatasetIds',
      edition: 'Edition',
      label: 'Label',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      properties: 'Properties',
      provider: 'Provider',
      shareScope: 'ShareScope',
      sortBy: 'SortBy',
      sourceDatasetId: 'SourceDatasetId',
      sourceId: 'SourceId',
      sourceTypes: 'SourceTypes',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      dataSourceTypes: 'string',
      dataTypes: 'string',
      datasetIds: 'string',
      edition: 'string',
      label: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      properties: 'string',
      provider: 'string',
      shareScope: 'string',
      sortBy: 'string',
      sourceDatasetId: 'string',
      sourceId: 'string',
      sourceTypes: 'string',
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

