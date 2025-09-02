// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileVersionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The change type of the file version. Valid values: CREATE, UPDATE, and DELETE.
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
   * The time when the version was generated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1593881265000
   */
  commitTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the file version.
   * 
   * @example
   * 7384234****
   */
  commitUser?: string;
  /**
   * @remarks
   * The file code.
   * 
   * @example
   * SHOW TABLES;
   */
  fileContent?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @remarks
   * The basic information about the file.
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
   * Indicates whether the version is the latest version in the production environment.
   * 
   * @example
   * true
   */
  isCurrentProd?: boolean;
  /**
   * @remarks
   * The scheduling configurations of the node that corresponds to the file version.
   * 
   * @example
   * {"cycleType":0,"cronExpress":"00 05 00 * * ?"}
   */
  nodeContent?: string;
  /**
   * @remarks
   * The ID of the node that corresponds to the file version.
   * 
   * @example
   * 3000001
   */
  nodeId?: number;
  /**
   * @remarks
   * The status of the file version. Valid values: COMMITTING, COMMITTED, CHECK_OK, PACKAGED, DEPLOYING, DEPLOYED, and CANCELLED. The value CHECK_OK is equivalent to the value COMMITTED.
   * 
   * @example
   * COMMITTED
   */
  status?: string;
  /**
   * @remarks
   * The functional module to which the file belongs. Valid values: NORMAL, MANUAL, MANUAL_BIZ, SKIP, ADHOCQUERY, and COMPONENT. The value NORMAL indicates DataStudio. The value MANUAL indicates a manually triggered node. The value MANUAL_BIZ indicates a manually triggered workflow. The value SKIP indicates a dry-run DataStudio node. The value ADHOCQUERY indicates an ad hoc query. The value COMPONENT indicates snippets.
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

export class GetFileVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the file version.
   */
  data?: GetFileVersionResponseBodyData;
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
   * The ID of the request. You can troubleshoot issues based on the ID.
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
      data: GetFileVersionResponseBodyData,
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

