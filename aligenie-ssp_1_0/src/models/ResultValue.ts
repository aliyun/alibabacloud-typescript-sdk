// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ResultValueDeviceUnionIds extends $dara.Model {
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * 1**2
   */
  organizationId?: string;
  /**
   * @remarks
   * The UnionId of the device.
   * 
   * @example
   * 1553*B0C3
   */
  deviceUnionId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      deviceUnionId: 'DeviceUnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      deviceUnionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultValue extends $dara.Model {
  /**
   * @remarks
   * The openId corresponding to the device.
   * 
   * @example
   * A963*0158
   */
  deviceOpenId?: string;
  /**
   * @remarks
   * The organization ID and UnionId information corresponding to the device.
   */
  deviceUnionIds?: ResultValueDeviceUnionIds[];
  /**
   * @remarks
   * The name of the device.
   * 
   * @example
   * 我的设备
   */
  name?: string;
  /**
   * @remarks
   * The firmware version of the device.
   * 
   * @example
   * 2.0.3
   */
  firmwareVersion?: string;
  /**
   * @remarks
   * The MAC address of the device.
   * 
   * @example
   * b4:xx:xx:xx:65:2b
   */
  mac?: string;
  /**
   * @remarks
   * The SN information of the device.
   * 
   * @example
   * 1200xx048
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      deviceOpenId: 'DeviceOpenId',
      deviceUnionIds: 'DeviceUnionIds',
      name: 'Name',
      firmwareVersion: 'FirmwareVersion',
      mac: 'Mac',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceOpenId: 'string',
      deviceUnionIds: { 'type': 'array', 'itemType': ResultValueDeviceUnionIds },
      name: 'string',
      firmwareVersion: 'string',
      mac: 'string',
      sn: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deviceUnionIds)) {
      $dara.Model.validateArray(this.deviceUnionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

