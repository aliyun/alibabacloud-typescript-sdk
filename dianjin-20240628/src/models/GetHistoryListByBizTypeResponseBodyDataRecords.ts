// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoryListByBizTypeResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * GysYBsxx
   */
  bizId?: string;
  /**
   * @example
   * LibraryChat
   */
  bizType?: string;
  /**
   * @example
   * null
   */
  extraMessage?: any;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 210
   */
  id?: number;
  llmAnswer?: string;
  llmPrompt?: string;
  /**
   * @example
   * qwen-max
   */
  llmType?: string;
  /**
   * @example
   * null
   */
  sessionId?: string;
  userQuery?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      bizType: 'bizType',
      extraMessage: 'extraMessage',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      llmAnswer: 'llmAnswer',
      llmPrompt: 'llmPrompt',
      llmType: 'llmType',
      sessionId: 'sessionId',
      userQuery: 'userQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      extraMessage: 'any',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      llmAnswer: 'string',
      llmPrompt: 'string',
      llmType: 'string',
      sessionId: 'string',
      userQuery: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

