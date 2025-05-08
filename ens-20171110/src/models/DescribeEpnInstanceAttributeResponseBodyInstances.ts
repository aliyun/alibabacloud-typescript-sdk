// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEpnInstanceAttributeResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-chengdu-telecom-4
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * epn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * epn-test
   */
  instanceName?: string;
  /**
   * @remarks
   * The ISP. Valid values:
   * 
   * *   cmcc: China Mobile
   * *   unicom: China Unicom
   * *   telecom: China Telecom
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 192.168.1.12
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 20.3.XX.XX
   */
  publicIpAddress?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   Running
   * *   Stopped
   * *   Expired
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isp: 'Isp',
      privateIpAddress: 'PrivateIpAddress',
      publicIpAddress: 'PublicIpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isp: 'string',
      privateIpAddress: 'string',
      publicIpAddress: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

