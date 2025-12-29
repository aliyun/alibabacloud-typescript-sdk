// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDialogueTemplateResponseBodyResultTemplateDetailFirstDialogueTemplate extends $dara.Model {
  /**
   * @example
   * ${goodsName}${price}元，请问需要服务员送来吗？
   */
  nonzeroPriceYesAnswer?: string;
  /**
   * @example
   * 对不起，暂时不提供此物品。
   */
  zeroPriceNoAnswer?: string;
  /**
   * @example
   * 好的，服务员会尽快送来。
   */
  zeroPriceYesAnswer?: string;
  static names(): { [key: string]: string } {
    return {
      nonzeroPriceYesAnswer: 'NonzeroPriceYesAnswer',
      zeroPriceNoAnswer: 'ZeroPriceNoAnswer',
      zeroPriceYesAnswer: 'ZeroPriceYesAnswer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonzeroPriceYesAnswer: 'string',
      zeroPriceNoAnswer: 'string',
      zeroPriceYesAnswer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponseBodyResultTemplateDetailSecondDialogueTemplate extends $dara.Model {
  /**
   * @example
   * 好的，已取消。
   */
  nonzeroPriceNoAnswer?: string;
  /**
   * @example
   * 好的，服务员会尽快送来${goodsName}
   */
  nonzeroPriceYesAnswer?: string;
  static names(): { [key: string]: string } {
    return {
      nonzeroPriceNoAnswer: 'NonzeroPriceNoAnswer',
      nonzeroPriceYesAnswer: 'NonzeroPriceYesAnswer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonzeroPriceNoAnswer: 'string',
      nonzeroPriceYesAnswer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponseBodyResultTemplateDetail extends $dara.Model {
  firstDialogueTemplate?: ListDialogueTemplateResponseBodyResultTemplateDetailFirstDialogueTemplate;
  secondDialogueTemplate?: ListDialogueTemplateResponseBodyResultTemplateDetailSecondDialogueTemplate;
  static names(): { [key: string]: string } {
    return {
      firstDialogueTemplate: 'FirstDialogueTemplate',
      secondDialogueTemplate: 'SecondDialogueTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstDialogueTemplate: ListDialogueTemplateResponseBodyResultTemplateDetailFirstDialogueTemplate,
      secondDialogueTemplate: ListDialogueTemplateResponseBodyResultTemplateDetailSecondDialogueTemplate,
    };
  }

  validate() {
    if(this.firstDialogueTemplate && typeof (this.firstDialogueTemplate as any).validate === 'function') {
      (this.firstDialogueTemplate as any).validate();
    }
    if(this.secondDialogueTemplate && typeof (this.secondDialogueTemplate as any).validate === 'function') {
      (this.secondDialogueTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponseBodyResult extends $dara.Model {
  templateDetail?: ListDialogueTemplateResponseBodyResultTemplateDetail;
  /**
   * @example
   * 4
   */
  templateId?: number;
  /**
   * @example
   * 物品多轮模板
   */
  templateName?: string;
  /**
   * @example
   * GOODS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      templateDetail: 'TemplateDetail',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateDetail: ListDialogueTemplateResponseBodyResultTemplateDetail,
      templateId: 'number',
      templateName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.templateDetail && typeof (this.templateDetail as any).validate === 'function') {
      (this.templateDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: ListDialogueTemplateResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDialogueTemplateResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

