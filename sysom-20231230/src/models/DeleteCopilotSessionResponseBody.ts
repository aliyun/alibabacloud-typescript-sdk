// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCopilotSessionResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  deleted?: boolean;
  /**
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
   * @example
   * Success
   */
  code?: string;
  data?: DeleteCopilotSessionResponseBodyData;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
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

