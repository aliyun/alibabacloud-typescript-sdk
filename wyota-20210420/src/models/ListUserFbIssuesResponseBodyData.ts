// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserFbIssuesResponseBodyDataFeedbackIssueData } from "./ListUserFbIssuesResponseBodyDataFeedbackIssueData";


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

