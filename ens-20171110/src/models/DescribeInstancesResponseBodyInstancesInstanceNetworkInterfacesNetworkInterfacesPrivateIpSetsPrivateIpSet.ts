// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSetsPrivateIpSet extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the IP address is the primary private IP address. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  primary?: boolean;
  /**
   * @remarks
   * The private IP address.
   * 
   * >  This parameter is available only if ScheduleAreaLevel is set to Region and cannot be configured if ScheduleAreaLevel is set to other values. Otherwise, an error occurs. If you specify a private IP address, the number of instances must be 1. The private IP address takes effect only when the private IP address and the vSwitch ID are not empty.
   * 
   * @example
   * 10.75.66.***
   */
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      primary: 'Primary',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primary: 'boolean',
      privateIpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

