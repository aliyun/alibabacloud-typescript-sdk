// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDialogueFlowResponseBody extends $dara.Model {
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
   * The JSON string that defines the dialogue flow.
   * 
   * @example
   * {"transitions":[{"id":"a91c4023","index":1,"source":"cc31e02b","sourceAnchor":0,"target":"946045be","targetAnchor":0}],"nodes":[{"collectedNumberEnabled":false,"content":{"branches":[{"branchId":"f5450420-09ab-11ea-b107-e9059c6a79d8","branchName":"发起对话"}]},"coordinates":{"x":180,"y":134},"id":"cc31e02b","index":0,"interruptible":false,"nodeIndex":0,"shape":"start-html","size":"170*34","type":"start","x":180,"y":134},{"collectedNumberEnabled":false,"content":{"actionParams":"","action":"Hangup"},"coordinates":{"x":487.65625,"y":155},"id":"946045be","index":2,"interruptible":false,"labels":[],"name":"功能节点","nodeIndex":1,"questions":["好的同学，您的情况已了解了，稍后我们会安排资深顾问老师给您做更详细的留学评估以及升学指导，请留意电话接听"],"script":"好的同学，您的情况已了解了，稍后我们会安排资深顾问老师给您做更详细的留学评估以及升学指导，请留意电话接听","shape":"function-html","size":"170*34","type":"transfer","x":500,"y":182}]}
   */
  dialogueFlowDefinition?: string;
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
   * The response message.
   * 
   * @example
   * Succcess
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

