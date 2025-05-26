// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAdbMySqlTableMetaResponseBodyTableMeta } from "./DescribeAdbMySqlTableMetaResponseBodyTableMeta";


export class DescribeAdbMySqlTableMetaResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  tableMeta?: DescribeAdbMySqlTableMetaResponseBodyTableMeta;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tableMeta: 'TableMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tableMeta: DescribeAdbMySqlTableMetaResponseBodyTableMeta,
    };
  }

  validate() {
    if(this.tableMeta && typeof (this.tableMeta as any).validate === 'function') {
      (this.tableMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

