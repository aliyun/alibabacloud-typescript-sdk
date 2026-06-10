// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportScriptResponseBodyDownloadParams extends $dara.Model {
  /**
   * @remarks
   * The download URL. This parameter is returned only for legacy canvases.
   * 
   * > **For modern canvases**: After the scenario is exported, call the **ListDownloadTasks** operation to obtain the \\`TaskId\\` (for example, \\`5d352db754fe430xxxxxxx\\`) and \\`FileId\\` (for example, \\`5d000f3f6eae4228b2731427xxxxxx\\`). Then, call the **CreateDownloadUrl** operation to obtain the download URL.
   * 
   * @example
   * http://tiangong-staging.oss-cn-shanghai.aliyuncs.com/record/281eb174-3865-41c1-9274-7b6813edadab.wav?Expires=1578624046&OSSAccessKeyId=LTAI****cqw&Signature=dL2dxWS6VcdZrvG9xOMOBMSP3Fg%3D
   */
  signatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      signatureUrl: 'SignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ExportScriptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The signed URL that you can use to download the script. This parameter is returned only for legacy canvases.
   */
  downloadParams?: ExportScriptResponseBodyDownloadParams;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      downloadParams: ExportScriptResponseBodyDownloadParams,
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

