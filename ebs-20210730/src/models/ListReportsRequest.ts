// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app-xxx
   */
  appId?: string;
  /**
   * @remarks
   * Maximum number of items for Token-based pagination.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Query token (Token), the value is the NextToken parameter value returned from the previous API call.
   * 
   * @example
   * a6792e832ff0XXXXX
   */
  nextToken?: string;
  /**
   * @remarks
   * Page number for paginated queries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of rows per page when performing paginated queries.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) to query the list of regions supported by Block Storage Data Insights.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

