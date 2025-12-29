// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotelSceneItemDetailResponseBodyResultDialogueList extends $dara.Model {
  /**
   * @example
   * 1666164774
   */
  createTime?: number;
  /**
   * @example
   * 336
   */
  dialogueId?: string;
  noAnswer?: string;
  /**
   * @example
   * 4
   */
  noAnswerTemplate?: string;
  /**
   * @example
   * 0
   */
  process?: number;
  question?: string;
  /**
   * @example
   * 10336
   */
  serviceId?: string;
  /**
   * @example
   * 1666164774
   */
  updateTime?: number;
  yesAnswer?: string;
  /**
   * @example
   * 4
   */
  yesAnswerTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dialogueId: 'DialogueId',
      noAnswer: 'NoAnswer',
      noAnswerTemplate: 'NoAnswerTemplate',
      process: 'Process',
      question: 'Question',
      serviceId: 'ServiceId',
      updateTime: 'UpdateTime',
      yesAnswer: 'YesAnswer',
      yesAnswerTemplate: 'YesAnswerTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dialogueId: 'string',
      noAnswer: 'string',
      noAnswerTemplate: 'string',
      process: 'number',
      question: 'string',
      serviceId: 'string',
      updateTime: 'number',
      yesAnswer: 'string',
      yesAnswerTemplate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSceneItemDetailResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 客用品类
   */
  category?: string;
  dialogueList?: GetHotelSceneItemDetailResponseBodyResultDialogueList[];
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/jiudianmianban_fuwushangpintu/wupin/keyongpinlei/zhijin.png
   */
  icon?: string;
  /**
   * @example
   * 10336
   */
  id?: number;
  /**
   * @example
   * 擦鞋布
   */
  name?: string;
  /**
   * @example
   * 170
   */
  price?: number;
  /**
   * @example
   * 已添加
   */
  status?: string;
  /**
   * @example
   * GOODS
   */
  type?: string;
  /**
   * @example
   * 1666168828
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      dialogueList: 'DialogueList',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      price: 'Price',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      dialogueList: { 'type': 'array', 'itemType': GetHotelSceneItemDetailResponseBodyResultDialogueList },
      icon: 'string',
      id: 'number',
      name: 'string',
      price: 'number',
      status: 'string',
      type: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSceneItemDetailResponseBody extends $dara.Model {
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
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetHotelSceneItemDetailResponseBodyResult;
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
      result: GetHotelSceneItemDetailResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

