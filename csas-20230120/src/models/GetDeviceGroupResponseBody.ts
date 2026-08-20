// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Rule } from "./Rule";


export class GetDeviceGroupResponseBodyDeviceGroup extends $dara.Model {
  /**
   * @remarks
   * The device label description.
   * 
   * @example
   * Test device group description
   */
  description?: string;
  /**
   * @remarks
   * The device label ID.
   * 
   * @example
   * device-group-5191cf830a5e****
   */
  deviceGroupId?: string;
  /**
   * @remarks
   * The dynamic device group rule operator.
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
   * The device label type. Valid values:
   * - **static**: Static device label. Members consist of manually added terminal devices.
   * - **dynamic**: Dynamic device label.
   * 
   * @example
   * static
   */
  groupType?: string;
  /**
   * @remarks
   * Indicates whether the device label is a system built-in device label. Valid values:
   * - **true**: System built-in device label.
   * - **false**: User-defined device label.
   * 
   * @example
   * true
   */
  isDefault?: string;
  /**
   * @remarks
   * The collection of terminal device IDs associated with the device label.
   */
  matchDevTags?: string[];
  /**
   * @remarks
   * The device label name.
   * 
   * @example
   * autotest_a1b2bfd0
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceGroupId: 'DeviceGroupId',
      dynamicOperator: 'DynamicOperator',
      dynamicRule: 'DynamicRule',
      groupType: 'GroupType',
      isDefault: 'IsDefault',
      matchDevTags: 'MatchDevTags',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceGroupId: 'string',
      dynamicOperator: 'string',
      dynamicRule: Rule,
      groupType: 'string',
      isDefault: 'string',
      matchDevTags: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(this.dynamicRule && typeof (this.dynamicRule as any).validate === 'function') {
      (this.dynamicRule as any).validate();
    }
    if(Array.isArray(this.matchDevTags)) {
      $dara.Model.validateArray(this.matchDevTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The device label details.
   */
  deviceGroup?: GetDeviceGroupResponseBodyDeviceGroup;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroup: 'DeviceGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroup: GetDeviceGroupResponseBodyDeviceGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deviceGroup && typeof (this.deviceGroup as any).validate === 'function') {
      (this.deviceGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

