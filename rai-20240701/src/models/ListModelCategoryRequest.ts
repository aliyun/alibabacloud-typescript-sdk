// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelCategoryRequest extends $dara.Model {
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
   * demo
   */
  modelCategoryName?: string;
  /**
   * @example
   * 1
   */
  modelSource?: string;
  /**
   * @example
   * False
   */
  promptAttackTextSupported?: number;
  /**
   * @example
   * False
   */
  sensitiveTopicTextSupported?: number;
  static names(): { [key: string]: string } {
    return {
      contentSafeImageSupported: 'ContentSafeImageSupported',
      contentSafeTextSupported: 'ContentSafeTextSupported',
      modelCategoryName: 'ModelCategoryName',
      modelSource: 'ModelSource',
      promptAttackTextSupported: 'PromptAttackTextSupported',
      sensitiveTopicTextSupported: 'SensitiveTopicTextSupported',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentSafeImageSupported: 'number',
      contentSafeTextSupported: 'number',
      modelCategoryName: 'string',
      modelSource: 'string',
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

