// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceIpAddressResponseBodyRCInstanceListIpAddressConfig } from "./DescribeRcinstanceIpAddressResponseBodyRcinstanceListIpAddressConfig";


export class DescribeRCInstanceIpAddressResponseBodyRCInstanceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the RDS Custom instance.
   * 
   * @example
   * rc-kti8hw44yy0x53******
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rc-kti8hw44yy0x53******
   */
  instanceName?: string;
  /**
   * @remarks
   * The DDoS mitigation status of the instance. Valid values:
   * 
   * *   **normal**
   * *   **abnormal**
   * 
   * @example
   * normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The type of the asset. The value is fixed to **ecs**.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * An array that consists of the details of the asset.
   */
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

