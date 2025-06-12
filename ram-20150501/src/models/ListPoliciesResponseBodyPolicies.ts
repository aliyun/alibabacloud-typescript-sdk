// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPoliciesResponseBodyPoliciesPolicy } from "./ListPoliciesResponseBodyPoliciesPolicy";


export class ListPoliciesResponseBodyPolicies extends $dara.Model {
  policy?: ListPoliciesResponseBodyPoliciesPolicy[];
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: { 'type': 'array', 'itemType': ListPoliciesResponseBodyPoliciesPolicy },
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

