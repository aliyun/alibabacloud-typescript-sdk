// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageTranslateRequest extends $dara.Model {
  /**
   * @example
   * {"have_ocr": "false", "without_text":"true", "have_psd": "false", "ignore_entity": "false"}
   */
  extra?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xxxxxxx.oss-cn-shenzhen.aliyuncs.com/xxxxxx.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

