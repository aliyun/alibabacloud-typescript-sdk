// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchBindPurchasedDevicesResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The ID of the device.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @remarks
   * The error message for the device. This parameter is returned only when an error occurs.
   * 
   * @example
   * some error
   */
  error?: string;
  /**
   * @remarks
   * Space ID.
   * 
   * @example
   * 238*****380-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      error: 'Error',
      groupId: 'GroupId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      error: 'string',
      groupId: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindPurchasedDevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The list of results.
   */
  results?: BatchBindPurchasedDevicesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchBindPurchasedDevicesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

