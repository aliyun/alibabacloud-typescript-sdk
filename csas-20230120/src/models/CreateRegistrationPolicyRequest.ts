// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRegistrationPolicyRequestCompanyLimitCount } from "./CreateRegistrationPolicyRequestCompanyLimitCount";
import { CreateRegistrationPolicyRequestPersonalLimitCount } from "./CreateRegistrationPolicyRequestPersonalLimitCount";


export class CreateRegistrationPolicyRequest extends $dara.Model {
  companyLimitCount?: CreateRegistrationPolicyRequestCompanyLimitCount;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LimitAll
   */
  companyLimitType?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registration_policy_name
   */
  name?: string;
  personalLimitCount?: CreateRegistrationPolicyRequestPersonalLimitCount;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LimitDiff
   */
  personalLimitType?: string;
  /**
   * @example
   * 99
   */
  priority?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
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
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLimitCount: CreateRegistrationPolicyRequestCompanyLimitCount,
      companyLimitType: 'string',
      description: 'string',
      matchMode: 'string',
      name: 'string',
      personalLimitCount: CreateRegistrationPolicyRequestPersonalLimitCount,
      personalLimitType: 'string',
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

