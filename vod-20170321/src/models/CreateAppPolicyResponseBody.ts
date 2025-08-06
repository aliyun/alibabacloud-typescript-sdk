// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppPolicyResponseBodyAppPolicy extends $dara.Model {
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

export class CreateAppPolicyResponseBody extends $dara.Model {
  appPolicy?: CreateAppPolicyResponseBodyAppPolicy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appPolicy: 'AppPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPolicy: CreateAppPolicyResponseBodyAppPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appPolicy && typeof (this.appPolicy as any).validate === 'function') {
      (this.appPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

