// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileVersionsResponseBodyDataFileVersions extends $dara.Model {
  /**
   * @remarks
   * The change type for this file version. Valid values: CREATE, UPDATE, and DELETE.
   * 
   * @example
   * UPDATE
   */
  changeType?: string;
  /**
   * @remarks
   * The description of this file version.
   * 
   * @example
   * Second version submission
   */
  comment?: string;
  /**
   * @remarks
   * The timestamp (in milliseconds) when the file version was created.
   * 
   * @example
   * 1593881265000
   */
  commitTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user who created this file version.
   * 
   * @example
   * 73842342****
   */
  commitUser?: string;
  /**
   * @remarks
   * The file code for this version.
   * 
   * @example
   * SHOW TABLES;
   */
  fileContent?: string;
  /**
   * @remarks
   * The file name for this file version.
   * 
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @remarks
   * The text information for this file version.
   * 
   * @example
   * {"fileName":"ods_user_info_d","fileType":10}
   */
  filePropertyContent?: string;
  /**
   * @remarks
   * The file version.
   * 
   * @example
   * 2
   */
  fileVersion?: number;
  /**
   * @remarks
   * Indicates whether this file version is the latest version in the production environment.
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isCurrentProd?: boolean;
  /**
   * @remarks
   * The scheduling configuration for this file version.
   * 
   * @example
   * {"cycleType":0,"cronExpress":"00 05 00 * * ?"}
   */
  nodeContent?: string;
  /**
   * @remarks
   * The scheduling task ID associated with this file version.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The current status of the file version. Valid values: COMMITTING (committing), COMMITTED or CHECK_OK (committed), PACKAGED (ready for deployment), DEPLOYING (deploying), DEPLOYED (deployed), and CANCELLED (deployment canceled).
   * 
   * @example
   * COMMITTED
   */
  status?: string;
  /**
   * @remarks
   * The functional module to which the file belongs. Valid values: NORMAL (Data Studio), MANUAL (manual task), MANUAL_BIZ (manual workflow), SKIP (dry-run scheduling in Data Studio), ADHOCQUERY (ad hoc query), and COMPONENT (component management).
   * 
   * @example
   * NORMAL
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      comment: 'Comment',
      commitTime: 'CommitTime',
      commitUser: 'CommitUser',
      fileContent: 'FileContent',
      fileName: 'FileName',
      filePropertyContent: 'FilePropertyContent',
      fileVersion: 'FileVersion',
      isCurrentProd: 'IsCurrentProd',
      nodeContent: 'NodeContent',
      nodeId: 'NodeId',
      status: 'Status',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      comment: 'string',
      commitTime: 'number',
      commitUser: 'string',
      fileContent: 'string',
      fileName: 'string',
      filePropertyContent: 'string',
      fileVersion: 'number',
      isCurrentProd: 'boolean',
      nodeContent: 'string',
      nodeId: 'number',
      status: 'string',
      useType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileVersionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of file version details.
   */
  fileVersions?: ListFileVersionsResponseBodyDataFileVersions[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileVersions: 'FileVersions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileVersions: { 'type': 'array', 'itemType': ListFileVersionsResponseBodyDataFileVersions },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fileVersions)) {
      $dara.Model.validateArray(this.fileVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of file versions.
   */
  data?: ListFileVersionsResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListFileVersionsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

