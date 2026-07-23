// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Table } from "./Table";


export class ListTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Next page token
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * Table entities. Each element represents a specific table, including but not limited to information such as table name and table ID.
   */
  tables?: Table[];
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      tables: 'Tables',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      tables: { 'type': 'array', 'itemType': Table },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response data
   * 
   * @example
   * {"Tables":[{"Name":"my_table","Comment":"测试事件表"}],"NextToken":"10","Total":1}
   */
  data?: ListTablesResponseBodyData;
  /**
   * @remarks
   * API response message
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListTablesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

