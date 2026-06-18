// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIndexDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * The list of file IDs.
   * 
   * This parameter is required.
   */
  documentIds?: string[];
  /**
   * @remarks
   * The knowledge base ID, which is the `Data.Id` returned by the **CreateIndex** operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0alxxxx
   */
  indexId?: string;
  static names(): { [key: string]: string } {
    return {
      documentIds: 'DocumentIds',
      indexId: 'IndexId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentIds: { 'type': 'array', 'itemType': 'string' },
      indexId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.documentIds)) {
      $dara.Model.validateArray(this.documentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

