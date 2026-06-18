// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFilesResponseBodyDataDeleteFileResultList extends $dara.Model {
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * file_6b193b9b4b1546ef9eaa7340e69adfca_10052857
   */
  fileId?: string;
  /**
   * @remarks
   * The file deletion status. Valid values:
   * 
   * - DELETED: The file is deleted.
   * - FAILED: The file fails to be deleted.
   * - NOT_FOUND: The file is not found.
   * 
   * @example
   * DELETED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
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

export class DeleteFilesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The deletion results.
   */
  deleteFileResultList?: DeleteFilesResponseBodyDataDeleteFileResultList[];
  static names(): { [key: string]: string } {
    return {
      deleteFileResultList: 'DeleteFileResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteFileResultList: { 'type': 'array', 'itemType': DeleteFilesResponseBodyDataDeleteFileResultList },
    };
  }

  validate() {
    if(Array.isArray(this.deleteFileResultList)) {
      $dara.Model.validateArray(this.deleteFileResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DataCenter.FileTooLarge
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DeleteFilesResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 17204B98-7734-4F9A-8464-2446A84821CA
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
   * Indicates whether the API call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call fails.
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
      data: DeleteFilesResponseBodyData,
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

