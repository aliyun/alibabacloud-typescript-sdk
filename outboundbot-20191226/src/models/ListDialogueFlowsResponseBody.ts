// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDialogueFlowsResponseBodyDialogueFlows extends $dara.Model {
  dialogueFlowDefinition?: string;
  /**
   * @example
   * dae01529-3c3e-458e-b07a-97643d09ebb9
   */
  dialogueFlowId?: string;
  dialogueFlowName?: string;
  /**
   * @example
   * MainFlow
   */
  dialogueFlowType?: string;
  /**
   * @example
   * 2d5aa451-661f-4f08-b0c4-28eec78decc4
   */
  scriptId?: string;
  /**
   * @example
   * 1569220563549
   */
  scriptVersion?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueFlowDefinition: 'DialogueFlowDefinition',
      dialogueFlowId: 'DialogueFlowId',
      dialogueFlowName: 'DialogueFlowName',
      dialogueFlowType: 'DialogueFlowType',
      scriptId: 'ScriptId',
      scriptVersion: 'ScriptVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueFlowDefinition: 'string',
      dialogueFlowId: 'string',
      dialogueFlowName: 'string',
      dialogueFlowType: 'string',
      scriptId: 'string',
      scriptVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueFlowsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  dialogueFlows?: ListDialogueFlowsResponseBodyDialogueFlows[];
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
      dialogueFlows: 'DialogueFlows',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dialogueFlows: { 'type': 'array', 'itemType': ListDialogueFlowsResponseBodyDialogueFlows },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.dialogueFlows)) {
      $dara.Model.validateArray(this.dialogueFlows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

