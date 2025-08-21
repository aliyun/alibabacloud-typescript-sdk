// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEpnInstanceAttributeResponseBodyConfVersions extends $dara.Model {
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 2017-10-11
   */
  confVersion?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-chengdu-telecom
   */
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      confVersion: 'ConfVersion',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confVersion: 'string',
      ensRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeEpnInstanceAttributeResponseBodyVSwitches extends $dara.Model {
  /**
   * @remarks
   * The CIDR block.
   * 
   * @example
   * 10.0.0.1/24
   */
  cidrBlock?: string;
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
   * The ID of the vSwitch.
   * 
   * @example
   * vs-xxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * vs-test
   */
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      ensRegionId: 'EnsRegionId',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      ensRegionId: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the EPN configurations.
   */
  confVersions?: DescribeEpnInstanceAttributeResponseBodyConfVersions[];
  /**
   * @remarks
   * The ID of the EPN instance.
   * 
   * @example
   * epn-xxxx
   */
  EPNInstanceId?: string;
  /**
   * @remarks
   * The name of the EPN instance.
   * 
   * @example
   * epn-test
   */
  EPNInstanceName?: string;
  /**
   * @remarks
   * The information about the instance.
   */
  instances?: DescribeEpnInstanceAttributeResponseBodyInstances[];
  /**
   * @remarks
   * The networking mode. Valid values:
   * 
   * *   SpeedUp: intelligent acceleration network (Internet)
   * *   Connection: internal network
   * *   SpeedUpAndConnection: intelligent acceleration network and internal network
   * 
   * @example
   * SpeedUp
   */
  networkingModel?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the vSwitch.
   */
  vSwitches?: DescribeEpnInstanceAttributeResponseBodyVSwitches[];
  static names(): { [key: string]: string } {
    return {
      confVersions: 'ConfVersions',
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      instances: 'Instances',
      networkingModel: 'NetworkingModel',
      requestId: 'RequestId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confVersions: { 'type': 'array', 'itemType': DescribeEpnInstanceAttributeResponseBodyConfVersions },
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      instances: { 'type': 'array', 'itemType': DescribeEpnInstanceAttributeResponseBodyInstances },
      networkingModel: 'string',
      requestId: 'string',
      vSwitches: { 'type': 'array', 'itemType': DescribeEpnInstanceAttributeResponseBodyVSwitches },
    };
  }

  validate() {
    if(Array.isArray(this.confVersions)) {
      $dara.Model.validateArray(this.confVersions);
    }
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

