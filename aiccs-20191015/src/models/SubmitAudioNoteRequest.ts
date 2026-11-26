// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAudioNoteRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the audio note agent. You must specify the ID of an online audio note agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  agentId?: string;
  /**
   * @remarks
   * The custom task ID defined by your business system, used to associate external business records for callbacks or troubleshooting.
   * 
   * @example
   * biz-001
   */
  bizId?: string;
  /**
   * @remarks
   * The storage path of the audio file in OSS. You must use the FilePath returned by the operation for obtaining the upload URL.
   * 
   * This parameter is required.
   * 
   * @example
   * audio-note/100/uuid/test.wav
   */
  filePath?: string;
  /**
   * @remarks
   * The ID of the large language model (LLM) used for audio note inference. If you do not specify this parameter, the default model configuration of the agent is used.
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

