// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Rule } from "./Rule";


export class CreateDeviceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the device tag. The description can contain Chinese characters, uppercase and lowercase letters, digits, spaces, periods (.), underscores (_), and hyphens (-). This parameter can be left empty.
   * 
   * @example
   * Test device group description
   */
  description?: string;
  /**
   * @remarks
   * The operator for dynamic device group rules.
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
  dynamicRule?: Rule;
  /**
   * @remarks
   * The type of the device tag. Valid values:
   * - **static**: static device tag. After the tag is created, you can manually add terminal devices by calling the [AddDeviceGroupMatchDevices](~~AddDeviceGroupMatchDevices~~) operation.
   * - **dynamic**: dynamic device tag. Members are automatically matched based on the DynamicRule matching rule.
   * 
   * @example
   * static
   */
  groupType?: string;
  /**
   * @remarks
   * The name of the device tag. The name must be 1 to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-). Spaces are not allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dynamicOperator: 'DynamicOperator',
      dynamicRule: 'DynamicRule',
      groupType: 'GroupType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dynamicOperator: 'string',
      dynamicRule: Rule,
      groupType: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.dynamicRule && typeof (this.dynamicRule as any).validate === 'function') {
      (this.dynamicRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

