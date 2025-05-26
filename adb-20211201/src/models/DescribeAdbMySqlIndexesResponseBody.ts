// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAdbMySqlIndexesResponseBodyIndexes } from "./DescribeAdbMySqlIndexesResponseBodyIndexes";


export class DescribeAdbMySqlIndexesResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  indexCount?: number;
  indexes?: DescribeAdbMySqlIndexesResponseBodyIndexes[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * F0983B43-B2EC-536A-8791-142B5CF1E9B6
   */
  requestId?: string;
  /**
   * @example
   * adb_demo
   */
  schema?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

