// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackIpListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance to query.
   * 
   * > You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The protected IP address to query.
   * 
   * @example
   * 47.98.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The UID of the member account.
   * 
   * @example
   * 170858869679****
   */
  memberUid?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of protected IP addresses to return on each page. Maximum value: 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The cloud asset type of the protected IP address to query. Valid values:
   * 
   * - **ECS**: ECS instance.
   * - **SLB**: Classic Load Balancer (CLB) instance.
   * - **EIP**: elastic IP address (EIP). Because Internet-facing Application Load Balancer (ALB) instances use EIPs, you must query the public IP addresses of ALB instances by using EIPs.
   * - **WAF**: Web Application Firewall (WAF) instance.
   * 
   * @example
   * ECS
   */
  productName?: string;
  /**
   * @remarks
   * The region ID of the Anti-DDoS Origin instance.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query all region IDs supported by Anti-DDoS Origin.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the default resource group is used.
   * 
   * @example
   * rg-acfm2pz25js****
   * 
   * @deprecated
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ip: 'Ip',
      memberUid: 'MemberUid',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      productName: 'ProductName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ip: 'string',
      memberUid: 'string',
      pageNo: 'number',
      pageSize: 'number',
      productName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

