// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadScriptRecordingResponseBodyDownloadParams extends $dara.Model {
  /**
   * @remarks
   * Recording file name
   * 
   * @example
   * 281eb174-3865-41c1-9274-7b6813edadab.wav
   */
  fileName?: string;
  /**
   * @remarks
   * A URL pointing to the recording file. Use this address for playback or download.
   * 
   * @example
   * http://tiangong-staging.oss-cn-shanghai.aliyuncs.com/record/281eb174-3865-41c1-9274-7b6813edadab.wav?Expires=1578624046&OSSAccessKeyId=LTAI****cqw&Signature=dL2dxWS6VcdZrvG9xOMOBMSP3Fg%3D
   */
  signatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      signatureUrl: 'SignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      signatureUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadScriptRecordingResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Parameters
   */
  downloadParams?: DownloadScriptRecordingResponseBodyDownloadParams;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Success
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downloadParams: 'DownloadParams',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downloadParams: DownloadScriptRecordingResponseBodyDownloadParams,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.downloadParams && typeof (this.downloadParams as any).validate === 'function') {
      (this.downloadParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

