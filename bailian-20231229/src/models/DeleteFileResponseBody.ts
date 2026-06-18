// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_xxxxxxxx
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error status code.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data field of the API response.
   */
  data?: DeleteFileResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Current file status does not support delete.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The status code returned by the API.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded. Valid values:
   * 
   * - true: Succeeded.
   * 
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteFileResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
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

