// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be at most 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address that the CLB instance uses to provide services.
   * 
   * @example
   * 192.168.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The IP version that is used by the CLB instance. Valid values: **ipv4** and **ipv6**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The network type of the CLB instance. Valid values:
   * 
   * *   **internet:** After an Internet-facing CLB instance is created, the system assigns a public IP address to the CLB instance. Then, the CLB instance can forward requests over the Internet.
   * *   **intranet:** After an internal-facing CLB instance is created, the system assigns a private IP address to the CLB instance. Then, the CLB instance can forward requests only over internal networks.
   * 
   * @example
   * intranet
   */
  addressType?: string;
  /**
   * @remarks
   * The metering method of Internet data transfer. Valid values:
   * 
   * *   **paybybandwidth:** pay-by-bandwidth.
   * *   **paybytraffic:** pay-by-data-transfer.
   * 
   * @example
   * paybytraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * You can specify up to 10 IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * lb-bp1b6c719dfa****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the CLB instance.
   * 
   * The name must be 1 to 80 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * You can specify up to 10 names. Separate multiple names with commas (,).
   * 
   * @example
   * test
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The status of the CLB instance. Valid values:
   * 
   * *   **inactive:** The CLB instance is disabled. CLB instances in the inactive state do not forward traffic.
   * *   **active:** The CLB instance runs as expected. By default, newly created CLB instances are in the **active** state.
   * *   **locked:** The CLB instance is locked. After a CLB instance expires, it is locked for seven days. A locked CLB instance cannot forward traffic and you cannot perform operations on the locked CLB instance. However, other settings such as the IP address are retained.
   * 
   * @example
   * active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The ID of the primary zone to which the CLB instance belongs.
   * 
   * @example
   * cn-hangzhou-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The network type of the internal-facing CLB instance. Valid values:
   * 
   * *   **vpc**: VPC
   * *   **Classic**: classic network
   * 
   * @example
   * vpc
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: **1** to **100**.
   * 
   * >  If you specify the **PageSize** parameter, you must also specify the **PageNumber** parameter.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method of the CLB instance. Valid values:
   * 
   * *   Set the value to **PayOnDemand**.
   * 
   * @example
   * PayOnDemand
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2401682.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the backend server that is added to the CLB instance.
   * 
   * @example
   * vm-server-23****
   */
  serverId?: string;
  /**
   * @remarks
   * The private IP address of the backend server that is added to the CLB instance.
   * 
   * You can specify multiple IP addresses. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 10.XX.XX.102
   */
  serverIntranetAddress?: string;
  /**
   * @remarks
   * The ID of the secondary zone to which the CLB instance belongs.
   * 
   * CLB instances on Alibaba Finance Cloud do not support cross-zone deployment.
   * 
   * @example
   * cn-hangzhou-d
   */
  slaveZoneId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeLoadBalancersRequestTag[];
  /**
   * @remarks
   * The tags that are added to the CLB instance. The tags must be key-value pairs that are contained in a JSON dictionary.
   * 
   * You can specify up to 10 tags in each call.
   * 
   * @example
   * [{"tagKey":"Key1","tagValue":"Value1"}]
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the CLB instance belongs.
   * 
   * @example
   * vsw-bp12mw1f8k3****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the CLB instance belongs.
   * 
   * @example
   * vpc-bp1aevy8sof****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      internetChargeType: 'InternetChargeType',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      masterZoneId: 'MasterZoneId',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverId: 'ServerId',
      serverIntranetAddress: 'ServerIntranetAddress',
      slaveZoneId: 'SlaveZoneId',
      tag: 'Tag',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      addressType: 'string',
      internetChargeType: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      masterZoneId: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      payType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverId: 'string',
      serverIntranetAddress: 'string',
      slaveZoneId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancersRequestTag },
      tags: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

