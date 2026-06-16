// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosEventListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return for a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * The ID of the instance for the asset that is assigned a public IP address.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/354191.html) to query the IDs of the ECS, SLB, and EIP instances that belong to your Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp10bclrt56fblts****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type of the asset that is assigned a public IP address. Valid values:
   * 
   * - **ecs**: an Elastic Compute Service (ECS) instance.
   * 
   * - **slb**: a Server Load Balancer (SLB) instance.
   * 
   * - **eip**: an elastic IP address (EIP) instance.
   * 
   * - **ipv6**: an IPv6 Gateway instance.
   * 
   * - **swas**: a simple application server instance.
   * 
   * - **waf**: a dedicated Web Application Firewall (WAF) instance.
   * 
   * - **ga_basic**: a Global Accelerator instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The IP address of the asset that is assigned a public IP address.
   * 
   * @example
   * 121.199.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The number of attack events to return on each page for a paged query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The number of days to query backwards from the current time. Default value: 7.
   * 
   * @example
   * 7
   */
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

