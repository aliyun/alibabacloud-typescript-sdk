// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCheckTypeToSchemeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates that the request was successful. Other values indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * 48864
   */
  data?: string;
  /**
   * @remarks
   * The message returned. If the request is successful, \\`successful\\` is returned. If the request fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * A list of returned messages.
   */
  messages?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates success. A value of false or null indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      messages: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

