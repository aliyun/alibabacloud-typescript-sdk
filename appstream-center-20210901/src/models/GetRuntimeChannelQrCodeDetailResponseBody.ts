// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuntimeChannelQrCodeDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The URL or content of the QR code. If the QR code is not generated or the content is empty, this field is empty.
   * 
   * @example
   * https://qr.example.com/abc
   */
  qrCode?: string;
  /**
   * @remarks
   * The access URL of the QR code configuration channel page. It is generated and sent to the user when the QR code configuration is initiated, and carries the taskId, channel code, and region parameters of the current process. If the URL is not recorded, this field is empty.
   * 
   * @example
   * https://eds.console.aliyun.com/public/scan-pair?taskId=8f14e45f-ceea-4672-9f6e-3c5b2a1d****&code=dingtalk-connector&region=cn-shanghai
   */
  qrCodeNotifyUrl?: string;
  /**
   * @remarks
   * The QR code scan status. Valid values:
   * - Generating: The QR code is being generated.
   * - Generated: The QR code is generated.
   * - GenerateFailed: The QR code generation failed.
   * - Scanned: The QR code is scanned.
   * - Configuring: The configuration is in progress.
   * - Success: The configuration is successful.
   * - Failed: The configuration failed.
   * - Expired: The process has expired.
   * 
   * @example
   * Generated
   */
  qrCodeStatus?: string;
  /**
   * @remarks
   * The status of the QR code configuration process. The value is the same as QrCodeStatus. Valid values:
   * - Generating: The QR code is being generated.
   * - Generated: The QR code is generated.
   * - GenerateFailed: The QR code generation failed.
   * - Scanned: The QR code is scanned.
   * - Configuring: The configuration is in progress.
   * - Success: The configuration is successful.
   * - Failed: The configuration failed.
   * - Expired: The process has expired.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      qrCode: 'QrCode',
      qrCodeNotifyUrl: 'QrCodeNotifyUrl',
      qrCodeStatus: 'QrCodeStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qrCode: 'string',
      qrCodeNotifyUrl: 'string',
      qrCodeStatus: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuntimeChannelQrCodeDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The QR code configuration details of the channel. If no QR code configuration process exists for the channel under the specified runtime, this field is empty.
   */
  data?: GetRuntimeChannelQrCodeDetailResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRuntimeChannelQrCodeDetailResponseBodyData,
      requestId: 'string',
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

