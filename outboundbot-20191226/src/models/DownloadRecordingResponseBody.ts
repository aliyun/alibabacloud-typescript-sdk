// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadRecordingResponseBodyDownloadParams extends $dara.Model {
  /**
   * @remarks
   * The signed download URL for the early media recording file.
   */
  earlyMediaSignatureUrl?: string;
  /**
   * @remarks
   * The name of the recording file, which is typically a UUID.
   * 
   * @example
   * 281eb174-3865-41c1-9274-7b6813edadab.wav
   */
  fileName?: string;
  /**
   * @remarks
   * The URL used to download the recording file over HTTP.
   * 
   * @example
   * http://tiangong-staging.oss-cn-shanghai.aliyuncs.com/record/281eb174-3865-41c1-9274-7b6813edadab.wav?Expires=1578624046&OSSAccessKeyId=LTAI****cqw&Signature=dL2dxWS6VcdZrvG9xOMOBMSP3Fg%3D
   */
  signatureUrl?: string;
  /**
   * @remarks
   * The list of segmented recordings, including the file names and file URLs.
   * 
   * @example
   * [{"fileName":"10a17c447415424c99491884abe27d8a-1.wav","filePath":"https://ssml-test.oss-cn-shanghai.aliyuncs.com/7253/voiceSlice/10a17c447415424c99491884abe27d8a/10a17c447415424c99491884abe27d8a-1.wav?Expires=1686645470&OSSAccessKeyId=LTA*********kr8M9&Signature=V23OhiV5yIOoouriu6SiWkO9h8E%3D"}]
   */
  voiceSliceRecordingListJson?: string;
  static names(): { [key: string]: string } {
    return {
      earlyMediaSignatureUrl: 'EarlyMediaSignatureUrl',
      fileName: 'FileName',
      signatureUrl: 'SignatureUrl',
      voiceSliceRecordingListJson: 'VoiceSliceRecordingListJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      earlyMediaSignatureUrl: 'string',
      fileName: 'string',
      signatureUrl: 'string',
      voiceSliceRecordingListJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadRecordingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The download URL.
   */
  downloadParams?: DownloadRecordingResponseBodyDownloadParams;
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
   * The response message.
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
      downloadParams: DownloadRecordingResponseBodyDownloadParams,
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

