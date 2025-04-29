// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpControlRequest extends $dara.Model {
  /**
   * @remarks
   * The description. The description can be up to 200 characters in length.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ACL. The ID is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 7ea91319a34d48a09b5c9c871d9768b1
   */
  ipControlId?: string;
  /**
   * @remarks
   * The name of the ACL. The name must be 4 to 50 characters in length, and can contain letters, digits, and underscores (_). The name cannot start with an underscore (_).
   * 
   * @example
   * testControl11
   */
  ipControlName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ipControlId: 'IpControlId',
      ipControlName: 'IpControlName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ipControlId: 'string',
      ipControlName: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

