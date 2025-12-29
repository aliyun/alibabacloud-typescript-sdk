// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHotelSceneItemRequestUpdateHotelSceneOperateReq extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  isUseTemplateAnswer?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      isUseTemplateAnswer: 'IsUseTemplateAnswer',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isUseTemplateAnswer: 'boolean',
      operateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemRequestUpdateHotelSceneReqDialogueList extends $dara.Model {
  /**
   * @example
   * 335
   */
  dialogueId?: string;
  /**
   * @example
   * 对不起，暂时不提供此物品
   */
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
   * @remarks
   * itemId
   * 
   * @example
   * 10337
   */
  serviceId?: string;
  /**
   * @example
   * 纸巾1.5元，请问需要么？
   */
  yesAnswer?: string;
  /**
   * @example
   * 4
   */
  yesAnswerTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueId: 'DialogueId',
      noAnswer: 'NoAnswer',
      noAnswerTemplate: 'NoAnswerTemplate',
      process: 'Process',
      question: 'Question',
      serviceId: 'ServiceId',
      yesAnswer: 'YesAnswer',
      yesAnswerTemplate: 'YesAnswerTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueId: 'string',
      noAnswer: 'string',
      noAnswerTemplate: 'string',
      process: 'number',
      question: 'string',
      serviceId: 'string',
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

export class UpdateHotelSceneItemRequestUpdateHotelSceneReq extends $dara.Model {
  beyondLimitReply?: string;
  deliveryMethod?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueList?: UpdateHotelSceneItemRequestUpdateHotelSceneReqDialogueList[];
  /**
   * @remarks
   * icon
   * 
   * This parameter is required.
   * 
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/jiudianmianban_fuwushangpintu/wupin/keyongpinlei/mianqian.png
   */
  icon?: string;
  /**
   * @remarks
   * itemID
   * 
   * @example
   * 10337
   */
  id?: number;
  limitNumber?: number;
  limitSwitch?: number;
  name?: string;
  paymentMethod?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 165
   */
  price?: number;
  robotName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 已添加
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      beyondLimitReply: 'BeyondLimitReply',
      deliveryMethod: 'DeliveryMethod',
      dialogueList: 'DialogueList',
      icon: 'Icon',
      id: 'Id',
      limitNumber: 'LimitNumber',
      limitSwitch: 'LimitSwitch',
      name: 'Name',
      paymentMethod: 'PaymentMethod',
      price: 'Price',
      robotName: 'RobotName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beyondLimitReply: 'string',
      deliveryMethod: 'string',
      dialogueList: { 'type': 'array', 'itemType': UpdateHotelSceneItemRequestUpdateHotelSceneReqDialogueList },
      icon: 'string',
      id: 'number',
      limitNumber: 'number',
      limitSwitch: 'number',
      name: 'string',
      paymentMethod: 'string',
      price: 'number',
      robotName: 'string',
      status: 'string',
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

export class UpdateHotelSceneItemRequest extends $dara.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * updateHotelSceneReq
   * 
   * This parameter is required.
   */
  updateHotelSceneOperateReq?: UpdateHotelSceneItemRequestUpdateHotelSceneOperateReq;
  /**
   * @remarks
   * UpdateHotelSceneReq
   * 
   * This parameter is required.
   */
  updateHotelSceneReq?: UpdateHotelSceneItemRequestUpdateHotelSceneReq;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      updateHotelSceneOperateReq: 'UpdateHotelSceneOperateReq',
      updateHotelSceneReq: 'UpdateHotelSceneReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      updateHotelSceneOperateReq: UpdateHotelSceneItemRequestUpdateHotelSceneOperateReq,
      updateHotelSceneReq: UpdateHotelSceneItemRequestUpdateHotelSceneReq,
    };
  }

  validate() {
    if(this.updateHotelSceneOperateReq && typeof (this.updateHotelSceneOperateReq as any).validate === 'function') {
      (this.updateHotelSceneOperateReq as any).validate();
    }
    if(this.updateHotelSceneReq && typeof (this.updateHotelSceneReq as any).validate === 'function') {
      (this.updateHotelSceneReq as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

