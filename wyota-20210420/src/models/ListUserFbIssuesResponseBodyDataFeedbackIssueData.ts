// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserFbIssuesResponseBodyDataFeedbackIssueDataFileList } from "./ListUserFbIssuesResponseBodyDataFeedbackIssueDataFileList";


export class ListUserFbIssuesResponseBodyDataFeedbackIssueData extends $dara.Model {
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
  fileList?: ListUserFbIssuesResponseBodyDataFeedbackIssueDataFileList[];
  gmtCreated?: string;
  issueId?: number;
  issueLabel?: string;
  status?: number;
  title?: string;
  userEmail?: string;
  userId?: string;
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
      fileList: 'FileList',
      gmtCreated: 'GmtCreated',
      issueId: 'IssueId',
      issueLabel: 'IssueLabel',
      status: 'Status',
      title: 'Title',
      userEmail: 'UserEmail',
      userId: 'UserId',
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
      fileList: { 'type': 'array', 'itemType': ListUserFbIssuesResponseBodyDataFeedbackIssueDataFileList },
      gmtCreated: 'string',
      issueId: 'number',
      issueLabel: 'string',
      status: 'number',
      title: 'string',
      userEmail: 'string',
      userId: 'string',
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

