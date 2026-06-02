// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntentionsResponseBodyDataIntentListRuleCheck extends $dara.Model {
  error?: string[];
  /**
   * @example
   * true
   */
  strict?: boolean;
  text?: string;
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
   * @example
   * b9932604-08ae-4525-bbe5-c8cce3066070
   */
  id?: string;
  /**
   * @example
   * SQL_SUB_QUERY
   */
  label?: string;
  name?: string;
  /**
   * @example
   * PASSKEY
   */
  type?: string;
  /**
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
   * @example
   * test
   */
  aliyunFunction?: string;
  /**
   * @example
   * test
   */
  aliyunService?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * GA setup for HPC cn4-HPC-EndUserServer-GlobalAccelerator
   */
  description?: string;
  /**
   * @example
   * cn-hangzhou.log.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @example
   * count
   */
  function?: string;
  name?: string;
  params?: { [key: string]: any };
  switch?: ListIntentionsResponseBodyDataIntentListSlotFeedbackFunctionsSwitch[];
  /**
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
   * @example
   * 17448458
   */
  userSayId?: string;
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
  feedbackFunctions?: ListIntentionsResponseBodyDataIntentListSlotFeedbackFunctions[];
  /**
   * @example
   * test
   */
  feedbackType?: string;
  /**
   * @example
   * 9ec31b50-32b8-11eb-9478-19d2d885afdb
   */
  id?: string;
  /**
   * @example
   * false
   */
  isArray?: boolean;
  /**
   * @example
   * false
   */
  isEncrypt?: boolean;
  /**
   * @example
   * false
   */
  isInteractive?: boolean;
  /**
   * @example
   * true
   */
  isNecessary?: boolean;
  /**
   * @example
   * 0
   */
  lifeSpan?: number;
  name?: string;
  question?: string[];
  tags?: ListIntentionsResponseBodyDataIntentListSlotTags[];
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
   * @example
   * 9ec31b50-32b8-11eb-9478-19d2d885afdb
   */
  slotId?: string;
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
   * @example
   * 1234567
   */
  fromId?: string;
  /**
   * @example
   * 17448458
   */
  id?: string;
  /**
   * @example
   * true
   */
  strict?: boolean;
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
  alias?: string[];
  /**
   * @example
   * chatbot-cn-n7QmzrUnNe
   */
  botId?: number;
  /**
   * @example
   * 111
   */
  botName?: string;
  /**
   * @example
   * 50099
   */
  dialogId?: string;
  /**
   * @example
   * 10717802
   */
  id?: number;
  /**
   * @example
   * zh-cn
   */
  language?: string;
  name?: string;
  ruleCheck?: ListIntentionsResponseBodyDataIntentListRuleCheck[];
  slot?: ListIntentionsResponseBodyDataIntentListSlot[];
  /**
   * @example
   * 43258
   */
  tableId?: number;
  /**
   * @example
   * 0
   */
  type?: number;
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
   * @example
   * chatbot-cn-n7QmzrUnNe
   */
  botId?: string;
  intentList?: ListIntentionsResponseBodyDataIntentList[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListIntentionsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
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

