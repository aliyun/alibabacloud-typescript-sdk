// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessageResponseBodyMessagesContentCardCallback extends $dara.Model {
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

export class CreateMessageResponseBodyMessagesContentDingCard extends $dara.Model {
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

export class CreateMessageResponseBodyMessagesContentDingNormalCardCardData extends $dara.Model {
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

export class CreateMessageResponseBodyMessagesContentDingNormalCardCardUpdateOptions extends $dara.Model {
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

export class CreateMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigsPullConfig extends $dara.Model {
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

export class CreateMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigs extends $dara.Model {
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
  pullConfig?: CreateMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigsPullConfig;
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
      pullConfig: CreateMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigsPullConfig,
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

export class CreateMessageResponseBodyMessagesContentDingNormalCard extends $dara.Model {
  /**
   * @example
   * {}
   */
  cardData?: CreateMessageResponseBodyMessagesContentDingNormalCardCardData;
  /**
   * @example
   * templateId1
   */
  cardTemplateId?: string;
  /**
   * @example
   * {}
   */
  cardUpdateOptions?: CreateMessageResponseBodyMessagesContentDingNormalCardCardUpdateOptions;
  /**
   * @example
   * {}
   */
  dynamicDataSourceConfigs?: CreateMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigs[];
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
      cardData: CreateMessageResponseBodyMessagesContentDingNormalCardCardData,
      cardTemplateId: 'string',
      cardUpdateOptions: CreateMessageResponseBodyMessagesContentDingNormalCardCardUpdateOptions,
      dynamicDataSourceConfigs: { 'type': 'array', 'itemType': CreateMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigs },
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

export class CreateMessageResponseBodyMessagesContentMarkdown extends $dara.Model {
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

export class CreateMessageResponseBodyMessagesContentStructViewPartsDataPart extends $dara.Model {
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

export class CreateMessageResponseBodyMessagesContentStructViewPartsReasonPart extends $dara.Model {
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

export class CreateMessageResponseBodyMessagesContentStructViewPartsRecommendPartRecommends extends $dara.Model {
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

export class CreateMessageResponseBodyMessagesContentStructViewPartsRecommendPart extends $dara.Model {
  recommends?: CreateMessageResponseBodyMessagesContentStructViewPartsRecommendPartRecommends[];
  static names(): { [key: string]: string } {
    return {
      recommends: 'recommends',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommends: { 'type': 'array', 'itemType': CreateMessageResponseBodyMessagesContentStructViewPartsRecommendPartRecommends },
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

export class CreateMessageResponseBodyMessagesContentStructViewPartsReferencePartReferences extends $dara.Model {
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

export class CreateMessageResponseBodyMessagesContentStructViewPartsReferencePart extends $dara.Model {
  references?: CreateMessageResponseBodyMessagesContentStructViewPartsReferencePartReferences[];
  static names(): { [key: string]: string } {
    return {
      references: 'references',
    };
  }

  static types(): { [key: string]: any } {
    return {
      references: { 'type': 'array', 'itemType': CreateMessageResponseBodyMessagesContentStructViewPartsReferencePartReferences },
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

export class CreateMessageResponseBodyMessagesContentStructViewPartsTextPart extends $dara.Model {
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

export class CreateMessageResponseBodyMessagesContentStructViewParts extends $dara.Model {
  append?: boolean;
  /**
   * @example
   * {}
   */
  dataPart?: CreateMessageResponseBodyMessagesContentStructViewPartsDataPart;
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
  reasonPart?: CreateMessageResponseBodyMessagesContentStructViewPartsReasonPart;
  /**
   * @example
   * {}
   */
  recommendPart?: CreateMessageResponseBodyMessagesContentStructViewPartsRecommendPart;
  /**
   * @example
   * {}
   */
  referencePart?: CreateMessageResponseBodyMessagesContentStructViewPartsReferencePart;
  /**
   * @example
   * {}
   */
  textPart?: CreateMessageResponseBodyMessagesContentStructViewPartsTextPart;
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
      dataPart: CreateMessageResponseBodyMessagesContentStructViewPartsDataPart,
      finish: 'boolean',
      partDesc: 'string',
      partId: 'string',
      reasonPart: CreateMessageResponseBodyMessagesContentStructViewPartsReasonPart,
      recommendPart: CreateMessageResponseBodyMessagesContentStructViewPartsRecommendPart,
      referencePart: CreateMessageResponseBodyMessagesContentStructViewPartsReferencePart,
      textPart: CreateMessageResponseBodyMessagesContentStructViewPartsTextPart,
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

export class CreateMessageResponseBodyMessagesContentStructView extends $dara.Model {
  parts?: CreateMessageResponseBodyMessagesContentStructViewParts[];
  static names(): { [key: string]: string } {
    return {
      parts: 'parts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parts: { 'type': 'array', 'itemType': CreateMessageResponseBodyMessagesContentStructViewParts },
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

export class CreateMessageResponseBodyMessagesContentText extends $dara.Model {
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

export class CreateMessageResponseBodyMessagesContent extends $dara.Model {
  cardCallback?: CreateMessageResponseBodyMessagesContentCardCallback;
  dingCard?: CreateMessageResponseBodyMessagesContentDingCard;
  /**
   * @example
   * {}
   */
  dingNormalCard?: CreateMessageResponseBodyMessagesContentDingNormalCard;
  markdown?: CreateMessageResponseBodyMessagesContentMarkdown;
  structView?: CreateMessageResponseBodyMessagesContentStructView;
  text?: CreateMessageResponseBodyMessagesContentText;
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
      cardCallback: CreateMessageResponseBodyMessagesContentCardCallback,
      dingCard: CreateMessageResponseBodyMessagesContentDingCard,
      dingNormalCard: CreateMessageResponseBodyMessagesContentDingNormalCard,
      markdown: CreateMessageResponseBodyMessagesContentMarkdown,
      structView: CreateMessageResponseBodyMessagesContentStructView,
      text: CreateMessageResponseBodyMessagesContentText,
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

export class CreateMessageResponseBodyMessages extends $dara.Model {
  content?: CreateMessageResponseBodyMessagesContent;
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
      content: CreateMessageResponseBodyMessagesContent,
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

export class CreateMessageResponseBody extends $dara.Model {
  messages?: CreateMessageResponseBodyMessages[];
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
      messages: { 'type': 'array', 'itemType': CreateMessageResponseBodyMessages },
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

