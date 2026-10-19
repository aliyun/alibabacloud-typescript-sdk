// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHotfixStatusResponseBodyData extends $dara.Model {
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

export class QueryHotfixStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - `code == Success`: The authorization is successful.
   * - Other status codes: The authorization failed. If the authorization fails, check the `message` field for the detailed fault message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryHotfixStatusResponseBodyData;
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
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
      data: QueryHotfixStatusResponseBodyData,
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

