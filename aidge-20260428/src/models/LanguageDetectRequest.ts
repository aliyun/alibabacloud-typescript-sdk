// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LanguageDetectRequest extends $dara.Model {
  /**
   * @remarks
   * Optional. Set this parameter to query (case-insensitive) to use the new model. If this parameter is not specified or an invalid value is passed, the default value common (general language detection) is used.
   * 
   * @example
   * query
   */
  scene?: string;
  /**
   * @remarks
   * The source text to be identified. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * Sample text
   */
  sourceText?: string;
  static names(): { [key: string]: string } {
    return {
      scene: 'Scene',
      sourceText: 'SourceText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
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

