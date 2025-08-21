// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosEventListRequest extends $dara.Model {
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
   * The region ID of the asset to query.
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
   * The ID of asset to query.
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
   * The type of the asset to query. Valid values:
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
   * The IP address of the asset to query.
   * 
   * @example
   * 121.199.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  queryDays?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
      pageSize: 'PageSize',
      queryDays: 'QueryDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ddosRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetIp: 'string',
      pageSize: 'number',
      queryDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

