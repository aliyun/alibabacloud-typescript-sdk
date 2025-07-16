// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasourceTableResponseBodyFields extends $dara.Model {
  attributes?: string[];
  /**
   * @example
   * field1
   */
  name?: string;
  /**
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
  fields?: GetDatasourceTableResponseBodyFields[];
  /**
   * @example
   * D7B2F8C4-49C7-5CFA-8075-9D715A114873
   */
  requestId?: string;
  /**
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

