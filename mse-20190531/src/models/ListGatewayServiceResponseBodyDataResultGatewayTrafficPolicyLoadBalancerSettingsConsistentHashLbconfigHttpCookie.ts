// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie extends $dara.Model {
  /**
   * @remarks
   * The name of the cookie.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The path of the cookie.
   * 
   * @example
   * /path
   */
  path?: string;
  /**
   * @remarks
   * The lifecycle of the cookie.
   * 
   * @example
   * 360
   */
  ttl?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
      ttl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

