// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIndexDocumentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of primary key IDs of documents that are deleted.
   */
  deletedDocument?: string[];
  static names(): { [key: string]: string } {
    return {
      deletedDocument: 'DeletedDocument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletedDocument: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.deletedDocument)) {
      $dara.Model.validateArray(this.deletedDocument);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

