// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPolicesForPrivateAccessTagResponseBodyTagsPolicesCustomUserAttributes } from "./ListPolicesForPrivateAccessTagResponseBodyTagsPolicesCustomUserAttributes";


export class ListPolicesForPrivateAccessTagResponseBodyTagsPolices extends $dara.Model {
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * 内网访问策略创建时间。
   * 
   * @example
   * 2023-02-21 14:10:16
   */
  createTime?: string;
  /**
   * @remarks
   * 自定义用户组属性集合。多个自定义用户组属性之间是或的关系，按照合集生效。
   */
  customUserAttributes?: ListPolicesForPrivateAccessTagResponseBodyTagsPolicesCustomUserAttributes[];
  description?: string;
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @example
   * pa-policy-867ef4007c8a****
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
  /**
   * @example
   * Normal
   */
  userGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      name: 'Name',
      policyAction: 'PolicyAction',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupType: 'UserGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      createTime: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessTagResponseBodyTagsPolicesCustomUserAttributes },
      description: 'string',
      name: 'string',
      policyAction: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customUserAttributes)) {
      $dara.Model.validateArray(this.customUserAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

