// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * The DDoS mitigation status of the asset. Valid values:
   * 
   * *   **defense**: queries assets for which traffic scrubbing is performed.
   * *   **blackhole**: queries assets for which blackhole filtering is triggered.
   * 
   * @example
   * normal
   */
  ddosStatus?: string;
  /**
   * @remarks
   * The ID of the instance to which the asset is added.
   * 
   * @example
   * i-bp1cb6x80tfgocid****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  instanceIp?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * launch-advisor-2021****
   */
  instanceName?: string;
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
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ddosRegionId: 'DdosRegionId',
      ddosStatus: 'DdosStatus',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ddosRegionId: 'string',
      ddosStatus: 'string',
      instanceId: 'string',
      instanceIp: 'string',
      instanceName: 'string',
      instanceType: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

