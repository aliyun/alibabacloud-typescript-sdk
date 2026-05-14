// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemovePolarClawDevicePairResponseBody extends $dara.Model {
  /**
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * device-mac-789
   */
  deviceId?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 580EF224-9647-59E7-9950-D9EBFD6A2921
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      deviceId: 'DeviceId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      deviceId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

