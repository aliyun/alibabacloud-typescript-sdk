// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserFbAcIssuesResponseBodyDataIssueDataListFileList } from "./ListUserFbAcIssuesResponseBodyDataIssueDataListFileList";


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

