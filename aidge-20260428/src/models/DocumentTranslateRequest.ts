// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentTranslateRequest extends $dara.Model {
  /**
   * @remarks
   * Supports PDF, WORD, and EXCEL formats. Use uppercase letters when specifying this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * PDF
   */
  fileType?: string;
  /**
   * @remarks
   * ● Specify the intervention glossary ID when the intervention feature is required.   
   * ● Supports custom translation results, including:   
   * ○ Do-not-translate (ABC-ABC).   
   * ○ Specified translation (ABC-DEF).   
   * ○ Translation omission (ABC-null value).
   * This is commonly used in scenarios such as brand word protection.   
   * Example value: "glossary_1"
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * The target language.
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

