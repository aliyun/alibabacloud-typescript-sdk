// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCollectionDataRequestRelationalTableFilter extends $dara.Model {
  /**
   * @remarks
   * The Metadata field of the vector collection, used to associate with the fields in the vector table.
   * 
   * @example
   * doc_id
   */
  collectionMetadataField?: string;
  /**
   * @remarks
   * The filtering condition for the relational table.
   * 
   * @example
   * tags @> ARRAY[\\"art\\"]
   */
  condition?: string;
  /**
   * @remarks
   * The field in the relational table, used to associate with the Metadata field of the vector collection.
   * 
   * @example
   * id
   */
  tableField?: string;
  /**
   * @remarks
   * The name of the relational table.
   * 
   * @example
   * my_rds_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      collectionMetadataField: 'CollectionMetadataField',
      condition: 'Condition',
      tableField: 'TableField',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionMetadataField: 'string',
      condition: 'string',
      tableField: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

