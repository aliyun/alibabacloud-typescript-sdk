// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApprovePolarClawDevicePairResponseBodyDevice extends $dara.Model {
  /**
   * @remarks
   * The creation time of the device pairing, in Unix milliseconds.
   * 
   * @example
   * 1778662316663
   */
  createdAtMs?: number;
  /**
   * @remarks
   * The device family.
   * 
   * @example
   * server
   */
  deviceFamily?: string;
  /**
   * @remarks
   * The unique ID of the device.
   * 
   * @example
   * device-l7rdl36iz6op66zf
   */
  deviceId?: string;
  /**
   * @remarks
   * The display name of the device.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The operating system of the device.
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The role of the device.
   * 
   * @example
   * operator
   */
  role?: string;
  /**
   * @remarks
   * A list of permission scopes.
   */
  scopes?: string[];
  static names(): { [key: string]: string } {
    return {
      createdAtMs: 'CreatedAtMs',
      deviceFamily: 'DeviceFamily',
      deviceId: 'DeviceId',
      displayName: 'DisplayName',
      platform: 'Platform',
      role: 'Role',
      scopes: 'Scopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAtMs: 'number',
      deviceFamily: 'string',
      deviceId: 'string',
      displayName: 'string',
      platform: 'string',
      role: 'string',
      scopes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scopes)) {
      $dara.Model.validateArray(this.scopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApprovePolarClawDevicePairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-********************
   */
  applicationId?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The paired device information.
   */
  device?: ApprovePolarClawDevicePairResponseBodyDevice;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pairing request ID.
   * 
   * @example
   * req-abc-123
   */
  pairRequestId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25C70FF3-D49B-594D-BECE-0DE2BA1D8BBB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      device: 'Device',
      message: 'Message',
      pairRequestId: 'PairRequestId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      device: ApprovePolarClawDevicePairResponseBodyDevice,
      message: 'string',
      pairRequestId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.device && typeof (this.device as any).validate === 'function') {
      (this.device as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

