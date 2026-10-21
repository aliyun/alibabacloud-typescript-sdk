// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * dataset-qt0n8246gs9nackg****
   */
  dataSetId?: string;
  /**
   * @remarks
   * The list of dataset IDs.
   */
  dataSetIds?: string[];
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * lmftest
   */
  dataSetName?: string;
  /**
   * @remarks
   * The dataset status. Valid values:
   * - 0: deleted.
   * - 1: enabled.
   * 
   * @example
   * 0
   */
  dataSetStatus?: number;
  /**
   * @remarks
   * The dataset type. Valid values:
   * - custom: custom dataset.
   * - preset: predefined dataset.
   * 
   * @example
   * custom
   */
  dataSetType?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * This parameter is required in practice. If you do not specify this parameter, the API returns a 400 error (The specified Lang can not be empty.). Valid values: zh and en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of results to return when you use the NextToken-based pagination method. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - **asc** (default): ascending order.
   * - **desc**: descending order.
   * 
   * @example
   * asc
   */
  orderDirection?: string;
  /**
   * @remarks
   * The field used for sorting. Valid values:
   * - GmtCreate: creation time.
   * - GmtModified: update time.
   * 
   * @example
   * GmtCreate
   */
  orderFieldName?: string;
  /**
   * @remarks
   * The page number.
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
  pageSize?: number;
  /**
   * @remarks
   * The region where the threat analysis data management center resides. Specify the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: The assets reside in the Chinese mainland.
   * - ap-southeast-1: The assets reside outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member to which the administrator switches the view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetId: 'DataSetId',
      dataSetIds: 'DataSetIds',
      dataSetName: 'DataSetName',
      dataSetStatus: 'DataSetStatus',
      dataSetType: 'DataSetType',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderDirection: 'OrderDirection',
      orderFieldName: 'OrderFieldName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetId: 'string',
      dataSetIds: { 'type': 'array', 'itemType': 'string' },
      dataSetName: 'string',
      dataSetStatus: 'number',
      dataSetType: 'string',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderDirection: 'string',
      orderFieldName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSetIds)) {
      $dara.Model.validateArray(this.dataSetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

