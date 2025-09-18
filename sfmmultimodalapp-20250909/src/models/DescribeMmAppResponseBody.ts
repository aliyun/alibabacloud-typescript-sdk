// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMmAppResponseBodyConversationConfig extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  asrModel?: string;
  openAsr?: boolean;
  openTts?: boolean;
  /**
   * @example
   * xxxx
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

export class DescribeMmAppResponseBodyModelConfig extends $dara.Model {
  /**
   * @example
   * 5
   */
  historyLimit?: number;
  /**
   * @example
   * MMH
   */
  modelType?: string;
  openWebSearch?: boolean;
  /**
   * @example
   * xxxx
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
      historyLimit: 'number',
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

export class DescribeMmAppResponseBody extends $dara.Model {
  /**
   * @example
   * mm_xxxx
   */
  appId?: string;
  /**
   * @example
   * 多模态应用xxxx
   */
  appName?: string;
  conversationConfig?: DescribeMmAppResponseBodyConversationConfig;
  /**
   * @example
   * 243433
   */
  createUserId?: string;
  /**
   * @example
   * xxxx
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
  modelConfig?: DescribeMmAppResponseBodyModelConfig;
  /**
   * @example
   * 56673435
   */
  modifyUserId?: string;
  /**
   * @example
   * xxxx
   */
  modifyUserName?: string;
  /**
   * @example
   * 提示词xxxx
   */
  prompt?: string;
  /**
   * @example
   * 1
   */
  publishVersion?: number;
  /**
   * @example
   * xxxx
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  status?: string;
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
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      conversationConfig: DescribeMmAppResponseBodyConversationConfig,
      createUserId: 'string',
      createUserName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      modelConfig: DescribeMmAppResponseBodyModelConfig,
      modifyUserId: 'string',
      modifyUserName: 'string',
      prompt: 'string',
      publishVersion: 'number',
      requestId: 'string',
      status: 'string',
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

