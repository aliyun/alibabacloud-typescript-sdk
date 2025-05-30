// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRolesResponseBodyDataRolesAcl } from "./ListRolesResponseBodyDataRolesAcl";


export class ListRolesResponseBodyDataRoles extends $dara.Model {
  /**
   * @remarks
   * The ACL-based permissions that are granted to the role.
   */
  acl?: ListRolesResponseBodyDataRolesAcl;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * roleA
   */
  name?: string;
  /**
   * @remarks
   * The policy that is attached to the role.
   * 
   * @example
   * {
   *       "Statement": [
   *             {
   *                   "Action": [
   *                         "odps:*"
   *                   ],
   *                   "Effect": "Allow",
   *                   "Resource": [
   *                         "acs:odps:*:projects/{projectname}/authorization/packages"
   *                   ]
   *             }
   *       ],
   *       "Version": "1"
   * }
   */
  policy?: string;
  /**
   * @remarks
   * The type of the role.
   * 
   * @example
   * admin
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      name: 'name',
      policy: 'policy',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: ListRolesResponseBodyDataRolesAcl,
      name: 'string',
      policy: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.acl && typeof (this.acl as any).validate === 'function') {
      (this.acl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

