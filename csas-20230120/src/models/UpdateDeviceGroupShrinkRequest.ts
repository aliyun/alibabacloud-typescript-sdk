// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDeviceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the device label. Set this parameter to an empty string to clear the description. The description can contain letters, digits, Chinese characters, spaces, periods (.), underscores (_), and hyphens (-).
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
   * The operator of the dynamic device group rule.
   * 
   * @example
   * AND
   * 
   * @deprecated
   */
  dynamicOperator?: string;
  /**
   * @remarks
   * The matching rule of the dynamic device label.
   */
  dynamicRuleShrink?: string;
  /**
   * @remarks
   * The name of the device label. The name must be 1 to 128 characters in length and can contain letters, digits, Chinese characters, periods (.), underscores (_), and hyphens (-). Spaces are not supported.
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
      dynamicRuleShrink: 'DynamicRule',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceGroupId: 'string',
      dynamicOperator: 'string',
      dynamicRuleShrink: 'string',
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

