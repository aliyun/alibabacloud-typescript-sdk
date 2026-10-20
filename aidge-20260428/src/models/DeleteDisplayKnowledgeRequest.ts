// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDisplayKnowledgeRequest extends $dara.Model {
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rag_x x x
   */
  ragId?: string;
  /**
   * @remarks
   * The IDs of the records to delete. You can specify up to 500 record IDs.
   * 
   * This parameter is required.
   */
  recordIds?: number[];
  static names(): { [key: string]: string } {
    return {
      ragId: 'RagId',
      recordIds: 'RecordIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ragId: 'string',
      recordIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.recordIds)) {
      $dara.Model.validateArray(this.recordIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

