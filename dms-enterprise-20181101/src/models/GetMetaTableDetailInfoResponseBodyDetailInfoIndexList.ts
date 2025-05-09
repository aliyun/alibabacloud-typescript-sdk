// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableDetailInfoResponseBodyDetailInfoIndexList extends $dara.Model {
  /**
   * @remarks
   * The index column.
   */
  indexColumns?: string[];
  /**
   * @remarks
   * The ID of the index.
   * 
   * @example
   * 123
   */
  indexId?: string;
  /**
   * @remarks
   * The name of the index.
   * 
   * @example
   * PRIMARY
   */
  indexName?: string;
  /**
   * @remarks
   * The type of the index. Examples: Primary, Unique, and Normal.
   * 
   * @example
   * Primary
   */
  indexType?: string;
  /**
   * @remarks
   * Indicates whether the index is unique. Valid values:
   * 
   * *   true: The index is unique.
   * *   false: The index is not unique.
   * 
   * @example
   * false
   */
  unique?: boolean;
  static names(): { [key: string]: string } {
    return {
      indexColumns: 'IndexColumns',
      indexId: 'IndexId',
      indexName: 'IndexName',
      indexType: 'IndexType',
      unique: 'Unique',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexColumns: { 'type': 'array', 'itemType': 'string' },
      indexId: 'string',
      indexName: 'string',
      indexType: 'string',
      unique: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.indexColumns)) {
      $dara.Model.validateArray(this.indexColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

