// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSecurityPolicyRelationsResponseBodySecrityPolicyRelationsRelatedListeners } from "./ListSecurityPolicyRelationsResponseBodySecrityPolicyRelationsRelatedListeners";


export class ListSecurityPolicyRelationsResponseBodySecrityPolicyRelations extends $dara.Model {
  /**
   * @remarks
   * The listeners that are associated with the security policy.
   */
  relatedListeners?: ListSecurityPolicyRelationsResponseBodySecrityPolicyRelationsRelatedListeners[];
  /**
   * @remarks
   * The security policy ID.
   * 
   * @example
   * scp-bp1bpn0kn9****
   */
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      relatedListeners: 'RelatedListeners',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedListeners: { 'type': 'array', 'itemType': ListSecurityPolicyRelationsResponseBodySecrityPolicyRelationsRelatedListeners },
      securityPolicyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedListeners)) {
      $dara.Model.validateArray(this.relatedListeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

