// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateIpControlRequestIpControlPolicys } from "./CreateIpControlRequestIpControlPolicys";


export class CreateIpControlRequest extends $dara.Model {
  /**
   * @remarks
   * The description. The description can be up to 200 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the ACL. The name must be 4 to 50 characters in length, and can contain letters, digits, and underscores (_). The name cannot start with an underscore (_).``
   * 
   * This parameter is required.
   * 
   * @example
   * controlNameTest
   */
  ipControlName?: string;
  /**
   * @remarks
   * The information about the policies. The information is an array of ipcontrolpolicys data.
   */
  ipControlPolicys?: CreateIpControlRequestIpControlPolicys[];
  /**
   * @remarks
   * The type of the ACL. Valid values:
   * 
   * *   **ALLOW**: an IP address whitelist
   * *   **REFUSE**: an IP address blacklist
   * 
   * This parameter is required.
   * 
   * @example
   * ALLOW
   */
  ipControlType?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ipControlName: 'IpControlName',
      ipControlPolicys: 'IpControlPolicys',
      ipControlType: 'IpControlType',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ipControlName: 'string',
      ipControlPolicys: { 'type': 'array', 'itemType': CreateIpControlRequestIpControlPolicys },
      ipControlType: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipControlPolicys)) {
      $dara.Model.validateArray(this.ipControlPolicys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

