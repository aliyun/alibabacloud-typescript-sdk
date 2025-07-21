// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportUserFbIssueRequestFileList extends $dara.Model {
  fileMd5?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileName?: string;
  fileSize?: number;
  fileType?: number;
  ossUrl?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileMd5: 'FileMd5',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileType: 'FileType',
      ossUrl: 'OssUrl',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileMd5: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'number',
      ossUrl: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUserFbIssueRequest extends $dara.Model {
  appId?: string;
  clientAppVersion?: string;
  clientId?: string;
  clientModel?: string;
  clientOsName?: string;
  clientSn?: string;
  clientVersion?: string;
  customerId?: string;
  description?: string;
  desktopId?: string;
  desktopType?: number;
  errorCode?: string;
  errorMsg?: string;
  fbType?: number;
  fileList?: ReportUserFbIssueRequestFileList[];
  isSubstituteReport?: boolean;
  issueLabel?: string;
  loginRegionId?: string;
  loginToken?: string;
  occurTime?: number;
  reservedA?: string;
  reservedB?: string;
  sessionId?: string;
  telNo?: string;
  title?: string;
  userEmail?: string;
  userId?: string;
  userName?: string;
  workspaceId?: string;
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientAppVersion: 'ClientAppVersion',
      clientId: 'ClientId',
      clientModel: 'ClientModel',
      clientOsName: 'ClientOsName',
      clientSn: 'ClientSn',
      clientVersion: 'ClientVersion',
      customerId: 'CustomerId',
      description: 'Description',
      desktopId: 'DesktopId',
      desktopType: 'DesktopType',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      fbType: 'FbType',
      fileList: 'FileList',
      isSubstituteReport: 'IsSubstituteReport',
      issueLabel: 'IssueLabel',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      occurTime: 'OccurTime',
      reservedA: 'ReservedA',
      reservedB: 'ReservedB',
      sessionId: 'SessionId',
      telNo: 'TelNo',
      title: 'Title',
      userEmail: 'UserEmail',
      userId: 'UserId',
      userName: 'UserName',
      workspaceId: 'WorkspaceId',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientAppVersion: 'string',
      clientId: 'string',
      clientModel: 'string',
      clientOsName: 'string',
      clientSn: 'string',
      clientVersion: 'string',
      customerId: 'string',
      description: 'string',
      desktopId: 'string',
      desktopType: 'number',
      errorCode: 'string',
      errorMsg: 'string',
      fbType: 'number',
      fileList: { 'type': 'array', 'itemType': ReportUserFbIssueRequestFileList },
      isSubstituteReport: 'boolean',
      issueLabel: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      occurTime: 'number',
      reservedA: 'string',
      reservedB: 'string',
      sessionId: 'string',
      telNo: 'string',
      title: 'string',
      userEmail: 'string',
      userId: 'string',
      userName: 'string',
      workspaceId: 'string',
      wyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileList)) {
      $dara.Model.validateArray(this.fileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

