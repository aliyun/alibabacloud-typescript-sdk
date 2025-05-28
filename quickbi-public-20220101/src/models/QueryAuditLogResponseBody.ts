// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAuditLogResponseBodyResult } from "./QueryAuditLogResponseBodyResult";


export class QueryAuditLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 78C1AA2D-9201-599E-A0BA-6FC462E57A95
   */
  requestId?: string;
  /**
   * @remarks
   * Array of logs.
   */
  result?: QueryAuditLogResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values: 
   * - true: The request succeeded 
   * - false: The request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryAuditLogResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

