// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentTranslateRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the document. Valid values: PDF and Word. Size limits: Word 200 MB/300 pages, PDF 200 MB/300 pages. The maximum size of a single file is 200 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * PDF
   */
  fileType?: string;
  /**
   * @remarks
   * The glossary ID to use when the glossary feature is required. Supports custom translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and skip translation (ABC-empty value). This is commonly used for brand name protection.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * The target language. The language code uses the two-letter ISO 639-1 standard.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The OSS URL of the document to be translated.
   * 
   * This parameter is required.
   * 
   * @example
   * https://aib-innovation-oss.oss-accelerate.aliyuncs.com/AI_Business/38dao/testdemo.pdf?Expires=3356578313&OSSAccessKeyId=LTAI5tE8X3gEy66SRU1V8dig&Signature=8niQY2HtMQY7h05zmSUdyORML9E%3D
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      glossary: 'Glossary',
      targetLanguage: 'TargetLanguage',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      glossary: 'string',
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

