// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSetRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * dataset-nhcrmjpx1zsorlaq****
   */
  dataSetId?: string;
  /**
   * @remarks
   * The filter conditions, specified as a JSON string. For example: {"field1":"value1","field2":"value2"}
   * 
   * @example
   * {"field1":"value1","field2":"value2"}
   */
  filter?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of results to return for each request when `NextToken` is used for pagination. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - "desc" (default)
   * 
   * - "asc"
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The sort field. Valid values:
   * 
   * - "updatetime" (default)
   * 
   * - "createtime"
   * 
   * @example
   * updatetime
   */
  orderField?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region of the data management center for Threat Analysis. Select the region where your assets are located. Valid values:
   * 
   * - `cn-hangzhou`: For assets in the Chinese mainland.
   * 
   * - `ap-southeast-1`: For assets in regions outside mainland China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that an administrator can use to view data as another member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetId: 'DataSetId',
      filter: 'Filter',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      orderField: 'OrderField',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetId: 'string',
      filter: 'string',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      orderField: 'string',
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

