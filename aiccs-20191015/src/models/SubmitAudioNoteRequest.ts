// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAudioNoteRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the notes agent. Specify the ID of a published recording notes agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  agentId?: string;
  /**
   * @remarks
   * The custom task ID defined by the business side. This ID is used to associate external business records during callbacks or troubleshooting.
   * 
   * @example
   * biz-001
   */
  bizId?: string;
  /**
   * @remarks
   * The storage path of the recording file in OSS. Use the FilePath returned by the upload address retrieval operation.
   * 
   * This parameter is required.
   * 
   * @example
   * audio-note/100/uuid/test.wav
   */
  filePath?: string;
  /**
   * @remarks
   * The ID of the LLM model used for notes inference. If this parameter is not specified, the default model configuration of the agent is used.
   * 
   * @example
   * 88
   */
  llmModelId?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      bizId: 'BizId',
      filePath: 'FilePath',
      llmModelId: 'LlmModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      bizId: 'string',
      filePath: 'string',
      llmModelId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

