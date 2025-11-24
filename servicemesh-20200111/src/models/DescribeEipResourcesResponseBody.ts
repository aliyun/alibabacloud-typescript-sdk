// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipResourcesResponseBodyEipList extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-2zeerraiwb7ujxscd****
   */
  allocationId?: string;
  /**
   * @remarks
   * The type of the resource that is associated with the EIP. Valid values:
   * 
   * *   `EcsInstance`: an ECS instance in a VPC
   * *   `SlbInstance`: a Server Load Balancer (SLB) instance in a VPC
   * *   `Nat`: a NAT gateway
   * *   `HaVip`: a high-availability virtual IP address (HAVIP)
   * *   `NetworkInterface`: a secondary elastic network interface (ENI)
   * 
   * Default value: `EcsInstance`.
   * 
   * @example
   * SlbInstance
   */
  instanceType?: string;
  /**
   * @remarks
   * The IP address of the EIP.
   * 
   * @example
   * 120.xx.xx.112
   */
  ipAddress?: string;
  /**
   * @remarks
   * The status of the EIP. Valid values:
   * 
   * *   `Associating`: The EIP is being associated with a resource.
   * *   `Unassociating`: The EIP is being disassociated from a resource.
   * *   `InUse`: The EIP is associated with a resource.
   * *   `Available`: The EIP is available.
   * 
   * @example
   * InUse
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      instanceType: 'InstanceType',
      ipAddress: 'IpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      instanceType: 'string',
      ipAddress: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipResourcesResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The EIPs.
   */
  eipList?: DescribeEipResourcesResponseBodyEipList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageResult?: DescribeEipResourcesResponseBodyPageResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BD65C0AD-D3C6-48D3-8D93-38D2015C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eipList: 'EipList',
      pageResult: 'PageResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipList: { 'type': 'array', 'itemType': DescribeEipResourcesResponseBodyEipList },
      pageResult: DescribeEipResourcesResponseBodyPageResult,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eipList)) {
      $dara.Model.validateArray(this.eipList);
    }
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

