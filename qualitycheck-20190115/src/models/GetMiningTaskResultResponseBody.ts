// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMiningTaskResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * 123.22.com/manger/static/login-back.jpg
   */
  filePath?: string;
  /**
   * @example
   * 123.22.com/manger/static/login-back.md
   */
  filePathMd?: string;
  /**
   * @example
   * 20201231de3d34ec-40fa-4a55-8d27-76ea*****
   */
  taskId?: string;
  /**
   * @example
   * finish
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      filePathMd: 'FilePathMd',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      filePathMd: 'string',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMiningTaskResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetMiningTaskResultResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
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
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMiningTaskResultResponseBodyData,
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

