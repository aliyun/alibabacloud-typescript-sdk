// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteMetaQueryResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The description is the same as above.
   * 
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @remarks
   * The description is the same as above.
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
  appliedOffset?: number;
  appliedRowLimit?: number;
  /**
   * @remarks
   * The column names.
   */
  columns?: string[];
  hasMore?: boolean;
  recordsSizeBytes?: number;
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
   * The number of affected or returned rows. This field is available only for compute nodes (CNs).
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
   * The details about the access denial.
   */
  accessDeniedDetail?: ExecuteMetaQueryResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The list of instance details.
   */
  data?: ExecuteMetaQueryResponseBodyData;
  /**
   * @remarks
   * The additional information returned by the operation. success is returned if the request is successful. Otherwise, an error code is returned.
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

