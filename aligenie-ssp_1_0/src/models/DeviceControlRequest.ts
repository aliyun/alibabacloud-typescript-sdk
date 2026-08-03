// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeviceControlRequestControlRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether mute is enabled. If this field is set to true, you must also specify the volume value as 0.
   * 
   * @example
   * false
   */
  muted?: boolean;
  /**
   * @remarks
   * Target volume value
   * 
   * @example
   * 10
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      muted: 'Muted',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      muted: 'boolean',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type. Enter the Project ID of the project where the product resides. You can View this in the Tmall Genie AI platform console.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding Type. Enter PROJECT_ID here.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID. Enter the value of deviceOpenId or deviceUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The type of Device ID:  
   * OPEN_ID: The default Device ID identity.  
   * UNION_ID: The organization-dimension Device ID identity. You must request an organization in advance on the Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID of the device. Required if IdType is UNION_ID.
   * 
   * @example
   * 1*****2
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlRequest extends $dara.Model {
  /**
   * @remarks
   * Input parameters for volume control
   */
  controlRequest?: DeviceControlRequestControlRequest;
  /**
   * @remarks
   * List of device ID information.
   * 
   * This parameter is required.
   */
  deviceInfo?: DeviceControlRequestDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      controlRequest: 'ControlRequest',
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlRequest: DeviceControlRequestControlRequest,
      deviceInfo: DeviceControlRequestDeviceInfo,
    };
  }

  validate() {
    if(this.controlRequest && typeof (this.controlRequest as any).validate === 'function') {
      (this.controlRequest as any).validate();
    }
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

