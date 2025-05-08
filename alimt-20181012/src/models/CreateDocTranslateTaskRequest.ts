// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDocTranslateTaskRequest extends $dara.Model {
  /**
   * @example
   * http://callbackUrl
   */
  callbackUrl?: string;
  /**
   * @example
   * token
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://fileUrl
   */
  fileUrl?: string;
  /**
   * @example
   * general
   */
  scene?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * en
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zh
   */
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      clientToken: 'ClientToken',
      fileUrl: 'FileUrl',
      scene: 'Scene',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      clientToken: 'string',
      fileUrl: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

