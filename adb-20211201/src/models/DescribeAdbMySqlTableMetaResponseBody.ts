// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAdbMySqlTableMetaResponseBodyTableMeta } from "./DescribeAdbMySqlTableMetaResponseBodyTableMeta";


export class DescribeAdbMySqlTableMetaResponseBody extends $dara.Model {
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
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
   */
  requestId?: string;
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
   * The queried table metadata.
   */
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

