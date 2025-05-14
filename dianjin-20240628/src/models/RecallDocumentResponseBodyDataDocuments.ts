// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecallDocumentResponseBodyDataDocuments extends $dara.Model {
  /**
   * @example
   * 92837482364
   */
  docId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  documentMeta?: { [key: string]: any };
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * sjdhgjsd
   */
  libraryId?: string;
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * http://oss-xxx-hangzhou.com/test.pdf
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      documentMeta: 'documentMeta',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      libraryId: 'libraryId',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      documentMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileType: 'string',
      gmtCreate: 'string',
      libraryId: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.documentMeta) {
      $dara.Model.validateMap(this.documentMeta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

