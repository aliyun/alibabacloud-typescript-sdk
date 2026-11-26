// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Rule } from "./Rule";


export class GetDeviceGroupResponseBodyDeviceGroup extends $dara.Model {
  /**
   * @remarks
   * The description of the device group.
   * 
   * @example
   * Test device group description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the device group.
   * 
   * @example
   * device-group-5191cf830a5e****
   */
  deviceGroupId?: string;
  /**
   * @remarks
   * The operator for the dynamic device group rule.
   * 
   * @example
   * AND
   * 
   * @deprecated
   */
  dynamicOperator?: string;
  /**
   * @remarks
   * The matching rule for the dynamic device group.
   */
  dynamicRule?: Rule;
  /**
   * @remarks
   * The type of the device group. Valid values:
   * - **static**: A static device group. Its members are terminal devices that are manually added.
   * - **dynamic**: A dynamic device group.
   * 
   * @example
   * static
   */
  groupType?: string;
  /**
   * @remarks
   * Indicates whether the device group is a built-in system device group. Valid values:
   * - **true**: The device group is a built-in system device group.
   * - **false**: The device group is a custom device group.
   * 
   * @example
   * true
   */
  isDefault?: string;
  /**
   * @remarks
   * The IDs of the terminal devices associated with the device group.
   */
  matchDevTags?: string[];
  /**
   * @remarks
   * The name of the device group.
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
   * The device group details.
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

