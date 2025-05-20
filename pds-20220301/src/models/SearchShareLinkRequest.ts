// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchShareLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The creators of shares. Set this parameter to a user ID. If you do not specify this parameter, Drive and Photo Service automatically queries shares based on your permissions. If you are a drive administrator or the super administrator, the shares created by all members are queried. If you are a team administrator, the shares created by all team members are queried. If you are a common user, only the shares created by yourself are queried.
   * 
   * If you specify this parameter, this parameter must be set to the ID of the super administrator, a drive administrator, or a team administrator.
   */
  creators?: string[];
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * The number of returned results must be less than or equal to the specified number.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.\\
   * By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The field by which to sort the returned results. Default value: created_at. Valid values:
   * 
   * *   share_name: sorts the results by the name of the share.
   * *   updated_at: sorts the results by the time when the share was modified.
   * *   description: sorts the results by the description of the share.
   * *   created_at: sorts the results by the time when the share was created.
   * 
   * @example
   * created_at
   */
  orderBy?: string;
  /**
   * @remarks
   * The order in which you want to sort the returned results. By default, order_direction is set to DESC if order_by is set to created_at or updated_at, and is set to ASC if order_by is set to other values. Valid values:
   * 
   * *   ASC: sorts the results in ascending order.
   * *   DESC: sorts the results in descending order.
   * 
   * @example
   * ASC
   */
  orderDirection?: string;
  /**
   * @remarks
   * The query condition that is used to search for share URLs. You can use the following fields to specify query conditions: created_at: queries a share URL based on the time when the share URL was created. updated_at: queries a share URL based on the time when the share URL was modified. share_name_for_fuzzy: queries a share URL based on the name of the share. A fuzzy match is supported. status: queries a share URL based on the status of the share. Valid values: enabled and disabled. A value of enabled indicates that the share is valid. A value of disabled indicates that the share is canceled. expired_time: queries a share URL based on the expiration time of the share. If the share never expires, set this field to 1970-01-01T00:00:00. Otherwise, set this field to 1970-01-02T00:00:00.
   * 
   * @example
   * created_at>=\\"2022-01-18T02:50:00\\" and created_at<\\"2022-01-19T09:45:28\\" and share_name_for_fuzzy match \\"HD.mp4\\" and status in [\\"enabled\\", \\"disabled\\"] and expired_time=\\"1970-01-01T00:00:00\\"
   */
  query?: string;
  /**
   * @remarks
   * Specifies whether to return the total number of returned results.
   * 
   * @example
   * false
   */
  returnTotalCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      creators: 'creators',
      limit: 'limit',
      marker: 'marker',
      orderBy: 'order_by',
      orderDirection: 'order_direction',
      query: 'query',
      returnTotalCount: 'return_total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creators: { 'type': 'array', 'itemType': 'string' },
      limit: 'number',
      marker: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      query: 'string',
      returnTotalCount: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.creators)) {
      $dara.Model.validateArray(this.creators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

