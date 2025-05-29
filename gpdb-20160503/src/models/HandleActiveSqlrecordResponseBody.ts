// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HandleActiveSQLRecordResponseBodyResults } from "./HandleActiveSqlrecordResponseBodyResults";


export class HandleActiveSQLRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
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
   * The processing result of the active query.
   */
  results?: HandleActiveSQLRecordResponseBodyResults[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      results: 'Results',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': HandleActiveSQLRecordResponseBodyResults },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

