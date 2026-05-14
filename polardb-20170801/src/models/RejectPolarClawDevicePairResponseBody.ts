// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RejectPolarClawDevicePairResponseBody extends $dara.Model {
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
   * device-784x37k0vko734fk
   */
  deviceId?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * req-abc-123
   */
  pairRequestId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CD35F3-F3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      deviceId: 'DeviceId',
      message: 'Message',
      pairRequestId: 'PairRequestId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      deviceId: 'string',
      message: 'string',
      pairRequestId: 'string',
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

