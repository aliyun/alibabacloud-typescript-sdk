// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserFbIssuesResponseBodyDataFeedbackIssueDataFileList extends $dara.Model {
  fileMd5?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: number;
  ossUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileMd5: 'FileMd5',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileType: 'FileType',
      ossUrl: 'OssUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileMd5: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'number',
      ossUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListUserFbIssuesResponseBodyData extends $dara.Model {
  count?: string;
  feedbackIssueData?: ListUserFbIssuesResponseBodyDataFeedbackIssueData[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      feedbackIssueData: 'FeedbackIssueData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      feedbackIssueData: { 'type': 'array', 'itemType': ListUserFbIssuesResponseBodyDataFeedbackIssueData },
    };
  }

  validate() {
    if(Array.isArray(this.feedbackIssueData)) {
      $dara.Model.validateArray(this.feedbackIssueData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserFbIssuesResponseBody extends $dara.Model {
  code?: string;
  data?: ListUserFbIssuesResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListUserFbIssuesResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

