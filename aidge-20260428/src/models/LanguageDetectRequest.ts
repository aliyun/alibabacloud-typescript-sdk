// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LanguageDetectRequest extends $dara.Model {
  /**
   * @remarks
   * The detection scenario. Default value: common. If you are identifying search phrases, set this parameter to query. If an incorrect value is specified or this parameter is left empty, the common general identification mode is used. Note: pass query in lowercase.
   * 
   * @example
   * query
   */
  scene?: string;
  /**
   * @remarks
   * The source text to identify. This parameter is required.
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

