// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDialogueFlowsResponseBodyDialogueFlows extends $dara.Model {
  /**
   * @remarks
   * The dialogue flow data, formatted as a JSON string.
   * 
   * @example
   * {"transitions":[{"source":"cc31e02b","sourceAnchor":0,"target":"345700de","targetAnchor":0,"id":"16d37c6e","index":1}],"nodes":[{"shape":"start-html","type":"start","size":"170*34","x":180,"y":134,"id":"cc31e02b","index":0,"nodeIndex":0,"content":{"branches":[{"branchName":"发起对话","branchId":"3c50a880-a7bc-11e9-80fc-5917e4f31864"}]},"coordinates":{"x":180,"y":134}},{"shape":"function-html","type":"transfer","size":"170*34","x":606,"y":134,"id":"345700de","nodeIndex":1,"name":"功能节点","script":"你是 @name ma","content":{"action":"Hangup","actionParams":"","label":["test1","test2","test3","test4","test5"]},"coordinates":{"x":606,"y":134},"index":2,"questions":["你是 @联系人姓名 ma"]}]}
   */
  dialogueFlowDefinition?: string;
  /**
   * @remarks
   * The dialogue flow ID.
   * 
   * @example
   * dae01529-3c3e-458e-b07a-97643d09ebb9
   */
  dialogueFlowId?: string;
  /**
   * @remarks
   * The dialogue flow name.
   * 
   * @example
   * 主流程
   */
  dialogueFlowName?: string;
  /**
   * @remarks
   * The flow type.
   * 
   * - `SubFlow`: The subflow.
   * 
   * - `MainFlow`: The main flow.
   * 
   * @example
   * MainFlow
   */
  dialogueFlowType?: string;
  /**
   * @remarks
   * The outbound script ID.
   * 
   * @example
   * 2d5aa451-661f-4f08-b0c4-28eec78decc4
   */
  scriptId?: string;
  /**
   * @remarks
   * The script version.
   * 
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
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * A list of dialogue flows.
   */
  dialogueFlows?: ListDialogueFlowsResponseBodyDialogueFlows[];
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
   * The response message.
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
   * Indicates whether the request succeeded.
   * 
   * - **true**: The request succeeded.
   * 
   * - **false**: The request failed.
   * 
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

