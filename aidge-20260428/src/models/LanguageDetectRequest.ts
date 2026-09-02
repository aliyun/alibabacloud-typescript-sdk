// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LanguageDetectRequest extends $dara.Model {
  /**
   * @remarks
   * The detection scenario. Default value: common. If you are using a search phrase scenario, set this parameter to query. If an incorrect value is passed or the parameter is not specified, the common general identification is used. Note: pass query in lowercase.
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

