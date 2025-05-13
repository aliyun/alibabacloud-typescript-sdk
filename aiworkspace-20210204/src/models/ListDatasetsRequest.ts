// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsRequest extends $dara.Model {
  /**
   * @remarks
   * The storage types of the data source. Multiple data source types are separated by commas (,). Valid values:
   * 
   * *   NAS: File Storage NAS (NAS).
   * *   OSS: Object Storage Service (OSS).
   * 
   * @example
   * OSS
   */
  dataSourceTypes?: string;
  /**
   * @remarks
   * The dataset types. Multiple dataset types are separated by commas (,). Valid values:
   * 
   * *   Video: video
   * *   COMMON: common
   * *   TEXT: text
   * *   PIC: picture
   * *   AUDIO: audio
   * 
   * @example
   * COMMON,TEXT
   */
  dataTypes?: string;
  /**
   * @remarks
   * The dataset tag, which is used to filter datasets. Datasets whose tag key or tag value contains a specified string are filtered.
   * 
   * @example
   * test
   */
  label?: string;
  /**
   * @remarks
   * The dataset name. Fuzzy search based on the dataset name is supported.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The order of specific fields of the entries on the returned page. Valid values: ASC and DESC. Default value: ASC.
   * 
   * *   ASC: The entries are sorted in ascending order.
   * *   DESC: The entries are sorted in descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The dataset properties. Multiple properties are separated by commas (,). Valid values:
   * 
   * *   DIRECTORY
   * *   FILE
   * 
   * @example
   * FILE
   */
  properties?: string;
  /**
   * @remarks
   * The dataset provider. If the value pai is returned, the dataset is a public dataset provided by PAI.
   * 
   * @example
   * pai
   */
  provider?: string;
  /**
   * @remarks
   * The field used for sorting.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The ID of the iTAG labeled dataset that is used as the source dataset.
   * 
   * @example
   * d-rcdg3wxxxxxhc5jk87
   */
  sourceDatasetId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * *   If SourceType is set to USER, the value of SourceId is a custom string.
   * *   If SourceType is set to ITAG, the value of SourceId is the ID of the labeling job of iTAG.
   * *   If SourceType is set to PAI_PUBLIC_DATASET, SourceId is empty by default.
   * 
   * @example
   * d-rbvg5wzljzjhc9ks92
   */
  sourceId?: string;
  /**
   * @remarks
   * The source types. Multiple source types are separated by commas (,). Valid values:
   * 
   * *   PAI-PUBLIC-DATASET: a public dataset of Platform for AI (PAI).
   * *   ITAG: a dataset generated from a labeling job of iTAG.
   * *   USER: a dataset registered by a user.
   * 
   * @example
   * USER,ITAG
   */
  sourceTypes?: string;
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID. If you do not specify this parameter, the default workspace is used. If the default workspace does not exist, an error is reported.
   * 
   * @example
   * 324**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceTypes: 'DataSourceTypes',
      dataTypes: 'DataTypes',
      label: 'Label',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      properties: 'Properties',
      provider: 'Provider',
      sortBy: 'SortBy',
      sourceDatasetId: 'SourceDatasetId',
      sourceId: 'SourceId',
      sourceTypes: 'SourceTypes',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceTypes: 'string',
      dataTypes: 'string',
      label: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      properties: 'string',
      provider: 'string',
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

