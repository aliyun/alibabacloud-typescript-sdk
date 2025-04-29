// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIpControlRequest extends $dara.Model {
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
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ipControlId: 'IpControlId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlId: 'string',
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

