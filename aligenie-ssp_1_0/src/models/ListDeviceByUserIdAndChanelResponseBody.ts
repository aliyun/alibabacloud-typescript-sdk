// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceByUserIdAndChanelResponseBodyResultDeviceUnionIds extends $dara.Model {
  /**
   * @example
   * 1553*B0C3
   */
  deviceUnionId?: string;
  /**
   * @example
   * 1***2
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

export class ListDeviceByUserIdAndChanelResponseBodyResult extends $dara.Model {
  /**
   * @example
   * A963*0158
   */
  deviceOpenId?: string;
  deviceUnionIds?: ListDeviceByUserIdAndChanelResponseBodyResultDeviceUnionIds[];
  static names(): { [key: string]: string } {
    return {
      deviceOpenId: 'DeviceOpenId',
      deviceUnionIds: 'DeviceUnionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceOpenId: 'string',
      deviceUnionIds: { 'type': 'array', 'itemType': ListDeviceByUserIdAndChanelResponseBodyResultDeviceUnionIds },
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

export class ListDeviceByUserIdAndChanelResponseBody extends $dara.Model {
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
   * RE***D
   */
  requestId?: string;
  result?: ListDeviceByUserIdAndChanelResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ListDeviceByUserIdAndChanelResponseBodyResult },
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

