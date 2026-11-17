// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendRuntimeQrCodeConfigChannelMessageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error code when the sending fails, such as Runtime.NotFound (the runtime does not exist) or Runtime.UserNotSupported (the runtime has no authorized user or has multiple authorized users). This parameter is not returned when the sending is successful.
   * 
   * @example
   * Runtime.UserNotSupported
   */
  code?: string;
  /**
   * @remarks
   * The error message when the sending fails. This parameter is not returned when the sending is successful.
   * 
   * @example
   * Runtime has no authorized user
   */
  message?: string;
  /**
   * @remarks
   * The access URL of the QR code configuration channel page. It carries the taskId, channel code, and region parameters for the current process, and has been sent to the authorized user of the runtime by email and SMS. This parameter is returned only when the sending is successful. The taskId is valid for 1 hour.
   * 
   * @example
   * https://eds.console.aliyun.com/public/scan-pair?taskId=8f14e45f-ceea-4672-9f6e-3c5b2a1d****&code=feishu&region=cn-shanghai
   */
  qrCodeNotifyUrl?: string;
  /**
   * @remarks
   * The ID of the runtime resource.
   * 
   * @example
   * ecd-xgads
   */
  runtimeId?: string;
  /**
   * @remarks
   * Indicates whether the QR code configuration channel message for the runtime was initiated successfully. If the value is false, you can check the Code and Message fields for the cause of the failure.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      qrCodeNotifyUrl: 'QrCodeNotifyUrl',
      runtimeId: 'RuntimeId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      qrCodeNotifyUrl: 'string',
      runtimeId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendRuntimeQrCodeConfigChannelMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of sending results for each runtime. Each runtime corresponds to one result. The return order is not guaranteed to be the same as the order of RuntimeIds in the request. Match the results by RuntimeId.
   */
  data?: SendRuntimeQrCodeConfigChannelMessageResponseBodyData[];
  /**
   * @remarks
   * The request ID, which is a unique identifier for the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned sending results, which is the same as the number of results in Data.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': SendRuntimeQrCodeConfigChannelMessageResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

