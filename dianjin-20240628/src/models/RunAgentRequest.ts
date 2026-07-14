// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAgentRequest extends $dara.Model {
  /**
   * @remarks
   * Agent ID
   * 
   * This parameter is required.
   * 
   * @example
   * d6zxykawk9
   */
  botId?: string;
  /**
   * @remarks
   * Model ID. Optional. If empty, the agent uses the model from its configuration.
   * 
   * @example
   * qwen-plus
   */
  modelId?: string;
  /**
   * @remarks
   * Enable streaming. Default is true.
   * 
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @remarks
   * Thread ID. Optional. If empty, a new thread starts.
   * 
   * @example
   * 4vlag5ken3
   */
  threadId?: string;
  /**
   * @remarks
   * Use the draft version. Drafts are unpublished versions in the editor. They are unstable. Default is false.
   * 
   * @example
   * false
   */
  useDraft?: boolean;
  /**
   * @remarks
   * User input
   * 
   * This parameter is required.
   * 
   * @example
   * 你是谁
   */
  userContent?: string;
  /**
   * @remarks
   * More complex user-defined input parameters
   * 
   * @example
   * {"name": "zhangsan"}
   */
  userInputs?: { [key: string]: any };
  /**
   * @remarks
   * Version ID to run
   * 
   * @example
   * w4paqoezm2
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      botId: 'botId',
      modelId: 'modelId',
      stream: 'stream',
      threadId: 'threadId',
      useDraft: 'useDraft',
      userContent: 'userContent',
      userInputs: 'userInputs',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
      modelId: 'string',
      stream: 'boolean',
      threadId: 'string',
      useDraft: 'boolean',
      userContent: 'string',
      userInputs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      versionId: 'string',
    };
  }

  validate() {
    if(this.userInputs) {
      $dara.Model.validateMap(this.userInputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

