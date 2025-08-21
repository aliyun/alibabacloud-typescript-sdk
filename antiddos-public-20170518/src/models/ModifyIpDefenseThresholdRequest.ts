// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpDefenseThresholdRequest extends $dara.Model {
  /**
   * @remarks
   * The traffic scrubbing threshold. Unit: Mbit/s. The traffic scrubbing threshold cannot exceed the peak inbound or outbound Internet traffic, whichever is larger, of the asset. When you modify Bps, Pps is required. Otherwise, Bps does not take effect.
   * 
   * You can use the monitoring tool that is provided by the asset to query the Internet traffic of the asset:
   * 
   * *   If the asset is an ECS instance, see [View instance monitoring information](https://help.aliyun.com/document_detail/25482.html).
   * *   If the asset is an SLB instance, see [View monitoring data](https://help.aliyun.com/document_detail/85982.html).
   * *   If the asset is an EIP, see [View monitoring data](https://help.aliyun.com/document_detail/85354.html).
   * 
   * @example
   * 100
   */
  bps?: number;
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
   * The ID of the asset.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/354191.html) operation to query the IDs of ECS instances, SLB instances, and EIPs within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * i-uf6idy3c57psf7vu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **ecs**: an Elastic Compute Service (ECS) instance.
   * *   **slb**: a Server Load Balancer (SLB) instance.
   * *   **eip**: an elastic IP address (EIP).
   * *   **ipv6**: an IPv6 gateway.
   * *   **swas**: a simple application server.
   * *   **waf**: a Web Application Firewall (WAF) instance of the Exclusive edition.
   * *   **ga_basic**: a Global Accelerator (GA) instance.
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
  /**
   * @remarks
   * Specifies whether to automatically adjust the scrubbing threshold based on the traffic load on the asset. Valid values:
   * 
   * *   **true**: automatically adjusts the scrubbing threshold. You do not need to configure the **Bps** and **Pps** parameters.
   * *   **false**: The scrubbing threshold is not automatically adjusted. You must configure the **Bps** and **Pps** parameters. This is the default value.
   * 
   * @example
   * false
   */
  isAuto?: boolean;
  /**
   * @remarks
   * The packet scrubbing threshold. Unit: packets per second (PPS). When you modify Pps, Bps is required. Otherwise, Pps does not take effect.
   * 
   * The packet scrubbing threshold cannot exceed the peak number of inbound or outbound packets, whichever is larger, of the asset. You can use the monitoring tool that is provided by the asset to query the number of packets of the asset:
   * 
   * *   If the asset is an ECS instance, see [View instance monitoring information](https://help.aliyun.com/document_detail/25482.html).
   * *   If the asset is an SLB instance, see [View monitoring data](https://help.aliyun.com/document_detail/85982.html).
   * *   If the asset is an EIP, see [View monitoring data](https://help.aliyun.com/document_detail/85354.html).
   * 
   * @example
   * 70000
   */
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
      isAuto: 'IsAuto',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      ddosRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetIp: 'string',
      isAuto: 'boolean',
      pps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

