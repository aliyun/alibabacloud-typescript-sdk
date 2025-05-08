// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateCertificateRequest extends $dara.Model {
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
  imageUrl?: string;
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
      imageUrl: 'ImageUrl',
      resultType: 'ResultType',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateType: 'string',
      imageUrl: 'string',
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

