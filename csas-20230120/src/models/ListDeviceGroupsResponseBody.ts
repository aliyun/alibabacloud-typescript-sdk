// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Rule } from "./Rule";


export class ListDeviceGroupsResponseBodyDeviceGroups extends $dara.Model {
  /**
   * @remarks
   * The description of the device tag.
   * 
   * @example
   * description
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
   * The matching rule for the dynamic device tag.
   */
  dynamicRule?: Rule;
  /**
   * @remarks
   * The type of the device tag. Valid values:
   * - **static**: Static device tag. Members consist of manually added terminal devices.
   * - **dynamic**: Dynamic device tag. Members are automatically calculated based on matching rules when terminal devices report heartbeats.
   * 
   * @example
   * static
   */
  groupType?: string;
  /**
   * @remarks
   * Specifies whether the device tag is a built-in system device tag. Valid values:
   * - **true**: Built-in system device tag.
   * - **false**: Custom device tag.
   * 
   * @example
   * false
   */
  isDefault?: string;
  /**
   * @remarks
   * The IDs of the terminal devices that are associated with the device tag.
   */
  matchDevTags?: string[];
  /**
   * @remarks
   * The name of the device tag.
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
   * The list of device tags.
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
   * The total number of device tags.
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

