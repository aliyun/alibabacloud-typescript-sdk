// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ColumnMetadata } from "./ColumnMetadata";


export class DescribeTableResponseBodyColumnList extends $dara.Model {
  columnList?: ColumnMetadata[];
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': ColumnMetadata },
    };
  }

  validate() {
    if(Array.isArray(this.columnList)) {
      $dara.Model.validateArray(this.columnList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The columns of the table.
   */
  columnList?: DescribeTableResponseBodyColumnList;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the operation. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: DescribeTableResponseBodyColumnList,
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.columnList && typeof (this.columnList as any).validate === 'function') {
      (this.columnList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

