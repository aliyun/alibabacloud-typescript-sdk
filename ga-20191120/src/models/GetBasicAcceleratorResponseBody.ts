// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBasicAcceleratorResponseBodyBasicBandwidthPackage extends $dara.Model {
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

export class GetBasicAcceleratorResponseBodyCrossDomainBandwidthPackage extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value of the cross-border acceleration bandwidth plan. Unit: Mbit/s.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the cross-border acceleration bandwidth plan.
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

export class GetBasicAcceleratorResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * tag-value
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

export class GetBasicAcceleratorResponseBody extends $dara.Model {
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
   * The bandwidth metering method.
   * 
   * *   **BandwidthPackage**: billed based on bandwidth plans.
   * *   **CDT**: billed by Cloud Data Transfer (CDT) and based on data transfer.
   * *   **CDT95**: billed by CDT and based on the 95th percentile bandwidth. This bandwidth metering method is available only to users that are included in the whitelist.
   * 
   * @example
   * CDT
   */
  bandwidthBillingType?: string;
  /**
   * @remarks
   * The details about the basic bandwidth plan that is associated with the basic GA instance.
   */
  basicBandwidthPackage?: GetBasicAcceleratorResponseBodyBasicBandwidthPackage;
  /**
   * @remarks
   * The ID of the endpoint group.
   * 
   * @example
   * epg-bp1dmlohjjz4kqaun****
   */
  basicEndpointGroupId?: string;
  /**
   * @remarks
   * The ID of the acceleration region.
   * 
   * @example
   * ips-bp11ilwqjdkjeg9r7****
   */
  basicIpSetId?: string;
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance to which the basic GA instance is attached.
   * 
   * @example
   * cen-hjkduu767hc****
   */
  cenId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the basic GA instance is created.
   * 
   * @example
   * 1637734547
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether cross-border acceleration is enabled for the basic GA instance. Valid values:
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
   * The details about the cross-border acceleration bandwidth plan that is associated with the GA instance.
   * 
   * This array is returned only for GA instances that are created on the international site (alibabacloud.com).
   */
  crossDomainBandwidthPackage?: GetBasicAcceleratorResponseBodyCrossDomainBandwidthPackage;
  /**
   * @remarks
   * Indicates whether cross-border acceleration is enabled.
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  crossPrivateState?: string;
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
   * The ID of the request.
   * 
   * @example
   * F591955F-5CB5-4CCE-A75D-17CF2085CE22
   */
  requestId?: string;
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
   * The status of the basic GA instance.
   * 
   * *   **init**: The GA instance is being initialized.
   * *   **active**: The GA instance is available.
   * *   **configuring**: The GA instance is being configured.
   * *   **binding**: The GA instance is being associated.
   * *   **unbinding**: The GA instance is being disassociated.
   * *   **deleting**: The GA instance is being deleted.
   * *   **finacialLocked**: The GA instance is locked due to overdue payments.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The tags of the basic GA instance.
   */
  tags?: GetBasicAcceleratorResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      bandwidthBillingType: 'BandwidthBillingType',
      basicBandwidthPackage: 'BasicBandwidthPackage',
      basicEndpointGroupId: 'BasicEndpointGroupId',
      basicIpSetId: 'BasicIpSetId',
      cenId: 'CenId',
      createTime: 'CreateTime',
      crossBorderStatus: 'CrossBorderStatus',
      crossDomainBandwidthPackage: 'CrossDomainBandwidthPackage',
      crossPrivateState: 'CrossPrivateState',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      name: 'Name',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      bandwidthBillingType: 'string',
      basicBandwidthPackage: GetBasicAcceleratorResponseBodyBasicBandwidthPackage,
      basicEndpointGroupId: 'string',
      basicIpSetId: 'string',
      cenId: 'string',
      createTime: 'number',
      crossBorderStatus: 'boolean',
      crossDomainBandwidthPackage: GetBasicAcceleratorResponseBodyCrossDomainBandwidthPackage,
      crossPrivateState: 'string',
      description: 'string',
      expiredTime: 'number',
      instanceChargeType: 'string',
      name: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': GetBasicAcceleratorResponseBodyTags },
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

