// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDeviceSettingRequestDeviceInfo extends $dara.Model {
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

export class SetDeviceSettingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfo?: SetDeviceSettingRequestDeviceInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nightMode
   */
  key?: string;
  /**
   * @example
   * {"enable":true}
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: SetDeviceSettingRequestDeviceInfo,
      key: 'string',
      value: 'any',
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

