// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserFbIssuesRequest extends $dara.Model {
  appId?: string;
  clientId?: string;
  clientModel?: string;
  clientSn?: string;
  customerId?: string;
  description?: string;
  desktopId?: string;
  errorCode?: string;
  errorMsg?: string;
  fbType?: number;
  issueId?: number;
  issueLabel?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: number;
  title?: string;
  userEmail?: string;
  userId?: string;
  wasRead?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientId: 'ClientId',
      clientModel: 'ClientModel',
      clientSn: 'ClientSn',
      customerId: 'CustomerId',
      description: 'Description',
      desktopId: 'DesktopId',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      fbType: 'FbType',
      issueId: 'IssueId',
      issueLabel: 'IssueLabel',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      title: 'Title',
      userEmail: 'UserEmail',
      userId: 'UserId',
      wasRead: 'WasRead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientId: 'string',
      clientModel: 'string',
      clientSn: 'string',
      customerId: 'string',
      description: 'string',
      desktopId: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      fbType: 'number',
      issueId: 'number',
      issueLabel: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
      title: 'string',
      userEmail: 'string',
      userId: 'string',
      wasRead: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

