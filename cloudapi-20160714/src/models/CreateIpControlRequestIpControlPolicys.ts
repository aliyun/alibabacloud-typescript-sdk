// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpControlRequestIpControlPolicys extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that is restricted by the policy. You can configure the AppId parameter only when the value of the IpControlType parameter is ALLOW.
   * 
   * *   You can add only one application ID at a time.
   * *   If this parameter is empty, no applications are restricted.
   * *   If this parameter is not empty, not only IP addresses but also applications are restricted.
   * *   If this parameter is not empty and no security authentication method is specified for the API, all API calls are restricted.
   * *   If the value of the IpControlType parameter is REFUSE and the AppId parameter is not empty, API Gateway automatically ignores the AppId parameter and restricts only the IP addresses.
   * *   Valid values of N in IpControlPolicys.N: `[1,100]`.
   * 
   * @example
   * 11111
   */
  appId?: string;
  /**
   * @remarks
   * The IP address or CIDR block involved in a policy.
   * 
   * *   If you want to specify a policy when you create an ACL, this parameter is required.
   * *   The IP address or CIDR block that is defined in each policy. Separate multiple IP addresses or CIDR blocks with semicolons (;). You can add a maximum of 10 IP addresses or CIDR blocks.
   * *   Valid values of N in IpControlPolicys.N: `[1,100]`.
   * 
   * @example
   * 114.1.1.0/24
   */
  cidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cidrIp: 'CidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

