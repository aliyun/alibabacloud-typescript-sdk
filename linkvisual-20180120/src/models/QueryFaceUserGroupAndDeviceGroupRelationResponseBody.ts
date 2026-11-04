// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceUserGroupAndDeviceGroupRelationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The control ID for the face synchronization relationship between user groups and device groups.
   * 
   * @example
   * ni1iyxqry0j03plv
   */
  controlId?: string;
  /**
   * @remarks
   * The face synchronization relationship.
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
   * TestDeviceGroupId
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
   * TestUserGroupId
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

export class QueryFaceUserGroupAndDeviceGroupRelationResponseBody extends $dara.Model {
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
   * The return value of the API call.
   */
  data?: QueryFaceUserGroupAndDeviceGroupRelationResponseBodyData;
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
   * Indicates whether the API call is successful.
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
      data: QueryFaceUserGroupAndDeviceGroupRelationResponseBodyData,
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

