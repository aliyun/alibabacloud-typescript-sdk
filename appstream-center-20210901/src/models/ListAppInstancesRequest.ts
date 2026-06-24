// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-4p5f8tj16yb8b****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The application instance ID.
   * 
   * @example
   * ai-azn3kmwruh1vl****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The list of application instance IDs. A maximum of 100 IDs can be specified.
   * 
   * **if can be null:**
   * false
   */
  appInstanceIdList?: string[];
  /**
   * @remarks
   * Specifies whether to query information about deleted instances. If this parameter is set to true, the AppInstanceIdList parameter is required. Otherwise, a parameter error is returned.
   * 
   * @example
   * true
   */
  includeDeleted?: boolean;
  /**
   * @remarks
   * The page number of the query results to display. Default value: `1`. Specify this parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of query results per page. Maximum value: `100`. Default value: `20`. Specify this parameter.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of application instance statuses.
   * 
   * **if can be null:**
   * false
   */
  status?: string[];
  /**
   * @remarks
   * The list of user IDs. A maximum of 100 IDs can be specified.
   */
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appInstanceIdList: 'AppInstanceIdList',
      includeDeleted: 'IncludeDeleted',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      includeDeleted: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      status: { 'type': 'array', 'itemType': 'string' },
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.appInstanceIdList)) {
      $dara.Model.validateArray(this.appInstanceIdList);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.userIdList)) {
      $dara.Model.validateArray(this.userIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

