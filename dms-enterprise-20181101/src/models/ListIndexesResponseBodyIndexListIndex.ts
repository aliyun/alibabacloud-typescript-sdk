// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexesResponseBodyIndexListIndex extends $dara.Model {
  /**
   * @remarks
   * The description of the index.
   * 
   * @example
   * test
   */
  indexComment?: string;
  /**
   * @remarks
   * The ID of the index.
   * 
   * @example
   * 1
   */
  indexId?: string;
  /**
   * @remarks
   * The name of the index.
   * 
   * @example
   * idx_test
   */
  indexName?: string;
  /**
   * @remarks
   * The type of the index. Valid values:
   * 
   * *   Primary
   * *   Unique
   * *   Normal
   * *   FullText
   * *   Spatial
   * 
   * @example
   * Primary
   */
  indexType?: string;
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * 1
   */
  tableId?: string;
  static names(): { [key: string]: string } {
    return {
      indexComment: 'IndexComment',
      indexId: 'IndexId',
      indexName: 'IndexName',
      indexType: 'IndexType',
      tableId: 'TableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexComment: 'string',
      indexId: 'string',
      indexName: 'string',
      indexType: 'string',
      tableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

