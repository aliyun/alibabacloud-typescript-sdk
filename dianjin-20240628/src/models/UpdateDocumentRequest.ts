// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * Document ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  docId?: string;
  /**
   * @remarks
   * Document library ID.
   * 
   * This parameter is required.
   * 
   * @example
   * abc123
   */
  libraryId?: string;
  /**
   * @remarks
   * Document metadata.
   * 
   * @example
   * {
   *         "businessId": "12321"
   *     }
   */
  meta?: { [key: string]: any };
  /**
   * @remarks
   * Document title.
   * 
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      libraryId: 'libraryId',
      meta: 'meta',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      libraryId: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

