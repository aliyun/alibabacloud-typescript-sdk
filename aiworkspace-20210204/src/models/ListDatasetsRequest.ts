// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the dataset.
   * 
   * - PUBLIC: public.
   * - PRIVATE: private.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The data source types. Separate multiple values with commas (,). Valid values:
   * - NAS: Alibaba Cloud Network Attached Storage (NAS).
   * - OSS: Alibaba Cloud Object Storage Service (OSS).
   * 
   * @example
   * OSS
   */
  dataSourceTypes?: string;
  /**
   * @remarks
   * The data types of the dataset. Separate multiple values with commas (,). Valid values:
   * - VIDEO: video.
   * - COMMON: common.
   * - TEXT: text.
   * - PIC: image.
   * - AUDIO: audio.
   * 
   * @example
   * COMMON,TEXT
   */
  dataTypes?: string;
  /**
   * @remarks
   * The dataset IDs. You can specify multiple dataset IDs separated by commas (,).
   * 
   * @example
   * d-rcdg3wxxxxxhc5jk87
   */
  datasetIds?: string;
  /**
   * @remarks
   * The dataset edition. Valid values:
   * 
   * - BASIC: Basic Edition. Does not support dataset file metadata management.
   * - ADVANCED: Advanced Edition. Supported only for OSS type. Each version supports up to 1 million file metadata entries.
   * - LOGICAL: Logical Edition. Supported only for OSS type. Each version supports up to 1 million file metadata entries. Applicable to most scenarios and requires the use of the SDK.
   * 
   * @example
   * BASIC
   */
  edition?: string;
  /**
   * @remarks
   * The dataset label used to filter the dataset list. Datasets whose label key or value contains the specified string are returned.
   * 
   * @example
   * test
   */
  label?: string;
  /**
   * @remarks
   * The dataset name. Fuzzy match is supported based on the dataset name.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The sorting order for the specified sort field in paging queries. Default value: ASC.
   * - ASC: ascending order.
   * - DESC: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number of the dataset list. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page settings for paging queries. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The dataset properties. Separate multiple values with commas (,). Valid values:
   * - DIRECTORY: folder.
   * - FILE: file.
   * 
   * @example
   * FILE
   */
  properties?: string;
  /**
   * @remarks
   * The dataset provider. A value of "pai" indicates that the dataset is a PAI platform public dataset.
   * 
   * @example
   * pai
   */
  provider?: string;
  /**
   * @remarks
   * The sharing filter for datasets:
   * * TO_ME: returns only datasets shared with you.
   * * BY_ME: returns only datasets you shared with others, with sharing configuration details displayed.
   * * If this parameter is not set or is set to empty: returns all datasets in the current workspace, including TO_ME.
   * 
   * @example
   * BY_ME
   */
  shareScope?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The source dataset ID of the iTAG annotation set.
   * 
   * @example
   * d-rcdg3wxxxxxhc5jk87
   */
  sourceDatasetId?: string;
  /**
   * @remarks
   * The data source ID.
   * - If SourceTypes is set to USER, you can customize the SourceId value.
   * - If SourceTypes is set to ITAG, which indicates a dataset generated from iTAG annotation results, SourceId is the iTAG task ID.
   * - If SourceTypes is set to PAI_PUBLIC_DATASET, which indicates a dataset created from a PAI public dataset, SourceId is empty by default.
   * 
   * @example
   * d-rbvg5wzljzjhc9ks92
   */
  sourceId?: string;
  /**
   * @remarks
   * The source types. Separate multiple values with commas (,).
   * 
   * @example
   * USER,ITAG
   */
  sourceTypes?: string;
  /**
   * @remarks
   * The ID of the workspace where the dataset resides. For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * If you do not specify this parameter, the default workspace is used. If the default workspace does not exist, an error is returned.
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

