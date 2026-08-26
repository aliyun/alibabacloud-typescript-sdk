// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset label used to filter the dataset list. Datasets whose label key or value contains the specified string are returned.
   * 
   * @example
   * key1,key2
   */
  labelKeys?: string;
  /**
   * @remarks
   * The dataset label used to filter the dataset list. Datasets whose label key or value contains the specified string are returned.
   * 
   * @example
   * value1,value2
   */
  labelValues?: string;
  /**
   * @remarks
   * The order in which entries are sorted by the specified field in a paged query. Default value: ASC.
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
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The dataset property. Valid values:
   * - DIRECTORY: folder.
   * - FILE: file.
   * 
   * @example
   * DIRECTORY
   */
  properties?: string;
  /**
   * @remarks
   * The field by which entries are sorted in a paged query. Default value: GmtCreateTime. Valid values:
   * - GmtCreateTime (default): sort by creation time.
   * 
   * - GmtModifiedTime: sort by modification time.
   * 
   * - SourceType
   * 
   * - DataSourceType
   * 
   * - Property
   * 
   * - DataSize
   * 
   * - DataCount
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The data source ID.
   * - If SourceTypes is set to USER, SourceId can be customized.
   * - If SourceTypes is set to ITAG, which indicates a dataset generated from iTAG labeling results, SourceId is the iTAG task ID.
   * - If SourceTypes is set to PAI_PUBLIC_DATASET, which indicates a dataset created from a PAI public dataset, SourceId is empty by default.
   * 
   * @example
   * d-a0xbe5n03bhqof46ce
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type. Valid values:
   * - PAI-PUBLIC-DATASET: PAI public dataset.
   * - ITAG: dataset generated from iTAG labeling results.
   * - USER: dataset registered by a user.
   * 
   * @example
   * USER
   */
  sourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      labelKeys: 'LabelKeys',
      labelValues: 'LabelValues',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      properties: 'Properties',
      sortBy: 'SortBy',
      sourceId: 'SourceId',
      sourceTypes: 'SourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKeys: 'string',
      labelValues: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      properties: 'string',
      sortBy: 'string',
      sourceId: 'string',
      sourceTypes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

