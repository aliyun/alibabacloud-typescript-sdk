// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueryViewsResponseBodyQueryViews extends $dara.Model {
  /**
   * @remarks
   * The custom query condition of the view.
   * 
   * @example
   * preset
   */
  queryViewCondition?: string;
  /**
   * @remarks
   * The alert filter statement of the view.
   * 
   * @example
   * module_code: alibaba_cloud_sas_custom_rule
   */
  queryViewCriteria?: string;
  /**
   * @remarks
   * The list of displayed fields.
   * 
   * @example
   * ["alert_name_cn","alert_type_cn","entity_list","alert_level","alert_status","start_time","end_time"]
   */
  queryViewFields?: string;
  /**
   * @remarks
   * The unique identifier of the query view.
   * 
   * @example
   * qv-a1b2c3d4e5f6g7h8****
   */
  queryViewId?: string;
  /**
   * @remarks
   * The view name.
   * 
   * @example
   * alert
   */
  queryViewName?: string;
  /**
   * @remarks
   * The display order.
   * 
   * @example
   * 1
   */
  queryViewOrder?: string;
  /**
   * @remarks
   * The scene to which the view belongs.
   * 
   * @example
   * Alert
   */
  queryViewScene?: string;
  /**
   * @remarks
   * The view status.
   * 
   * @example
   * 2
   */
  queryViewStatus?: string;
  /**
   * @remarks
   * The view type.
   * 
   * @example
   * preset
   */
  queryViewType?: string;
  static names(): { [key: string]: string } {
    return {
      queryViewCondition: 'QueryViewCondition',
      queryViewCriteria: 'QueryViewCriteria',
      queryViewFields: 'QueryViewFields',
      queryViewId: 'QueryViewId',
      queryViewName: 'QueryViewName',
      queryViewOrder: 'QueryViewOrder',
      queryViewScene: 'QueryViewScene',
      queryViewStatus: 'QueryViewStatus',
      queryViewType: 'QueryViewType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryViewCondition: 'string',
      queryViewCriteria: 'string',
      queryViewFields: 'string',
      queryViewId: 'string',
      queryViewName: 'string',
      queryViewOrder: 'string',
      queryViewScene: 'string',
      queryViewStatus: 'string',
      queryViewType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryViewsResponseBody extends $dara.Model {
  logProjectName?: string;
  logRegionId?: string;
  logStoreName?: string;
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
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request or if no more results exist. If more results exist, set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * AAAAASLVeIxed4466E0LVmGkzwS6hJKd9DGVGMDRM6Lu****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of query views.
   */
  queryViews?: ListQueryViewsResponseBodyQueryViews[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logProjectName: 'LogProjectName',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      queryViews: 'QueryViews',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logProjectName: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      queryViews: { 'type': 'array', 'itemType': ListQueryViewsResponseBodyQueryViews },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queryViews)) {
      $dara.Model.validateArray(this.queryViews);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

