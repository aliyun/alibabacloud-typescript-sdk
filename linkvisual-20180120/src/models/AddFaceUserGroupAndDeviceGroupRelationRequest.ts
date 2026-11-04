// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFaceUserGroupAndDeviceGroupRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The device group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * kvjyhurc
   */
  deviceGroupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * TestInstanceId
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The isolation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * TestIsolationId
   */
  isolationId?: string;
  /**
   * @remarks
   * The face synchronization relationship.
   * 
   * This parameter is required.
   * 
   * @example
   * SYNC_INFO_PICTURE
   */
  relation?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * avjyxurd
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      iotInstanceId: 'IotInstanceId',
      isolationId: 'IsolationId',
      relation: 'Relation',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      iotInstanceId: 'string',
      isolationId: 'string',
      relation: 'string',
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

