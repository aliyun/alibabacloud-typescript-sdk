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
   * The type of the index.
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
   * The filter condition for the number of indexes (the number of indexes currently owned by the table with missing indexes). The input format is `operator + separator "" + number of indexes`, such as `>=100`.
   * 
   * @example
   * 10
   */
  indexCount?: number;
  /**
   * @remarks
   * The list of indexes.
   */
  indexes?: DescribeAdbMySqlIndexesResponseBodyIndexes[];
  /**
   * @remarks
   * The message returned for the call. Valid values:
   * - **Success**: The request is successful. 
   * - Specific error message: returned when the request fails.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F0983B43-B2EC-536A-8791-142B5CF1E9B6
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the database.  
   * 
   * > <br>If this parameter is specified, subsequent migration or synchronization operations are performed only on this database.
   * 
   * @example
   * adb_demo
   */
  schema?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
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

