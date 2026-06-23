// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileVersionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The change type of this file version, including CREATE, UPDATE, and DELETE.
   * 
   * @example
   * UPDATE
   */
  changeType?: string;
  /**
   * @remarks
   * Description of this file version.
   * 
   * @example
   * Second version submission
   */
  comment?: string;
  /**
   * @remarks
   * UNIX timestamp (in milliseconds) when the file version was generated.
   * 
   * @example
   * 1593881265000
   */
  commitTime?: number;
  /**
   * @remarks
   * User ID of the Alibaba Cloud user who generated this file version.
   * 
   * @example
   * 7384234****
   */
  commitUser?: string;
  /**
   * @remarks
   * The code of the file for this version.
   * 
   * @example
   * SHOW TABLES;
   */
  fileContent?: string;
  /**
   * @remarks
   * File name used to generate this file version.
   * 
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @remarks
   * Basic information of the file used to generate this file version.
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
   * Indicates whether this file version is the latest version in the current production environment.
   * 
   * - true: It is the latest version.
   * 
   * - false: It is not the latest version.
   * 
   * @example
   * true
   */
  isCurrentProd?: boolean;
  /**
   * @remarks
   * The scan configuration at the time this file version was generated.
   * 
   * @example
   * {"cycleType":0,"cronExpress":"00 05 00 * * ?"}
   */
  nodeContent?: string;
  /**
   * @remarks
   * The ID of the scheduling task corresponding to the generation of this file version.
   * 
   * @example
   * 3000001
   */
  nodeId?: number;
  /**
   * @remarks
   * Current status of the file version. Valid values:
   * 
   * - COMMITTING (Submitting)
   * 
   * - COMMITTED or CHECK_OK (Submitted)
   * 
   * - PACKAGED (Preparing for publish)
   * 
   * - DEPLOYING (In Publish)
   * 
   * - DEPLOYED (Published)
   * 
   * - CANCELLED (Publish canceled)
   * 
   * @example
   * COMMITTED
   */
  status?: string;
  /**
   * @remarks
   * Function module to which the file belongs. Valid values:
   * 
   * - 0: NORMAL (Data Development)
   * 
   * - 1: MANUAL (one-time task)
   * 
   * - 2: MANUAL_BIZ (manual pipeline)
   * 
   * - 3: SKIP (Dry-Run scheduling in Data Development)
   * 
   * - 10: ADHOCQUERY (Ad Hoc Query)
   * 
   * - 30: COMPONENT (widget Management)
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
   * Version details of the file.
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
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The unique ID of this request. If an error occurs, you can troubleshoot the issue using this ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded.
   * 
   * - true: Succeeded.
   * 
   * - false: Failed.
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

