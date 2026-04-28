// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressOperationLocksLock extends $dara.Model {
  /**
   * @example
   * financial
   */
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressOperationLocks extends $dara.Model {
  lock?: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressOperationLocksLock[];
  static names(): { [key: string]: string } {
    return {
      lock: 'Lock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lock: { 'type': 'array', 'itemType': DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressOperationLocksLock },
    };
  }

  validate() {
    if(Array.isArray(this.lock)) {
      $dara.Model.validateArray(this.lock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTagsTag extends $dara.Model {
  /**
   * @remarks
   * 标签键
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * 标签键。
   * 
   * @example
   * TestKey
   * 
   * @deprecated
   */
  tagKey?: string;
  /**
   * @remarks
   * 标签值。
   * 
   * @example
   * TestValue
   * 
   * @deprecated
   */
  tagValue?: string;
  /**
   * @remarks
   * 标签值。
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      tagKey: 'string',
      tagValue: 'string',
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

export class DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTags extends $dara.Model {
  tag?: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTagsTag },
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

export class DescribeEnsEipAddressesResponseBodyEipAddressesEipAddress extends $dara.Model {
  /**
   * @remarks
   * EIP的实例ID。
   * 
   * @example
   * eip-5sainglpw7qfem3icir4s****
   */
  allocationId?: string;
  /**
   * @remarks
   * EIP的创建时间
   * 
   * @example
   * 1624885274000
   */
  allocationTime?: string;
  /**
   * @remarks
   * EIP的带宽峰值，默认值为5。取值范围：**5**~**10000**，单位：Mbps。
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  /**
   * @example
   * 100
   */
  bandwidthPackageBandwidth?: number;
  /**
   * @example
   * cbwp-5***
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * EIP的计费模式。
   * 
   * - **PrePaid**：包年包月。
   * 
   * - **PostPaid**：按量计费。
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * EIP的描述信息。
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * ENS节点ID。
   * 
   * @example
   * cn-xian-telecom
   */
  ensRegionId?: string;
  icmpReplyEnabled?: boolean;
  /**
   * @remarks
   * 当前绑定的实例的ID。
   * 
   * @example
   * lb-5sc3kum2e0sz34wbqrws9****
   */
  instanceId?: string;
  /**
   * @remarks
   * 要绑定的云产品实例的类型，取值： 
   * 
   * - **EnsInstance**：VPC类型的ENS实例。
   * 
   * - **SlbInstance**：负载均衡实例。
   * 
   * @example
   * SlbInstance
   */
  instanceType?: string;
  /**
   * @remarks
   * EIP的计费方式。
   * 
   * - **95BandwidthByMonth**：月95峰值带宽。
   * 
   * - **PayByBandwidth**：固定带宽计费。
   * 
   * @example
   * 95BandwidthByMonth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * EIP的IP地址。
   * 
   * @example
   * 120.XXX.XXX.4
   */
  ipAddress?: string;
  /**
   * @remarks
   * 如果该弹性IP是备用EIP时，表示当前EIP的运行状态。
   * - **Stopped**：已停止。
   * - **Running**：运行中。
   * - **Starting**：启动中。
   * - **Stopping**：停止中。
   * 
   * @example
   * Stopped
   */
  ipStatus?: string;
  /**
   * @remarks
   * 运营商，取值：
   * 
   * - **cmcc**：中国移动。
   * - **unicom**：中国联通。
   * - **telecom**：中国电信。
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * EIP实例名称。
   * 
   * @example
   * test
   */
  name?: string;
  operationLocks?: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressOperationLocks;
  /**
   * @remarks
   * 该EIP是否是备用。
   * 
   * @example
   * true
   */
  standby?: boolean;
  /**
   * @remarks
   * EIP的状态。
   * 
   * - **Associating**：绑定中。
   * 
   * - **Unassociating**：解绑中。   
   * 
   * - **InUse**：已分配。   
   * 
   * - **Available**：可用。
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * 标签集合。
   */
  tags?: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTags;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      allocationTime: 'AllocationTime',
      bandwidth: 'Bandwidth',
      bandwidthPackageBandwidth: 'BandwidthPackageBandwidth',
      bandwidthPackageId: 'BandwidthPackageId',
      chargeType: 'ChargeType',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      icmpReplyEnabled: 'IcmpReplyEnabled',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      ipStatus: 'IpStatus',
      isp: 'Isp',
      name: 'Name',
      operationLocks: 'OperationLocks',
      standby: 'Standby',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      allocationTime: 'string',
      bandwidth: 'number',
      bandwidthPackageBandwidth: 'number',
      bandwidthPackageId: 'string',
      chargeType: 'string',
      description: 'string',
      ensRegionId: 'string',
      icmpReplyEnabled: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      ipStatus: 'string',
      isp: 'string',
      name: 'string',
      operationLocks: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressOperationLocks,
      standby: 'boolean',
      status: 'string',
      tags: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTags,
    };
  }

  validate() {
    if(this.operationLocks && typeof (this.operationLocks as any).validate === 'function') {
      (this.operationLocks as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsEipAddressesResponseBodyEipAddresses extends $dara.Model {
  eipAddress?: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddress[];
  static names(): { [key: string]: string } {
    return {
      eipAddress: 'EipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddress: { 'type': 'array', 'itemType': DescribeEnsEipAddressesResponseBodyEipAddressesEipAddress },
    };
  }

  validate() {
    if(Array.isArray(this.eipAddress)) {
      $dara.Model.validateArray(this.eipAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsEipAddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the EIPs.
   * 
   * @example
   * [\\"106.14.194.193\\"]
   */
  eipAddresses?: DescribeEnsEipAddressesResponseBodyEipAddresses;
  /**
   * @remarks
   * The page number. Valid values: an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Valid values: **10** to **100**.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8629F679-B51D-4194-A1CC-5D8F504C362B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eipAddresses: 'EipAddresses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddresses: DescribeEnsEipAddressesResponseBodyEipAddresses,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.eipAddresses && typeof (this.eipAddresses as any).validate === 'function') {
      (this.eipAddresses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

