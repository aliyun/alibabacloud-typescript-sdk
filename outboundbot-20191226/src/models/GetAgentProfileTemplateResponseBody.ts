// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentProfileTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * ID of the agent profile template.
   * 
   * @example
   * default-survey
   */
  agentProfileTemplateId?: string;
  /**
   * @remarks
   * Time when the template was created.
   * 
   * @example
   * 1720766491000
   */
  createTime?: string;
  /**
   * @remarks
   * Description of the agent profile template.
   * 
   * @example
   * 说明
   */
  description?: string;
  /**
   * @remarks
   * Name of the agent profile template.
   * 
   * @example
   * 问卷调查
   */
  name?: string;
  /**
   * @remarks
   * Agent profile template configuration.
   * 
   * @example
   * {
   *   "name": "promptSchema",
   *   "properties": {
   *     "name": {
   *       "displayOrder": 1,
   *       "displayName": "名称",
   *       "dataType": "TEXT",
   *       "editorType": "MENTIONS_TEXTAREA",
   *       "attributes": {
   *         "placeholder": "如：云小宝",
   *         "rows": 1
   *       },
   *       "group": "人物与风格",
   *       "maxLength": 100
   *     },
   *     "gender": {
   *       "displayOrder": 2,
   *       "displayName": "性别",
   *       "description": "此选项不会改变男女声音色，如需修改，请在【语音&VUI】中的TTS音色模版中修改",
   *       "dataType": "TEXT",
   *       "editorType": "SELECT",
   *       "attributes": {
   *         "dataSource": [
   *           "男",
   *           "女",
   *           "不指定"
   *         ]
   *       },
   *       "group": "人物与风格",
   *       "maxLength": 100
   *     },
   *     "age": {
   *       "displayOrder": 3,
   *       "displayName": "年龄",
   *       "dataType": "LONG",
   *       "editorType": "NUMBER",
   *       "attributes": {
   *         "innerAfter": "岁"
   *       },
   *       "group": "人物与风格",
   *       "maximum": 60,
   *       "minimum": 18
   *     },
   *     "role": {
   *       "displayOrder": 3,
   *       "displayName": "身份",
   *       "dataType": "TEXT",
   *       "editorType": "SELECTABLE_TAGS",
   *       "attributes": {
   *         "mode": "single",
   *         "dataSource": [
   *           "游戏推广员",
   *           "活动运营员",
   *           "医疗助理",
   *           "审计专员",
   *           "保险专员",
   *           "行政助理"
   *         ]
   *       },
   *       "group": "人物与风格",
   *       "maxLength": 100
   *     },
   *     "communicationStyle": {
   *       "displayOrder": 4,
   *       "displayName": "沟通风格",
   *       "dataType": "TEXT",
   *       "editorType": "SELECTABLE_TAGS",
   *       "attributes": {
   *         "mode": "multiple",
   *         "dataSource": [
   *           "亲切",
   *           "自然",
   *           "口语化",
   *           "专业",
   *           "活泼",
   *           "严肃"
   *         ]
   *       },
   *       "group": "人物与风格",
   *       "maxLength": 100
   *     },
   *     "goals": {
   *       "displayOrder": 5,
   *       "displayName": "目标",
   *       "dataType": "TEXT",
   *       "editorType": "MENTIONS_TEXTAREA",
   *       "attributes": {
   *         "placeholder": "描述此次呼叫的目的。例如，调研上次服务的满意度情况",
   *         "rows": 5
   *       },
   *       "group": "业务描述",
   *       "maxLength": 1000
   *     },
   *     "background": {
   *       "displayOrder": 7,
   *       "displayName": "背景",
   *       "dataType": "TEXT",
   *       "editorType": "MENTIONS_TEXTAREA",
   *       "attributes": {
   *         "placeholder": "描述此次呼叫的背景，比如活动信息、FAQ等",
   *         "rows": 10
   *       },
   *       "group": "业务描述",
   *       "maxLength": 2000
   *     },
   *     "openingPrompt": {
   *       "displayOrder": 100,
   *       "displayName": "开场白",
   *       "dataType": "TEXT",
   *       "editorType": "MENTIONS_TEXTAREA",
   *       "attributes": {
   *         "placeholder": "请输入开场白，支持变量",
   *         "rows": 3,
   *         "isAutoOptimizePrompt": true
   *       },
   *       "group": "业务描述",
   *       "maxLength": 100,
   *       "required": true
   *     },
   *     "skills": {
   *       "displayOrder": 9,
   *       "displayName": "技能",
   *       "description": "描述机器人能够执行的具体事项。例如\\n<copy>技能1:核验用户身份\\n技能2:进行活动推荐\\n技能3:确认用户参与意向并礼貌挂机<copy>",
   *       "dataType": "TEXT",
   *       "editorType": "MENTIONS_TEXTAREA",
   *       "attributes": {
   *         "placeholder": "描述机器人包含的能力\\n例如：\\n1.使用客服语气询问客户的产品满意度情况\\n2.需要针对产品的易用性、性能、功能完善度、商品价格这4个纬度进行打分调研",
   *         "rows": 5,
   *         "isAutoOptimizePrompt": true,
   *         "quickOptionsEnabled": true,
   *         "apiPluginsEnabled": true
   *       },
   *       "group": "业务描述",
   *       "maxLength": 1000
   *     },
   *     "workflow": {
   *       "displayOrder": 10,
   *       "displayName": "流程",
   *       "description": "描述机器人执行任务时，与客户交流的过程。例如\\n<copy>根据预先设定的问题逻辑推进调研：\\n1. 总体满意度：“首先，请问您对我们服务的整体满意度如何评价？非常满意、满意、一般、不满意还是非常不满意？”\\n2. 服务亮点（若上一题为正面评价）：“很高兴听到您的满意！请问哪些方面让您感到特别满意呢？”\\n3. 改进建议（若上一题为负面评价）：“非常抱歉给您带来了不便。您认为我们在哪方面可以做得更好？”\\n4. 服务效率：“在服务响应速度和服务完成的时效性上，您的感受是怎样的？”\\n5. 员工态度：“对于服务人员的专业度和态度，您有何评价？”\\n6. 再次选择意愿：“基于此次体验，您未来是否会考虑再次使用我们的服务？”</copy>",
   *       "dataType": "TEXT",
   *       "editorType": "MENTIONS_TEXTAREA",
   *       "attributes": {
   *         "placeholder": "描述工作流程",
   *         "rows": 10,
   *         "isAutoOptimizePrompt": true,
   *         "quickOptionsEnabled": true,
   *         "apiPluginsEnabled": true
   *       },
   *       "group": "业务描述",
   *       "maxLength": 4000
   *     },
   *     "constraint": {
   *       "displayOrder": 11,
   *       "displayName": "约束",
   *       "description": "描述对话的约束或整体要求，例如\\n<copy>你需要记住你的角色信息，并始终遵循。\\n- 在整个通话过程中，保持语气的中立性和友好性，避免对受访者产生引导性影响。\\n- 每轮对话不超过50个字，确保信息传达的高效性。\\n- 严格遵守调研伦理，保证受访者信息的匿名性和隐私安全。\\n- 避免在电话中深入讨论涉及个人隐私或具体服务细节的问题。\\n- 用户询问的问题与目标或流程无关时， 请礼貌拒绝，并引导到目标问题上。\\n- 只回复与本次任务相关的问题；对于不知道的问题，请不要胡乱回复，需要礼貌回复“不清楚”，并引导到目标问题上。</copy>",
   *       "dataType": "TEXT",
   *       "editorType": "MENTIONS_TEXTAREA",
   *       "attributes": {
   *         "placeholder": "描述机器人交流过程中需要注意的问题，或异常情况下的回复参考\\n例如：\\n1.保持对话的专业客服行业专业术语和礼貌性，维护公司形象\\n2.针对客服的情绪如不耐烦、生气等能够精准识别并及时停止调研",
   *         "rows": 5,
   *         "isAutoOptimizePrompt": true
   *       },
   *       "group": "业务描述",
   *       "maxLength": 1000,
   *       "defaultValue": "- 当前时间：${currentTimeWithDayOfWeek}。\\n- 星期和日期转换时，请用北京时间。\\n- 如果不知道目标用户(客户)性别，则直接称呼目标用户(客户)姓名，不要尊称xx先生/女士。例如：不知道张三的性别，请直接称呼张三，不要称呼张三先生/女士。\\n- 如果知道目标用户(客户)性别，直接称呼xx先生/女士。\\n- 请严格按照流程步骤逐步执行，并确保所有步骤都已经执行，如果还存在没有执行的步骤，则需要再执行一次。"
   *     },
   *     "output": {
   *       "displayOrder": 1000,
   *       "displayName": "输出",
   *       "description": "输出",
   *       "dataType": "TEXT",
   *       "editorType": "MENTIONS_TEXTAREA",
   *       "attributes": {
   *         "placeholder": "- 无格式\\n",
   *         "rows": 10,
   *         "isAutoOptimizePrompt": false
   *       },
   *       "group": "业务描述",
   *       "maxLength": 2000,
   *       "defaultValue": "- 无格式\\n",
   *       "hidden": true
   *     },
   *     "aiHangupOutput": {
   *       "displayOrder": 1001,
   *       "displayName": "aiHangupOutput",
   *       "description": "aiHangupOutput",
   *       "dataType": "TEXT",
   *       "editorType": "MENTIONS_TEXTAREA",
   *       "attributes": {
   *         "placeholder": "- 如果判断会话结束，则礼貌回复并追加#[HangUp]\\n- 如果流程已执行完成，则礼貌回复并追加#[HangUp]\\n- 如果大模型(机器人或者Bot)输出了再见，并且表示希望结束会话，则追加#[HangUp]",
   *         "rows": 10,
   *         "isAutoOptimizePrompt": false
   *       },
   *       "group": "业务描述",
   *       "maxLength": 2000,
   *       "defaultValue": "- 如果判断会话结束，则礼貌回复并追加#[HangUp]\\n- 如果流程已执行完成，则礼貌回复并追加#[HangUp]\\n- 如果大模型(机器人或者Bot)输出了再见，并且表示希望结束会话，则追加#[HangUp]",
   *       "hidden": true
   *     },
   *     "aiSilenceTimeoutOutput": {
   *       "displayOrder": 1002,
   *       "displayName": "aiSilenceTimeoutOutput",
   *       "description": "aiSilenceTimeoutOutput",
   *       "dataType": "TEXT",
   *       "editorType": "MENTIONS_TEXTAREA",
   *       "attributes": {
   *         "placeholder": "- 如果用户没有说话，则礼貌回复用户。比如“抱歉，我听不到您讲话，请您再说一遍？“\\n- 如果用户没有说话没有达到${aiSilenceTimeoutMaxCount}次，请不要结束会话，但需要进行礼貌回复。\\n-如果用户没有说话达到${aiSilenceTimeoutMaxCount}次，则礼貌回复结束会话并追加#[HangUp]",
   *         "rows": 10,
   *         "isAutoOptimizePrompt": false
   *       },
   *       "group": "业务描述",
   *       "maxLength": 2000,
   *       "defaultValue": "- 如果用户没有说话，则礼貌回复用户。比如“抱歉，我听不到您讲话，请您再说一遍？“\\n- 如果用户没有说话没有达到${aiSilenceTimeoutMaxCount}次，请不要结束会话，但需要进行礼貌回复。\\n-如果用户没有说话达到${aiSilenceTimeoutMaxCount}次，则礼貌回复结束会话并追加#[HangUp]",
   *       "hidden": true
   *     }
   *   }
   * }
   */
  promptSchema?: string;
  /**
   * @remarks
   * Time when the template was last updated.
   * 
   * @example
   * 1720766491000
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileTemplateId: 'AgentProfileTemplateId',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      promptSchema: 'PromptSchema',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileTemplateId: 'string',
      createTime: 'string',
      description: 'string',
      name: 'string',
      promptSchema: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentProfileTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetAgentProfileTemplateResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded.
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
      data: GetAgentProfileTemplateResponseBodyData,
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

