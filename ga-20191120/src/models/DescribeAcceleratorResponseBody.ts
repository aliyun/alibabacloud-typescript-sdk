// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAcceleratorResponseBodyBasicBandwidthPackage extends $dara.Model {
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
   * The type of the bandwidth that is provided by the basic bandwidth plan. Valid values:
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

export class DescribeAcceleratorResponseBodyCrossDomainBandwidthPackage extends $dara.Model {
  /**
   * @remarks
   * The bandwidth that is provided by the cross-border acceleration bandwidth plan. Unit: Mbit/s.
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

export class DescribeAcceleratorResponseBodyDdosConfigList extends $dara.Model {
  ddosId?: string;
  ddosRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosId: 'DdosId',
      ddosRegionId: 'DdosRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosId: 'string',
      ddosRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAcceleratorResponseBodyIpSetConfig extends $dara.Model {
  /**
   * @remarks
   * The access mode of the acceleration area. Valid values:
   * 
   * *   **UserDefine**: custom nearby access mode. You can select acceleration areas and regions based on your business requirements. GA allocates a separate elastic IP address (EIP) to each acceleration region.
   * *   **Anycast**: automatic nearby access mode. You do not need to specify an acceleration area. GA allocates an Anycast EIP to multiple regions across the globe. Users can connect to the nearest access point of the Alibaba Cloud global transmission network by sending requests to the Anycast EIP.
   * 
   * @example
   * UserDefine
   */
  accessMode?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAcceleratorResponseBodyServiceManagedInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the action performed on the managed instance. Valid values:
   * 
   * *   **Create**
   * *   **Update**
   * *   **Delete**
   * *   **Associate**
   * *   **UserUnmanaged**
   * *   **CreateChild**
   * 
   * @example
   * Update
   */
  action?: string;
  /**
   * @remarks
   * The type of the child resource. Valid values:
   * 
   * *   **Listener**: a listener.
   * *   **IpSet**: an acceleration region.
   * *   **EndpointGroup**: an endpoint group.
   * *   **ForwardingRule**: a forwarding rule.
   * *   **Endpoint**: an endpoint.
   * *   **EndpointGroupDestination**: a protocol mapping of an endpoint group associated with a custom routing listener.
   * *   **EndpointPolicy**: a traffic policy of an endpoint associated with a custom routing listener.
   * 
   * >  This parameter is returned only if the value of **Action** is **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the specified actions are managed. Valid values:
   * 
   * *   **true**: The specified actions are managed, and you cannot perform the specified actions on the managed instance.
   * *   **false**: The specified actions are not managed, and you can perform the specified actions on the managed instance.
   * 
   * @example
   * false
   */
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAcceleratorResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N that is added to the GA instance.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that is added to the GA instance.
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

export class DescribeAcceleratorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  bandwidth?: number;
  /**
   * @remarks
   * The bandwidth metering method. Valid values:
   * 
   * *   **BandwidthPackage:** billed based on bandwidth plans.
   * *   **CDT**: billed based on data transfer.
   * 
   * @example
   * CDT
   */
  bandwidthBillingType?: string;
  /**
   * @remarks
   * The details about the basic bandwidth plan that is associated with the GA instance.
   */
  basicBandwidthPackage?: DescribeAcceleratorResponseBodyBasicBandwidthPackage;
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance with which the GA instance is associated.
   * 
   * @example
   * cen-hjkduu767hc****
   */
  cenId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the GA instance is created.
   * 
   * @example
   * 1650643200
   */
  createTime?: number;
  /**
   * @remarks
   * The type of cross-border acceleration. This parameter is returned for GA instances whose bandwidth metering method is pay-by-data-transfer (CDT).
   * 
   * Only **bpgPro** may be returned, which indicates BGP (Multi-ISP) Pro lines.
   * 
   * @example
   * bpgPro
   */
  crossBorderMode?: string;
  /**
   * @remarks
   * Indicates whether cross-border acceleration is enabled.
   * - **true**: yes
   * - **false**: no
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
  crossDomainBandwidthPackage?: DescribeAcceleratorResponseBodyCrossDomainBandwidthPackage;
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
  ddosConfigList?: DescribeAcceleratorResponseBodyDdosConfigList[];
  /**
   * @remarks
   * The ID of the Anti-DDoS Pro/Premium instance that is associated with the GA instance.
   * 
   * @example
   * ddoscoo-cn-zz11vq7j****
   * 
   * @deprecated
   */
  ddosId?: string;
  /**
   * @remarks
   * The description of the GA instance.
   * 
   * @example
   * Accelerator
   */
  description?: string;
  /**
   * @remarks
   * The canonical name (CNAME) that is assigned to the GA instance.
   * 
   * @example
   * ga-bp15u1i2hmtbk8c3i****.aliyunga0019.com
   */
  dnsName?: string;
  /**
   * @remarks
   * The timestamp that indicates when the GA instance expires.
   * 
   * @example
   * 1653235200
   */
  expiredTime?: number;
  /**
   * @remarks
   * The billing method of the GA instance.
   * 
   * @example
   * PREPAY
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The configurations of the acceleration area.
   */
  ipSetConfig?: DescribeAcceleratorResponseBodyIpSetConfig;
  /**
   * @remarks
   * The name of the GA instance.
   * 
   * @example
   * Accelerator
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the GA instance.
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6FEA0CF3-D3B9-43E5-A304-D217037876A8
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmw2vwdbujqbq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The CNAME that is used to integrate the GA instance with the Anti-DDoS service.
   * 
   * @example
   * ga-bp1f609c76zg6zuna****-1.aliyunga0047.com
   */
  secondDnsName?: string;
  /**
   * @remarks
   * The ID of the service that manages the GA instance.
   * 
   * >  This parameter is returned only if the value of **ServiceManaged** is **true**.
   * 
   * @example
   * ALB
   */
  serviceId?: string;
  /**
   * @remarks
   * Indicates whether the GA instance is managed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The actions that users can perform on the managed instance.
   * 
   * > 
   * 
   * *   This parameter is returned only if the value of **ServiceManaged** is **true**.
   * 
   * *   Users can perform only specific actions on a managed instance.
   */
  serviceManagedInfos?: DescribeAcceleratorResponseBodyServiceManagedInfos[];
  /**
   * @remarks
   * The specification of the GA instance. Valid values:
   * 
   * *   **1**: Small Ⅰ
   * *   **2**: Small Ⅱ
   * *   **3**: Small Ⅲ
   * *   **5**: Medium Ⅰ
   * *   **8**: Medium Ⅱ
   * *   **10**: Medium Ⅲ
   * *   **20**: Large Ⅰ
   * *   **30**: Large Ⅱ
   * *   **40**: Large Ⅲ
   * *   **50**: Large Ⅳ
   * *   **60**: Large Ⅴ
   * *   **70**: Large Ⅵ
   * *   **80**: Large VⅡ
   * *   **90**: Large VⅢ
   * *   **100**: Super Large Ⅰ
   * *   **200**: Super Large Ⅱ
   * 
   * >  The Large Ⅲ specification and higher specifications are available only to users that are added to the whitelist. To use these specifications, contact your Alibaba Cloud account manager.
   * 
   * Different specifications provide different capabilities. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/153127.html).
   * 
   * @example
   * 1
   */
  spec?: string;
  /**
   * @remarks
   * The status of the GA instance. Valid values:
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
   * The tags of the GA instance.
   */
  tags?: DescribeAcceleratorResponseBodyTags[];
  /**
   * @remarks
   * Indicates whether the GA instance can be upgraded. Valid values:
   * 
   * *   **notUpgradable:** The GA instance does not need to be upgraded.
   * *   **upgradable:** The GA instance can be upgraded to the latest version.
   * *   **upgradeFailed:** The GA instance failed to be upgraded.
   * 
   * @example
   * notUpgradable
   */
  upgradableStatus?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      bandwidth: 'Bandwidth',
      bandwidthBillingType: 'BandwidthBillingType',
      basicBandwidthPackage: 'BasicBandwidthPackage',
      cenId: 'CenId',
      createTime: 'CreateTime',
      crossBorderMode: 'CrossBorderMode',
      crossBorderStatus: 'CrossBorderStatus',
      crossDomainBandwidthPackage: 'CrossDomainBandwidthPackage',
      crossPrivateState: 'CrossPrivateState',
      ddosConfigList: 'DdosConfigList',
      ddosId: 'DdosId',
      description: 'Description',
      dnsName: 'DnsName',
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      ipSetConfig: 'IpSetConfig',
      name: 'Name',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      secondDnsName: 'SecondDnsName',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      spec: 'Spec',
      state: 'State',
      tags: 'Tags',
      upgradableStatus: 'UpgradableStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      bandwidth: 'number',
      bandwidthBillingType: 'string',
      basicBandwidthPackage: DescribeAcceleratorResponseBodyBasicBandwidthPackage,
      cenId: 'string',
      createTime: 'number',
      crossBorderMode: 'string',
      crossBorderStatus: 'boolean',
      crossDomainBandwidthPackage: DescribeAcceleratorResponseBodyCrossDomainBandwidthPackage,
      crossPrivateState: 'string',
      ddosConfigList: { 'type': 'array', 'itemType': DescribeAcceleratorResponseBodyDdosConfigList },
      ddosId: 'string',
      description: 'string',
      dnsName: 'string',
      expiredTime: 'number',
      instanceChargeType: 'string',
      ipSetConfig: DescribeAcceleratorResponseBodyIpSetConfig,
      name: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      secondDnsName: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeAcceleratorResponseBodyServiceManagedInfos },
      spec: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': DescribeAcceleratorResponseBodyTags },
      upgradableStatus: 'string',
    };
  }

  validate() {
    if(this.basicBandwidthPackage && typeof (this.basicBandwidthPackage as any).validate === 'function') {
      (this.basicBandwidthPackage as any).validate();
    }
    if(this.crossDomainBandwidthPackage && typeof (this.crossDomainBandwidthPackage as any).validate === 'function') {
      (this.crossDomainBandwidthPackage as any).validate();
    }
    if(Array.isArray(this.ddosConfigList)) {
      $dara.Model.validateArray(this.ddosConfigList);
    }
    if(this.ipSetConfig && typeof (this.ipSetConfig as any).validate === 'function') {
      (this.ipSetConfig as any).validate();
    }
    if(Array.isArray(this.serviceManagedInfos)) {
      $dara.Model.validateArray(this.serviceManagedInfos);
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

