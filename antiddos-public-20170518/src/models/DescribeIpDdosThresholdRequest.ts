// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpDdosThresholdRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/353250.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The type of the threshold. Valid values:
   * 
   * *   **defense**: traffic scrubbing threshold
   * *   **blackhole**: DDoS mitigation threshold
   * 
   * This parameter is required.
   * 
   * @example
   * defense
   */
  ddosType?: string;
  /**
   * @remarks
   * The ID of the asset.
   * 
   * > You can call the [DescribeInstanceIpAddress](https://help.aliyun.com/document_detail/429562.html) operation to query the IDs of ECS instances, SLB instances, and EIPs within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1i88rqjza51s****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the asset that is assigned a public IP address. Valid values:
   * 
   * *   **ecs**: ECS instances.
   * *   **slb**: SLB instances.
   * *   **eip**: EIPs.
   * *   **ipv6**: IPv6 gateways.
   * *   **swas**: simple application servers.
   * *   **waf**: Web Application Firewall (WAF) instances of the Exclusive edition.
   * *   **ga_basic**: Global Accelerator (GA) instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.XX.XX
   */
  internetIp?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
      ddosType: 'DdosType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosRegionId: 'string',
      ddosType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

