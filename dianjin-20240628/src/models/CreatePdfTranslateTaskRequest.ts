// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePdfTranslateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Document ID
   * 
   * This parameter is required.
   * 
   * @example
   * 873648346573245
   */
  docId?: string;
  /**
   * @remarks
   * Domain knowledge used as reference during translation
   * 
   * @example
   * 净利润 (Net Profit)
   * 英文：Net Profit
   * 中文：净利润（通常指扣除所有费用和税后的利润）
   */
  knowledge?: string;
  /**
   * @remarks
   * Document library ID
   * 
   * This parameter is required.
   * 
   * @example
   * cjshcxxxx
   */
  libraryId?: string;
  /**
   * @remarks
   * Model ID
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  modelId?: string;
  /**
   * @remarks
   * Target language. Default is Chinese
   * 
   * @example
   * 中文
   */
  translateTo?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      knowledge: 'knowledge',
      libraryId: 'libraryId',
      modelId: 'modelId',
      translateTo: 'translateTo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      knowledge: 'string',
      libraryId: 'string',
      modelId: 'string',
      translateTo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

