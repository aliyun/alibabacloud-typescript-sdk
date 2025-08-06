// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppPoliciesResponseBodyAppPolicyList extends $dara.Model {
  creationTime?: string;
  description?: string;
  modificationTime?: string;
  policyName?: string;
  policyType?: string;
  policyValue?: string;
  products?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      modificationTime: 'ModificationTime',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      policyValue: 'PolicyValue',
      products: 'Products',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      modificationTime: 'string',
      policyName: 'string',
      policyType: 'string',
      policyValue: 'string',
      products: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppPoliciesResponseBody extends $dara.Model {
  appPolicyList?: GetAppPoliciesResponseBodyAppPolicyList[];
  nonExistPolicyNames?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appPolicyList: 'AppPolicyList',
      nonExistPolicyNames: 'NonExistPolicyNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPolicyList: { 'type': 'array', 'itemType': GetAppPoliciesResponseBodyAppPolicyList },
      nonExistPolicyNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appPolicyList)) {
      $dara.Model.validateArray(this.appPolicyList);
    }
    if(Array.isArray(this.nonExistPolicyNames)) {
      $dara.Model.validateArray(this.nonExistPolicyNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

