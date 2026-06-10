// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NluResponseBodyMessagesDialogHubNluInfoGlobalDictList extends $dara.Model {
  /**
   * @remarks
   * The standard word.
   * 
   * @example
   * 天气
   */
  standardWord?: string;
  /**
   * @remarks
   * The synonym.
   * 
   * @example
   * 天气
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      standardWord: 'StandardWord',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardWord: 'string',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponseBodyMessagesDialogHubNluInfoGlobalSensitiveWordList extends $dara.Model {
  /**
   * @remarks
   * The standard word.
   * 
   * @example
   * 天气
   */
  standardWord?: string;
  /**
   * @remarks
   * The synonym.
   * 
   * @example
   * 天气
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      standardWord: 'StandardWord',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardWord: 'string',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponseBodyMessagesDialogHubNluInfo extends $dara.Model {
  /**
   * @remarks
   * The list of global dictionary entries.
   */
  globalDictList?: NluResponseBodyMessagesDialogHubNluInfoGlobalDictList[];
  /**
   * @remarks
   * The list of global sensitive words.
   */
  globalSensitiveWordList?: NluResponseBodyMessagesDialogHubNluInfoGlobalSensitiveWordList[];
  static names(): { [key: string]: string } {
    return {
      globalDictList: 'GlobalDictList',
      globalSensitiveWordList: 'GlobalSensitiveWordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalDictList: { 'type': 'array', 'itemType': NluResponseBodyMessagesDialogHubNluInfoGlobalDictList },
      globalSensitiveWordList: { 'type': 'array', 'itemType': NluResponseBodyMessagesDialogHubNluInfoGlobalSensitiveWordList },
    };
  }

  validate() {
    if(Array.isArray(this.globalDictList)) {
      $dara.Model.validateArray(this.globalDictList);
    }
    if(Array.isArray(this.globalSensitiveWordList)) {
      $dara.Model.validateArray(this.globalSensitiveWordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponseBodyMessagesDsNluInfoEntityList extends $dara.Model {
  /**
   * @remarks
   * The name of the entity.
   * 
   * @example
   * @城市
   */
  name?: string;
  /**
   * @remarks
   * The original word for the entity, also known as an entity member.
   * 
   * @example
   * 北京
   */
  origin?: string;
  /**
   * @remarks
   * The type of the entity. Currently, only the `text` type is supported.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The entity\\"s synonym.
   * 
   * @example
   * 首都
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      origin: 'Origin',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      origin: 'string',
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

export class NluResponseBodyMessagesDsNluInfoIntentListSlotList extends $dara.Model {
  /**
   * @remarks
   * The name of the entity.
   * 
   * @example
   * @城市
   */
  name?: string;
  /**
   * @remarks
   * The original word for the entity, also known as an entity member.
   * 
   * @example
   * 北京
   */
  origin?: string;
  /**
   * @remarks
   * The type of the entity. Currently, only the `text` type is supported.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The entity\\"s synonym.
   * 
   * @example
   * 首都
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      origin: 'Origin',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      origin: 'string',
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

export class NluResponseBodyMessagesDsNluInfoIntentList extends $dara.Model {
  /**
   * @remarks
   * The intent ID.
   * 
   * @example
   * 724387
   */
  intentId?: number;
  /**
   * @remarks
   * The details of the matching process.
   * 
   * @example
   * classifierType=Fewshot,from=Fewshot,content=[我要查北京的天气, 帮我查北京的天气, 北京天气怎么样, 北京今天下雨吗, 北京今天多少度]
   */
  matchDetail?: string;
  /**
   * @remarks
   * The match type. Valid values are `Similarity` (match by utterance similarity), `Lgf` (match by LGF), `Classify` (match by model training), `FewShotLearning` (match by the built-in few-shot learning model), and `BuildIn` (match with a built-in intent).
   * 
   * @example
   * FewShotLearning
   */
  matchType?: string;
  /**
   * @remarks
   * The name of the intent.
   * 
   * @example
   * 查天气意图
   */
  name?: string;
  /**
   * @remarks
   * The confidence score of the match.
   * 
   * @example
   * 0.995
   */
  score?: number;
  /**
   * @remarks
   * The list of slots for the matched intent.
   */
  slotList?: NluResponseBodyMessagesDsNluInfoIntentListSlotList[];
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      matchDetail: 'MatchDetail',
      matchType: 'MatchType',
      name: 'Name',
      score: 'Score',
      slotList: 'SlotList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'number',
      matchDetail: 'string',
      matchType: 'string',
      name: 'string',
      score: 'number',
      slotList: { 'type': 'array', 'itemType': NluResponseBodyMessagesDsNluInfoIntentListSlotList },
    };
  }

  validate() {
    if(Array.isArray(this.slotList)) {
      $dara.Model.validateArray(this.slotList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponseBodyMessagesDsNluInfo extends $dara.Model {
  /**
   * @remarks
   * The list of entities.
   */
  entityList?: NluResponseBodyMessagesDsNluInfoEntityList[];
  /**
   * @remarks
   * The list of intents.
   */
  intentList?: NluResponseBodyMessagesDsNluInfoIntentList[];
  static names(): { [key: string]: string } {
    return {
      entityList: 'EntityList',
      intentList: 'IntentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityList: { 'type': 'array', 'itemType': NluResponseBodyMessagesDsNluInfoEntityList },
      intentList: { 'type': 'array', 'itemType': NluResponseBodyMessagesDsNluInfoIntentList },
    };
  }

  validate() {
    if(Array.isArray(this.entityList)) {
      $dara.Model.validateArray(this.entityList);
    }
    if(Array.isArray(this.intentList)) {
      $dara.Model.validateArray(this.intentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponseBodyMessages extends $dara.Model {
  /**
   * @remarks
   * The natural language understanding information from DialogHub.
   */
  dialogHubNluInfo?: NluResponseBodyMessagesDialogHubNluInfo;
  /**
   * @remarks
   * The natural language understanding information from Dialog Studio.
   */
  dsNluInfo?: NluResponseBodyMessagesDsNluInfo;
  static names(): { [key: string]: string } {
    return {
      dialogHubNluInfo: 'DialogHubNluInfo',
      dsNluInfo: 'DsNluInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogHubNluInfo: NluResponseBodyMessagesDialogHubNluInfo,
      dsNluInfo: NluResponseBodyMessagesDsNluInfo,
    };
  }

  validate() {
    if(this.dialogHubNluInfo && typeof (this.dialogHubNluInfo as any).validate === 'function') {
      (this.dialogHubNluInfo as any).validate();
    }
    if(this.dsNluInfo && typeof (this.dsNluInfo as any).validate === 'function') {
      (this.dsNluInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NluResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the natural language understanding response.
   * 
   * @example
   * 2828708A-2C7A-1BAE-B810-87DB9DA9C661
   */
  messageId?: string;
  /**
   * @remarks
   * The list of messages.
   */
  messages?: NluResponseBodyMessages[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A6357C1B-1D79-1382-B259-BD9E80751B42
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      messages: 'Messages',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      messages: { 'type': 'array', 'itemType': NluResponseBodyMessages },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

