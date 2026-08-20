// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Rule } from "./Rule";


export class ListDeviceGroupsResponseBodyDeviceGroups extends $dara.Model {
  /**
   * @remarks
   * The device label description.
   * 
   * @example
   * description
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
   * The matching rule of the dynamic device label.
   */
  dynamicRule?: Rule;
  /**
   * @remarks
   * The device label type. Valid values:
   * - **static**: A static device label. Members consist of manually added terminal devices.
   * - **dynamic**: A dynamic device label. Members are automatically calculated by matching rules when terminal devices report heartbeats.
   * 
   * @example
   * static
   */
  groupType?: string;
  /**
   * @remarks
   * Indicates whether the device label is a system built-in device label. Valid values:
   * - **true**: A system built-in device label.
   * - **false**: A user-defined device label.
   * 
   * @example
   * false
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
   * example
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

export class ListDeviceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of device labels.
   */
  deviceGroups?: ListDeviceGroupsResponseBodyDeviceGroups[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FD724DBC-CD76-5235-BF76-59C51B73296D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of device labels.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      deviceGroups: 'DeviceGroups',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroups: { 'type': 'array', 'itemType': ListDeviceGroupsResponseBodyDeviceGroups },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deviceGroups)) {
      $dara.Model.validateArray(this.deviceGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

