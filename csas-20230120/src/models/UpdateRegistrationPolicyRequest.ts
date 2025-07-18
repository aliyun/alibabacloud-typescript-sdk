// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRegistrationPolicyRequestCompanyLimitCount extends $dara.Model {
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

export class UpdateRegistrationPolicyRequestPersonalLimitCount extends $dara.Model {
  /**
   * @example
   * 0
   */
  all?: number;
  /**
   * @example
   * 1
   */
  mobile?: number;
  /**
   * @example
   * 2
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

export class UpdateRegistrationPolicyRequest extends $dara.Model {
  companyLimitCount?: UpdateRegistrationPolicyRequestCompanyLimitCount;
  /**
   * @example
   * LimitAll
   */
  companyLimitType?: string;
  description?: string;
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
  personalLimitCount?: UpdateRegistrationPolicyRequestPersonalLimitCount;
  /**
   * @example
   * LimitDiff
   */
  personalLimitType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * reg-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @example
   * 0
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
      companyLimitCount: 'CompanyLimitCount',
      companyLimitType: 'CompanyLimitType',
      description: 'Description',
      matchMode: 'MatchMode',
      name: 'Name',
      personalLimitCount: 'PersonalLimitCount',
      personalLimitType: 'PersonalLimitType',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLimitCount: UpdateRegistrationPolicyRequestCompanyLimitCount,
      companyLimitType: 'string',
      description: 'string',
      matchMode: 'string',
      name: 'string',
      personalLimitCount: UpdateRegistrationPolicyRequestPersonalLimitCount,
      personalLimitType: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.companyLimitCount && typeof (this.companyLimitCount as any).validate === 'function') {
      (this.companyLimitCount as any).validate();
    }
    if(this.personalLimitCount && typeof (this.personalLimitCount as any).validate === 'function') {
      (this.personalLimitCount as any).validate();
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

