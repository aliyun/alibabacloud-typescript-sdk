// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosThresholdRequest extends $dara.Model {
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
   * The ID of asset N to query.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
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
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
      ddosType: 'DdosType',
      instanceIds: 'InstanceIds',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosRegionId: 'string',
      ddosType: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

