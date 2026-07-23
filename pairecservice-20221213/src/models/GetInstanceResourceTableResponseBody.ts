// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResourceTableResponseBodyFields extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the field is a dimension field.
   * 
   * @example
   * false
   */
  isDimensionField?: boolean;
  /**
   * @remarks
   * Indicates whether the field is a partition field.
   * 
   * @example
   * true
   */
  isPartitionField?: boolean;
  /**
   * @remarks
   * The meaning of the field.
   * 
   * @example
   * ""
   */
  meaning?: string;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * BIGINT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      isDimensionField: 'IsDimensionField',
      isPartitionField: 'IsPartitionField',
      meaning: 'Meaning',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDimensionField: 'boolean',
      isPartitionField: 'boolean',
      meaning: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResourceTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of fields in the data table.
   */
  fields?: GetInstanceResourceTableResponseBodyFields[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 74D958EF-3598-56FA-8296-FF1575CE43DF
   */
  requestId?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      requestId: 'RequestId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': GetInstanceResourceTableResponseBodyFields },
      requestId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

