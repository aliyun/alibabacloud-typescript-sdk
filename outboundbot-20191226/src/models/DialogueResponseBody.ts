// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DialogueResponseBodyFeedback extends $dara.Model {
  /**
   * @example
   * broadcast
   */
  action?: string;
  actionParams?: string;
  content?: string;
  /**
   * @remarks
   * 已废弃
   * 
   * @example
   * “”
   */
  contentParams?: string;
  /**
   * @example
   * true
   */
  interruptible?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      content: 'Content',
      contentParams: 'ContentParams',
      interruptible: 'Interruptible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      content: 'string',
      contentParams: 'string',
      interruptible: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  feedback?: DialogueResponseBodyFeedback;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      feedback: 'Feedback',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      feedback: DialogueResponseBodyFeedback,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.feedback && typeof (this.feedback as any).validate === 'function') {
      (this.feedback as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

