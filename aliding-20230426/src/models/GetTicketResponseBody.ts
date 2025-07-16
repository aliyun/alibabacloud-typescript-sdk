// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketResponseBodyCreator extends $dara.Model {
  /**
   * @example
   * 贤文
   */
  nickName?: string;
  /**
   * @example
   * 012345
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      unionId: 'UnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      unionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketResponseBodyProcessor extends $dara.Model {
  /**
   * @example
   * 贤文
   */
  nickName?: string;
  /**
   * @example
   * 012345
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      unionId: 'UnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      unionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketResponseBodyTakers extends $dara.Model {
  /**
   * @example
   * 贤文
   */
  nickName?: string;
  /**
   * @example
   * 012345
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      unionId: 'UnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      unionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * OpenTemplateBizId
   * 
   * @example
   * OpenTemplateBizId
   */
  openTemplateBizId?: string;
  /**
   * @remarks
   * OpenTemplateBizId
   * 
   * @example
   * OpenTemplateBizId
   */
  openTemplateId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      openTemplateBizId: 'OpenTemplateBizId',
      openTemplateId: 'OpenTemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openTemplateBizId: 'string',
      openTemplateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketResponseBody extends $dara.Model {
  /**
   * @example
   * 2021-07-09 14:45:01
   */
  createTime?: string;
  creator?: GetTicketResponseBodyCreator;
  /**
   * @example
   * [{ "customerVisible": true,"editable": false,"identifier": "input1","name": "正文","placeholder": "请输入","required": false,"type": "TEXT_AREA","value": "123"},{"customerVisible": true,"editable": false,"identifier": "input2","name": "单选","options": [{"color": "#000000","value": "选项1"},{"color": "#000000","value": "选项2"},{"color": "#000000","value": "选项3"}],"required": false,"type": "RADIO"},{"customerVisible": true,"editable": false,"identifier": "input3","name": "多选","options": [{"color": "#000000","value": "选项1"},{"color": "#000000","value": "选项2"},{"color": "#000000","value": "选项3"}],"required": false,"type": "CHECKBOX"},{"customerVisible": true,"editable": false,"identifier": "input5","name": "数字","required": false,"type": "INPUT_NUMBER"},{"customerVisible": true,"editable": false,"identifier": "input6","maxFileNum": 20,"name": "上传","required": false,"type": "FILE"},{"customerVisible": true,"editable": false,"identifier": "input7","maxFileNum": 20,"name": "图片","required": false,"type": "IMAGE"},{"customerVisible": true,"editable": false,"format": "DATE_TIME","identifier": "input8","name": "日期","required": false,"type": "DATE_TIME_PICKER"}]
   */
  customFields?: string;
  /**
   * @example
   * cidZBSNxxxxXUCrAA==
   */
  openConversationId?: string;
  /**
   * @example
   * a8iSxxxxtgiE
   */
  openTicketId?: string;
  processor?: GetTicketResponseBodyProcessor;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * SG
   */
  scene?: string;
  /**
   * @example
   * {"groupId":1893227,"groupIsNormal":true,"groupName":"API和SPI测试群","groupSetId":29003,"groupSetName":"默认服务群组","scene":"SG"}
   */
  sceneContext?: string;
  /**
   * @example
   * FINISHED
   */
  stage?: string;
  takers?: GetTicketResponseBodyTakers[];
  template?: GetTicketResponseBodyTemplate;
  /**
   * @example
   * 贤文api测试，处理人王鸿程和李航宇
   */
  title?: string;
  /**
   * @example
   * 2021-07-09 19:26:09
   */
  updateTime?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      creator: 'creator',
      customFields: 'customFields',
      openConversationId: 'openConversationId',
      openTicketId: 'openTicketId',
      processor: 'processor',
      requestId: 'requestId',
      scene: 'scene',
      sceneContext: 'sceneContext',
      stage: 'stage',
      takers: 'takers',
      template: 'template',
      title: 'title',
      updateTime: 'updateTime',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creator: GetTicketResponseBodyCreator,
      customFields: 'string',
      openConversationId: 'string',
      openTicketId: 'string',
      processor: GetTicketResponseBodyProcessor,
      requestId: 'string',
      scene: 'string',
      sceneContext: 'string',
      stage: 'string',
      takers: { 'type': 'array', 'itemType': GetTicketResponseBodyTakers },
      template: GetTicketResponseBodyTemplate,
      title: 'string',
      updateTime: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.processor && typeof (this.processor as any).validate === 'function') {
      (this.processor as any).validate();
    }
    if(Array.isArray(this.takers)) {
      $dara.Model.validateArray(this.takers);
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

