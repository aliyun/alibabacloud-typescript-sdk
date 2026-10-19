// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallHotfixResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * hotfix-da3dcc0b-5019-4b59-b12f-2e500da9083c
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallHotfixResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - If `code == Success`, the authorization is successful.
   * - Other status codes indicate that the authorization failed. If the authorization fails, check the `message` field for the detailed fault message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: InstallHotfixResponseBodyData;
  /**
   * @remarks
   * The error message.
   * - If code == Success, this field is empty.
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which can be used for end-to-end diagnostics.
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InstallHotfixResponseBodyData,
      message: 'string',
      requestId: 'string',
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

