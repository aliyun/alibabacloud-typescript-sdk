// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicesForPrivateAccessTagResponseBodyTagsPolicesCustomUserAttributes extends $dara.Model {
  /**
   * @remarks
   * The identity provider ID of the user group. This value exists if the custom user group type is **department**.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * The relationship of the user group. Values:
   * 
   * - **Equal**: Equal.
   * 
   * - **Unequal**: Unequal.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * The type of user group. Values:
   * 
   * - **username**: Username.
   * 
   * - **department**: Department.
   * 
   * - **email**: Mailbox.
   * 
   * - **telephone**: Mobile phone.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * The value of the user group attribute.
   * 
   * - If the user group type is **username**, this indicates the username\\"s value. The length is 1 to 128 characters. It supports Chinese characters, uppercase and lowercase English letters, and can include numbers, periods (.), underscores (_), and hyphens (-).
   * 
   * - If the user group type is **department**, this indicates the department\\"s value. For example: OU=Department 1,OU=SASE DingTalk.
   * 
   * - If the user group type is **email**, this indicates the mailbox\\"s value. For example: username\\@example.com.
   * 
   * - If the user group type is **telephone**, this indicates the mobile phone\\"s value. For example: 13900001234.
   * 
   * @example
   * OU=部门1,OU=SASE钉钉
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessTagResponseBodyTagsPolices extends $dara.Model {
  /**
   * @remarks
   * The application type of the private network access policy. Values:
   * 
   * - **Application**: Application.
   * 
   * - **Tag**: Tag.
   * 
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * Creation time of the private network access policy.
   * 
   * @example
   * 2023-02-21 14:10:16
   */
  createTime?: string;
  /**
   * @remarks
   * A collection of custom user group attributes. Multiple custom user group attributes have an OR relationship and take effect as a union.
   */
  customUserAttributes?: ListPolicesForPrivateAccessTagResponseBodyTagsPolicesCustomUserAttributes[];
  /**
   * @remarks
   * Description of the private network access policy.
   * 
   * @example
   * 这是一条内网访问策略
   */
  description?: string;
  /**
   * @remarks
   * Private network access policy name.
   * 
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * The action that the private access policy performs. Valid values:
   * 
   * - **Block**: Blocks access.
   * 
   * - **Allow**: Allows access.
   * 
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @remarks
   * Private network access policy ID.
   * 
   * @example
   * pa-policy-867ef4007c8a****
   */
  policyId?: string;
  /**
   * @remarks
   * The private network access policy priority. The number 1 indicates the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The status of the private network access policy. Values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The user group type of the private network access policy. Values:
   * 
   * - **Normal**: Normal user group.
   * 
   * - **Custom**: Custom user group.
   * 
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

export class ListPolicesForPrivateAccessTagResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * Collection of private network access policies.
   */
  polices?: ListPolicesForPrivateAccessTagResponseBodyTagsPolices[];
  /**
   * @remarks
   * Private network access tag ID.
   * 
   * @example
   * tag-b927baf3e592****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessTagResponseBodyTagsPolices },
      tagId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
   */
  requestId?: string;
  /**
   * @remarks
   * List of private network access tags.
   */
  tags?: ListPolicesForPrivateAccessTagResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessTagResponseBodyTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

