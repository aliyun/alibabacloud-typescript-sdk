// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceIdByIdentityResponseBodyResultDeviceUnionIds extends $dara.Model {
  /**
   * @example
   * 1553*B0C3
   */
  deviceUnionId?: string;
  /**
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

export class GetDeviceIdByIdentityResponseBodyResult extends $dara.Model {
  /**
   * @example
   * A963*0158
   */
  deviceOpenId?: string;
  deviceUnionIds?: GetDeviceIdByIdentityResponseBodyResultDeviceUnionIds[];
  static names(): { [key: string]: string } {
    return {
      deviceOpenId: 'DeviceOpenId',
      deviceUnionIds: 'DeviceUnionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceOpenId: 'string',
      deviceUnionIds: { 'type': 'array', 'itemType': GetDeviceIdByIdentityResponseBodyResultDeviceUnionIds },
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

export class GetDeviceIdByIdentityResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7DA****A0726E
   */
  requestId?: string;
  result?: GetDeviceIdByIdentityResponseBodyResult;
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
      result: GetDeviceIdByIdentityResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

