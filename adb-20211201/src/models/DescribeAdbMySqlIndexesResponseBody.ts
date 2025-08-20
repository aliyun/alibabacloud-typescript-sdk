// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdbMySqlIndexesResponseBodyIndexes extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * preclcu
   */
  column?: string;
  /**
   * @remarks
   * The name of the index.
   * 
   * @example
   * ttl
   */
  name?: string;
  /**
   * @remarks
   * The index type.
   * 
   * @example
   * normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
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

export class DescribeAdbMySqlIndexesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of indexes.````
   * 
   * @example
   * 10
   */
  indexCount?: number;
  /**
   * @remarks
   * The queried indexes.
   */
  indexes?: DescribeAdbMySqlIndexesResponseBodyIndexes[];
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   If the request was successful, a success message is returned.****
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0983B43-B2EC-536A-8791-142B5CF1E9B6
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * **
   * 
   * ****\\
   * 
   * @example
   * adb_demo
   */
  schema?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      indexCount: 'IndexCount',
      indexes: 'Indexes',
      message: 'Message',
      requestId: 'RequestId',
      schema: 'Schema',
      success: 'Success',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexCount: 'number',
      indexes: { 'type': 'array', 'itemType': DescribeAdbMySqlIndexesResponseBodyIndexes },
      message: 'string',
      requestId: 'string',
      schema: 'string',
      success: 'boolean',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.indexes)) {
      $dara.Model.validateArray(this.indexes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

