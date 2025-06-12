// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPolicyVersionsResponseBodyPolicyVersionsPolicyVersion } from "./ListPolicyVersionsResponseBodyPolicyVersionsPolicyVersion";


export class ListPolicyVersionsResponseBodyPolicyVersions extends $dara.Model {
  policyVersion?: ListPolicyVersionsResponseBodyPolicyVersionsPolicyVersion[];
  static names(): { [key: string]: string } {
    return {
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersion: { 'type': 'array', 'itemType': ListPolicyVersionsResponseBodyPolicyVersionsPolicyVersion },
    };
  }

  validate() {
    if(Array.isArray(this.policyVersion)) {
      $dara.Model.validateArray(this.policyVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

