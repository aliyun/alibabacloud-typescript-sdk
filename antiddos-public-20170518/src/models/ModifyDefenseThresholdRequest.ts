// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDefenseThresholdRequest extends $dara.Model {
  /**
   * @remarks
   * The scrubbing threshold for traffic in Mbps. This value cannot exceed the peak public network traffic of the instance. If you specify Bps, you must also specify Pps. Otherwise, the change does not take effect.
   * 
   * Use the monitoring tools of your instance to query its public network traffic:
   * 
   * - For an ECS instance, see [View instance monitoring information](https://help.aliyun.com/document_detail/25482.html).
   * 
   * - For an SLB instance, see [View monitoring data](https://help.aliyun.com/document_detail/85982.html).
   * 
   * <props="china">
   * 
   * - For an EIP instance, see [View monitoring data](https://help.aliyun.com/document_detail/85354.html).
   * 
   * @example
   * 100
   */
  bps?: number;
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the asset that is assigned a public IP address.
   * 
   * > Call [DescribeRegions](https://help.aliyun.com/document_detail/353250.html) to query all region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The instance ID of the asset that is assigned a public IP address.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/354191.html) to query the IDs of the ECS, SLB, and EIP instances that belong to your Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * i-uf6idy3c57psf7vu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type of the asset that is assigned a public IP address. Valid values:
   * 
   * - **ecs**: Elastic Compute Service (ECS) instance.
   * 
   * - **slb**: Server Load Balancer (SLB) instance.
   * 
   * - **eip**: Elastic IP Address (EIP) instance.
   * 
   * - **ipv6**: IPv6 Gateway instance.
   * 
   * - **swas**: simple application server instance.
   * 
   * - **waf**: dedicated Web Application Firewall (WAF) instance.
   * 
   * - **ga_basic**: basic Global Accelerator (GA) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The public IP address of the asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * Specifies whether to automatically adjust the scrubbing threshold based on the traffic loads of the instance. Valid values:
   * 
   * - **true**: The scrubbing threshold is automatically adjusted. You do not need to set the **Bps** and **Pps** parameters.
   * 
   * - **false**: The scrubbing threshold is not automatically adjusted. You must set the **Bps** and **Pps** parameters.
   * 
   * Default value: false
   * 
   * @example
   * false
   */
  isAuto?: boolean;
  /**
   * @remarks
   * The scrubbing threshold for packets per second (pps). This value cannot exceed the peak packet traffic of the instance. If you specify Pps, you must also specify Bps. Otherwise, the change does not take effect.
   * 
   * Use the monitoring tools of your instance to query its packet traffic:
   * 
   * - For an ECS instance, see [View instance monitoring information](https://help.aliyun.com/document_detail/25482.html).
   * 
   * - For an SLB instance, see [View monitoring data](https://help.aliyun.com/document_detail/85982.html).
   * 
   * <props="china">
   * 
   * - For an EIP instance, see [View monitoring data](https://help.aliyun.com/document_detail/85354.html).
   * 
   * @example
   * 70000
   */
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      clientToken: 'ClientToken',
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
      clientToken: 'string',
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

