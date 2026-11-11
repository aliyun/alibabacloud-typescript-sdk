// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCopilotSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the session was deleted.
   * 
   * @example
   * true
   */
  deleted?: boolean;
  /**
   * @remarks
   * The ID of the deleted session.
   * 
   * @example
   * c356bc310e4345c3a602a2912322ad21
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      deleted: 'deleted',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'boolean',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCopilotSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - If `code` is `Success`, the authorization is successful.
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
  data?: DeleteCopilotSessionResponseBodyData;
  /**
   * @remarks
   * The error message returned when the code is not Success.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which can be used for end-to-end diagnostics.
   * 
   * @example
   * 5BC79EF5-798B-5499-9683-4E14EBBBF712
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
      data: DeleteCopilotSessionResponseBodyData,
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

