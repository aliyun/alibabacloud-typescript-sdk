// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The label keys used to filter the dataset list. Datasets are returned if their label keys contain the specified strings.
   * 
   * @example
   * key1,key2
   */
  labelKeys?: string;
  /**
   * @remarks
   * The label values used to filter the dataset list. Datasets are returned if their label values contain the specified strings.
   * 
   * @example
   * value1,value2
   */
  labelValues?: string;
  /**
   * @remarks
   * The sort order for the paged query. The default value is ASC. Valid values:
   * 
   * - ASC: Ascending order.
   * 
   * - DESC: Descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number. The value starts from 1. The default is 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The dataset properties. Valid values:
   * 
   * - DIRECTORY: Folder.
   * 
   * - FILE: File.
   * 
   * @example
   * DIRECTORY
   */
  properties?: string;
  /**
   * @remarks
   * The field to use for sorting in a paged query. The default value is GmtCreateTime. Valid values:
   * 
   * - GmtCreateTime (default): Creation time.
   * 
   * - GmtModifiedTime: Modification time.
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
   * The ID of the data source.
   * 
   * - If SourceTypes is USER, you can specify a custom ID.
   * 
   * - If SourceTypes is ITAG, this is the ID of the iTAG annotation task.
   * 
   * - If SourceTypes is PAI_PUBLIC_DATASET, this parameter is empty by default.
   * 
   * @example
   * d-a0xbe5n03bhqof46ce
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type. Valid values:
   * 
   * - PAI-PUBLIC-DATASET: A public dataset from PAI.
   * 
   * - ITAG: A dataset generated from the annotation results of the iTAG module.
   * 
   * - USER: A dataset registered by a user.
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

