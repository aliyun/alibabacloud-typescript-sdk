// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSchemeTaskConfigResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSchemeTaskConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. **200** means success. Other values mean failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error details if an error occurs. When successful, the value is **successful**.
   * 
   * @example
   * successful
   */
  message?: string;
  messages?: UpdateSchemeTaskConfigResponseBodyMessages;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. true means success. false or null means failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: UpdateSchemeTaskConfigResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

