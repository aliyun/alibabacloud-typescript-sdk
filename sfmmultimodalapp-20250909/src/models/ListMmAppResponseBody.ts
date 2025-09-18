// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmAppResponseBodyAppInfoListConversationConfig extends $dara.Model {
  /**
   * @example
   * xxx
   */
  asrModel?: string;
  openAsr?: boolean;
  openTts?: boolean;
  /**
   * @example
   * xxx
   */
  ttsModel?: string;
  static names(): { [key: string]: string } {
    return {
      asrModel: 'AsrModel',
      openAsr: 'OpenAsr',
      openTts: 'OpenTts',
      ttsModel: 'TtsModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrModel: 'string',
      openAsr: 'boolean',
      openTts: 'boolean',
      ttsModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmAppResponseBodyAppInfoListModelConfig extends $dara.Model {
  /**
   * @example
   * 5
   */
  historyLimit?: string;
  /**
   * @example
   * MMH
   */
  modelType?: string;
  openWebSearch?: boolean;
  /**
   * @example
   * xxx
   */
  textModal?: string;
  static names(): { [key: string]: string } {
    return {
      historyLimit: 'HistoryLimit',
      modelType: 'ModelType',
      openWebSearch: 'OpenWebSearch',
      textModal: 'TextModal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyLimit: 'string',
      modelType: 'string',
      openWebSearch: 'boolean',
      textModal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmAppResponseBodyAppInfoList extends $dara.Model {
  /**
   * @example
   * mm_xxxx
   */
  appId?: string;
  /**
   * @example
   * 多模态
   */
  appName?: string;
  conversationConfig?: ListMmAppResponseBodyAppInfoListConversationConfig;
  /**
   * @example
   * 454564
   */
  createUserId?: string;
  /**
   * @example
   * xxx
   */
  createUserName?: string;
  /**
   * @example
   * xxx
   */
  gmtCreate?: string;
  /**
   * @example
   * xxx
   */
  gmtModified?: string;
  modelConfig?: ListMmAppResponseBodyAppInfoListModelConfig;
  /**
   * @example
   * 56445
   */
  modifyUserId?: string;
  /**
   * @example
   * xxx
   */
  modifyUserName?: string;
  /**
   * @example
   * 提示词
   */
  prompt?: string;
  /**
   * @example
   * 1
   */
  publishVersion?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      conversationConfig: 'ConversationConfig',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      modelConfig: 'ModelConfig',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      prompt: 'Prompt',
      publishVersion: 'PublishVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      conversationConfig: ListMmAppResponseBodyAppInfoListConversationConfig,
      createUserId: 'string',
      createUserName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      modelConfig: ListMmAppResponseBodyAppInfoListModelConfig,
      modifyUserId: 'string',
      modifyUserName: 'string',
      prompt: 'string',
      publishVersion: 'number',
      status: 'number',
    };
  }

  validate() {
    if(this.conversationConfig && typeof (this.conversationConfig as any).validate === 'function') {
      (this.conversationConfig as any).validate();
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmAppResponseBody extends $dara.Model {
  appInfoList?: ListMmAppResponseBodyAppInfoList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * xxxx
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appInfoList: 'AppInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfoList: { 'type': 'array', 'itemType': ListMmAppResponseBodyAppInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appInfoList)) {
      $dara.Model.validateArray(this.appInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

