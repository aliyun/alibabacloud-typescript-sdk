// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileVersionsResponseBodyDataFileVersions extends $dara.Model {
  /**
   * @remarks
   * The type of the change to the file of the current version. Valid values: CREATE, UPDATE, and DELETE.
   * 
   * @example
   * UPDATE
   */
  changeType?: string;
  /**
   * @remarks
   * The description of the file version.
   * 
   * @example
   * Second version submission
   */
  comment?: string;
  /**
   * @remarks
   * The time when the file version was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1593881265000
   */
  commitTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used to create the file of the current version.
   * 
   * @example
   * 73842342****
   */
  commitUser?: string;
  /**
   * @remarks
   * The code in the file of the current version.
   * 
   * @example
   * SHOW TABLES;
   */
  fileContent?: string;
  /**
   * @remarks
   * The name of the file of the current version.
   * 
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @remarks
   * The basic information about the file of the current version.
   * 
   * @example
   * {"fileName":"ods_user_info_d","fileType":10}
   */
  filePropertyContent?: string;
  /**
   * @remarks
   * The version of the file.
   * 
   * @example
   * 2
   */
  fileVersion?: number;
  /**
   * @remarks
   * Indicates whether the file version is the same as the latest file version in the production environment.
   * 
   * @example
   * false
   */
  isCurrentProd?: boolean;
  /**
   * @remarks
   * The scheduling configurations for the node that corresponds to the file of the current version.
   * 
   * @example
   * {"cycleType":0,"cronExpress":"00 05 00 * * ?"}
   */
  nodeContent?: string;
  /**
   * @remarks
   * The ID of the auto triggered node that corresponds to the file of the current version.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The status of the file of the current version. Valid values: COMMITTING, COMMITTED, CHECK_OK, PACKAGED, DEPLOYING, DEPLOYED, and CANCELLED.
   * 
   * @example
   * COMMITTED
   */
  status?: string;
  /**
   * @remarks
   * The functional module to which the file belongs. Valid values: NORMAL, MANUAL, MANUAL_BIZ, SKIP, ADHOCQUERY, and COMPONENT. The value SKIP indicates that the node corresponding to the file is run in dry-run mode.
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
   * The details of file versions.
   */
  fileVersions?: ListFileVersionsResponseBodyDataFileVersions[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * The file versions.
   */
  data?: ListFileVersionsResponseBodyData;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0000-ABCD-EFG****
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

