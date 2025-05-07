// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer } from "./ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer";


export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers extends $dara.Model {
  reviewer?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer[];
  static names(): { [key: string]: string } {
    return {
      reviewer: 'Reviewer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewer: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer },
    };
  }

  validate() {
    if(Array.isArray(this.reviewer)) {
      $dara.Model.validateArray(this.reviewer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

