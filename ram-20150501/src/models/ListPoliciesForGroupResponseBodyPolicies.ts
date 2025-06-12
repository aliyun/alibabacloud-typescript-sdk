// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPoliciesForGroupResponseBodyPoliciesPolicy } from "./ListPoliciesForGroupResponseBodyPoliciesPolicy";


export class ListPoliciesForGroupResponseBodyPolicies extends $dara.Model {
  policy?: ListPoliciesForGroupResponseBodyPoliciesPolicy[];
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: { 'type': 'array', 'itemType': ListPoliciesForGroupResponseBodyPoliciesPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.policy)) {
      $dara.Model.validateArray(this.policy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

