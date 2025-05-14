// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc123
   */
  libraryId?: string;
  /**
   * @example
   * {
   *         "businessId": "12321"
   *     }
   */
  meta?: { [key: string]: any };
  /**
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

