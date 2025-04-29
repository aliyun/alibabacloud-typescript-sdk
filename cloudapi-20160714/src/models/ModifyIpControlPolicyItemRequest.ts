// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpControlPolicyItemRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that is restricted by the policy. You can configure the AppId parameter only when the value of the IpControlType parameter is ALLOW.
   * 
   * *   You can add only one application ID at a time.
   * *   If this parameter is empty, no applications are restricted.
   * *   If this parameter is not empty, not only IP addresses but also applications are restricted.
   * *   If this parameter is not empty and no security authentication method is specified for the API, all API calls are restricted.
   * *   If the value of the IpControlType parameter is REFUSE and the AppId parameter is not empty, API Gateway automatically ignores the AppId parameter and restricts only the IP addresses.
   * 
   * @example
   * 123
   */
  appId?: string;
  /**
   * @remarks
   * The IP address or CIDR block that is defined in a policy. Separate multiple IP addresses or CIDR blocks with semicolons (;). You can add a maximum of 10 IP addresses or CIDR blocks.
   * 
   * This parameter is required.
   * 
   * @example
   * 113.125.1.101;101.11.1.1
   */
  cidrIp?: string;
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
   * The ID of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * P151617000829241
   */
  policyItemId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cidrIp: 'CidrIp',
      ipControlId: 'IpControlId',
      policyItemId: 'PolicyItemId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cidrIp: 'string',
      ipControlId: 'string',
      policyItemId: 'string',
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

