// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpLogResponseBodyOpLogDetailsOpLogDetail extends $dara.Model {
  database?: string;
  module?: string;
  opContent?: string;
  opTime?: string;
  opUserId?: number;
  orderId?: number;
  userId?: string;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      module: 'Module',
      opContent: 'OpContent',
      opTime: 'OpTime',
      opUserId: 'OpUserId',
      orderId: 'OrderId',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      module: 'string',
      opContent: 'string',
      opTime: 'string',
      opUserId: 'number',
      orderId: 'number',
      userId: 'string',
      userNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpLogResponseBodyOpLogDetails extends $dara.Model {
  opLogDetail?: GetOpLogResponseBodyOpLogDetailsOpLogDetail[];
  static names(): { [key: string]: string } {
    return {
      opLogDetail: 'OpLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opLogDetail: { 'type': 'array', 'itemType': GetOpLogResponseBodyOpLogDetailsOpLogDetail },
    };
  }

  validate() {
    if(Array.isArray(this.opLogDetail)) {
      $dara.Model.validateArray(this.opLogDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
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
  opLogDetails?: GetOpLogResponseBodyOpLogDetails;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 47D56208-DB1D-4FD3-BE32-300E43185488
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
   * The total number of operation logs that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      opLogDetails: 'OpLogDetails',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      opLogDetails: GetOpLogResponseBodyOpLogDetails,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.opLogDetails && typeof (this.opLogDetails as any).validate === 'function') {
      (this.opLogDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

