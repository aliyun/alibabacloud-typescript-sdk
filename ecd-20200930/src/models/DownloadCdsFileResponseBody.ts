// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadCdsFileResponseBodyDownloadFileModel extends $dara.Model {
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * None.
   */
  downloadType?: string;
  /**
   * @remarks
   * The download URL.
   * 
   * @example
   * https://pds-****-bj-169380****.oss-cn-beijing.aliyuncs.com/A0SK****?di=****&dr=1030&f=667d****&response-content-disposition=attachment%3B%20
   */
  downloadUrl?: string;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * None.
   */
  expirationSecond?: string;
  /**
   * @remarks
   * The expiration time of the file download URL.
   * 
   * @example
   * 2024-07-18T02:55:49.795Z
   */
  expirationTime?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 667d5a322ebf7409e91c485d808fb3bd8a73****
   */
  fileId?: string;
  /**
   * @remarks
   * The file size, in bytes.
   * 
   * @example
   * 1594642
   */
  size?: number;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * None.
   */
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      downloadType: 'DownloadType',
      downloadUrl: 'DownloadUrl',
      expirationSecond: 'ExpirationSecond',
      expirationTime: 'ExpirationTime',
      fileId: 'FileId',
      size: 'Size',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadType: 'string',
      downloadUrl: 'string',
      expirationSecond: 'string',
      expirationTime: 'string',
      fileId: 'string',
      size: 'number',
      streamUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCdsFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URL for downloading the file.
   */
  downloadFileModel?: DownloadCdsFileResponseBodyDownloadFileModel;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E3ED9519-DD73-5C86-9C0A-43C9281C****
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
      downloadFileModel: 'DownloadFileModel',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadFileModel: DownloadCdsFileResponseBodyDownloadFileModel,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.downloadFileModel && typeof (this.downloadFileModel as any).validate === 'function') {
      (this.downloadFileModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

