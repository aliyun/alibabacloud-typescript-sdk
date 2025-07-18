// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicesForPrivateAccessTagResponseBodyTagsPolicesCustomUserAttributes extends $dara.Model {
  /**
   * @remarks
   * 用户组的身份源ID。当自定义用户组类型为**department**时，存在该值。
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * 用户组的关系。取值：
   * - **Equal**：等于。
   * - **Unequal**：不等于。
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * 用户组的类型。取值：
   * - **username**：用户名。
   * - **department**：部门。
   * - **email**：邮箱。
   * - **telephone**：手机。
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * 用户组属性的值。
   * - 当用户组类型为**username**时，表示用户名的值。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
   * - 当用户组类型为**department**时，表示部门的值。如：OU=部门1,OU=SASE钉钉。
   * - 当用户组类型为**email**时，表示邮箱的值。如：username@example.com。
   * - 当用户组类型为**telephone**时，表示手机的值。如：13900001234。
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

export class ListPolicesForPrivateAccessTagResponseBodyTags extends $dara.Model {
  polices?: ListPolicesForPrivateAccessTagResponseBodyTagsPolices[];
  /**
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
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
   */
  requestId?: string;
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

