// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentTranslateRequest extends $dara.Model {
  /**
   * @remarks
   * The supported document types: PDF/Word. Size limits: Word 200 MB/100 pages, PDF 200 MB/100 pages, maximum 200 MB per file.
   * 
   * This parameter is required.
   * 
   * @example
   * PDF
   */
  fileType?: string;
  /**
   * @remarks
   * The intervention glossary ID. Specify this parameter when you need the intervention feature. Supports custom translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and skip translation (ABC-empty value). Commonly used for brand name protection scenarios.
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

