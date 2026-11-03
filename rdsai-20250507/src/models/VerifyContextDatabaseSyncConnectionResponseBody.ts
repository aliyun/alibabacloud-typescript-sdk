// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyContextDatabaseSyncConnectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The authorization status.
   * 
   * @example
   * ready
   */
  authState?: string;
  /**
   * @remarks
   * The connection ID, which is a system-generated UUID.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      authState: 'AuthState',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authState: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyContextDatabaseSyncConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Sample value
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: VerifyContextDatabaseSyncConnectionResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 1
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Sample value
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * id-001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: VerifyContextDatabaseSyncConnectionResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
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

