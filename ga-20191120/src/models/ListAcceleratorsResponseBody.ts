// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage extends $dara.Model {
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
   * The bandwidth type that is provided by the basic bandwidth plan. Valid values:
   * 
   * *   **Basic**
   * *   **Enhanced**
   * *   **Advanced**
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

export class ListAcceleratorsResponseBodyAcceleratorsDdosConfigList extends $dara.Model {
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

export class ListAcceleratorsResponseBodyAcceleratorsIpSetConfig extends $dara.Model {
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

export class ListAcceleratorsResponseBodyAcceleratorsServiceManagedInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the action that is performed on the managed instance. Valid values:
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
   * *   **Listener**: listener.
   * *   **IpSet**: acceleration region.
   * *   **EndpointGroup**: endpoint group.
   * *   **ForwardingRule**: forwarding rule.
   * *   **Endpoint**: endpoint.
   * *   **EndpointGroupDestination**: protocol mapping of an endpoint group associated with a custom routing listener.
   * *   **EndpointPolicy**: traffic policy of an endpoint associated with a custom routing listener.
   * 
   * >  This parameter takes effect only if the value of **Action** is **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the specified actions are managed. Valid values:
   * 
   * *   **true**: The specified actions are managed, and users cannot perform the specified actions on the managed instance.
   * *   **false**: The specified actions are not managed, and users can perform the specified actions on the managed instance.
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
   * The key of the tag.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The ID of the GA instance.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The bandwidth of the GA instance. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The bandwidth metering method. Valid values:
   * 
   * *   **BandwidthPackage**: billed based on bandwidth plans.
   * *   **CDT**: billed based on data transfer.
   * 
   * @example
   * CDT
   */
  bandwidthBillingType?: string;
  /**
   * @remarks
   * The information about the basic bandwidth plan that is associated with the GA instance.
   */
  basicBandwidthPackage?: ListAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage;
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance that is associated with the GA instance.
   * 
   * @example
   * cen-hjfufhjfuwff****
   */
  cenId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the GA instance was created.
   * 
   * @example
   * 1650643200
   */
  createTime?: number;
  /**
   * @remarks
   * The type of cross-border acceleration. This parameter is returned for GA instances whose bandwidth metering method is pay-by-data-transfer.
   * 
   * *   **bpgPro**: BGP (Multi-ISP) Pro lines.
   * *   **private**: cross-border Express Connect circuit.
   * 
   * @example
   * bpgPro
   */
  crossBorderMode?: string;
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
   * The information about the cross-border acceleration bandwidth plan that is associated with the GA instance.
   * 
   * This array is returned only for GA instances that are created on the international site (alibabacloud.com).
   */
  crossDomainBandwidthPackage?: ListAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage;
  ddosConfigList?: ListAcceleratorsResponseBodyAcceleratorsDdosConfigList[];
  /**
   * @remarks
   * The ID of the Anti-DDoS Pro or Anti-DDOS Premium instance that is associated with the GA instance.
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
   * The CNAME that is assigned to the GA instance.
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
  ipSetConfig?: ListAcceleratorsResponseBodyAcceleratorsIpSetConfig;
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
   * The ID of the region where GA instance is deployed. Only **cn-hangzhou** may be returned.
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
   * The CNAME that is used to associate the GA instance with an Anti-DDoS Pro instance or an Anti-DDOS Premium instance.
   * 
   * @example
   * ga-bp1f609c76zg6zuna****-1.aliyunga0047.com
   */
  secondDnsName?: string;
  /**
   * @remarks
   * The ID of the service that manages the instance.
   * 
   * >  This parameter takes effect only if the value of **ServiceManaged** is **true**.
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
   * > *   This parameter takes effect only if the value of **ServiceManaged** is **true**.
   * > *   Users can perform only specific actions on a managed instance.
   */
  serviceManagedInfos?: ListAcceleratorsResponseBodyAcceleratorsServiceManagedInfos[];
  /**
   * @remarks
   * The specification of the GA instance. Valid values:
   * 
   * *   **1**: Small Ⅰ.
   * *   **2**: Small Ⅱ.
   * *   **3**: Small Ⅲ.
   * *   **5**: Medium Ⅰ.
   * *   **8**: Medium Ⅱ.
   * *   **10**: Medium Ⅲ.
   * *   **20**: Large Ⅰ.
   * *   **30**: Large Ⅱ.
   * *   **40**: Large Ⅲ.
   * *   **50**: Large IV.
   * *   **60**: Large V.
   * *   **70**: Large VI.
   * *   **80**: Large VII.
   * *   **90**: Large VIII.
   * *   **100**: Super Large Ⅰ.
   * *   **200**: Super Large Ⅱ.
   * 
   * >  The Large Ⅲ specification and higher specifications are available only to accounts that are added to the whitelist. To use these specifications, contact your Alibaba Cloud account manager.
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
   * The tags that are added to the resource.
   */
  tags?: ListAcceleratorsResponseBodyAcceleratorsTags[];
  /**
   * @remarks
   * An invalid parameter.
   * 
   * @example
   * Invalid parameter
   */
  type?: string;
  /**
   * @remarks
   * Indicates whether the GA instance can be upgraded. Valid values:
   * 
   * *   **notUpgradable**: The GA instance does not need to be upgraded.
   * *   **upgradable**: The GA instance can be upgraded to the latest version.
   * *   **upgradeFailed**: The GA instance failed to be upgraded.
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
   * The information about the GA instances.
   */
  accelerators?: ListAcceleratorsResponseBodyAccelerators[];
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
   * DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

