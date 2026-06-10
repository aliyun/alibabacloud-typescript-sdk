// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDialogueFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned for the request.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The dialogue flow ID.
   * 
   * @example
   * 390515b5-6115-4ccf-83e2-52d5bfaf2ddf
   */
  dialogueFlowId?: string;
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
   * The message returned by the request.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dialogueFlowId: 'DialogueFlowId',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dialogueFlowId: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

