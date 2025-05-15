// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyInstanceRoleInfos extends $dara.Model {
  /**
   * @remarks
   * The content of the policy.
   * 
   * @example
   * {\\n  \\"Version\\": \\"1\\",\\n  \\"Statement\\": [\\n    {\\n      \\"Effect\\": \\"Allow\\",\\n      \\"Action\\": \\"*\\",\\n      \\"Principal\\": \\"*\\",\\n      \\"Resource\\": \\"*\\"\\n    }\\n  ]\\n}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The information of the RAM entity.
   */
  principals?: string[];
  /**
   * @remarks
   * The ram role name.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template one.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      policyDocument: 'PolicyDocument',
      principals: 'Principals',
      roleName: 'RoleName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDocument: 'string',
      principals: { 'type': 'array', 'itemType': 'string' },
      roleName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.principals)) {
      $dara.Model.validateArray(this.principals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

