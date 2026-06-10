// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDialogueFlowRequest extends $dara.Model {
  /**
   * @remarks
   * A JSON string that defines the structure and logic of the dialogue flow.
   * 
   * This parameter is required.
   * 
   * @example
   * {"transitions":[{"id":"a91c4023","index":1,"source":"cc31e02b","sourceAnchor":0,"target":"946045be","targetAnchor":0}],"nodes":[{"collectedNumberEnabled":false,"content":{"branches":[{"branchId":"f5450420-09ab-11ea-b107-e9059c6a79d8","branchName":"发起对话"}]},"coordinates":{"x":180,"y":134},"id":"cc31e02b","index":0,"interruptible":false,"nodeIndex":0,"shape":"start-html","size":"170*34","type":"start","x":180,"y":134},{"collectedNumberEnabled":false,"content":{"actionParams":"","action":"Hangup"},"coordinates":{"x":487.65625,"y":155},"id":"946045be","index":2,"interruptible":false,"labels":[],"name":"功能节点","nodeIndex":1,"questions":["好的同学，您的情况已了解了，稍后我们会安排资深顾问老师给您做更详细的留学评估以及升学指导，请留意电话接听"],"script":"好的同学，您的情况已了解了，稍后我们会安排资深顾问老师给您做更详细的留学评估以及升学指导，请留意电话接听","shape":"function-html","size":"170*34","type":"transfer","x":500,"y":182}]}
   */
  dialogueFlowDefinition?: string;
  /**
   * @remarks
   * The dialogue flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 390515b5-6115-4ccf-83e2-52d5bfaf2ddf
   */
  dialogueFlowId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to save the changes as a draft.
   * 
   * @example
   * true
   */
  isDrafted?: boolean;
  /**
   * @remarks
   * The script ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b0f35dd1-0337-402e-9c4f-3a6c2426950a
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueFlowDefinition: 'DialogueFlowDefinition',
      dialogueFlowId: 'DialogueFlowId',
      instanceId: 'InstanceId',
      isDrafted: 'IsDrafted',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueFlowDefinition: 'string',
      dialogueFlowId: 'string',
      instanceId: 'string',
      isDrafted: 'boolean',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

