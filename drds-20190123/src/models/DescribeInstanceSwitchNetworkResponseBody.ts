// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfosVswitchInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the zone in which the instance is deployed.
   * 
   * @example
   * cn-hangzhou-a
   */
  azoneId?: string;
  /**
   * @remarks
   * Indicates whether you can change the network type of the instance.
   * 
   * @example
   * true
   */
  drdsSupported?: boolean;
  /**
   * @remarks
   * Indicates the ID of the VPC.
   * 
   * @example
   * vpc_id
   */
  vpcId?: string;
  /**
   * @remarks
   * Indicates the ID of the vSwitch.
   * 
   * @example
   * vswitch_id
   */
  vswitchId?: string;
  /**
   * @remarks
   * Indicates the name of the vSwitch.
   * 
   * @example
   * vswitch_name
   */
  vswitchName?: string;
  static names(): { [key: string]: string } {
    return {
      azoneId: 'AzoneId',
      drdsSupported: 'DrdsSupported',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      vswitchName: 'VswitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azoneId: 'string',
      drdsSupported: 'boolean',
      vpcId: 'string',
      vswitchId: 'string',
      vswitchName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfos extends $dara.Model {
  vswitchInfo?: DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfosVswitchInfo[];
  static names(): { [key: string]: string } {
    return {
      vswitchInfo: 'VswitchInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitchInfo: { 'type': 'array', 'itemType': DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfosVswitchInfo },
    };
  }

  validate() {
    if(Array.isArray(this.vswitchInfo)) {
      $dara.Model.validateArray(this.vswitchInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the region in which the instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates the ID of the VPC.
   * 
   * @example
   * vpc_id
   */
  vpcId?: string;
  /**
   * @remarks
   * Indicates the name of the VPC.
   * 
   * @example
   * vpc_name
   */
  vpcName?: string;
  /**
   * @remarks
   * Indicates information about the vSwitch to which the instance is connected.
   */
  vswitchInfos?: DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfos;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vswitchInfos: 'VswitchInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vswitchInfos: DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfos,
    };
  }

  validate() {
    if(this.vswitchInfos && typeof (this.vswitchInfos as any).validate === 'function') {
      (this.vswitchInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponseBodyVpcInfos extends $dara.Model {
  vpcInfo?: DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfo[];
  static names(): { [key: string]: string } {
    return {
      vpcInfo: 'VpcInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcInfo: { 'type': 'array', 'itemType': DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfo },
    };
  }

  validate() {
    if(Array.isArray(this.vpcInfo)) {
      $dara.Model.validateArray(this.vpcInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 03E12FE3-1638-483E-A9B6-1A9120SER56T
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates the information about the virtual private cloud (VPC) in which the instance is deployed.
   */
  vpcInfos?: DescribeInstanceSwitchNetworkResponseBodyVpcInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      vpcInfos: 'VpcInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      vpcInfos: DescribeInstanceSwitchNetworkResponseBodyVpcInfos,
    };
  }

  validate() {
    if(this.vpcInfos && typeof (this.vpcInfos as any).validate === 'function') {
      (this.vpcInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

