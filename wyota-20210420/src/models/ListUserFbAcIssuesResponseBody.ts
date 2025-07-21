// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserFbAcIssuesResponseBodyDataIssueDataListFileList extends $dara.Model {
  fileName?: string;
  fileSize?: number;
  fileType?: number;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileType: 'FileType',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSize: 'number',
      fileType: 'number',
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

export class ListUserFbAcIssuesResponseBodyDataIssueDataList extends $dara.Model {
  account?: string;
  clientVersion?: string;
  errorMessage?: string;
  fileList?: ListUserFbAcIssuesResponseBodyDataIssueDataListFileList[];
  gmtCreated?: string;
  gmtModified?: string;
  instanceId?: string;
  issueId?: number;
  label?: string;
  reservedA?: string;
  reservedB?: string;
  userEmail?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      clientVersion: 'ClientVersion',
      errorMessage: 'ErrorMessage',
      fileList: 'FileList',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      issueId: 'IssueId',
      label: 'Label',
      reservedA: 'ReservedA',
      reservedB: 'ReservedB',
      userEmail: 'UserEmail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      clientVersion: 'string',
      errorMessage: 'string',
      fileList: { 'type': 'array', 'itemType': ListUserFbAcIssuesResponseBodyDataIssueDataListFileList },
      gmtCreated: 'string',
      gmtModified: 'string',
      instanceId: 'string',
      issueId: 'number',
      label: 'string',
      reservedA: 'string',
      reservedB: 'string',
      userEmail: 'string',
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

export class ListUserFbAcIssuesResponseBodyData extends $dara.Model {
  issueDataList?: ListUserFbAcIssuesResponseBodyDataIssueDataList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      issueDataList: 'IssueDataList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueDataList: { 'type': 'array', 'itemType': ListUserFbAcIssuesResponseBodyDataIssueDataList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.issueDataList)) {
      $dara.Model.validateArray(this.issueDataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserFbAcIssuesResponseBody extends $dara.Model {
  code?: string;
  data?: ListUserFbAcIssuesResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListUserFbAcIssuesResponseBodyData,
      message: 'string',
      requestId: 'string',
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

