// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LanguageDetectRequest extends $dara.Model {
  /**
   * @remarks
   * The source text for language detection. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试文本
   */
  sourceText?: string;
  static names(): { [key: string]: string } {
    return {
      sourceText: 'SourceText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

