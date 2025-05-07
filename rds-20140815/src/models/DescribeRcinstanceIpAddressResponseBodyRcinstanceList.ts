// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig } from "./DescribeRcinstanceIpAddressResponseBodyRcinstanceListIpAddressConfig";


export class DescribeRCInstanceIpAddressResponseBodyRCInstanceList extends $dara.Model {
  /**
   * @example
   * rc-kti8hw44yy0x53******
   */
  instanceId?: string;
  /**
   * @example
   * rc-kti8hw44yy0x53******
   */
  instanceName?: string;
  /**
   * @example
   * normal
   */
  instanceStatus?: string;
  /**
   * @example
   * ecs
   */
  instanceType?: string;
  ipAddressConfig?: DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      ipAddressConfig: 'IpAddressConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      ipAddressConfig: { 'type': 'array', 'itemType': DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig },
    };
  }

  validate() {
    if(Array.isArray(this.ipAddressConfig)) {
      $dara.Model.validateArray(this.ipAddressConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

