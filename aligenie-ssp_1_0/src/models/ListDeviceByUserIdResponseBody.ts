// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceByUserIdResponseBodyResultDeviceUnionIds extends $dara.Model {
  /**
   * @remarks
   * The UnionId of the device.
   * 
   * @example
   * 1553*B0C3
   */
  deviceUnionId?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * 1**2
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceUnionId: 'DeviceUnionId',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceUnionId: 'string',
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

export class ListDeviceByUserIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The openId corresponding to the Device Information.
   * 
   * @example
   * A963*0158
   */
  deviceOpenId?: string;
  /**
   * @remarks
   * Organization ID and UnionId information corresponding to the device.
   */
  deviceUnionIds?: ListDeviceByUserIdResponseBodyResultDeviceUnionIds[];
  static names(): { [key: string]: string } {
    return {
      deviceOpenId: 'DeviceOpenId',
      deviceUnionIds: 'DeviceUnionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceOpenId: 'string',
      deviceUnionIds: { 'type': 'array', 'itemType': ListDeviceByUserIdResponseBodyResultDeviceUnionIds },
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

export class ListDeviceByUserIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned error code, where 200 indicates that the invocation succeeded.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The return result of invoking this API.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @remarks
   * Detailed information returned.
   */
  result?: ListDeviceByUserIdResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDeviceByUserIdResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

