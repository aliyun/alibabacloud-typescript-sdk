// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueryViewsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of results to return per request when using the NextToken-based pagination. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. You do not need to specify this parameter for the first query or if no more results exist. If more results exist, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The scene to which the query view belongs.
   * 
   * @example
   * Alert
   */
  queryViewScene?: string;
  /**
   * @remarks
   * The view type. If this parameter is left empty, all views are returned.
   * 
   * @example
   * preset
   */
  queryViewType?: string;
  /**
   * @remarks
   * The region where the threat analysis data management center is located. Specify the management center based on the region of your assets. Valid values:
   * 
   * - cn-hangzhou: Your assets belong to the Chinese mainland or Hong Kong (China).
   * - ap-southeast-1: Your assets belong to regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member to which the administrator switches the view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * - 1: the view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      queryViewScene: 'QueryViewScene',
      queryViewType: 'QueryViewType',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      queryViewScene: 'string',
      queryViewType: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

