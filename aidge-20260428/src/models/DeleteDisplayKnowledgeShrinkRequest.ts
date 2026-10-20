// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDisplayKnowledgeShrinkRequest extends $dara.Model {
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
  recordIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ragId: 'RagId',
      recordIdsShrink: 'RecordIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ragId: 'string',
      recordIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

