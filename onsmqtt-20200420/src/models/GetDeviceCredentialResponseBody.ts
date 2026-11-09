// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceCredentialResponseBodyDeviceCredential extends $dara.Model {
  /**
   * @remarks
   * The client ID of the device.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the access credential of the device was created. Unit: milliseconds.
   * 
   * @example
   * 1605541382000
   */
  createTime?: number;
  /**
   * @remarks
   * The AccessKey ID of the device.
   * 
   * @example
   * DC.Z5fXh9sRRVufyLi6wo****
   */
  deviceAccessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret of the device.
   * 
   * @example
   * DC.BJMkn4eMQJK2vaApTS****
   */
  deviceAccessKeySecret?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the access credential of the device was last updated. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1605541382000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      createTime: 'CreateTime',
      deviceAccessKeyId: 'DeviceAccessKeyId',
      deviceAccessKeySecret: 'DeviceAccessKeySecret',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      createTime: 'number',
      deviceAccessKeyId: 'string',
      deviceAccessKeySecret: 'string',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access credential of the device.
   */
  deviceCredential?: GetDeviceCredentialResponseBodyDeviceCredential;
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * E4581CCF-62AF-44D9-B5B4-D1DQDC0E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCredential: 'DeviceCredential',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCredential: GetDeviceCredentialResponseBodyDeviceCredential,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deviceCredential && typeof (this.deviceCredential as any).validate === 'function') {
      (this.deviceCredential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

