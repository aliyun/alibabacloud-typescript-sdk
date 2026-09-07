// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ChatUserSecAgentRequest extends $dara.Model {
  /**
   * @example
   * sec-ops-agent
   */
  agent?: string;
  /**
   * @remarks
   * 附件暂存 ID
   * 
   * @example
   * stg-6f1d9c8b7a2e4530
   */
  attachmentStagingId?: string;
  /**
   * @remarks
   * 附件列表 JSON 字符串
   * 
   * @example
   * ["oss/input.txt","oss/raw.txt"]
   */
  attachments?: string;
  /**
   * @remarks
   * 逻辑渠道名
   * 
   * @example
   * console
   */
  channel?: string;
  /**
   * @remarks
   * 执行模式: single/team/role
   * 
   * @example
   * single
   */
  executionMode?: string;
  /**
   * @remarks
   * 扩展参数 JSON 字符串，如 execution_mode、target 等
   * 
   * @example
   * {"execution_mode":"team","target":"team:auto"}
   */
  extraParams?: string;
  memory?: boolean;
  /**
   * @example
   * qwen-max
   */
  model?: string;
  /**
   * @remarks
   * 用户提问；新会话时必填，恢复/交互时可空
   * 
   * @example
   * 帮我梳理最近 24 小时的高危告警并给出处置建议
   */
  prompt?: string;
  /**
   * @example
   * zh-CN
   */
  responseLanguage?: string;
  /**
   * @example
   * 5f2c1b9a8d3e4c7f
   */
  sessionId?: string;
  /**
   * @example
   * alert-analysis
   */
  skill?: string;
  stream?: boolean;
  /**
   * @example
   * 9b1e7d2c4a6f8e30
   */
  talkId?: string;
  /**
   * @remarks
   * 执行目标
   * 
   * @example
   * sec-ops-team-01
   */
  target?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @remarks
   * 会话恢复/交互提交信息 JSON 字符串
   * 
   * @example
   * {"sessionId":"session_example","talkId":"talk_example","formId":"interaction_example","formValues":{"q1":{"kind":"selected","optionIds":["q1_o1"]}},"formAction":"submit"}
   */
  userInputInfo?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      attachmentStagingId: 'AttachmentStagingId',
      attachments: 'Attachments',
      channel: 'Channel',
      executionMode: 'ExecutionMode',
      extraParams: 'ExtraParams',
      memory: 'Memory',
      model: 'Model',
      prompt: 'Prompt',
      responseLanguage: 'ResponseLanguage',
      sessionId: 'SessionId',
      skill: 'Skill',
      stream: 'Stream',
      talkId: 'TalkId',
      target: 'Target',
      timeZone: 'TimeZone',
      userInputInfo: 'UserInputInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: 'string',
      attachmentStagingId: 'string',
      attachments: 'string',
      channel: 'string',
      executionMode: 'string',
      extraParams: 'string',
      memory: 'boolean',
      model: 'string',
      prompt: 'string',
      responseLanguage: 'string',
      sessionId: 'string',
      skill: 'string',
      stream: 'boolean',
      talkId: 'string',
      target: 'string',
      timeZone: 'string',
      userInputInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

