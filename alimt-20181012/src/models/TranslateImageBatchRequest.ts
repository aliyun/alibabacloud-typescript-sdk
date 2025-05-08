// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateImageBatchRequest extends $dara.Model {
  /**
   * @example
   * my_awesome_task_1
   */
  customTaskId?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/1.jpg,https://example.com/2.jpg,https://example.com/3.jpg
   */
  imageUrls?: string;
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
      customTaskId: 'CustomTaskId',
      ext: 'Ext',
      field: 'Field',
      imageUrls: 'ImageUrls',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTaskId: 'string',
      ext: 'string',
      field: 'string',
      imageUrls: 'string',
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

