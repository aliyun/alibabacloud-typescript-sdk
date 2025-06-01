// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagsForPrivateAccessPolicyResponseBodyPolicesTags } from "./ListTagsForPrivateAccessPolicyResponseBodyPolicesTags";


export class ListTagsForPrivateAccessPolicyResponseBodyPolices extends $dara.Model {
  /**
   * @example
   * pa-policy-1b0d0e8b4bcf****
   */
  policyId?: string;
  tags?: ListTagsForPrivateAccessPolicyResponseBodyPolicesTags[];
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      tags: { 'type': 'array', 'itemType': ListTagsForPrivateAccessPolicyResponseBodyPolicesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

