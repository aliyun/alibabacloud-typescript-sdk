// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntentionsResponseBodyDataIntentListRuleCheck extends $dara.Model {
  /**
   * @remarks
   * Error Message
   */
  error?: string[];
  /**
   * @remarks
   * Is Strict Match
   * 
   * @example
   * true
   */
  strict?: boolean;
  /**
   * @remarks
   * Expression Value
   * 
   * @example
   * 知道
   */
  text?: string;
  /**
   * @remarks
   * Warning Message
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
   * Condition ID
   * 
   * @example
   * b9932604-08ae-4525-bbe5-c8cce3066070
   */
  id?: string;
  /**
   * @remarks
   * Follow-up Question Label
   * 
   * @example
   * SQL_SUB_QUERY
   */
  label?: string;
  /**
   * @remarks
   * Condition Name
   * 
   * @example
   * 测试0609_20241021_101018_复制_复制_复制
   */
  name?: string;
  /**
   * @remarks
   * Type
   * 
   * @example
   * PASSKEY
   */
  type?: string;
  /**
   * @remarks
   * Condition Value
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
   * Alibaba Cloud Function Name
   * 
   * @example
   * test
   */
  aliyunFunction?: string;
  /**
   * @remarks
   * Alibaba Cloud Service
   * 
   * @example
   * test
   */
  aliyunService?: string;
  /**
   * @remarks
   * API Status Code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Follow-up Question Description
   * 
   * @example
   * GA setup for HPC cn4-HPC-EndUserServer-GlobalAccelerator
   */
  description?: string;
  /**
   * @remarks
   * Endpoint
   * 
   * @example
   * cn-hangzhou.log.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @remarks
   * Follow-up Question Function
   * 
   * @example
   * count
   */
  function?: string;
  /**
   * @remarks
   * Function Name
   * 
   * @example
   * 方欣云呼系统每日拨测_2024年11月
   */
  name?: string;
  /**
   * @remarks
   * Parameters
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * Feature Switch. Values:
   * 
   * - **on**: Enabled
   * 
   * - **off**: Disabled
   */
  switch?: ListIntentionsResponseBodyDataIntentListSlotFeedbackFunctionsSwitch[];
  /**
   * @remarks
   * Follow-up Question Type
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
   * User Say Unique Identifier for the Label
   * 
   * @example
   * 17448458
   */
  userSayId?: string;
  /**
   * @remarks
   * The value of the tag is the result of tagging an intent expression.
   * 
   * @example
   * 你知道xxxx？
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
   * The follow-up question function.
   * >Notice: This parameter is invalid.
   */
  feedbackFunctions?: ListIntentionsResponseBodyDataIntentListSlotFeedbackFunctions[];
  /**
   * @remarks
   * Feedback Type
   * >Notice: Invalid content
   * 
   * @example
   * test
   */
  feedbackType?: string;
  /**
   * @remarks
   * Slot Unique Identifier
   * 
   * @example
   * 9ec31b50-32b8-11eb-9478-19d2d885afdb
   */
  id?: string;
  /**
   * @remarks
   * Is Array:
   * 
   * - true: Yes
   * 
   * - false: No
   * 
   * @example
   * false
   */
  isArray?: boolean;
  /**
   * @remarks
   * Is Encrypted
   * >Notice: Invalid content
   * 
   * @example
   * false
   */
  isEncrypt?: boolean;
  /**
   * @remarks
   * Is Interactive
   * >Notice: Invalid content
   * 
   * @example
   * false
   */
  isInteractive?: boolean;
  /**
   * @remarks
   * Is Required Slot:
   * 
   * - true: Yes
   * 
   * - false: No
   * 
   * @example
   * true
   */
  isNecessary?: boolean;
  /**
   * @remarks
   * Slot Lifecycle
   * 
   * @example
   * 0
   */
  lifeSpan?: number;
  /**
   * @remarks
   * Slot Name
   * 
   * @example
   * 知道
   */
  name?: string;
  /**
   * @remarks
   * Slot Follow-up Question
   */
  question?: string[];
  /**
   * @remarks
   * Slot Tagging Labels
   */
  tags?: ListIntentionsResponseBodyDataIntentListSlotTags[];
  /**
   * @remarks
   * Slot Tagging Result
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
   * Slot Unique Identifier
   * 
   * @example
   * 9ec31b50-32b8-11eb-9478-19d2d885afdb
   */
  slotId?: string;
  /**
   * @remarks
   * Expression
   * 
   * @example
   * 知道
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
   * Source ID
   * >Notice: Invalid content
   * 
   * @example
   * 1234567
   */
  fromId?: string;
  /**
   * @remarks
   * The ID of the user utterance.
   * 
   * @example
   * 17448458
   */
  id?: string;
  /**
   * @remarks
   * Is Strict Match
   * 
   * @example
   * true
   */
  strict?: boolean;
  /**
   * @remarks
   * User Say List
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
   * Intent Alias
   */
  alias?: string[];
  /**
   * @remarks
   * Bot ID (Deprecated)
   * 
   * @example
   * chatbot-cn-n7QmzrUnNe
   */
  botId?: number;
  /**
   * @remarks
   * Bot Name
   * 
   * @example
   * 111
   */
  botName?: string;
  /**
   * @remarks
   * Conversation Flow ID
   * 
   * @example
   * 50099
   */
  dialogId?: string;
  /**
   * @remarks
   * Intent ID
   * 
   * @example
   * 10717802
   */
  id?: number;
  /**
   * @remarks
   * Language
   * 
   * - English (en-us)
   * 
   * - Chinese (zh-cn)
   * 
   * @example
   * zh-cn
   */
  language?: string;
  /**
   * @remarks
   * Intent Name
   * 
   * @example
   * 知道了
   */
  name?: string;
  /**
   * @remarks
   * LGF Intent Expression
   */
  ruleCheck?: ListIntentionsResponseBodyDataIntentListRuleCheck[];
  /**
   * @remarks
   * Intent Slot Information
   */
  slot?: ListIntentionsResponseBodyDataIntentListSlot[];
  /**
   * @remarks
   * Table ID
   * 
   * @example
   * 43258
   */
  tableId?: number;
  /**
   * @remarks
   * Intent Type:
   * 
   * - 0: Normal intent;
   * 
   * - 1: UNKNOWN;
   * 
   * - 2: TableQA intent;
   * 
   * - 3: Generated from standard intent
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * User Say List
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
   * Bot ID
   * 
   * @example
   * chatbot-cn-n7QmzrUnNe
   */
  botId?: string;
  /**
   * @remarks
   * Intent List
   */
  intentList?: ListIntentionsResponseBodyDataIntentList[];
  /**
   * @remarks
   * API Message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
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
   * API Status Code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Returned Data
   */
  data?: ListIntentionsResponseBodyData;
  /**
   * @remarks
   * HTTP Status Code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API Message
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
   * Is Success
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

