// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRightsRequest extends $dara.Model {
  /**
   * @remarks
   * Optional AI rights filter. Set to true to query only AI rights, or false to query only regular rights, including historical unmarked rights. If you do not specify this parameter, all rights are queried.
   * 
   * @example
   * true
   */
  aiDesktop?: boolean;
  /**
   * @remarks
   * The scenario code for the commercial edition.
   * 
   * @example
   * GENERAL_OFFICE
   */
  businessSceneCode?: string;
  /**
   * @remarks
   * The maximum number of results per page. Specify a positive integer from 1 to 200.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Do not specify this parameter for the first query. For subsequent queries, pass the NextToken value returned from the previous page exactly as it was returned. The example is for illustration purposes only. Do not construct the token manually.
   * 
   * @example
   * b5f4e3d2c1a09876b5f4e3d2c1a09876
   */
  nextToken?: string;
  /**
   * @remarks
   * The field by which to sort the results, such as gmtCreate, rightsId, or rightsExpireTime. If you do not specify this parameter, the default sorting order of the server is used.
   * 
   * @example
   * gmtCreate
   */
  orderField?: string;
  /**
   * @remarks
   * The sorting order. Valid values: asc and desc (lowercase). Use this parameter together with OrderField.
   * 
   * @example
   * desc
   */
  orderType?: string;
  /**
   * @remarks
   * Specifies whether the rights apply to regions outside the Chinese mainland, including Hong Kong (China), Macao (China), and Taiwan (China). Valid values:
   * - 0: The Chinese mainland.
   * - 1: Regions outside the Chinese mainland, including Hong Kong (China), Macao (China), and Taiwan (China).
   * 
   * @example
   * 0
   */
  overseas?: number;
  /**
   * @remarks
   * The rights activation status. Use the returned value to determine whether the activation is complete.
   * 
   * @example
   * ACTED
   */
  rightsActiveStatus?: string;
  /**
   * @remarks
   * The end user to whom the rights are assigned. For convenience accounts, use EndUserId.
   * 
   * @example
   * user-example
   */
  rightsAssignedUser?: string;
  /**
   * @remarks
   * The list of rights IDs to query or activate. Specify the RightsId values returned by ListRights.
   * 
   * @example
   * ["New_beds-example_0001"]
   */
  rightsIds?: string[];
  /**
   * @remarks
   * The rights period code.
   * 
   * @example
   * BUSINESS_WEEK_1
   */
  rightsPeriod?: string;
  /**
   * @remarks
   * The ID of the resource associated with the rights. This value is returned after the resource is created.
   * 
   * @example
   * ecd-example
   */
  rightsResourceId?: string;
  /**
   * @remarks
   * The rights resource type. Use Desktop for regular cloud computers. For other commodities, specify the actual rights type.
   * 
   * @example
   * Desktop
   */
  rightsResourceType?: string;
  /**
   * @remarks
   * The list of rights resource types to filter.
   * 
   * @example
   * ["Desktop"]
   */
  rightsResourceTypes?: string[];
  /**
   * @remarks
   * The rights specification code. Refer to the rights query results for the actual value.
   * 
   * @example
   * eds.business_edition_office.4c8g
   */
  rightsSpec?: string;
  static names(): { [key: string]: string } {
    return {
      aiDesktop: 'AiDesktop',
      businessSceneCode: 'BusinessSceneCode',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderField: 'OrderField',
      orderType: 'OrderType',
      overseas: 'Overseas',
      rightsActiveStatus: 'RightsActiveStatus',
      rightsAssignedUser: 'RightsAssignedUser',
      rightsIds: 'RightsIds',
      rightsPeriod: 'RightsPeriod',
      rightsResourceId: 'RightsResourceId',
      rightsResourceType: 'RightsResourceType',
      rightsResourceTypes: 'RightsResourceTypes',
      rightsSpec: 'RightsSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiDesktop: 'boolean',
      businessSceneCode: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderField: 'string',
      orderType: 'string',
      overseas: 'number',
      rightsActiveStatus: 'string',
      rightsAssignedUser: 'string',
      rightsIds: { 'type': 'array', 'itemType': 'string' },
      rightsPeriod: 'string',
      rightsResourceId: 'string',
      rightsResourceType: 'string',
      rightsResourceTypes: { 'type': 'array', 'itemType': 'string' },
      rightsSpec: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rightsIds)) {
      $dara.Model.validateArray(this.rightsIds);
    }
    if(Array.isArray(this.rightsResourceTypes)) {
      $dara.Model.validateArray(this.rightsResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

