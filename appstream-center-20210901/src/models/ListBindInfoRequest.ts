// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The list of application IDs. You can specify 1 to 100 IDs.
   * 
   * > If you specify this parameter, only the binding information of the specified applications is returned.
   */
  appIdList?: string[];
  /**
   * @remarks
   * The list of delivery group IDs. You can specify 1 to 100 IDs.
   * 
   * > If you specify this parameter, only the binding information of the specified delivery groups is returned.
   */
  appInstanceGroupIdList?: string[];
  /**
   * @remarks
   * The list of application instance IDs. You can specify 1 to 100 IDs.
   * 
   * > If you specify this parameter, only the binding information of the specified application instances is returned.
   */
  appInstanceIdList?: string[];
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of user IDs. You can specify 1 to 100 IDs.
   * 
   * > If you specify this parameter, only the binding information of the specified users is returned.
   */
  userIdList?: string[];
  /**
   * @remarks
   * The list of WUYING user IDs. You can specify 1 to 100 IDs.
   * 
   * > If you specify this parameter, only the binding information of the specified WUYING users is returned.
   */
  wyIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      appIdList: 'AppIdList',
      appInstanceGroupIdList: 'AppInstanceGroupIdList',
      appInstanceIdList: 'AppInstanceIdList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userIdList: 'UserIdList',
      wyIdList: 'WyIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdList: { 'type': 'array', 'itemType': 'string' },
      appInstanceGroupIdList: { 'type': 'array', 'itemType': 'string' },
      appInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      userIdList: { 'type': 'array', 'itemType': 'string' },
      wyIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.appIdList)) {
      $dara.Model.validateArray(this.appIdList);
    }
    if(Array.isArray(this.appInstanceGroupIdList)) {
      $dara.Model.validateArray(this.appInstanceGroupIdList);
    }
    if(Array.isArray(this.appInstanceIdList)) {
      $dara.Model.validateArray(this.appInstanceIdList);
    }
    if(Array.isArray(this.userIdList)) {
      $dara.Model.validateArray(this.userIdList);
    }
    if(Array.isArray(this.wyIdList)) {
      $dara.Model.validateArray(this.wyIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

