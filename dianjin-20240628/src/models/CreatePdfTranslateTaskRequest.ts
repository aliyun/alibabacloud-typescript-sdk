// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePdfTranslateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 873648346573245
   */
  docId?: string;
  knowledge?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cjshcxxxx
   */
  libraryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  modelId?: string;
  /**
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

