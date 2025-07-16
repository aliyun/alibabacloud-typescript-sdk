// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageResponseBodyMessagesContentCardCallback extends $dara.Model {
  /**
   * @example
   * {}
   */
  content?: string;
  /**
   * @example
   * aliding_messageId123
   */
  relatedMessageId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      relatedMessageId: 'relatedMessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      relatedMessageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessagesContentDingCard extends $dara.Model {
  /**
   * @example
   * {}
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * basic_card_schema
   */
  contentType?: string;
  /**
   * @example
   * true
   */
  finished?: boolean;
  /**
   * @example
   * templateId123
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentType: 'contentType',
      finished: 'finished',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      finished: 'boolean',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessagesContentDingNormalCardCardData extends $dara.Model {
  /**
   * @example
   * {}
   */
  cardParamMap?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      cardParamMap: 'cardParamMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardParamMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.cardParamMap) {
      $dara.Model.validateMap(this.cardParamMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessagesContentDingNormalCardCardUpdateOptions extends $dara.Model {
  /**
   * @example
   * {}
   */
  updateCardDataByKey?: boolean;
  /**
   * @example
   * {}
   */
  updatePrivateDataByKey?: boolean;
  static names(): { [key: string]: string } {
    return {
      updateCardDataByKey: 'updateCardDataByKey',
      updatePrivateDataByKey: 'updatePrivateDataByKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateCardDataByKey: 'boolean',
      updatePrivateDataByKey: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigsPullConfig extends $dara.Model {
  /**
   * @example
   * 3
   */
  interval?: number;
  /**
   * @example
   * NONE
   */
  pullStrategy?: string;
  /**
   * @example
   * SECONDS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      interval: 'interval',
      pullStrategy: 'pullStrategy',
      timeUnit: 'timeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      pullStrategy: 'string',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigs extends $dara.Model {
  /**
   * @example
   * {}
   */
  constParams?: { [key: string]: any };
  /**
   * @example
   * dynamicDataSourceId1
   */
  dynamicDataSourceId?: string;
  /**
   * @example
   * {}
   */
  pullConfig?: ListMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigsPullConfig;
  static names(): { [key: string]: string } {
    return {
      constParams: 'constParams',
      dynamicDataSourceId: 'dynamicDataSourceId',
      pullConfig: 'pullConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dynamicDataSourceId: 'string',
      pullConfig: ListMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigsPullConfig,
    };
  }

  validate() {
    if(this.constParams) {
      $dara.Model.validateMap(this.constParams);
    }
    if(this.pullConfig && typeof (this.pullConfig as any).validate === 'function') {
      (this.pullConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessagesContentDingNormalCard extends $dara.Model {
  /**
   * @example
   * {}
   */
  cardData?: ListMessageResponseBodyMessagesContentDingNormalCardCardData;
  /**
   * @example
   * templateId1
   */
  cardTemplateId?: string;
  /**
   * @example
   * {}
   */
  cardUpdateOptions?: ListMessageResponseBodyMessagesContentDingNormalCardCardUpdateOptions;
  /**
   * @example
   * {}
   */
  dynamicDataSourceConfigs?: ListMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigs[];
  /**
   * @example
   * {}
   */
  privateData?: { [key: string]: {[key: string]: any} };
  static names(): { [key: string]: string } {
    return {
      cardData: 'cardData',
      cardTemplateId: 'cardTemplateId',
      cardUpdateOptions: 'cardUpdateOptions',
      dynamicDataSourceConfigs: 'dynamicDataSourceConfigs',
      privateData: 'privateData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardData: ListMessageResponseBodyMessagesContentDingNormalCardCardData,
      cardTemplateId: 'string',
      cardUpdateOptions: ListMessageResponseBodyMessagesContentDingNormalCardCardUpdateOptions,
      dynamicDataSourceConfigs: { 'type': 'array', 'itemType': ListMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigs },
      privateData: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
    };
  }

  validate() {
    if(this.cardData && typeof (this.cardData as any).validate === 'function') {
      (this.cardData as any).validate();
    }
    if(this.cardUpdateOptions && typeof (this.cardUpdateOptions as any).validate === 'function') {
      (this.cardUpdateOptions as any).validate();
    }
    if(Array.isArray(this.dynamicDataSourceConfigs)) {
      $dara.Model.validateArray(this.dynamicDataSourceConfigs);
    }
    if(this.privateData) {
      $dara.Model.validateMap(this.privateData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessagesContentMarkdown extends $dara.Model {
  /**
   * @example
   * 1. markdown内容
   * 2. markdown内容
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListMessageResponseBodyMessagesContentStructViewPartsDataPart extends $dara.Model {
  data?: any;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessagesContentStructViewPartsReasonPart extends $dara.Model {
  /**
   * @example
   * 123123
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessagesContentStructViewPartsRecommendPartRecommends extends $dara.Model {
  mobileUrl?: string;
  text?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      mobileUrl: 'mobileUrl',
      text: 'text',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobileUrl: 'string',
      text: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessagesContentStructViewPartsRecommendPart extends $dara.Model {
  recommends?: ListMessageResponseBodyMessagesContentStructViewPartsRecommendPartRecommends[];
  static names(): { [key: string]: string } {
    return {
      recommends: 'recommends',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommends: { 'type': 'array', 'itemType': ListMessageResponseBodyMessagesContentStructViewPartsRecommendPartRecommends },
    };
  }

  validate() {
    if(Array.isArray(this.recommends)) {
      $dara.Model.validateArray(this.recommends);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessagesContentStructViewPartsReferencePartReferences extends $dara.Model {
  /**
   * @example
   * 0
   */
  index?: string;
  /**
   * @example
   * mcp是....
   */
  name?: string;
  /**
   * @example
   * ata
   */
  sourceCode?: string;
  sourceIcon?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  /**
   * @example
   * 《mcp原理介绍》
   */
  title?: string;
  /**
   * @example
   * https://taobao.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      name: 'name',
      sourceCode: 'sourceCode',
      sourceIcon: 'sourceIcon',
      summary: 'summary',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      name: 'string',
      sourceCode: 'string',
      sourceIcon: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessagesContentStructViewPartsReferencePart extends $dara.Model {
  references?: ListMessageResponseBodyMessagesContentStructViewPartsReferencePartReferences[];
  static names(): { [key: string]: string } {
    return {
      references: 'references',
    };
  }

  static types(): { [key: string]: any } {
    return {
      references: { 'type': 'array', 'itemType': ListMessageResponseBodyMessagesContentStructViewPartsReferencePartReferences },
    };
  }

  validate() {
    if(Array.isArray(this.references)) {
      $dara.Model.validateArray(this.references);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessagesContentStructViewPartsTextPart extends $dara.Model {
  /**
   * @example
   * 123123
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListMessageResponseBodyMessagesContentStructViewParts extends $dara.Model {
  append?: boolean;
  /**
   * @example
   * {}
   */
  dataPart?: ListMessageResponseBodyMessagesContentStructViewPartsDataPart;
  finish?: boolean;
  /**
   * @example
   * 这是正文内容部分
   */
  partDesc?: string;
  /**
   * @example
   * artifactId123
   */
  partId?: string;
  /**
   * @example
   * {}
   */
  reasonPart?: ListMessageResponseBodyMessagesContentStructViewPartsReasonPart;
  /**
   * @example
   * {}
   */
  recommendPart?: ListMessageResponseBodyMessagesContentStructViewPartsRecommendPart;
  /**
   * @example
   * {}
   */
  referencePart?: ListMessageResponseBodyMessagesContentStructViewPartsReferencePart;
  /**
   * @example
   * {}
   */
  textPart?: ListMessageResponseBodyMessagesContentStructViewPartsTextPart;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * textPart
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      append: 'append',
      dataPart: 'dataPart',
      finish: 'finish',
      partDesc: 'partDesc',
      partId: 'partId',
      reasonPart: 'reasonPart',
      recommendPart: 'recommendPart',
      referencePart: 'referencePart',
      textPart: 'textPart',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      append: 'boolean',
      dataPart: ListMessageResponseBodyMessagesContentStructViewPartsDataPart,
      finish: 'boolean',
      partDesc: 'string',
      partId: 'string',
      reasonPart: ListMessageResponseBodyMessagesContentStructViewPartsReasonPart,
      recommendPart: ListMessageResponseBodyMessagesContentStructViewPartsRecommendPart,
      referencePart: ListMessageResponseBodyMessagesContentStructViewPartsReferencePart,
      textPart: ListMessageResponseBodyMessagesContentStructViewPartsTextPart,
      type: 'string',
    };
  }

  validate() {
    if(this.dataPart && typeof (this.dataPart as any).validate === 'function') {
      (this.dataPart as any).validate();
    }
    if(this.reasonPart && typeof (this.reasonPart as any).validate === 'function') {
      (this.reasonPart as any).validate();
    }
    if(this.recommendPart && typeof (this.recommendPart as any).validate === 'function') {
      (this.recommendPart as any).validate();
    }
    if(this.referencePart && typeof (this.referencePart as any).validate === 'function') {
      (this.referencePart as any).validate();
    }
    if(this.textPart && typeof (this.textPart as any).validate === 'function') {
      (this.textPart as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessagesContentStructView extends $dara.Model {
  parts?: ListMessageResponseBodyMessagesContentStructViewParts[];
  static names(): { [key: string]: string } {
    return {
      parts: 'parts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parts: { 'type': 'array', 'itemType': ListMessageResponseBodyMessagesContentStructViewParts },
    };
  }

  validate() {
    if(Array.isArray(this.parts)) {
      $dara.Model.validateArray(this.parts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessagesContentText extends $dara.Model {
  /**
   * @example
   * 你好！
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListMessageResponseBodyMessagesContent extends $dara.Model {
  cardCallback?: ListMessageResponseBodyMessagesContentCardCallback;
  dingCard?: ListMessageResponseBodyMessagesContentDingCard;
  /**
   * @example
   * {}
   */
  dingNormalCard?: ListMessageResponseBodyMessagesContentDingNormalCard;
  markdown?: ListMessageResponseBodyMessagesContentMarkdown;
  structView?: ListMessageResponseBodyMessagesContentStructView;
  text?: ListMessageResponseBodyMessagesContentText;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 枚举字段，可为：text,markdown,cardCallback,dingCard,agentArtifact,dingNormalCard
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cardCallback: 'cardCallback',
      dingCard: 'dingCard',
      dingNormalCard: 'dingNormalCard',
      markdown: 'markdown',
      structView: 'structView',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardCallback: ListMessageResponseBodyMessagesContentCardCallback,
      dingCard: ListMessageResponseBodyMessagesContentDingCard,
      dingNormalCard: ListMessageResponseBodyMessagesContentDingNormalCard,
      markdown: ListMessageResponseBodyMessagesContentMarkdown,
      structView: ListMessageResponseBodyMessagesContentStructView,
      text: ListMessageResponseBodyMessagesContentText,
      type: 'string',
    };
  }

  validate() {
    if(this.cardCallback && typeof (this.cardCallback as any).validate === 'function') {
      (this.cardCallback as any).validate();
    }
    if(this.dingCard && typeof (this.dingCard as any).validate === 'function') {
      (this.dingCard as any).validate();
    }
    if(this.dingNormalCard && typeof (this.dingNormalCard as any).validate === 'function') {
      (this.dingNormalCard as any).validate();
    }
    if(this.markdown && typeof (this.markdown as any).validate === 'function') {
      (this.markdown as any).validate();
    }
    if(this.structView && typeof (this.structView as any).validate === 'function') {
      (this.structView as any).validate();
    }
    if(this.text && typeof (this.text as any).validate === 'function') {
      (this.text as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBodyMessages extends $dara.Model {
  content?: ListMessageResponseBodyMessagesContent;
  /**
   * @example
   * 这是一张小猫钓鱼图
   */
  contentDesc?: string;
  /**
   * @example
   * 1642448000000
   */
  createAt?: number;
  /**
   * @example
   * messageId1
   */
  id?: string;
  /**
   * @example
   * user
   */
  role?: string;
  /**
   * @example
   * runId1
   */
  runId?: string;
  /**
   * @example
   * threadId1
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentDesc: 'contentDesc',
      createAt: 'createAt',
      id: 'id',
      role: 'role',
      runId: 'runId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ListMessageResponseBodyMessagesContent,
      contentDesc: 'string',
      createAt: 'number',
      id: 'string',
      role: 'string',
      runId: 'string',
      threadId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageResponseBody extends $dara.Model {
  messages?: ListMessageResponseBodyMessages[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': ListMessageResponseBodyMessages },
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

