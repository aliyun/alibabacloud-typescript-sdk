// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelCategoryResponseBodyModelCategoryInfoList extends $dara.Model {
  /**
   * @example
   * False
   */
  contentSafeImageSupported?: number;
  /**
   * @example
   * True
   */
  contentSafeTextSupported?: number;
  /**
   * @example
   * 2
   */
  modelCategoryId?: number;
  /**
   * @example
   * Qwen2.5-3B-Intruct-PAI-Guard
   */
  modelCategoryName?: string;
  /**
   * @example
   * 1
   */
  modelSource?: number;
  /**
   * @example
   * 12
   */
  priority?: number;
  /**
   * @example
   * False
   */
  promptAttackTextSupported?: number;
  /**
   * @example
   * True
   */
  sensitiveTopicTextSupported?: number;
  static names(): { [key: string]: string } {
    return {
      contentSafeImageSupported: 'ContentSafeImageSupported',
      contentSafeTextSupported: 'ContentSafeTextSupported',
      modelCategoryId: 'ModelCategoryId',
      modelCategoryName: 'ModelCategoryName',
      modelSource: 'ModelSource',
      priority: 'Priority',
      promptAttackTextSupported: 'PromptAttackTextSupported',
      sensitiveTopicTextSupported: 'SensitiveTopicTextSupported',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentSafeImageSupported: 'number',
      contentSafeTextSupported: 'number',
      modelCategoryId: 'number',
      modelCategoryName: 'string',
      modelSource: 'number',
      priority: 'number',
      promptAttackTextSupported: 'number',
      sensitiveTopicTextSupported: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelCategoryResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  modelCategoryInfoList?: ListModelCategoryResponseBodyModelCategoryInfoList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      modelCategoryInfoList: 'ModelCategoryInfoList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      modelCategoryInfoList: { 'type': 'array', 'itemType': ListModelCategoryResponseBodyModelCategoryInfoList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.modelCategoryInfoList)) {
      $dara.Model.validateArray(this.modelCategoryInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

