// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferDeviceInstanceResponseBodyDataFailedList extends $dara.Model {
  /**
   * @remarks
   * The name of the device.
   * 
   * @example
   * e5jdfalekj****
   */
  deviceName?: string;
  /**
   * @remarks
   * The description of the failed transfer.
   * 
   * @example
   * The device has already been transferred or does not belong to the source instance
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferDeviceInstanceResponseBodyDataSuccessList extends $dara.Model {
  /**
   * @remarks
   * The name of the device.
   * 
   * @example
   * e598798j****
   */
  deviceName?: string;
  /**
   * @remarks
   * The description of the successful transfer.
   * 
   * @example
   * success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferDeviceInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of devices that failed to be transferred.
   */
  failedList?: TransferDeviceInstanceResponseBodyDataFailedList[];
  /**
   * @remarks
   * The list of devices that were successfully transferred.
   */
  successList?: TransferDeviceInstanceResponseBodyDataSuccessList[];
  static names(): { [key: string]: string } {
    return {
      failedList: 'FailedList',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedList: { 'type': 'array', 'itemType': TransferDeviceInstanceResponseBodyDataFailedList },
      successList: { 'type': 'array', 'itemType': TransferDeviceInstanceResponseBodyDataSuccessList },
    };
  }

  validate() {
    if(Array.isArray(this.failedList)) {
      $dara.Model.validateArray(this.failedList);
    }
    if(Array.isArray(this.successList)) {
      $dara.Model.validateArray(this.successList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferDeviceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code:
   * 
   * - **200**: The call was successful.
   * - Other values: The call failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result.
   */
  data?: TransferDeviceInstanceResponseBodyData;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * The source instance and the target instance cannot be the same
   */
  errorMessage?: string;
  /**
   * @remarks
   * The unique identifier that Alibaba Cloud generates for the request.
   * 
   * @example
   * 27AF2E38-12ED-4F67-BD20-36E812CD7A42
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: TransferDeviceInstanceResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

