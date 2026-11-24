// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LanguageDetectRequest extends $dara.Model {
  /**
   * @remarks
   * The detection scenario. Default value: common. For search phrase scenarios, set this parameter to query. If an invalid value is specified or this parameter is left empty, the common general detection scenario is used. Note: The value query must be in lowercase.
   * 
   * @example
   * query
   */
  scene?: string;
  /**
   * @remarks
   * The source text to be detected. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * Test text
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

