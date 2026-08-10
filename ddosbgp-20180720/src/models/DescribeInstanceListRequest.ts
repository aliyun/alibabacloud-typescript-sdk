// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag bound to the Anti-DDoS Origin instance to query.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag bound to the Anti-DDoS Origin instance to query.
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
   * The IDs of the Anti-DDoS Origin instances to query. Specify the value in the `["<Instance ID 1>","<Instance ID 2>",……]` format.
   * 
   * @example
   * ["ddosbgp-cn-oew1pjrk****"]
   */
  instanceIdList?: string;
  /**
   * @remarks
   * The mitigation plan type of the Anti-DDoS Origin instance to query. Valid values:
   * 
   * - **0**: Professional.
   * - **1**: Enterprise.
   * 
   * @example
   * 0
   */
  instanceType?: string;
  /**
   * @remarks
   * The mitigation plan types of the Anti-DDoS Origin instances to query.
   */
  instanceTypeList?: string[];
  /**
   * @remarks
   * The IP address of the protected object for the Anti-DDoS Origin instance to query.
   * 
   * @example
   * 47.89.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The protocol type of the IP assets protected by the Anti-DDoS Origin instance to query. Valid values:
   * 
   * - **IPv4**: IPv4 protocol.
   * - **IPv6**: IPv6 protocol.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The field used to sort the Anti-DDoS Origin instance list. The value is fixed as **expireTime**, which indicates that instances are sorted by expiration time.
   * 
   * You can use the **Orderdire** parameter to specify the sort order.
   * 
   * @example
   * expireTime
   */
  orderby?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **desc** (default): descending order by expiration time.
   * - **asc**: ascending order by expiration time.
   * 
   * @example
   * desc
   */
  orderdire?: string;
  /**
   * @remarks
   * The number of the page to return when paging is used.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of instances on each page when paging is used.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the Anti-DDoS Origin instance to query.
   * 
   * > You can call [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) to query all region IDs supported by Anti-DDoS Origin.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remark of the Anti-DDoS Origin instance to query. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags bound to the Anti-DDoS Origin instance to query.
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

