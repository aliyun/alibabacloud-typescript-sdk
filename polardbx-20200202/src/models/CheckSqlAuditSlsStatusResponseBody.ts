// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSqlAuditSlsStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 173CA69A-3513-591D-8A09-C1EA37CBE2D9
   */
  requestId?: string;
  /**
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

