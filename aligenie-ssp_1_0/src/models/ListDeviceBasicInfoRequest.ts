// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceBasicInfoRequestDeviceInfos extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12**45
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
   * OPEN_ID
   */
  idType?: string;
  ids?: string[];
  /**
   * @example
   * 1
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      idType: 'IdType',
      ids: 'Ids',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      idType: 'string',
      ids: { 'type': 'array', 'itemType': 'string' },
      organizationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBasicInfoRequest extends $dara.Model {
  deviceInfos?: ListDeviceBasicInfoRequestDeviceInfos;
  static names(): { [key: string]: string } {
    return {
      deviceInfos: 'DeviceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfos: ListDeviceBasicInfoRequestDeviceInfos,
    };
  }

  validate() {
    if(this.deviceInfos && typeof (this.deviceInfos as any).validate === 'function') {
      (this.deviceInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

