// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSensitiveDataAuditLogResponseBodySensitiveDataAuditLogList } from "./ListSensitiveDataAuditLogResponseBodySensitiveDataAuditLogList";


export class ListSensitiveDataAuditLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E0D21075-CD3E-4D98-8264-FD8AD04A63B6
   */
  requestId?: string;
  /**
   * @remarks
   * The audit logs for sensitive data.
   */
  sensitiveDataAuditLogList?: ListSensitiveDataAuditLogResponseBodySensitiveDataAuditLogList[];
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
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      sensitiveDataAuditLogList: 'SensitiveDataAuditLogList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      sensitiveDataAuditLogList: { 'type': 'array', 'itemType': ListSensitiveDataAuditLogResponseBodySensitiveDataAuditLogList },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveDataAuditLogList)) {
      $dara.Model.validateArray(this.sensitiveDataAuditLogList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

