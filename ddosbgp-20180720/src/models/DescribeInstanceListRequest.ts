// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The mitigation plan of the Anti-DDoS Origin instance.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The mitigation plan of the Anti-DDoS Origin instance. Valid values:
   * 
   * *   0: the Professional mitigation plan.
   * *   1: the Enterprise mitigation plan.
   * 
   * @example
   * test-value
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

export class DescribeInstanceListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * ["ddosbgp-cn-oew1pjrk****"]
   */
  instanceIdList?: string;
  /**
   * @remarks
   * The field that is used to sort the Anti-DDoS Origin instances. Set the value to **expireTime**, which indicates that the instances are sorted based on the expiration time.
   * 
   * You can set the **Orderdire** parameter to specify the sorting method.
   * 
   * @example
   * 0
   */
  instanceType?: string;
  /**
   * @remarks
   * The total number of Anti-DDoS Origin instances.
   */
  instanceTypeList?: string[];
  /**
   * @remarks
   * The sorting method. Valid values:
   * 
   * *   **desc**: the descending order. This is the default value.
   * *   **asc**: the ascending order.
   * 
   * @example
   * 47.89.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The IP address of the object that is protected by the Anti-DDoS Origin instance to query.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The ID of the region where the Anti-DDoS Origin instance to query resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * expireTime
   */
  orderby?: string;
  /**
   * @remarks
   * The tags that are added to the Anti-DDoS Origin instance.
   * 
   * @example
   * desc
   */
  orderdire?: string;
  /**
   * @remarks
   * The protocol type of the IP address asset that is protected by the Anti-DDoS Origin instance to query. Valid values:
   * 
   * *   **Ipv4**: IPv4
   * *   **Ipv6**: IPv6
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The mitigation plan of the Anti-DDoS Origin instance to query. Valid values:
   * 
   * *   **0**: the Professional mitigation plan
   * *   **1**: the Enterprise mitigation plan
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The tag that is added to the Anti-DDoS Origin instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The remarks of the Anti-DDoS Origin instance to query. Fuzzy match is supported.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The key of the tag that is added to the Anti-DDoS Origin instance.
   */
  tag?: DescribeInstanceListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'InstanceIdList',
      instanceType: 'InstanceType',
      instanceTypeList: 'InstanceTypeList',
      ip: 'Ip',
      ipVersion: 'IpVersion',
      orderby: 'Orderby',
      orderdire: 'Orderdire',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: 'string',
      instanceType: 'string',
      instanceTypeList: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
      ipVersion: 'string',
      orderby: 'string',
      orderdire: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstanceListRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypeList)) {
      $dara.Model.validateArray(this.instanceTypeList);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

