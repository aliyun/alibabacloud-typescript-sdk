// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDialogueFlowResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  dialogueFlowDefinition?: string;
  /**
   * @example
   * 390515b5-6115-4ccf-83e2-52d5bfaf2ddf
   */
  dialogueFlowId?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Succcess
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
      dialogueFlowDefinition: 'DialogueFlowDefinition',
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
      dialogueFlowDefinition: 'string',
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

