// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScalingConfigurationRequestNetworkInterfaces extends $dara.Model {
  /**
   * @example
   * Primary
   */
  instanceType?: string;
  /**
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @example
   * HighPerformance
   */
  networkInterfaceTrafficMode?: string;
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      ipv6AddressCount: 'Ipv6AddressCount',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      ipv6AddressCount: 'number',
      networkInterfaceTrafficMode: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

