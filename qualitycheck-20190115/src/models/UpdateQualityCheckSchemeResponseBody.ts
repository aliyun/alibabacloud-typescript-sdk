// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQualityCheckSchemeResponseBodyMessages extends $dara.Model {
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

export class UpdateQualityCheckSchemeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Other values indicate failure. Use this field to determine the cause of a failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error details if the request fails. If the request is successful, the value is \\`successful\\`.
   * 
   * @example
   * successful
   */
  message?: string;
  messages?: UpdateQualityCheckSchemeResponseBodyMessages;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 96138D8D-8D26-4E41-BFF4-77AED1088BBD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of \\`true\\` indicates success. A value of \\`false\\` or \\`null\\` indicates failure.
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
      messages: UpdateQualityCheckSchemeResponseBodyMessages,
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

