// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyCdsFileResponseBodyCopyCdsFileModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task. This parameter is not returned if you copy a file. This parameter is returned if you copy a folder in the backend in an asynchronous manner. You can call the GetAsyncTask operation to obtain the ID and details of an asynchronous task.
   * 
   * @example
   * 4221bf6e6ab43a255edc4463bffa6f5f5d31****
   */
  asyncTaskId?: string;
  /**
   * @remarks
   * The ID of the copied file or folder.
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
   * The operation result. The value success indicates that the operation is successful. If the operation failed, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The details about the file copying.
   */
  copyCdsFileModel?: CopyCdsFileResponseBodyCopyCdsFileModel;
  /**
   * @remarks
   * The error message that is returned. This parameter is not returned if the value of Code is success.
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
   * Indicates whether the request is successful.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
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

