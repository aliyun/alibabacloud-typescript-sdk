// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveCdsFileResponseBodyMoveCdsFileModel extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task ID. This field is not returned when a file is copied. When a folder is copied, the copy operation is performed asynchronously in the background, so this field is returned. You can call [GetAsyncTask](https://help.aliyun.com/document_detail/2357404.html) and pass in this asynchronous task ID to obtain the task details.
   * 
   * @example
   * fe307518-825a-4c8b-a69c-958f0e8a****
   */
  asyncTaskId?: string;
  /**
   * @remarks
   * Indicates whether the file already exists.
   * 
   * @example
   * false
   */
  exist?: boolean;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 63636837e47e5a24a8a940218bef395c210e****
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      exist: 'Exist',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      exist: 'boolean',
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

export class MoveCdsFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution result. The value `success` indicates that the operation is successful. Otherwise, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
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
   * The result of the move file operation.
   */
  moveCdsFileModel?: MoveCdsFileResponseBodyMoveCdsFileModel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      moveCdsFileModel: 'MoveCdsFileModel',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      moveCdsFileModel: MoveCdsFileResponseBodyMoveCdsFileModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.moveCdsFileModel && typeof (this.moveCdsFileModel as any).validate === 'function') {
      (this.moveCdsFileModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

