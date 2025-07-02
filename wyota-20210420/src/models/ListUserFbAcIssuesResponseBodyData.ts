// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserFbAcIssuesResponseBodyDataIssueDataList } from "./ListUserFbAcIssuesResponseBodyDataIssueDataList";


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

