// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePdfTranslateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The document ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 873648346573245
   */
  docId?: string;
  /**
   * @remarks
   * The domain knowledge referenced during translation.
   * 
   * @example
   * Net Profit
   * English: Net Profit
   * Chinese: Net profit (typically refers to the profit after deducting all expenses and taxes)
   */
  knowledge?: string;
  /**
   * @remarks
   * The document library ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cjshcxxxx
   */
  libraryId?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  modelId?: string;
  /**
   * @remarks
   * The target language. Default value: Chinese.
   * 
   * @example
   * Chinese
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

