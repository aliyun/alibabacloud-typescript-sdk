// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFilesFromAuthorizedOssResponseBodyDataAddFileResultList extends $dara.Model {
  /**
   * @remarks
   * The file ID. Keep this value safe because it is required for all subsequent API operations related to this file.
   * 
   * @example
   * file_809f469a59ac449586ec692576xxxxx_102248XXX
   */
  fileId?: string;
  /**
   * @remarks
   * The error message returned when the file import fails.
   * 
   * @example
   * size too large
   */
  msg?: string;
  /**
   * @remarks
   * The key of the imported file in the OSS bucket.
   * 
   * @example
   * root/path/this_is_temp_xxxx.pdf
   */
  ossKey?: string;
  /**
   * @remarks
   * The file import status. Valid values:
   * 
   * - SUCCESS: The import to application data is complete.
   * - FAILED: The import to application data failed.
   * 
   * > Only files with a SUCCESS status can be used to create or update a knowledge base.
   * >
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      msg: 'Msg',
      ossKey: 'OssKey',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      msg: 'string',
      ossKey: 'string',
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

export class AddFilesFromAuthorizedOssResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of file import results.
   */
  addFileResultList?: AddFilesFromAuthorizedOssResponseBodyDataAddFileResultList[];
  static names(): { [key: string]: string } {
    return {
      addFileResultList: 'AddFileResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addFileResultList: { 'type': 'array', 'itemType': AddFilesFromAuthorizedOssResponseBodyDataAddFileResultList },
    };
  }

  validate() {
    if(Array.isArray(this.addFileResultList)) {
      $dara.Model.validateArray(this.addFileResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFilesFromAuthorizedOssResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The data field returned by the operation.
   */
  data?: AddFilesFromAuthorizedOssResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Cant find out category for category_id param.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The status code returned by the operation.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: string;
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
      data: AddFilesFromAuthorizedOssResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
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

