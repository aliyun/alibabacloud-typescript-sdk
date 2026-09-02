// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Row } from "./Row";


export class QueryEventHouseWithTimeRangeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of result rows returned by the SQL query.
   */
  rows?: Row[];
  /**
   * @remarks
   * The number of result rows actually returned by the query.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      rows: 'Rows',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rows: { 'type': 'array', 'itemType': Row },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventHouseWithTimeRangeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code of the operation. Success indicates a successful call. Other values indicate specific error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The structured result data returned by the SQL query.
   */
  data?: QueryEventHouseWithTimeRangeResponseBodyData;
  /**
   * @remarks
   * A success message if the call succeeds, or a specific error message if the call fails.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request. You can use this ID for troubleshooting.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success. A value of false indicates failure.
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
      data: QueryEventHouseWithTimeRangeResponseBodyData,
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

