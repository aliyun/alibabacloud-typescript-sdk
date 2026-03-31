// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoliciesForGroupResponseBodyPoliciesPolicy extends $dara.Model {
  attachDate?: string;
  defaultVersion?: string;
  description?: string;
  policyName?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      defaultVersion: 'string',
      description: 'string',
      policyName: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListPoliciesForGroupResponseBody extends $dara.Model {
  policies?: ListPoliciesForGroupResponseBodyPolicies;
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
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: ListPoliciesForGroupResponseBodyPolicies,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policies && typeof (this.policies as any).validate === 'function') {
      (this.policies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

