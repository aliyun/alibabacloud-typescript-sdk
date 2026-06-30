// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the basic bandwidth plan. Unit: Mbit/s.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The type of the bandwidth. Valid values:
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

export class ListAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the cross-domain acceleration bandwidth plan. Unit: Mbit/s.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the cross-domain acceleration bandwidth plan.
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

export class ListAcceleratorsResponseBodyAcceleratorsDdosConfigList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Pro/Premium instance.
   * 
   * @example
   * ddoscoo-cn-a8w4ekcb**
   */
  ddosId?: string;
  /**
   * @remarks
   * The region ID of the Anti-DDoS Pro/Premium instance.
   * 
   * @example
   * cn-hangzhou
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

export class ListAcceleratorsResponseBodyAcceleratorsIpSetConfig extends $dara.Model {
  /**
   * @remarks
   * The access mode of the acceleration area. Valid values:
   * 
   * - **UserDefine**: custom nearby access mode. You can select acceleration areas and regions based on your business needs. Global Accelerator provides a separate elastic IP address (EIP) for each acceleration region.
   * 
   * - **Anycast**: automatic nearby access mode. You do not need to configure an acceleration area. Global Accelerator provides an Anycast EIP for multiple regions across the globe. Users can connect to the nearest access point of the Alibaba Cloud network using the Anycast EIP.
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

export class ListAcceleratorsResponseBodyAcceleratorsServiceManagedInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the action on the managed instance. Valid values:
   * 
   * - **Create**: create an instance.
   * 
   * - **Update**: update the current instance.
   * 
   * - **Delete**: delete the current instance.
   * 
   * - **Associate**: associate the instance with other resources.
   * 
   * - **UserUnmanaged**: disassociate the instance from the service.
   * 
   * - **CreateChild**: create a child resource in the instance.
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
   * - **EndpointPolicy**: traffic policy of an endpoint associated with a custom routing listener.
   * 
   * > This parameter is returned only when **Action** is set to **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the specified action is managed. Valid values:
   * 
   * - **true**: The specified action is managed, and you cannot perform the specified action on the managed instance.
   * 
   * - **false**: The specified action is not managed, and you can perform the specified action on the managed instance.
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

export class ListAcceleratorsResponseBodyAcceleratorsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * tast-value
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

export class ListAcceleratorsResponseBodyAccelerators extends $dara.Model {
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
   * The bandwidth of the Global Accelerator instance. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method for the bandwidth.
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
  basicBandwidthPackage?: ListAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage;
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance that is bound to the Global Accelerator instance.
   * 
   * @example
   * cen-hjfufhjfuwff****
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
   * The type of cross-border acceleration for the instance that uses the pay-by-data-transfer billing method. Valid values:
   * 
   * - **bpgPro**: premium bandwidth for cross-border acceleration.
   * 
   * - **private**: <props="china">China Unicom leased line for cross-border acceleration.<props="intl">Leased line for cross-domain acceleration.
   * 
   * @example
   * bpgPro
   */
  crossBorderMode?: string;
  /**
   * @remarks
   * Indicates whether cross-border data transfer is enabled for the Global Accelerator instance. Valid values:
   * 
   * - **true**: Cross-border data transfer is enabled, which can accelerate data transfer across borders.
   * 
   * - **false**: Cross-border data transfer is disabled, which cannot accelerate data transfer across borders.
   * 
   * @example
   * false
   */
  crossBorderStatus?: boolean;
  /**
   * @remarks
   * The details of the cross-domain acceleration bandwidth plan that is associated with the Global Accelerator instance.
   * 
   * This array is returned only by the Alibaba Cloud International Website (www\\.alibabacloud.com).
   */
  crossDomainBandwidthPackage?: ListAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage;
  /**
   * @remarks
   * The list of Anti-DDoS Pro/Premium configurations.
   */
  ddosConfigList?: ListAcceleratorsResponseBodyAcceleratorsDdosConfigList[];
  /**
   * @remarks
   * The ID of the Anti-DDoS Pro/Premium instance that is associated with the Global Accelerator instance.
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
   * The canonical name (CNAME) assigned to the Global Accelerator instance.
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
  ipSetConfig?: ListAcceleratorsResponseBodyAcceleratorsIpSetConfig;
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
   * The region ID of the Global Accelerator instance. The value is set to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekztkx4zwc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The CNAME that is assigned to the Global Accelerator instance after it is associated with an Anti-DDoS Pro/Premium instance.
   * 
   * @example
   * ga-bp1f609c76zg6zuna****-1.aliyunga0047.com
   */
  secondDnsName?: string;
  /**
   * @remarks
   * The ID of the service that manages the instance.
   * 
   * > This parameter is returned only when **ServiceManaged** is set to **True**.
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
   * > - This parameter is returned only when **ServiceManaged** is set to **True**.
   * >
   * > - When the instance is in a managed state, you have limited permissions to perform operations on the instance.
   */
  serviceManagedInfos?: ListAcceleratorsResponseBodyAcceleratorsServiceManagedInfos[];
  /**
   * @remarks
   * The instance type of the Global Accelerator instance. Valid values:
   * 
   * - **1**: Small I
   * 
   * - **2**: Small II
   * 
   * - **3**: Small III
   * 
   * - **5**: Medium I
   * 
   * - **8**: Medium II
   * 
   * - **10**: Medium III
   * 
   * - **20**: Large I
   * 
   * - **30**: Large II
   * 
   * - **40**: Large III
   * 
   * - **50**: Large IV
   * 
   * - **60**: Large V
   * 
   * - **70**: Large VI
   * 
   * - **80**: Large VII
   * 
   * - **90**: Large VIII
   * 
   * - **100**: Extra Large I
   * 
   * - **200**: Extra Large II
   * 
   * > Currently, the Large III and higher instance types are available only to users on the whitelist. To use these instance types, contact your account manager.
   * 
   * Different instance types have different definitions. For more information, see [Instance types](https://help.aliyun.com/document_detail/153127.html).
   * 
   * @example
   * 1
   */
  spec?: string;
  /**
   * @remarks
   * The state of the Global Accelerator instance. Valid values:
   * 
   * - **init**: The instance is being initialized.
   * 
   * - **active**: The instance is active.
   * 
   * - **configuring**: The instance is being configured.
   * 
   * - **binding**: The instance is being bound.
   * 
   * - **unbinding**: The instance is being unbound.
   * 
   * - **deleting**: The instance is being deleted.
   * 
   * - **finacialLocked**: The instance is locked due to an overdue payment.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tags?: ListAcceleratorsResponseBodyAcceleratorsTags[];
  /**
   * @remarks
   * This parameter is invalid.
   * 
   * @example
   * None
   */
  type?: string;
  /**
   * @remarks
   * The upgrade status of the Global Accelerator instance. Valid values:
   * 
   * - **notUpgradable**: The instance does not need to be upgraded.
   * 
   * - **upgradable**: The instance can be upgraded to the latest version.
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
      ddosConfigList: 'DdosConfigList',
      ddosId: 'DdosId',
      description: 'Description',
      dnsName: 'DnsName',
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      ipSetConfig: 'IpSetConfig',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      secondDnsName: 'SecondDnsName',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      spec: 'Spec',
      state: 'State',
      tags: 'Tags',
      type: 'Type',
      upgradableStatus: 'UpgradableStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      bandwidth: 'number',
      bandwidthBillingType: 'string',
      basicBandwidthPackage: ListAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage,
      cenId: 'string',
      createTime: 'number',
      crossBorderMode: 'string',
      crossBorderStatus: 'boolean',
      crossDomainBandwidthPackage: ListAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage,
      ddosConfigList: { 'type': 'array', 'itemType': ListAcceleratorsResponseBodyAcceleratorsDdosConfigList },
      ddosId: 'string',
      description: 'string',
      dnsName: 'string',
      expiredTime: 'number',
      instanceChargeType: 'string',
      ipSetConfig: ListAcceleratorsResponseBodyAcceleratorsIpSetConfig,
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      secondDnsName: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListAcceleratorsResponseBodyAcceleratorsServiceManagedInfos },
      spec: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': ListAcceleratorsResponseBodyAcceleratorsTags },
      type: 'string',
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

export class ListAcceleratorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the Global Accelerator instances.
   */
  accelerators?: ListAcceleratorsResponseBodyAccelerators[];
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
   * DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6
   */
  requestId?: string;
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
      accelerators: 'Accelerators',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerators: { 'type': 'array', 'itemType': ListAcceleratorsResponseBodyAccelerators },
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

