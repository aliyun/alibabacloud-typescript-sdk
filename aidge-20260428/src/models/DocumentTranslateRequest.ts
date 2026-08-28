// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentTranslateRequest extends $dara.Model {
  /**
   * @remarks
   * The supported document types: PDF/Word.  
   * Supported capacity limits:  
   * - word: 200 MB/100 pages 
   * - PDF: 200 MB/100 pages  
   * - Maximum size per file: 200 MB
   * 
   * This parameter is required.
   * 
   * @example
   * PDF
   */
  fileType?: string;
  /**
   * @remarks
   * The glossary ID. Specify this parameter when you need the glossary feature. Supports custom translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and skip translation (ABC-empty value). Commonly used for brand name protection.
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
   * The OSS URL path of the document to be translated.
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

