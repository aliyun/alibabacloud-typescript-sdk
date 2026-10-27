// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDialogueFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The dialog flow data.
   * 
   * This parameter is required.
   * 
   * @example
   * {"transitions":[{"id":"a91c4023","index":1,"source":"cc31e02b","sourceAnchor":0,"target":"946045be","targetAnchor":0}],"nodes":[{"collectedNumberEnabled":false,"content":{"branches":[{"branchId":"f5450420-09ab-11ea-b107-e9059c6a79d8","branchName":"Initiate conversation"}]},"coordinates":{"x":180,"y":134},"id":"cc31e02b","index":0,"interruptible":false,"nodeIndex":0,"shape":"start-html","size":"170*34","type":"start","x":180,"y":134},{"collectedNumberEnabled":false,"content":{"actionParams":"","action":"Hangup"},"coordinates":{"x":487.65625,"y":155},"id":"946045be","index":2,"interruptible":false,"labels":[],"name":"Function node","nodeIndex":1,"questions":["OK, we have noted your situation. We will arrange a senior consultant to provide you with a more detailed study abroad assessment and academic guidance. Please stay available for the call."],"script":"OK, we have noted your situation. We will arrange a senior consultant to provide you with a more detailed study abroad assessment and academic guidance. Please stay available for the call.","shape":"function-html","size":"170*34","type":"transfer","x":500,"y":182}]}
   */
  dialogueFlowDefinition?: string;
  /**
   * @remarks
   * The dialog flow ID.
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
   * Specifies whether the dialog flow is in draft state.
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

