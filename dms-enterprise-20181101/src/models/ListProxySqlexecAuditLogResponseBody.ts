// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogList } from "./ListProxySqlexecAuditLogResponseBodyProxySqlexecAuditLogList";


export class ListProxySQLExecAuditLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * InvalidStartTime
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Specified parameter StartTime is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The audit information about the database instance that is provided by the secure access proxy feature.
   */
  proxySQLExecAuditLogList?: ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 50ECB006-2C35-5FCA-91B9-01987A0B****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      proxySQLExecAuditLogList: 'ProxySQLExecAuditLogList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      proxySQLExecAuditLogList: ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogList,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.proxySQLExecAuditLogList && typeof (this.proxySQLExecAuditLogList as any).validate === 'function') {
      (this.proxySQLExecAuditLogList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

