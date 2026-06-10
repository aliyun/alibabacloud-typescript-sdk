// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAgentProfileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Agent configuration ID
   * 
   * @example
   * 3d7d253cfb77476da0cf3681bcf7b4e8
   */
  agentProfileId?: string;
  /**
   * @remarks
   * Agent Template ID
   * 
   * @example
   * default-survey
   */
  agentProfileTemplateId?: string;
  /**
   * @remarks
   * Agent Type
   * 
   * @example
   * Human
   */
  agentType?: string;
  /**
   * @remarks
   * API plug-in configuration
   * 
   * @example
   * []
   */
  apiPluginJson?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1721356124220
   */
  createTime?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * 这是一个大模型场景
   */
  description?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * 788066f2-f160-458e-a3bb-83e1c9d5606d
   */
  instanceId?: string;
  /**
   * @remarks
   * Instruction configuration
   * 
   * @example
   * [{
   * 	"type": "TransferToAgent",
   * 	"instructions": [{
   * 		"code": "Transfer0",
   * 		"skillGroupId": "testcode",
   * 		"skillGroupName": "skillgroup"
   * 	}],
   * 	"timeoutEnable": false
   * }, {
   * 	"type": "CollectNumber",
   * 	"instructions": [{
   * 		"code": "DTMF0",
   * 		"name": "收号测试",
   * 		"collectVoice": true,
   * 		"terminator": "#"
   * 	}]
   * }]
   */
  instructionJson?: string;
  /**
   * @remarks
   * Label description
   * 
   * @example
   * [{
   * 	"name": "是否满意",
   * 	"description": "对介绍的游戏内容是否感兴趣",
   * 	"valueList": "[\\"有兴趣\\",\\"没兴趣\\"]"
   * }]
   */
  labelsJson?: string;
  /**
   * @remarks
   * Model ID
   * 
   * @example
   * model_002
   */
  model?: string;
  /**
   * @remarks
   * Model configuration
   * 
   * @example
   * ""
   */
  modelConfig?: string;
  /**
   * @remarks
   * NLU configuration, parameter settings:
   * 
   * - chatbotInstanceId Xiaomi Large Language Model (LLM) robot instance ID
   * 
   * - faqCategoryIds bound FAQ category ID
   * 
   * - llmAgentId Xiaomi Large Language Model (LLM) workspace ID
   * 
   * - llmAgentKey Xiaomi Large Language Model (LLM) workspace key
   * 
   * - llmAgentInstanceId Xiaomi Large Language Model (LLM) workspace instance ID
   * 
   * @example
   * {
   * 	"chatbotInstanceId": "chatbot-cn-j7eiVJZRmb",
   * 	"faqCategoryIds": [30000474726],
   * 	"llmAgentId": "1246206",
   * 	"llmAgentInstanceId": "outbound_05efb75a-95df-438e-9b9b-8f2c857d5498",
   * 	"llmAgentKey": "d682716514814815ae77757c0bcbda01_p_outbound_public"
   * }
   */
  nluConfigJson?: string;
  /**
   * @remarks
   * Prompt (Professional Mode)
   * 
   * @example
   * \\n名称：安妮 \\n身份：游戏推广员\\n背景：通过电话向玩家宣传最新福利活动，确保每一位玩家都能及时掌握信息，享受游戏的乐趣。\\n技能：作为游戏客服，向用户推荐限时游戏福利活动，强调福利亮点并告知参与流程。\\n约束条件：你需要记住你是安妮，来自于热门游戏客服团队，专注于通过电话向玩家宣传最新福利活动。\\n作为主动联系玩家的客服，需要根据玩家是否想了解活动的意图来选择是否介绍。\\n保持通话的专业性，同时语言平易近人，确保玩家轻松理解活动内容。\\n明确活动的起止时间，确保玩家不会混淆。\\n强调活动的重点奖励和参与方式，提升玩家的参与兴趣。
   */
  prompt?: string;
  /**
   * @remarks
   * Agent configuration
   * 
   * @example
   * {
   * 	"name": "安妮",
   * 	"gender": "女",
   * 	"age": 20,
   * 	"role": "游戏推广员",
   * 	"communicationStyle": ["亲切", "口语化", "活泼"],
   * 	"goals": "通过电话向玩家宣传最新福利活动，确保每一位玩家都能及时掌握信息，享受游戏的乐趣。",
   * 	"background": "福利介绍\\n从${开始时间}开始，直至${结束时间}结束，为期一周的时间里，我们精心准备了\\"限时寻宝\\"福利活动。只要您在这段时间内每日登录游戏，即可领取登录礼包，内含珍稀材料、能量药剂和限定外观奖励\\n\\n福利亮点\\n本次活动的亮点在于，累积登录达到5天的玩家，将额外获得一份\\"神秘宝箱\\"，开启宝箱获得稀有宠物，将为您的战斗增添强大助力！千万别错过这次增强实力的绝佳机会。\\n\\n参与方式\\n登录游戏后，在活动面板中找到\\"限时寻宝\\"，点击即可领取对应的奖励。记得每天上线，奖励不等人哦！",
   * 	"skills": "作为游戏客服，向用户推荐限时游戏福利活动，强调福利亮点并告知参与流程。",
   * 	"workflow": "1.亲切问候与自我介绍\\n- 开场白：“尊敬的冒险者，您好！我是安妮，来自游戏客服团队。今天有幸与您连线，是想分享一项即将启动的独家福利活动，绝对会让您的探险之旅更加精彩纷呈！”\\n- 确认玩家想了解活动后，再进行福利活动的介绍\\n2.福利活动介绍\\n3.强调福利亮点\\n4.说明参与方式与提醒\\n5.鼓励分享与反馈\\n- 互动号召：“如果您觉得这个活动不错，不妨和您的公会伙伴或者游戏朋友分享这个好消息。同时，我们也非常欢迎您在活动结束后，通过游戏内置的反馈系统告诉我们您的体验感受和建议。”\\n技能6: 礼貌结束通话\\n- 结束语：“好了，尊敬的冒险者，以上就是这次活动的主要内容。希望您能在活动中满载而归，祝您在旅程中所向披靡！如果还有任何疑问，欢迎随时联系我们客服团队。感谢您的接听，期待再次为您服务，再见！”",
   * 	"constraint": "你需要记住你是安妮，来自于热门游戏客服团队，专注于通过电话向玩家宣传最新福利活动。\\n作为主动联系玩家的客服，需要根据玩家是否想了解活动的意图来选择是否介绍。\\n保持通话的专业性，同时语言平易近人，确保玩家轻松理解活动内容。\\n明确活动的起止时间，确保玩家不会混淆。\\n强调活动的重点奖励和参与方式，提升玩家的参与兴趣。\\n鼓励玩家间的互动和反馈，以促进游戏社区的活跃度。\\n结束通话时保持礼貌，给玩家留下良好印象。\\n用户询问的问题与目标或流程无关时， 请礼貌拒绝，并引导到目标问题上。\\n对于不知道的问题，请不要胡乱回复，需要礼貌回复“不清楚”，并引导到目标问题上。",
   * 	"openingPrompt": "尊敬的冒险者，您好！我是安妮，来自游戏客服团队。今天有幸与您连线，是想分享一项即将启动的独家福利活动，绝对会让您的探险之旅更加精彩纷呈！",
   * 	"output": "",
   * 	"aiHangupOutput": "",
   * 	"aiSilenceTimeoutOutput": ""
   * }
   */
  promptJson?: string;
  /**
   * @remarks
   * Scenario
   * 
   * @example
   * default
   */
  scenario?: string;
  /**
   * @remarks
   * Scenario ID
   * 
   * @example
   * 3eacaec0-64ba-4008-9392-1d419b0d2673
   */
  scriptId?: string;
  /**
   * @remarks
   * Is it a system template?
   * 
   * @example
   * true
   */
  system?: boolean;
  /**
   * @remarks
   * Modification time
   * 
   * @example
   * 1715416630.0
   */
  updateTime?: string;
  /**
   * @remarks
   * Variable configuration
   * 
   * @example
   * [{
   * 	"name": "开始时间",
   * 	"description": "开始时间"
   * }, {
   * 	"name": "结束时间",
   * 	"description": "结束时间"
   * }]
   */
  variablesJson?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileId: 'AgentProfileId',
      agentProfileTemplateId: 'AgentProfileTemplateId',
      agentType: 'AgentType',
      apiPluginJson: 'ApiPluginJson',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      instructionJson: 'InstructionJson',
      labelsJson: 'LabelsJson',
      model: 'Model',
      modelConfig: 'ModelConfig',
      nluConfigJson: 'NluConfigJson',
      prompt: 'Prompt',
      promptJson: 'PromptJson',
      scenario: 'Scenario',
      scriptId: 'ScriptId',
      system: 'System',
      updateTime: 'UpdateTime',
      variablesJson: 'VariablesJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileId: 'string',
      agentProfileTemplateId: 'string',
      agentType: 'string',
      apiPluginJson: 'string',
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      instructionJson: 'string',
      labelsJson: 'string',
      model: 'string',
      modelConfig: 'string',
      nluConfigJson: 'string',
      prompt: 'string',
      promptJson: 'string',
      scenario: 'string',
      scriptId: 'string',
      system: 'boolean',
      updateTime: 'string',
      variablesJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAgentProfileResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Returned data
   */
  data?: ModifyAgentProfileResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
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
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ModifyAgentProfileResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

