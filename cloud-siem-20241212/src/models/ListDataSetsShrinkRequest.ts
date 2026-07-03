// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSetsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * @example
   * dataset-qt0n8246gs9nackg****
   */
  dataSetId?: string;
  /**
   * @remarks
   * The list of dataset IDs.
   */
  dataSetIdsShrink?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * lmftest
   */
  dataSetName?: string;
  /**
   * @remarks
   * The status of the dataset. Valid values:
   * 
   * - 0: deleted.
   * 
   * - 1: enabled.
   * 
   * @example
   * 0
   */
  dataSetStatus?: number;
  /**
   * @remarks
   * The type of the dataset. Valid values:
   * 
   * - custom: custom.
   * 
   * - preset: predefined.
   * 
   * @example
   * custom
   */
  dataSetType?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of results to return for the request. This parameter is used for queries that use NextToken. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **asc** (default): ascending.
   * 
   * - **desc**: descending.
   * 
   * @example
   * asc
   */
  orderDirection?: string;
  /**
   * @remarks
   * The field to use for sorting. Valid values:
   * 
   * - GmtCreate: creation time.
   * 
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
   * The region where the Data Management Center for threat analysis is deployed. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: Your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that an administrator uses to switch to the perspective of a member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetId: 'DataSetId',
      dataSetIdsShrink: 'DataSetIds',
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
      dataSetIdsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

