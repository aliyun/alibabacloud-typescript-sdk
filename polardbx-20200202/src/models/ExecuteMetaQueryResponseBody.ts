// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteMetaQueryResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * Same as above.
   * 
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @remarks
   * Same as above.
   * 
   * @example
   * 222
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The diagnostic information.
   * 
   * @example
   * AQEAAAAAaKPfwjY0MzMyODRGLUZCQkQtNTA1RS04MUUxLTc5NTkzODk2MUIzMg==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * NoPermissionType
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * PolicyType
   * 
   * @example
   * PRIORITY
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteMetaQueryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The actual top-level LIMIT offset applied to the SQL statement. If no offset is specified, the value is 0.
   * 
   * @example
   * 0
   */
  appliedOffset?: number;
  /**
   * @remarks
   * The effective upper limit of returned rows for this request.
   * 
   * @example
   * 100
   */
  appliedRowLimit?: number;
  /**
   * @remarks
   * The column names.
   */
  columns?: string[];
  /**
   * @remarks
   * Indicates whether the query result contains at least one more row beyond the effective row limit for this request.
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The size in bytes of the Rows JSON array in the returned result after UTF-8 encoding, excluding protocol overhead.
   * 
   * @example
   * 2048
   */
  recordsSizeBytes?: number;
  /**
   * @remarks
   * The actual number of result rows returned for this request.
   * 
   * @example
   * 100
   */
  returnedRowCount?: number;
  /**
   * @remarks
   * The total number of data rows.
   * 
   * @example
   * 97901
   */
  rowCount?: number;
  /**
   * @remarks
   * The number of affected or returned rows. This field is available only for CN.
   */
  rows?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      appliedOffset: 'AppliedOffset',
      appliedRowLimit: 'AppliedRowLimit',
      columns: 'Columns',
      hasMore: 'HasMore',
      recordsSizeBytes: 'RecordsSizeBytes',
      returnedRowCount: 'ReturnedRowCount',
      rowCount: 'RowCount',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedOffset: 'number',
      appliedRowLimit: 'number',
      columns: { 'type': 'array', 'itemType': 'string' },
      hasMore: 'boolean',
      recordsSizeBytes: 'number',
      returnedRowCount: 'number',
      rowCount: 'number',
      rows: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteMetaQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the access denial.
   */
  accessDeniedDetail?: ExecuteMetaQueryResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The list of instance details.
   */
  data?: ExecuteMetaQueryResponseBodyData;
  /**
   * @remarks
   * The additional message returned by the API operation. If the request is successful, success is returned. If an error occurs, the corresponding error code is returned.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: ExecuteMetaQueryResponseBodyAccessDeniedDetail,
      data: ExecuteMetaQueryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

