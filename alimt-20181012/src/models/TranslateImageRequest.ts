// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateImageRequest extends $dara.Model {
  /**
   * @example
   * {"needEditorData": "false", "ignoreEntityRecognize": "true"}
   */
  ext?: string;
  /**
   * @example
   * general
   */
  field?: string;
  /**
   * @example
   * /9j/4...H/9k=
   */
  imageBase64?: string;
  /**
   * @example
   * https://example.com/example.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @example
   * en
   */
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      field: 'Field',
      imageBase64: 'ImageBase64',
      imageUrl: 'ImageUrl',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: 'string',
      field: 'string',
      imageBase64: 'string',
      imageUrl: 'string',
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

