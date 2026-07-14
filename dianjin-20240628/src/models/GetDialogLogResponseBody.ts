// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDialogLogResponseBodyDataHitIntentionList extends $dara.Model {
  /**
   * @remarks
   * A description of the customer\\"s intent.
   * 
   * @example
   * 客户希望与真人接触，不想和AI客服继续对话。
   */
  description?: string;
  /**
   * @remarks
   * The intent name.
   * 
   * @example
   * 客户要求转人工
   */
  intentionName?: string;
  /**
   * @remarks
   * The scripted reply based on the customer\\"s intent.
   * 
   * @example
   * 很抱歉，我这里无法直接为您转接，您可以拨打我司客服热线进行咨询。
   */
  intentionScript?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      intentionName: 'intentionName',
      intentionScript: 'intentionScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      intentionName: 'string',
      intentionScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogLogResponseBodyDataIntentionList extends $dara.Model {
  /**
   * @remarks
   * The `description` field provides a detailed description of the user\\"s intent.
   * 
   * @example
   * 客户明确表示投诉/退订/不要打电话/骂人等拒绝营销
   */
  description?: string;
  /**
   * @remarks
   * The intent name.
   * 
   * @example
   * 客户明确表示拒绝营销
   */
  intentionName?: string;
  /**
   * @remarks
   * The `intentionScript` field contains the service agent\\"s reply script for the user\\"s intent.
   * 
   * @example
   * 非常抱歉，给您带来了不好的体验。如您无需再接受我们的官方来电，请回复“我要退订”四个字！
   */
  intentionScript?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      intentionName: 'intentionName',
      intentionScript: 'intentionScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      intentionName: 'string',
      intentionScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis process. This field has a value if the analysis process is enabled during the real-time conversation.
   * 
   * @example
   * 客户回答的内容与提供的意图列表描述均不匹配，没有表达出对账单、还款、天气或其他服务的具体需求或问题。
   */
  analysisProcess?: string;
  /**
   * @remarks
   * The `conversationList` field records the conversation content.
   * 
   * @example
   * ##客服##:您好，请问是张三先生是吧？\\n ##客户##:人工客服\\n ##客服##:您好，我是2804，很高兴为您服务！\\n ##客服##:您好，请问有什么可以帮到您？\\n ##客户##:好的 谢谢\\n
   */
  conversationList?: string;
  /**
   * @remarks
   * The list of hit intents.
   */
  hitIntentionList?: GetDialogLogResponseBodyDataHitIntentionList[];
  /**
   * @remarks
   * The intent list.
   */
  intentionList?: GetDialogLogResponseBodyDataIntentionList[];
  /**
   * @remarks
   * The model processing time, in milliseconds.
   * 
   * @example
   * 1382
   */
  modelCostTime?: number;
  /**
   * @remarks
   * The recall list.
   * 
   * @example
   * ## Example:\\n- 对话内容为：\\"##客服##:您好，请问有什么可以帮到您？\\n ##客户##:暂时没有了。谢谢。\\"时，用户意图为：\\"客户想要挂断电话\\"\\n- 对话内容为：\\"##客服##:您好，请问有什么可以帮到您？\\n ##客户##:哎你好。\\"时，用户意图为：\\"客户询问来电目的\\"\\n- 对话内容为：\\"##客服##:您好，请问有什么可以帮到您？\\n ##客户##:我现在财务状况很好，谢谢关心。\\"时，用户意图为：\\"客户拒绝贷款\\"\\n- 对话内容为：\\"##客服##:您好，请问有什么可以帮到您？\\n ##客户##:不用了，谢谢，不要再打电话了，谢谢。\\"时，用户意图为：\\"投诉/退订/不要打电话/骂人\\"\\n- 对话内容为：\\"##客服##:您好，请问有什么可以帮到您？\\n ##客户##:你好。\\"时，用户意图为：\\"客户询问来电目的\\"
   */
  recallList?: string;
  static names(): { [key: string]: string } {
    return {
      analysisProcess: 'analysisProcess',
      conversationList: 'conversationList',
      hitIntentionList: 'hitIntentionList',
      intentionList: 'intentionList',
      modelCostTime: 'modelCostTime',
      recallList: 'recallList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisProcess: 'string',
      conversationList: 'string',
      hitIntentionList: { 'type': 'array', 'itemType': GetDialogLogResponseBodyDataHitIntentionList },
      intentionList: { 'type': 'array', 'itemType': GetDialogLogResponseBodyDataIntentionList },
      modelCostTime: 'number',
      recallList: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hitIntentionList)) {
      $dara.Model.validateArray(this.hitIntentionList);
    }
    if(Array.isArray(this.intentionList)) {
      $dara.Model.validateArray(this.intentionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The processing time.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: GetDialogLogResponseBodyData;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 051EEB18-049A-17FF-A5E0-14A5B127C798
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetDialogLogResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

