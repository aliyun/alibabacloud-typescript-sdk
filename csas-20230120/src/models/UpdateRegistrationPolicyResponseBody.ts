// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount extends $dara.Model {
  /**
   * @example
   * 1
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

export class UpdateRegistrationPolicyResponseBodyPolicyLimitDetail extends $dara.Model {
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  limitCount?: UpdateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount;
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
      limitCount: UpdateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount,
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

export class UpdateRegistrationPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  description?: string;
  limitDetail?: UpdateRegistrationPolicyResponseBodyPolicyLimitDetail[];
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
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: string;
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
      limitDetail: { 'type': 'array', 'itemType': UpdateRegistrationPolicyResponseBodyPolicyLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'string',
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

export class UpdateRegistrationPolicyResponseBody extends $dara.Model {
  policy?: UpdateRegistrationPolicyResponseBodyPolicy;
  /**
   * @example
   * 27064ECA-0936-59F3-8A98-EC821E5BD08F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: UpdateRegistrationPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

