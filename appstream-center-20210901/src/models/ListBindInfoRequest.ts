// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The app IDs. You can specify 1 to 100 IDs.
   * 
   * >  If you specify this parameter, only the bindings of the specified apps are returned.
   */
  appIdList?: string[];
  /**
   * @remarks
   * The IDs of the delivery groups. You can specify 1 to 100 IDs.
   * 
   * >  If you specify this parameter, only the bindings of the specified delivery groups are returned.
   */
  appInstanceGroupIdList?: string[];
  /**
   * @remarks
   * The IDs of app instances. You can specify 1 to 100 IDs.
   * 
   * >  If you specify this parameter, only the bindings of the specified app instances are returned.
   */
  appInstanceIdList?: string[];
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The user IDs. You can specify 1 to 100 IDs.
   * 
   * >  If you specify this parameter, only the bindings of the specified users are returned.
   */
  userIdList?: string[];
  /**
   * @remarks
   * The IDs of the Alibaba Cloud Workspace users. You can specify 1 to 100 IDs.
   * 
   * >  If you specify this parameter, only the bindings of the specified Alibaba Cloud Workspace users are returned.
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

