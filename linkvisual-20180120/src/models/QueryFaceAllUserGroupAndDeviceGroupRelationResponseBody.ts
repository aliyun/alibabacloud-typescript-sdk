// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The control ID of the synchronization relationship between the user group and the device group.
   * 
   * @example
   * ni1iyxqry0j0****
   */
  controlId?: string;
  /**
   * @remarks
   * The face synchronization relationship type, which synchronizes user photos and user information.
   * 
   * @example
   * SYNC_INFO_PICTURE
   */
  controlType?: string;
  /**
   * @remarks
   * The device group ID.
   * 
   * @example
   * TestDeviceGro****
   */
  deviceGroupId?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2020-05-12 17:12:37
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * TestUserGro****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      controlId: 'ControlId',
      controlType: 'ControlType',
      deviceGroupId: 'DeviceGroupId',
      modifiedTime: 'ModifiedTime',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlId: 'string',
      controlType: 'string',
      deviceGroupId: 'string',
      modifiedTime: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of face synchronization relationships between user groups and device groups.
   */
  list?: QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyDataList },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupAndDeviceGroupRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A13279A-5640-45E7-87AA-83750541AD0E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

