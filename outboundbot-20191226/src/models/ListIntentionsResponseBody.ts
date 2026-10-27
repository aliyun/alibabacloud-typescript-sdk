// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntentionsResponseBodyDataIntentListRuleCheck extends $dara.Model {
  /**
   * @remarks
   * The error message.
   */
  error?: string[];
  /**
   * @remarks
   * Indicates whether strict matching is used.
   * 
   * @example
   * true
   */
  strict?: boolean;
  /**
   * @remarks
   * The expression value.
   * 
   * @example
   * know
   */
  text?: string;
  /**
   * @remarks
   * The warning message.
   */
  warning?: string[];
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      strict: 'Strict',
      text: 'Text',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: { 'type': 'array', 'itemType': 'string' },
      strict: 'boolean',
      text: 'string',
      warning: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.error)) {
      $dara.Model.validateArray(this.error);
    }
    if(Array.isArray(this.warning)) {
      $dara.Model.validateArray(this.warning);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentionsResponseBodyDataIntentListSlotFeedbackFunctionsSwitch extends $dara.Model {
  /**
   * @remarks
   * The condition ID.
   * 
   * @example
   * b9932604-08ae-4525-bbe5-c8cce3066070
   */
  id?: string;
  /**
   * @remarks
   * The clarification prompt label.
   * 
   * @example
   * SQL_SUB_QUERY
   */
  label?: string;
  /**
   * @remarks
   * The condition name.
   * 
   * @example
   * 测试0609_20241021_101018_复制_复制_复制
   */
  name?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * PASSKEY
   */
  type?: string;
  /**
   * @remarks
   * The condition value.
   * 
   * @example
   * BASE_VALIDATE_FILTER_SWITCH
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentionsResponseBodyDataIntentListSlotFeedbackFunctions extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud function name.
   * 
   * @example
   * test
   */
  aliyunFunction?: string;
  /**
   * @remarks
   * The Alibaba Cloud service.
   * 
   * @example
   * test
   */
  aliyunService?: string;
  /**
   * @remarks
   * The status code of the operation.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The clarification description.
   * 
   * @example
   * GA setup for HPC cn4-HPC-EndUserServer-GlobalAccelerator
   */
  description?: string;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * cn-hangzhou.log.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @remarks
   * The clarification function.
   * 
   * @example
   * count
   */
  function?: string;
  /**
   * @remarks
   * The function name.
   * 
   * @example
   * 方欣云呼系统每日拨测_2024年11月
   */
  name?: string;
  /**
   * @remarks
   * The parameters.
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * The feature switch. Valid values:
   * - **on**: Enabled.
   * - **off**: Disabled.
   */
  switch?: ListIntentionsResponseBodyDataIntentListSlotFeedbackFunctionsSwitch[];
  /**
   * @remarks
   * The clarification type.
   * 
   * @example
   * cluster
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunFunction: 'AliyunFunction',
      aliyunService: 'AliyunService',
      code: 'Code',
      description: 'Description',
      endPoint: 'EndPoint',
      function: 'Function',
      name: 'Name',
      params: 'Params',
      switch: 'Switch',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunFunction: 'string',
      aliyunService: 'string',
      code: 'string',
      description: 'string',
      endPoint: 'string',
      function: 'string',
      name: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      switch: { 'type': 'array', 'itemType': ListIntentionsResponseBodyDataIntentListSlotFeedbackFunctionsSwitch },
      type: 'string',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    if(Array.isArray(this.switch)) {
      $dara.Model.validateArray(this.switch);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentionsResponseBodyDataIntentListSlotTags extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the intent utterance corresponding to the label.
   * 
   * @example
   * 17448458
   */
  userSayId?: string;
  /**
   * @remarks
   * The tagging result of the intent utterance corresponding to the label.
   * 
   * @example
   * Do you know xxxx?
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      userSayId: 'UserSayId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userSayId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentionsResponseBodyDataIntentListSlot extends $dara.Model {
  /**
   * @remarks
   * The clarification functions.
   * >Notice: 无效内容
   */
  feedbackFunctions?: ListIntentionsResponseBodyDataIntentListSlotFeedbackFunctions[];
  /**
   * @remarks
   * The feedback type.
   * >Notice: 无效内容
   * 
   * @example
   * test
   */
  feedbackType?: string;
  /**
   * @remarks
   * The unique identifier of the slot.
   * 
   * @example
   * 9ec31b50-32b8-11eb-9478-19d2d885afdb
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the slot is an array. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * false
   */
  isArray?: boolean;
  /**
   * @remarks
   * Indicates whether the slot is encrypted.
   * >Notice: 无效内容
   * 
   * @example
   * false
   */
  isEncrypt?: boolean;
  /**
   * @remarks
   * Indicates whether the slot is interactive.
   * >Notice: 无效内容
   * 
   * @example
   * false
   */
  isInteractive?: boolean;
  /**
   * @remarks
   * Indicates whether the slot is required. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  isNecessary?: boolean;
  /**
   * @remarks
   * The slot life span.
   * 
   * @example
   * 0
   */
  lifeSpan?: number;
  /**
   * @remarks
   * The slot name.
   * 
   * @example
   * know
   */
  name?: string;
  /**
   * @remarks
   * The slot clarification prompts.
   */
  question?: string[];
  /**
   * @remarks
   * The slot tagging labels.
   */
  tags?: ListIntentionsResponseBodyDataIntentListSlotTags[];
  /**
   * @remarks
   * The slot tagging result.
   * 
   * @example
   * @知道
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      feedbackFunctions: 'FeedbackFunctions',
      feedbackType: 'FeedbackType',
      id: 'Id',
      isArray: 'IsArray',
      isEncrypt: 'IsEncrypt',
      isInteractive: 'IsInteractive',
      isNecessary: 'IsNecessary',
      lifeSpan: 'LifeSpan',
      name: 'Name',
      question: 'Question',
      tags: 'Tags',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedbackFunctions: { 'type': 'array', 'itemType': ListIntentionsResponseBodyDataIntentListSlotFeedbackFunctions },
      feedbackType: 'string',
      id: 'string',
      isArray: 'boolean',
      isEncrypt: 'boolean',
      isInteractive: 'boolean',
      isNecessary: 'boolean',
      lifeSpan: 'number',
      name: 'string',
      question: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListIntentionsResponseBodyDataIntentListSlotTags },
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.feedbackFunctions)) {
      $dara.Model.validateArray(this.feedbackFunctions);
    }
    if(Array.isArray(this.question)) {
      $dara.Model.validateArray(this.question);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentionsResponseBodyDataIntentListUserSayUserSayData extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the slot.
   * 
   * @example
   * 9ec31b50-32b8-11eb-9478-19d2d885afdb
   */
  slotId?: string;
  /**
   * @remarks
   * The utterance text.
   * 
   * @example
   * know
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      slotId: 'SlotId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slotId: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentionsResponseBodyDataIntentListUserSay extends $dara.Model {
  /**
   * @remarks
   * The source ID.
   * >Notice: 无效内容
   * 
   * @example
   * 1234567
   */
  fromId?: string;
  /**
   * @remarks
   * The utterance ID.
   * 
   * @example
   * 17448458
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether strict matching is used.
   * 
   * @example
   * true
   */
  strict?: boolean;
  /**
   * @remarks
   * The list of user utterances.
   */
  userSayData?: ListIntentionsResponseBodyDataIntentListUserSayUserSayData[];
  static names(): { [key: string]: string } {
    return {
      fromId: 'FromId',
      id: 'Id',
      strict: 'Strict',
      userSayData: 'UserSayData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromId: 'string',
      id: 'string',
      strict: 'boolean',
      userSayData: { 'type': 'array', 'itemType': ListIntentionsResponseBodyDataIntentListUserSayUserSayData },
    };
  }

  validate() {
    if(Array.isArray(this.userSayData)) {
      $dara.Model.validateArray(this.userSayData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentionsResponseBodyDataIntentList extends $dara.Model {
  /**
   * @remarks
   * The intent alias.
   */
  alias?: string[];
  /**
   * @remarks
   * The robot ID. [Deprecated]
   * 
   * @example
   * chatbot-cn-n7QmzrUnNe
   */
  botId?: number;
  /**
   * @remarks
   * The robot name.
   * 
   * @example
   * 111
   */
  botName?: string;
  /**
   * @remarks
   * The dialog flow ID.
   * 
   * @example
   * 50099
   */
  dialogId?: string;
  /**
   * @remarks
   * The intent ID.
   * 
   * @example
   * 10717802
   */
  id?: number;
  /**
   * @remarks
   * The language.
   * 
   * - English: en-us
   * - Chinese: zh-cn
   * 
   * @example
   * zh-cn
   */
  language?: string;
  /**
   * @remarks
   * The intent name.
   * 
   * @example
   * Got it
   */
  name?: string;
  /**
   * @remarks
   * The LGF intent utterance expressions.
   */
  ruleCheck?: ListIntentionsResponseBodyDataIntentListRuleCheck[];
  /**
   * @remarks
   * The intent slot information.
   */
  slot?: ListIntentionsResponseBodyDataIntentListSlot[];
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * 43258
   */
  tableId?: number;
  /**
   * @remarks
   * The intent type. Valid values:
   * - 0: normal intent. 
   * - 1: UNKNOWN. 
   * - 2: TableQA intent. 
   * - 3: generated from a standard intent.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The list of user utterances.
   */
  userSay?: ListIntentionsResponseBodyDataIntentListUserSay[];
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      botId: 'BotId',
      botName: 'BotName',
      dialogId: 'DialogId',
      id: 'Id',
      language: 'Language',
      name: 'Name',
      ruleCheck: 'RuleCheck',
      slot: 'Slot',
      tableId: 'TableId',
      type: 'Type',
      userSay: 'UserSay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: { 'type': 'array', 'itemType': 'string' },
      botId: 'number',
      botName: 'string',
      dialogId: 'string',
      id: 'number',
      language: 'string',
      name: 'string',
      ruleCheck: { 'type': 'array', 'itemType': ListIntentionsResponseBodyDataIntentListRuleCheck },
      slot: { 'type': 'array', 'itemType': ListIntentionsResponseBodyDataIntentListSlot },
      tableId: 'number',
      type: 'number',
      userSay: { 'type': 'array', 'itemType': ListIntentionsResponseBodyDataIntentListUserSay },
    };
  }

  validate() {
    if(Array.isArray(this.alias)) {
      $dara.Model.validateArray(this.alias);
    }
    if(Array.isArray(this.ruleCheck)) {
      $dara.Model.validateArray(this.ruleCheck);
    }
    if(Array.isArray(this.slot)) {
      $dara.Model.validateArray(this.slot);
    }
    if(Array.isArray(this.userSay)) {
      $dara.Model.validateArray(this.userSay);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The robot ID.
   * 
   * @example
   * chatbot-cn-n7QmzrUnNe
   */
  botId?: string;
  /**
   * @remarks
   * The list of intents.
   */
  intentList?: ListIntentionsResponseBodyDataIntentList[];
  /**
   * @remarks
   * The message returned by the operation.
   * 
   * @example
   * Success
   */
  message?: string;
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
      botId: 'BotId',
      intentList: 'IntentList',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
      intentList: { 'type': 'array', 'itemType': ListIntentionsResponseBodyDataIntentList },
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.intentList)) {
      $dara.Model.validateArray(this.intentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the operation.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListIntentionsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned by the operation.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
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
      data: ListIntentionsResponseBodyData,
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

