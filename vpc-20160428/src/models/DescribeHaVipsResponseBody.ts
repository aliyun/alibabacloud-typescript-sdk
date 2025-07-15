// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses extends $dara.Model {
  associatedEipAddresse?: string[];
  static names(): { [key: string]: string } {
    return {
      associatedEipAddresse: 'associatedEipAddresse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedEipAddresse: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.associatedEipAddresse)) {
      $dara.Model.validateArray(this.associatedEipAddresse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances extends $dara.Model {
  associatedInstance?: string[];
  static names(): { [key: string]: string } {
    return {
      associatedInstance: 'associatedInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedInstance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.associatedInstance)) {
      $dara.Model.validateArray(this.associatedInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseBodyHaVipsHaVipTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N added to the resource.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N added to the resource.
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

export class DescribeHaVipsResponseBodyHaVipsHaVipTags extends $dara.Model {
  tag?: DescribeHaVipsResponseBodyHaVipsHaVipTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeHaVipsResponseBodyHaVipsHaVipTagsTag },
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

export class DescribeHaVipsResponseBodyHaVipsHaVip extends $dara.Model {
  /**
   * @remarks
   * The list of EIPs associated with the HaVip.
   */
  associatedEipAddresses?: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses;
  /**
   * @remarks
   * The type of the instance with which the HaVip is associated. Valid values:
   * 
   * *   **EcsInstance**: Elastic Compute Service (ECS) instance
   * *   **NetworkInterface**: elastic network interface (ENI)
   * 
   * @example
   * EcsInstance
   */
  associatedInstanceType?: string;
  /**
   * @remarks
   * The information about the instance associated with the HaVip.
   */
  associatedInstances?: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances;
  /**
   * @remarks
   * The parameter is invalid. No value is returned.
   * 
   * @example
   * none
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the HaVip was created.
   * 
   * @example
   * 2021-07-03T14:25:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the HaVip.
   * 
   * @example
   * My HaVip
   */
  description?: string;
  /**
   * @remarks
   * The ID of the HaVip.
   * 
   * @example
   * havip-bp149uyvut73dpld****
   */
  haVipId?: string;
  /**
   * @remarks
   * The private IP address of the HaVip.
   * 
   * @example
   * 192.168.24.5
   */
  ipAddress?: string;
  /**
   * @remarks
   * The ID of the active instance that is associated with the HaVip.
   * 
   * @example
   * i-bp145q7glnuzdvz****
   */
  masterInstanceId?: string;
  /**
   * @remarks
   * The name of the HaVip.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region to which the HaVip belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the HaVip belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the HaVip. Valid values:
   * 
   * *   **Creating**: The server group is being created.
   * *   **Available**: The FULLNAT entry is available.
   * *   **Deleting**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: DescribeHaVipsResponseBodyHaVipsHaVipTags;
  /**
   * @remarks
   * The ID of the vSwitch to which the HaVip belongs.
   * 
   * @example
   * vsw-bp1pkt1fba8e824ez****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the HaVip belongs.
   * 
   * @example
   * vpc-bp1kcm36tevkpms97****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedEipAddresses: 'AssociatedEipAddresses',
      associatedInstanceType: 'AssociatedInstanceType',
      associatedInstances: 'AssociatedInstances',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      description: 'Description',
      haVipId: 'HaVipId',
      ipAddress: 'IpAddress',
      masterInstanceId: 'MasterInstanceId',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedEipAddresses: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses,
      associatedInstanceType: 'string',
      associatedInstances: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances,
      chargeType: 'string',
      createTime: 'string',
      description: 'string',
      haVipId: 'string',
      ipAddress: 'string',
      masterInstanceId: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: DescribeHaVipsResponseBodyHaVipsHaVipTags,
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.associatedEipAddresses && typeof (this.associatedEipAddresses as any).validate === 'function') {
      (this.associatedEipAddresses as any).validate();
    }
    if(this.associatedInstances && typeof (this.associatedInstances as any).validate === 'function') {
      (this.associatedInstances as any).validate();
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

export class DescribeHaVipsResponseBodyHaVips extends $dara.Model {
  haVip?: DescribeHaVipsResponseBodyHaVipsHaVip[];
  static names(): { [key: string]: string } {
    return {
      haVip: 'HaVip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVip: { 'type': 'array', 'itemType': DescribeHaVipsResponseBodyHaVipsHaVip },
    };
  }

  validate() {
    if(Array.isArray(this.haVip)) {
      $dara.Model.validateArray(this.haVip);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the HaVip.
   */
  haVips?: DescribeHaVipsResponseBodyHaVips;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 33E480C5-B46F-4CA5-B6FD-D77C746E86AB
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      haVips: 'HaVips',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVips: DescribeHaVipsResponseBodyHaVips,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.haVips && typeof (this.haVips as any).validate === 'function') {
      (this.haVips as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

