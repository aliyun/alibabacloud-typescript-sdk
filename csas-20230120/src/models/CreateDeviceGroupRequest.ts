// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Rule } from "./Rule";


export class CreateDeviceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the device label. The description can contain letters, digits, Chinese characters, spaces, periods (.), underscores (_), and hyphens (-). This parameter can be left empty.
   * 
   * @example
   * Test device group description
   */
  description?: string;
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
  dynamicRule?: Rule;
  /**
   * @remarks
   * The type of the device label. Valid values:
   * 
   * - **static**: static device label. After creation, manually add terminal devices by calling [AddDeviceGroupMatchDevices](~~AddDeviceGroupMatchDevices~~).
   * - **dynamic**: dynamic device label. Members are automatically matched by the DynamicRule matching rule.
   * 
   * @example
   * static
   */
  groupType?: string;
  /**
   * @remarks
   * The name of the device label. The name must be 1 to 128 characters in length and can contain letters, digits, Chinese characters, periods (.), underscores (_), and hyphens (-). Spaces are not supported.
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

