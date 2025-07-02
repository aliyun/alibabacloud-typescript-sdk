// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportUserFbIssueShrinkRequest extends $dara.Model {
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
  fileListShrink?: string;
  issueLabel?: string;
  occurTime?: number;
  reservedA?: string;
  reservedB?: string;
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
      fileListShrink: 'FileList',
      issueLabel: 'IssueLabel',
      occurTime: 'OccurTime',
      reservedA: 'ReservedA',
      reservedB: 'ReservedB',
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
      fileListShrink: 'string',
      issueLabel: 'string',
      occurTime: 'number',
      reservedA: 'string',
      reservedB: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

