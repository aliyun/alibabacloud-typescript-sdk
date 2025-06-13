// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSecurityPolicyRelationsResponseBodySecrityPolicyRelations } from "./ListSecurityPolicyRelationsResponseBodySecrityPolicyRelations";


export class ListSecurityPolicyRelationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3
   */
  requestId?: string;
  /**
   * @remarks
   * The security policies and the listeners that are associated with the security policies.
   */
  secrityPolicyRelations?: ListSecurityPolicyRelationsResponseBodySecrityPolicyRelations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secrityPolicyRelations: 'SecrityPolicyRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secrityPolicyRelations: { 'type': 'array', 'itemType': ListSecurityPolicyRelationsResponseBodySecrityPolicyRelations },
    };
  }

  validate() {
    if(Array.isArray(this.secrityPolicyRelations)) {
      $dara.Model.validateArray(this.secrityPolicyRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

