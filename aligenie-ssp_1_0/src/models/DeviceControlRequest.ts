// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeviceControlRequestControlRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  muted?: boolean;
  /**
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
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
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
  controlRequest?: DeviceControlRequestControlRequest;
  /**
   * @remarks
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

