// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadBackupSetStorageInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The validity period of the URL.
   * 
   * > This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1661329050
   */
  expirationTime?: number;
  /**
   * @remarks
   * The private download URL of the backup set.
   */
  privateUrl?: string;
  /**
   * @remarks
   * The public download URL of the backup set.
   */
  publicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      expirationTime: 'ExpirationTime',
      privateUrl: 'PrivateUrl',
      publicUrl: 'PublicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationTime: 'number',
      privateUrl: 'string',
      publicUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadBackupSetStorageInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * DBS.ParamIsInValid
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeDownloadBackupSetStorageInfoResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * DBS.ParamIsInValid
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Argument: regionCode Must not be empty
   */
  errMessage?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Argument: regionCode Must not be empty
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 44B8C2F5-919D-5D29-BCD5-DEB03467****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeDownloadBackupSetStorageInfoResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

