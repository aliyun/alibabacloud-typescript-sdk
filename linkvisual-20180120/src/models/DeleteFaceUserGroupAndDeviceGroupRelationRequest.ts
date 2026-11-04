// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceUserGroupAndDeviceGroupRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The control ID of the synchronization relationship between the user group and the device group. Set this parameter to the value of **ControlId** that you obtained and saved locally when you called the [AddFaceUserGroupAndDeviceGroupRelation](https://help.aliyun.com/document_detail/288342.html) operation to add the face synchronization relationship between the user group and the device group.
   * 
   * This parameter is required.
   * 
   * @example
   * qcb2yea4ha4d****
   */
  controlId?: string;
  /**
   * @remarks
   * The business isolation ID, which is used to isolate data between different business applications under the same Alibaba Cloud account. Set this parameter to the same value of **IsolationId** that you specified when you called the [AddFaceUserGroupAndDeviceGroupRelation](https://help.aliyun.com/document_detail/288342.html) operation to add the face synchronization relationship between the user group and the device group.
   * 
   * This parameter is required.
   * 
   * @example
   * ZheJiangHZ
   */
  isolationId?: string;
  static names(): { [key: string]: string } {
    return {
      controlId: 'ControlId',
      isolationId: 'IsolationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlId: 'string',
      isolationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

