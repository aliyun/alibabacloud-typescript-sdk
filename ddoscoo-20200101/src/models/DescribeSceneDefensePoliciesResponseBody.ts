// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSceneDefensePoliciesResponseBodyPoliciesRuntimePolicies extends $dara.Model {
  newValue?: string;
  policyType?: number;
  status?: number;
  oldValue?: string;
  static names(): { [key: string]: string } {
    return {
      newValue: 'NewValue',
      policyType: 'PolicyType',
      status: 'Status',
      oldValue: 'oldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newValue: 'string',
      policyType: 'number',
      status: 'number',
      oldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefensePoliciesResponseBodyPolicies extends $dara.Model {
  done?: number;
  endTime?: number;
  name?: string;
  objectCount?: number;
  policyId?: string;
  runtimePolicies?: DescribeSceneDefensePoliciesResponseBodyPoliciesRuntimePolicies[];
  startTime?: number;
  status?: number;
  template?: string;
  static names(): { [key: string]: string } {
    return {
      done: 'Done',
      endTime: 'EndTime',
      name: 'Name',
      objectCount: 'ObjectCount',
      policyId: 'PolicyId',
      runtimePolicies: 'RuntimePolicies',
      startTime: 'StartTime',
      status: 'Status',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      done: 'number',
      endTime: 'number',
      name: 'string',
      objectCount: 'number',
      policyId: 'string',
      runtimePolicies: { 'type': 'array', 'itemType': DescribeSceneDefensePoliciesResponseBodyPoliciesRuntimePolicies },
      startTime: 'number',
      status: 'number',
      template: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.runtimePolicies)) {
      $dara.Model.validateArray(this.runtimePolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefensePoliciesResponseBody extends $dara.Model {
  policies?: DescribeSceneDefensePoliciesResponseBodyPolicies[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': DescribeSceneDefensePoliciesResponseBodyPolicies },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

