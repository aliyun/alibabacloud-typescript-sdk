// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDeviceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the device label. If you pass in an empty string, the description is cleared. The description can contain letters, digits, spaces, periods (.), underscores (_), and hyphens (-). Chinese characters are supported.
   * 
   * @example
   * Test device group description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the device label.
   * 
   * @example
   * device-group-5191cf830a5e****
   */
  deviceGroupId?: string;
  /**
   * @remarks
   * The rule operator of the dynamic device group.
   * 
   * @example
   * AND
   * 
   * @deprecated
   */
  dynamicOperator?: string;
  /**
   * @remarks
   * The name of the device label. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). Chinese characters are supported. Spaces are not supported.
   * 
   * @example
   * example
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceGroupId: 'DeviceGroupId',
      dynamicOperator: 'DynamicOperator',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceGroupId: 'string',
      dynamicOperator: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

