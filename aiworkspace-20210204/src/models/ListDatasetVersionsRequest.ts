// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset tag keys, which are used to filter datasets. Datasets whose tag keys or tag values contain a specified string are filtered.
   * 
   * @example
   * key1,key2
   */
  labelKeys?: string;
  /**
   * @remarks
   * The dataset tag values, which are used to filter datasets. Datasets whose tag keys or tag values contain a specified string are filtered.
   * 
   * @example
   * value1,value2
   */
  labelValues?: string;
  /**
   * @remarks
   * The order in which the entries are sorted by the specific field on the returned page. Default value: ASC. Valid values:
   * 
   * *   ASC: ascending order
   * *   DESC: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
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
   * *   DIRECTORY
   * *   FILE
   * 
   * @example
   * DIRECTORY
   */
  properties?: string;
  /**
   * @remarks
   * The field used to sort the results in queries by page. Default value: GmtCreateTime.
   * Valid values:
   * 
   * *   SourceType
   * *   DataSourceType
   * *   DataSize
   * *   DataCount
   * *   Property
   * *   GmtCreateTime: The results are sorted by creation time. This is the default value.
   * *   GmtModifiedTime: The results are sorted by modification time.
   * *   DatasetId
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * *   If SourceType is set to USER, the value of SourceId is a custom string.
   * *   If SourceType is set to ITAG, the value of SourceId is the ID of the labeling job of iTAG.
   * *   If SourceType is set to PAI_PUBLIC_DATASET, SourceId is empty by default.
   * 
   * @example
   * d-a0xbe5n03bhqof46ce
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type. Valid values:
   * 
   * *   PAI-PUBLIC-DATASET: a public dataset of Platform for AI (PAI).
   * *   ITAG: a dataset generated from a labeling job of iTAG.
   * *   USER: a dataset registered by a user.
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

