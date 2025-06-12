// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPolicyVersionsResponseBodyPolicyVersions } from "./ListPolicyVersionsResponseBodyPolicyVersions";


export class ListPolicyVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the policy versions.
   */
  policyVersions?: ListPolicyVersionsResponseBodyPolicyVersions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyVersions: 'PolicyVersions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersions: ListPolicyVersionsResponseBodyPolicyVersions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policyVersions && typeof (this.policyVersions as any).validate === 'function') {
      (this.policyVersions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

