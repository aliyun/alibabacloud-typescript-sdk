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
   * The list of global nouns.
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
   * The entity name.
   * 
   * @example
   * @城市
   */
  name?: string;
  /**
   * @remarks
   * The original word of the entity (entity member).
   * 
   * @example
   * 北京
   */
  origin?: string;
  /**
   * @remarks
   * The entity type. Currently, only the text type is supported.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The synonym of the entity.
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
   * The entity name.
   * 
   * @example
   * @城市
   */
  name?: string;
  /**
   * @remarks
   * The original word of the entity (entity member).
   * 
   * @example
   * 北京
   */
  origin?: string;
  /**
   * @remarks
   * The entity type. Currently, only the text type is supported.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The synonym of the entity.
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
   * The match details (matching process).
   * 
   * @example
   * classifierType=Fewshot,from=Fewshot,content=[I want to check the weather in Beijing, Help me check the weather in Beijing, How is the weather in Beijing, Is it raining in Beijing today, What is the temperature in Beijing today]
   */
  matchDetail?: string;
  /**
   * @remarks
   * The match type. Valid values:
   * - Similarity: The query matches the intent through intent utterance similarity.
   * - Lgf: The query matches the intent through LGF.
   * - Classify: The query matches the intent through model training.
   * - FewShotLearning: The query matches the intent through the built-in few-shot model.
   * - BuildIn: The query matches a built-in system intent.
   * 
   * @example
   * FewShotLearning
   */
  matchType?: string;
  /**
   * @remarks
   * The intent name.
   * 
   * @example
   * CheckWeatherIntent
   */
  name?: string;
  /**
   * @remarks
   * The score.
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
   * The NLU information from the dialog central controller.
   */
  dialogHubNluInfo?: NluResponseBodyMessagesDialogHubNluInfo;
  /**
   * @remarks
   * The NLU information from the dialog flow.
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
   * The ID of the NLU response message.
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

