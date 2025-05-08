// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie extends $dara.Model {
  name?: string;
  path?: string;
  /**
   * @example
   * 0s
   */
  TTL?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
      TTL: 'TTL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
      TTL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

