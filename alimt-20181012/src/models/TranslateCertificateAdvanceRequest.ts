// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class TranslateCertificateAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * driving_license
   */
  certificateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://imageurl
   */
  imageUrlObject?: Readable;
  /**
   * @example
   * text
   */
  resultType?: string;
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
  static names(): { [key: string]: string } {
    return {
      certificateType: 'CertificateType',
      imageUrlObject: 'ImageUrl',
      resultType: 'ResultType',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateType: 'string',
      imageUrlObject: 'Readable',
      resultType: 'string',
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

