// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileVersionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The change type of this file version. Valid values: CREATE, UPDATE, and DELETE.
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
   * The timestamp when the file version was generated, in milliseconds.
   * 
   * @example
   * 1593881265000
   */
  commitTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud user ID that generated this file version.
   * 
   * @example
   * 7384234****
   */
  commitUser?: string;
  /**
   * @remarks
   * The file code that generated this file version.
   * 
   * @example
   * SHOW TABLES;
   */
  fileContent?: string;
  /**
   * @remarks
   * The name of the file that generated this file version.
   * 
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @remarks
   * The basic file information when this file version was generated.
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
   * Indicates whether this file version is the latest version in the production environment. Valid values:
   * - true: The version is the latest version.
   * - false: The version is not the latest version.
   * 
   * @example
   * true
   */
  isCurrentProd?: boolean;
  /**
   * @remarks
   * The scheduling configuration when this file version was generated.
   * 
   * @example
   * {"cycleType":0,"cronExpress":"00 05 00 * * ?"}
   */
  nodeContent?: string;
  /**
   * @remarks
   * The ID of the scheduling node associated with the file version when it was generated.
   * 
   * @example
   * 3000001
   */
  nodeId?: number;
  /**
   * @remarks
   * The current status of the file version. Valid values:
   * - COMMITTING: The version is being committed.
   * - COMMITTED or CHECK_OK: The version has been committed.
   * - PACKAGED: The version is ready for deployment.
   * - DEPLOYING: The version is being deployed.
   * - DEPLOYED: The version has been deployed.
   * - CANCELLED: The deployment has been canceled.
   * 
   * @example
   * COMMITTED
   */
  status?: string;
  /**
   * @remarks
   * The functional module to which the file belongs. Valid values:
   * - 0: NORMAL (DataStudio)
   * - 1: MANUAL (manual node)
   * - 2: MANUAL_BIZ (manual workflow)
   * - 3: SKIP (dry-run scheduling in DataStudio)
   * - 10: ADHOCQUERY (ad hoc query)
   * - 30: COMPONENT (component management)
   * 
   * @example
   * 0
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
   * The version details of the file.
   */
  data?: GetFileVersionResponseBodyData;
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
   * The unique ID of the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
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

