// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPolicyResponseBodyAppPolicyList extends $dara.Model {
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

export class ListAppPolicyResponseBody extends $dara.Model {
  appPolicyList?: ListAppPolicyResponseBodyAppPolicyList[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      appPolicyList: 'AppPolicyList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPolicyList: { 'type': 'array', 'itemType': ListAppPolicyResponseBodyAppPolicyList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appPolicyList)) {
      $dara.Model.validateArray(this.appPolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

