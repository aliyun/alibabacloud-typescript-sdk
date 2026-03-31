// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters. For valid values, see [MaxCompute permissions](https://help.aliyun.com/document_detail/27935.html).
   * 
   * @example
   * {"name": "role_name","type": "resource/adminn","policy": "", // The document of the policy. This parameter is not required if an access-control list (ACL) is used. "acl": { // This parameter is not required if a policy is used. "table": [{"name": "", "actions":["","",]}, {"name": "", "actions":[]}],"resource":[{"name": "", "actions":["","",]}, {"name": "", "actions":[]}],"function":[{"name": "", "actions":["","",]}, {"name": "", "actions":[]}],"package":[{"name": "", "actions":["","",]}, {"name": "", "actions":[]}],"project":[{"name": "", "actions":[]}], // Only the current project is displayed in the console. "instance":[{"name": "", "actions":[]}] // The parameter name must be set to an asterisk (\\*) in the console. }}// An asterisk (\\*) can be specified for name.
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

