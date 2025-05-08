// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageTranslateTaskRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  clientToken?: string;
  /**
   * @example
   * {"have_ocr":"false","without_text":"false","have_psd":"true","ignore_entity":"false"}
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
   * http://xxx,http://yyy
   */
  urlList?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      extra: 'Extra',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      extra: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      urlList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

