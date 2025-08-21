// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCapRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the DDoS attack event. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * > You can call the [DescribeDdosEventList](https://help.aliyun.com/document_detail/354236.html) operation to query the start time of each DDoS attack event that occurred on an asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 1637812279000
   */
  begTime?: number;
  /**
   * @remarks
   * The region ID of the asset that is under DDoS attacks. The asset is assigned a public IP address.
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
   * The ID of the asset that is under DDoS attacks.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/354191.html) operation to query the IDs of ECS instances, SLB instances, and EIPs within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp10bclrt56fblts****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the asset that is under DDoS attacks. The asset is assigned a public IP address. Valid values:
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
   * The public IP address of the asset that is under DDoS attacks.
   * 
   * @example
   * 121.199.XX.XX
   */
  internetIp?: string;
  static names(): { [key: string]: string } {
    return {
      begTime: 'BegTime',
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begTime: 'number',
      ddosRegionId: 'string',
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

