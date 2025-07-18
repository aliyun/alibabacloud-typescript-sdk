// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount extends $dara.Model {
  /**
   * @example
   * 3
   */
  all?: number;
  /**
   * @example
   * 0
   */
  mobile?: number;
  /**
   * @example
   * 0
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesResponseBodyPoliciesLimitDetail extends $dara.Model {
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  limitCount?: ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount;
  /**
   * @example
   * LimitAll
   */
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBelong: 'DeviceBelong',
      limitCount: 'LimitCount',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBelong: 'string',
      limitCount: ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount,
      limitType: 'string',
    };
  }

  validate() {
    if(this.limitCount && typeof (this.limitCount as any).validate === 'function') {
      (this.limitCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  description?: string;
  limitDetail?: ListRegistrationPoliciesResponseBodyPoliciesLimitDetail[];
  /**
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  /**
   * @example
   * reg-policy-dcbfd33cb004****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      limitDetail: 'LimitDetail',
      matchMode: 'MatchMode',
      name: 'Name',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      limitDetail: { 'type': 'array', 'itemType': ListRegistrationPoliciesResponseBodyPoliciesLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.limitDetail)) {
      $dara.Model.validateArray(this.limitDetail);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesResponseBody extends $dara.Model {
  policies?: ListRegistrationPoliciesResponseBodyPolicies[];
  /**
   * @example
   * 7A8FE38A-E29C-5678-B84A-FEDBCB83552F
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListRegistrationPoliciesResponseBodyPolicies },
      requestId: 'string',
      totalNum: 'string',
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

