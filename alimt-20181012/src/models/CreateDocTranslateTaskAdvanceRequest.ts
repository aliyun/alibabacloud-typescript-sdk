// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CreateDocTranslateTaskAdvanceRequest extends $dara.Model {
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
  fileUrlObject?: Readable;
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
      fileUrlObject: 'FileUrl',
      scene: 'Scene',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      clientToken: 'string',
      fileUrlObject: 'Readable',
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

