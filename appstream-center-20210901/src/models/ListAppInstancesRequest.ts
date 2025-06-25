// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-4p5f8tj16yb8b****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the application instance.
   * 
   * @example
   * ai-azn3kmwruh1vl****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The IDs of the application instances. Up to 100 IDs can be specified.
   * 
   * **if can be null:**
   * false
   */
  appInstanceIdList?: string[];
  /**
   * @remarks
   * Specifies whether to query the information about deleted app instances. If you set this parameter to true, you must configure AppInstanceIdList. Otherwise, a parameter error is reported.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  includeDeleted?: boolean;
  /**
   * @remarks
   * The page number. Default value: `1`. We recommend that you specify this parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The value cannot be greater than `100`. Default value: `20`. We recommend that you specify this parameter.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the application instances.
   * 
   * **if can be null:**
   * false
   */
  status?: string[];
  /**
   * @remarks
   * The user IDs. You can specify up to 100 IDs.
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

