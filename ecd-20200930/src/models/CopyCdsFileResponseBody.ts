// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyCdsFileResponseBodyCopyCdsFileModel extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task ID. This field is not returned when a file is copied. When a folder is copied, the copy operation is performed asynchronously in the background, so this field is returned. You can call [GetAsyncTask](https://help.aliyun.com/document_detail/2357404.html) and pass in this asynchronous task ID to obtain the task details.
   * 
   * @example
   * 4221bf6e6ab43a255edc4463bffa6f5f5d31****
   */
  asyncTaskId?: string;
  /**
   * @remarks
   * The ID of the new file or folder after the copy operation.
   * 
   * @example
   * 6400727cb878821bcb414615a609b4072463****
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
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

export class CopyCdsFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution result. A value of `success` indicates success. Otherwise, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The result of copying the file.
   */
  copyCdsFileModel?: CopyCdsFileResponseBodyCopyCdsFileModel;
  /**
   * @remarks
   * The error message. This parameter is not returned if Code is `success`.
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
   * 93AD30C1-16B8-5C54-AD23-A51FF53F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      copyCdsFileModel: 'CopyCdsFileModel',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      copyCdsFileModel: CopyCdsFileResponseBodyCopyCdsFileModel,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.copyCdsFileModel && typeof (this.copyCdsFileModel as any).validate === 'function') {
      (this.copyCdsFileModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

