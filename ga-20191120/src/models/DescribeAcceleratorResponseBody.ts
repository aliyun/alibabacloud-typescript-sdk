// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAcceleratorResponseBodyBasicBandwidthPackage extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the basic bandwidth plan. Unit: Mbps.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The type of the bandwidth of the basic bandwidth plan. Valid values:
   * 
   * - **Basic**: standard acceleration bandwidth.
   * 
   * - **Enhanced**: enhanced acceleration bandwidth.
   * 
   * - **Advanced**: premium acceleration bandwidth.
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
   * The bandwidth of the cross-region bandwidth plan. Unit: Mbps.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the cross-region bandwidth plan.
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
  /**
   * @remarks
   * The ID of the Anti-DDoS instance that is associated with the Global Accelerator instance.
   * 
   * @example
   * ddoscoo-cn-zz11vq7j****
   */
  ddosId?: string;
  /**
   * @remarks
   * The region where the Anti-DDoS instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * ap-southeast-1
   */
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
   * - **UserDefine**: custom. You can select acceleration areas and regions based on your business needs. Global Accelerator provides a separate elastic IP address (EIP) for each acceleration region.
   * 
   * - **Anycast**: automatic. You do not need to configure an acceleration area. Global Accelerator provides an Anycast EIP for multiple regions. Users can connect to the nearest access point of the Alibaba Cloud network using the Anycast EIP.
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
   * The name of the action on the managed instance. Valid values:
   * 
   * - **Create**: creates an instance.
   * 
   * - **Update**: updates the current instance.
   * 
   * - **Delete**: deletes the current instance.
   * 
   * - **Associate**: associates the instance with other resources.
   * 
   * - **UserUnmanaged**: unmanages the instance.
   * 
   * - **CreateChild**: creates a child resource in the instance.
   * 
   * @example
   * Update
   */
  action?: string;
  /**
   * @remarks
   * The type of the child resource. Valid values:
   * 
   * - **Listener**: listener.
   * 
   * - **IpSet**: acceleration region.
   * 
   * - **EndpointGroup**: endpoint group.
   * 
   * - **ForwardingRule**: forwarding rule.
   * 
   * - **Endpoint**: endpoint.
   * 
   * - **EndpointGroupDestination**: protocol mapping of an endpoint group associated with a custom routing listener.
   * 
   * - **EndpointPolicy**: access policy of an endpoint associated with a custom routing listener.
   * 
   * > This parameter is valid only when **Action** is set to **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the specified action is managed. Valid values:
   * 
   * - **true**: The action is managed. You cannot perform the specified action on the managed instance.
   * 
   * - **false**: The action is not managed. You can perform the specified action on the managed instance.
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

export class DescribeAcceleratorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Global Accelerator instance.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The bandwidth of the standard Global Accelerator instance. Unit: Mbps.
   * 
   * > This parameter is valid only when the access mode of the acceleration area is Anycast.
   * 
   * @example
   * 200
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method of the bandwidth. Valid values:
   * 
   * - **BandwidthPackage**: pay-by-bandwidth-plan.
   * 
   * - **CDT**: pay-by-data-transfer.
   * 
   * @example
   * CDT
   */
  bandwidthBillingType?: string;
  /**
   * @remarks
   * The details of the basic bandwidth plan that is associated with the Global Accelerator instance.
   */
  basicBandwidthPackage?: DescribeAcceleratorResponseBodyBasicBandwidthPackage;
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance that is associated with the Global Accelerator instance.
   * 
   * @example
   * cen-hjkduu767hc****
   */
  cenId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the Global Accelerator instance was created.
   * 
   * @example
   * 1650643200
   */
  createTime?: number;
  /**
   * @remarks
   * The type of cross-border acceleration. This parameter is returned for pay-by-data-transfer instances.
   * 
   * **bpgPro**: premium bandwidth for cross-border acceleration.
   * 
   * @example
   * bpgPro
   */
  crossBorderMode?: string;
  /**
   * @remarks
   * Indicates whether the cross-border line feature is enabled for the Global Accelerator instance. Valid values:
   * 
   * - **true**: The cross-border line feature is enabled. You can use Global Accelerator to accelerate data transmission across borders.
   * 
   * - **false**: The cross-border line feature is disabled. You cannot use Global Accelerator to accelerate data transmission across borders.
   * 
   * @example
   * false
   */
  crossBorderStatus?: boolean;
  /**
   * @remarks
   * The details of the cross-region bandwidth plan that is associated with the Global Accelerator instance.
   * 
   * This parameter is returned only by the Alibaba Cloud International Website (www\\.alibabacloud.com).
   */
  crossDomainBandwidthPackage?: DescribeAcceleratorResponseBodyCrossDomainBandwidthPackage;
  /**
   * @remarks
   * Indicates whether cross-border bandwidth is enabled.
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  crossPrivateState?: string;
  /**
   * @remarks
   * The list of Anti-DDoS instances that are associated with the Global Accelerator instance.
   */
  ddosConfigList?: DescribeAcceleratorResponseBodyDdosConfigList[];
  /**
   * @remarks
   * The ID of the Anti-DDoS instance that is associated with the Global Accelerator instance.
   * 
   * @example
   * ddoscoo-cn-zz11vq7j****
   * 
   * @deprecated
   */
  ddosId?: string;
  /**
   * @remarks
   * The description of the Global Accelerator instance.
   * 
   * @example
   * Accelerator
   */
  description?: string;
  /**
   * @remarks
   * The canonical name (CNAME) that is assigned to the Global Accelerator instance.
   * 
   * @example
   * ga-bp15u1i2hmtbk8c3i****.aliyunga0019.com
   */
  dnsName?: string;
  /**
   * @remarks
   * The timestamp that indicates when the Global Accelerator instance expires.
   * 
   * @example
   * 1653235200
   */
  expiredTime?: number;
  /**
   * @remarks
   * The billing method of the Global Accelerator instance.
   * 
   * @example
   * PREPAY
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The configuration of the acceleration area.
   */
  ipSetConfig?: DescribeAcceleratorResponseBodyIpSetConfig;
  /**
   * @remarks
   * The name of the Global Accelerator instance.
   * 
   * @example
   * Accelerator
   */
  name?: string;
  /**
   * @remarks
   * The region where the Global Accelerator instance is deployed.
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
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
   * The CNAME of the Anti-DDoS instance that is associated with the Global Accelerator instance.
   * 
   * @example
   * ga-bp1f609c76zg6zuna****-1.aliyunga0047.com
   */
  secondDnsName?: string;
  /**
   * @remarks
   * The ID of the service that manages the instance.
   * 
   * > This parameter is valid only when **ServiceManaged** is set to **True**.
   * 
   * @example
   * ALB
   */
  serviceId?: string;
  /**
   * @remarks
   * Indicates whether the instance is a managed instance. Valid values:
   * 
   * - **true**: The instance is a managed instance.
   * 
   * - **false**: The instance is not a managed instance.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The actions that you can perform on the managed instance.
   * 
   * > - This parameter is valid only when **ServiceManaged** is set to **True**.
   * >
   * > - When the instance is managed, you cannot perform some operations on the instance.
   */
  serviceManagedInfos?: DescribeAcceleratorResponseBodyServiceManagedInfos[];
  /**
   * @remarks
   * The specification of the Global Accelerator instance. Valid values:
   * 
   * - **1**: Small I.
   * 
   * - **2**: Small II.
   * 
   * - **3**: Small III.
   * 
   * - **5**: Medium I.
   * 
   * - **8**: Medium II.
   * 
   * - **10**: Medium III.
   * 
   * - **20**: Large I.
   * 
   * - **30**: Large II.
   * 
   * - **40**: Large III.
   * 
   * - **50**: Large IV.
   * 
   * - **60**: Large V.
   * 
   * - **70**: Large VI.
   * 
   * - **80**: Large VII.
   * 
   * - **90**: Large VIII.
   * 
   * - **100**: Super Large I.
   * 
   * - **200**: Super Large II.
   * 
   * > The Large III and higher specifications are available only to users on the whitelist. To use these specifications, contact your account manager.
   * 
   * The definitions of different specifications vary. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/153127.html).
   * 
   * @example
   * 1
   */
  spec?: string;
  /**
   * @remarks
   * The status of the Global Accelerator instance. Valid values:
   * 
   * - **init**: The instance is being initialized.
   * 
   * - **active**: The instance is available.
   * 
   * - **configuring**: The instance is being configured.
   * 
   * - **binding**: The instance is being associated.
   * 
   * - **unbinding**: The instance is being disassociated.
   * 
   * - **deleting**: The instance is being deleted.
   * 
   * - **finacialLocked**: The instance is financially locked.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tags?: DescribeAcceleratorResponseBodyTags[];
  /**
   * @remarks
   * The upgrade status of the Global Accelerator instance. Valid values:
   * 
   * - **notUpgradable**: The instance does not need to be upgraded.
   * 
   * - **upgradable**: The instance can be upgraded.
   * 
   * - **upgradeFailed**: The instance failed to be upgraded.
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

