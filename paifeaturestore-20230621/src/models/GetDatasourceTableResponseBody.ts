// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasourceTableResponseBodyFields extends $dara.Model {
  /**
   * @remarks
   * The attributes of the field. Valid values:
   * 
   * ● Partition: indicates that the field is a partition field.
   * 
   * ● EventTime: indicates that the field is an event time field.
   * 
   * ● PrimaryKey: indicates that the field is a primary key field.
   */
  attributes?: string[];
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * field1
   */
  name?: string;
  /**
   * @remarks
   * The data type of the field. Valid values:
   * 
   * ● INT32
   * 
   * ● INT64
   * 
   * ● FLOAT
   * 
   * ● DOUBLE
   * 
   * ● STRING
   * 
   * ● BOOLEAN
   * 
   * ● TIMESTAMP
   * 
   * @example
   * INT32
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasourceTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of fields.
   */
  fields?: GetDatasourceTableResponseBodyFields[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7B2F8C4-49C7-5CFA-8075-9D715A114873
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the data table.
   * 
   * @example
   * table1
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
      fields: { 'type': 'array', 'itemType': GetDatasourceTableResponseBodyFields },
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

