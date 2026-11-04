// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFaceUserGroupAndDeviceGroupRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The control ID of the synchronization relationship between the user group and the device group. Pass the **ControlId** value that you obtained and saved locally when you called the [AddFaceUserGroupAndDeviceGroupRelation](https://help.aliyun.com/document_detail/288342.html) operation to add the face synchronization relationship between the user group and the device group.
   * 
   * This parameter is required.
   * 
   * @example
   * qcb2yea4ha4d****
   */
  controlId?: string;
  /**
   * @remarks
   * The business isolation ID, which is used to isolate data between different business applications under the same Alibaba Cloud account. The value must be the same as the **IsolationId** value that you specified when you called the [AddFaceUserGroupAndDeviceGroupRelation](https://help.aliyun.com/document_detail/288342.html) operation to add the face synchronization relationship between the user group and the device group.
   * 
   * This parameter is required.
   * 
   * @example
   * ZheJiangHZ
   */
  isolationId?: string;
  /**
   * @remarks
   * The face synchronization relationship. Currently, only **SYNC_INFO_PICTURE** is supported, which indicates that user photos and user information are synchronized.
   * 
   * This parameter is required.
   * 
   * @example
   * SYNC_INFO_PICTURE
   */
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      controlId: 'ControlId',
      isolationId: 'IsolationId',
      relation: 'Relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlId: 'string',
      isolationId: 'string',
      relation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

