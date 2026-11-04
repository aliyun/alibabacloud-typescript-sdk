// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFaceDeviceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the device group. You can customize the value. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * TestDeviceGroup
   */
  deviceGroupName?: string;
  /**
   * @remarks
   * The business isolation ID. It is used to isolate data between different business applications under the same Alibaba Cloud account. It supports uppercase and lowercase English letters and digits.
   * 
   * For example, if you have face recognition businesses in Region A and Region B, you can set different business isolation IDs to distinguish the face recognition businesses in Region A and Region B.
   * 
   * >Notice: 
   * Save the business isolation ID properly for use when you call other API operations in this business isolation zone.
   * 
   * This parameter is required.
   * 
   * @example
   * ZheJiangHZ
   */
  isolationId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupName: 'DeviceGroupName',
      isolationId: 'IsolationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupName: 'string',
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

