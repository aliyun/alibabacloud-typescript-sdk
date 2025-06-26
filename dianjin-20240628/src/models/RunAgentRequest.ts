// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d6zxykawk9
   */
  botId?: string;
  /**
   * @example
   * qwen-plus
   */
  modelId?: string;
  /**
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @example
   * 4vlag5ken3
   */
  threadId?: string;
  /**
   * @example
   * false
   */
  useDraft?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  userContent?: string;
  userInputs?: { [key: string]: any };
  /**
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

