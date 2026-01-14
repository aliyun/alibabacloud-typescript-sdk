// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBasicAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value of the basic bandwidth plan. Unit: Mbit/s.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The type of the bandwidth that is provided by the basic bandwidth plan.
   * 
   * *   **Basic**: basic
   * *   **Enhanced**: enhanced
   * *   **Advanced**: premium
   * 
   * @example
   * Basic
   */
  bandwidthType?: string;
  /**
   * @remarks
   * The ID of the basic bandwidth plan.
   * 
   * @example
   * gbwp-bp1d8xk8bg139j0fw****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      bandwidthType: 'BandwidthType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      bandwidthType: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value of the cross-region acceleration bandwidth plan. Unit: Mbit/s.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the cross-region acceleration bandwidth plan.
   * 
   * @example
   * gbwp-bp1d8xk8bg139j0fw****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicAcceleratorsResponseBodyAcceleratorsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the basic GA instance.
   * 
   * @example
   * Keytest
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the basic GA instance.
   * 
   * @example
   * Valuetest
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

export class ListBasicAcceleratorsResponseBodyAccelerators extends $dara.Model {
  /**
   * @remarks
   * The ID of the basic GA instance.
   * 
   * @example
   * ga-bp17frjjh0udz4qz****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The bandwidth billing method.
   * 
   * *   **BandwidthPackage**: billed based on bandwidth plans.
   * *   **CDT**: billed through Cloud Data Transfer (CDT) and based on data transfer.
   * *   **CDT95**: billed through CDT and based on the 95th percentile bandwidth. This bandwidth billing method is available only for users that are included in the whitelist.
   * 
   * @example
   * BandwidthPackage
   */
  bandwidthBillingType?: string;
  /**
   * @remarks
   * Details about the basic bandwidth plan that is associated with the basic GA instance.
   */
  basicBandwidthPackage?: ListBasicAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage;
  /**
   * @remarks
   * The ID of the endpoint group that is associated with the basic GA instance.
   * 
   * @example
   * epg-bp1dmlohjjz4kqaun****
   */
  basicEndpointGroupId?: string;
  /**
   * @remarks
   * The ID of the acceleration region where the basic GA instance is deployed.
   * 
   * @example
   * ips-bp11ilwqjdkjeg9r7****
   */
  basicIpSetId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the basic GA instance was created.
   * 
   * The time follows the UNIX time format. It is the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1637734547
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether cross-border acceleration is enabled for the GA instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  crossBorderStatus?: boolean;
  /**
   * @remarks
   * Details about the cross-region acceleration bandwidth plan that is associated with the GA instance.
   * 
   * This parameter is returned only when you call this operation on the International site (alibabacloud.com).
   */
  crossDomainBandwidthPackage?: ListBasicAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage;
  /**
   * @remarks
   * The description of the basic GA instance.
   * 
   * @example
   * BasicAccelerator
   */
  description?: string;
  /**
   * @remarks
   * The timestamp that indicates when the basic GA instance expires.
   * 
   * The time follows the UNIX time format. It is the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1640326547
   */
  expiredTime?: number;
  /**
   * @remarks
   * The billing method of the basic GA instance. Only **PREPAY** is returned, which indicates the subscription billing method.
   * 
   * @example
   * PREPAY
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name of the basic GA instance.
   * 
   * @example
   * BasicAccelerator
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region where the basic GA instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the basic GA instance belongs.
   * 
   * @example
   * rg-aekzrnd67gq****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The state of the basic GA instance.
   * 
   * *   **init**: The basic GA instance is being initialized.
   * *   **active**: The basic GA instance is available.
   * *   **configuring**: The basic GA instance is being configured.
   * *   **binding**: The basic GA instance is being associated.
   * *   **unbinding**: The GA instance is being disassociated.
   * *   **deleting**: The basic GA instance is being deleted.
   * *   **finacialLocked**: The basic GA instance is locked due to overdue payments.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The tags of the basic GA instance.
   */
  tags?: ListBasicAcceleratorsResponseBodyAcceleratorsTags[];
  /**
   * @remarks
   * This parameter is invalid.
   * 
   * @example
   * None
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      bandwidthBillingType: 'BandwidthBillingType',
      basicBandwidthPackage: 'BasicBandwidthPackage',
      basicEndpointGroupId: 'BasicEndpointGroupId',
      basicIpSetId: 'BasicIpSetId',
      createTime: 'CreateTime',
      crossBorderStatus: 'CrossBorderStatus',
      crossDomainBandwidthPackage: 'CrossDomainBandwidthPackage',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      bandwidthBillingType: 'string',
      basicBandwidthPackage: ListBasicAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage,
      basicEndpointGroupId: 'string',
      basicIpSetId: 'string',
      createTime: 'number',
      crossBorderStatus: 'boolean',
      crossDomainBandwidthPackage: ListBasicAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage,
      description: 'string',
      expiredTime: 'number',
      instanceChargeType: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': ListBasicAcceleratorsResponseBodyAcceleratorsTags },
      type: 'string',
    };
  }

  validate() {
    if(this.basicBandwidthPackage && typeof (this.basicBandwidthPackage as any).validate === 'function') {
      (this.basicBandwidthPackage as any).validate();
    }
    if(this.crossDomainBandwidthPackage && typeof (this.crossDomainBandwidthPackage as any).validate === 'function') {
      (this.crossDomainBandwidthPackage as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicAcceleratorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about basic GA instances.
   */
  accelerators?: ListBasicAcceleratorsResponseBodyAccelerators[];
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
   * The ID of the request.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of basic GA instances returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accelerators: 'Accelerators',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerators: { 'type': 'array', 'itemType': ListBasicAcceleratorsResponseBodyAccelerators },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accelerators)) {
      $dara.Model.validateArray(this.accelerators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

