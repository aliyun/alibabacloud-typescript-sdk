// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDeviceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the device tag. If you pass an empty string, the description is cleared. The description can contain Chinese characters, uppercase and lowercase letters, digits, spaces, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * Test device group description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the device tag.
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
   * The matching rule for the dynamic device tag.
   */
  dynamicRuleShrink?: string;
  /**
   * @remarks
   * The name of the device tag. The name must be 1 to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-). Spaces are not supported.
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

