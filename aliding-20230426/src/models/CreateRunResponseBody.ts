// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRunResponseBodyMessagesContentCardCallback extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContentDingCard extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContentDingNormalCardCardData extends $dara.Model {
  cardParamMap?: any;
  static names(): { [key: string]: string } {
    return {
      cardParamMap: 'cardParamMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardParamMap: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunResponseBodyMessagesContentDingNormalCardCardUpdateOptions extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigsPullConfig extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigs extends $dara.Model {
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
  pullConfig?: CreateRunResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigsPullConfig;
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
      pullConfig: CreateRunResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigsPullConfig,
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

export class CreateRunResponseBodyMessagesContentDingNormalCard extends $dara.Model {
  /**
   * @example
   * {}
   */
  cardData?: CreateRunResponseBodyMessagesContentDingNormalCardCardData;
  /**
   * @example
   * templateId1
   */
  cardTemplateId?: string;
  /**
   * @example
   * {}
   */
  cardUpdateOptions?: CreateRunResponseBodyMessagesContentDingNormalCardCardUpdateOptions;
  /**
   * @example
   * {}
   */
  dynamicDataSourceConfigs?: CreateRunResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigs[];
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
      cardData: CreateRunResponseBodyMessagesContentDingNormalCardCardData,
      cardTemplateId: 'string',
      cardUpdateOptions: CreateRunResponseBodyMessagesContentDingNormalCardCardUpdateOptions,
      dynamicDataSourceConfigs: { 'type': 'array', 'itemType': CreateRunResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigs },
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

export class CreateRunResponseBodyMessagesContentMarkdown extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContentStructViewPartsDataPart extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContentStructViewPartsReasonPart extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContentStructViewPartsRecommendPartRecommends extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContentStructViewPartsRecommendPart extends $dara.Model {
  recommends?: CreateRunResponseBodyMessagesContentStructViewPartsRecommendPartRecommends[];
  static names(): { [key: string]: string } {
    return {
      recommends: 'recommends',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommends: { 'type': 'array', 'itemType': CreateRunResponseBodyMessagesContentStructViewPartsRecommendPartRecommends },
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

export class CreateRunResponseBodyMessagesContentStructViewPartsReferencePartReferences extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContentStructViewPartsReferencePart extends $dara.Model {
  references?: CreateRunResponseBodyMessagesContentStructViewPartsReferencePartReferences[];
  static names(): { [key: string]: string } {
    return {
      references: 'references',
    };
  }

  static types(): { [key: string]: any } {
    return {
      references: { 'type': 'array', 'itemType': CreateRunResponseBodyMessagesContentStructViewPartsReferencePartReferences },
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

export class CreateRunResponseBodyMessagesContentStructViewPartsTextPart extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContentStructViewParts extends $dara.Model {
  append?: boolean;
  /**
   * @example
   * {}
   */
  dataPart?: CreateRunResponseBodyMessagesContentStructViewPartsDataPart;
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
  reasonPart?: CreateRunResponseBodyMessagesContentStructViewPartsReasonPart;
  /**
   * @example
   * {}
   */
  recommendPart?: CreateRunResponseBodyMessagesContentStructViewPartsRecommendPart;
  /**
   * @example
   * {}
   */
  referencePart?: CreateRunResponseBodyMessagesContentStructViewPartsReferencePart;
  /**
   * @example
   * {}
   */
  textPart?: CreateRunResponseBodyMessagesContentStructViewPartsTextPart;
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
      dataPart: CreateRunResponseBodyMessagesContentStructViewPartsDataPart,
      finish: 'boolean',
      partDesc: 'string',
      partId: 'string',
      reasonPart: CreateRunResponseBodyMessagesContentStructViewPartsReasonPart,
      recommendPart: CreateRunResponseBodyMessagesContentStructViewPartsRecommendPart,
      referencePart: CreateRunResponseBodyMessagesContentStructViewPartsReferencePart,
      textPart: CreateRunResponseBodyMessagesContentStructViewPartsTextPart,
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

export class CreateRunResponseBodyMessagesContentStructView extends $dara.Model {
  parts?: CreateRunResponseBodyMessagesContentStructViewParts[];
  static names(): { [key: string]: string } {
    return {
      parts: 'parts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parts: { 'type': 'array', 'itemType': CreateRunResponseBodyMessagesContentStructViewParts },
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

export class CreateRunResponseBodyMessagesContentText extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContent extends $dara.Model {
  cardCallback?: CreateRunResponseBodyMessagesContentCardCallback;
  dingCard?: CreateRunResponseBodyMessagesContentDingCard;
  /**
   * @example
   * {}
   */
  dingNormalCard?: CreateRunResponseBodyMessagesContentDingNormalCard;
  markdown?: CreateRunResponseBodyMessagesContentMarkdown;
  structView?: CreateRunResponseBodyMessagesContentStructView;
  text?: CreateRunResponseBodyMessagesContentText;
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
      cardCallback: CreateRunResponseBodyMessagesContentCardCallback,
      dingCard: CreateRunResponseBodyMessagesContentDingCard,
      dingNormalCard: CreateRunResponseBodyMessagesContentDingNormalCard,
      markdown: CreateRunResponseBodyMessagesContentMarkdown,
      structView: CreateRunResponseBodyMessagesContentStructView,
      text: CreateRunResponseBodyMessagesContentText,
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

export class CreateRunResponseBodyMessagesContentStructPartsDataPart extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContentStructPartsReasonPart extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContentStructPartsRecommendPartRecommends extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContentStructPartsRecommendPart extends $dara.Model {
  recommends?: CreateRunResponseBodyMessagesContentStructPartsRecommendPartRecommends[];
  static names(): { [key: string]: string } {
    return {
      recommends: 'recommends',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommends: { 'type': 'array', 'itemType': CreateRunResponseBodyMessagesContentStructPartsRecommendPartRecommends },
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

export class CreateRunResponseBodyMessagesContentStructPartsReferencePartReferences extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContentStructPartsReferencePart extends $dara.Model {
  references?: CreateRunResponseBodyMessagesContentStructPartsReferencePartReferences[];
  static names(): { [key: string]: string } {
    return {
      references: 'references',
    };
  }

  static types(): { [key: string]: any } {
    return {
      references: { 'type': 'array', 'itemType': CreateRunResponseBodyMessagesContentStructPartsReferencePartReferences },
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

export class CreateRunResponseBodyMessagesContentStructPartsTextPart extends $dara.Model {
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

export class CreateRunResponseBodyMessagesContentStructParts extends $dara.Model {
  append?: boolean;
  /**
   * @example
   * {}
   */
  dataPart?: CreateRunResponseBodyMessagesContentStructPartsDataPart;
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
  reasonPart?: CreateRunResponseBodyMessagesContentStructPartsReasonPart;
  /**
   * @example
   * {}
   */
  recommendPart?: CreateRunResponseBodyMessagesContentStructPartsRecommendPart;
  /**
   * @example
   * {}
   */
  referencePart?: CreateRunResponseBodyMessagesContentStructPartsReferencePart;
  /**
   * @example
   * {}
   */
  textPart?: CreateRunResponseBodyMessagesContentStructPartsTextPart;
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
      dataPart: CreateRunResponseBodyMessagesContentStructPartsDataPart,
      finish: 'boolean',
      partDesc: 'string',
      partId: 'string',
      reasonPart: CreateRunResponseBodyMessagesContentStructPartsReasonPart,
      recommendPart: CreateRunResponseBodyMessagesContentStructPartsRecommendPart,
      referencePart: CreateRunResponseBodyMessagesContentStructPartsReferencePart,
      textPart: CreateRunResponseBodyMessagesContentStructPartsTextPart,
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

export class CreateRunResponseBodyMessagesContentStruct extends $dara.Model {
  parts?: CreateRunResponseBodyMessagesContentStructParts[];
  static names(): { [key: string]: string } {
    return {
      parts: 'parts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parts: { 'type': 'array', 'itemType': CreateRunResponseBodyMessagesContentStructParts },
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

export class CreateRunResponseBodyMessages extends $dara.Model {
  content?: CreateRunResponseBodyMessagesContent;
  /**
   * @example
   * 这是一张小猫钓鱼图
   */
  contentDesc?: string;
  contentStruct?: CreateRunResponseBodyMessagesContentStruct;
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
      contentStruct: 'contentStruct',
      createAt: 'createAt',
      id: 'id',
      role: 'role',
      runId: 'runId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: CreateRunResponseBodyMessagesContent,
      contentDesc: 'string',
      contentStruct: CreateRunResponseBodyMessagesContentStruct,
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
    if(this.contentStruct && typeof (this.contentStruct as any).validate === 'function') {
      (this.contentStruct as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunResponseBodyRun extends $dara.Model {
  cancelledAt?: number;
  completedAt?: number;
  createAt?: number;
  expiresAt?: number;
  failedAt?: number;
  id?: string;
  lastErrorMsg?: string;
  startedAt?: number;
  status?: string;
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      cancelledAt: 'cancelledAt',
      completedAt: 'completedAt',
      createAt: 'createAt',
      expiresAt: 'expiresAt',
      failedAt: 'failedAt',
      id: 'id',
      lastErrorMsg: 'lastErrorMsg',
      startedAt: 'startedAt',
      status: 'status',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledAt: 'number',
      completedAt: 'number',
      createAt: 'number',
      expiresAt: 'number',
      failedAt: 'number',
      id: 'string',
      lastErrorMsg: 'string',
      startedAt: 'number',
      status: 'string',
      threadId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunResponseBody extends $dara.Model {
  messages?: CreateRunResponseBodyMessages[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  run?: CreateRunResponseBodyRun;
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
      requestId: 'requestId',
      run: 'run',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': CreateRunResponseBodyMessages },
      requestId: 'string',
      run: CreateRunResponseBodyRun,
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.run && typeof (this.run as any).validate === 'function') {
      (this.run as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

