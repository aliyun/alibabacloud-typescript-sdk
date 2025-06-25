// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindInfoRequest extends $dara.Model {
  appIdList?: string[];
  appInstanceGroupIdList?: string[];
  appInstanceIdList?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  userIdList?: string[];
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

