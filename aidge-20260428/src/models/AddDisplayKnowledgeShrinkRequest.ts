// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDisplayKnowledgeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rag_xxx
   */
  ragId?: string;
  /**
   * @remarks
   * The records to add. A maximum of 500 records are supported.
   * 
   * This parameter is required.
   */
  recordsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ragId: 'RagId',
      recordsShrink: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ragId: 'string',
      recordsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

