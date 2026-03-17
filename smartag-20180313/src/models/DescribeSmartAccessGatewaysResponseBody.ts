// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinksLink extends $dara.Model {
  bandwidth?: string;
  commodityType?: string;
  endTime?: number;
  instanceId?: string;
  relateInstanceId?: string;
  relateInstanceRegionId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      commodityType: 'CommodityType',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      relateInstanceId: 'RelateInstanceId',
      relateInstanceRegionId: 'RelateInstanceRegionId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      commodityType: 'string',
      endTime: 'number',
      instanceId: 'string',
      relateInstanceId: 'string',
      relateInstanceRegionId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinks extends $dara.Model {
  link?: DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinksLink[];
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: { 'type': 'array', 'itemType': DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinksLink },
    };
  }

  validate() {
    if(Array.isArray(this.link)) {
      $dara.Model.validateArray(this.link);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway extends $dara.Model {
  accelerateBandwidth?: number;
  accessPointId?: string;
  aclIds?: string;
  applicationBandwidthPackageId?: string;
  associatedCcnId?: string;
  associatedCcnName?: string;
  backupSoftwareVersion?: string;
  backupStatus?: string;
  cidrBlock?: string;
  city?: string;
  createTime?: number;
  dataPlan?: number;
  description?: string;
  dpiMonitorStatus?: string;
  dpiStatus?: string;
  enableAdvancedMonitor?: boolean;
  enableSoftwareConnectionAudit?: boolean;
  endTime?: number;
  enterpriseCode?: string;
  hardwareVersion?: string;
  IRIds?: string;
  idaasApplicationId?: string;
  idaasId?: string;
  ipsecStatus?: string;
  isp?: string;
  links?: DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinks;
  maxBandwidth?: string;
  name?: string;
  position?: string;
  qosIds?: string;
  resellerInstanceId?: string;
  resellerUid?: string;
  resourceGroupId?: string;
  routingStrategy?: string;
  securityLockThreshold?: number;
  serialNumber?: string;
  smartAGId?: string;
  smartAGUid?: number;
  softwareVersion?: string;
  status?: string;
  upBandwidth4G?: number;
  upBandwidthWan?: number;
  userCount?: number;
  vpnStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateBandwidth: 'AccelerateBandwidth',
      accessPointId: 'AccessPointId',
      aclIds: 'AclIds',
      applicationBandwidthPackageId: 'ApplicationBandwidthPackageId',
      associatedCcnId: 'AssociatedCcnId',
      associatedCcnName: 'AssociatedCcnName',
      backupSoftwareVersion: 'BackupSoftwareVersion',
      backupStatus: 'BackupStatus',
      cidrBlock: 'CidrBlock',
      city: 'City',
      createTime: 'CreateTime',
      dataPlan: 'DataPlan',
      description: 'Description',
      dpiMonitorStatus: 'DpiMonitorStatus',
      dpiStatus: 'DpiStatus',
      enableAdvancedMonitor: 'EnableAdvancedMonitor',
      enableSoftwareConnectionAudit: 'EnableSoftwareConnectionAudit',
      endTime: 'EndTime',
      enterpriseCode: 'EnterpriseCode',
      hardwareVersion: 'HardwareVersion',
      IRIds: 'IRIds',
      idaasApplicationId: 'IdaasApplicationId',
      idaasId: 'IdaasId',
      ipsecStatus: 'IpsecStatus',
      isp: 'Isp',
      links: 'Links',
      maxBandwidth: 'MaxBandwidth',
      name: 'Name',
      position: 'Position',
      qosIds: 'QosIds',
      resellerInstanceId: 'ResellerInstanceId',
      resellerUid: 'ResellerUid',
      resourceGroupId: 'ResourceGroupId',
      routingStrategy: 'RoutingStrategy',
      securityLockThreshold: 'SecurityLockThreshold',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
      smartAGUid: 'SmartAGUid',
      softwareVersion: 'SoftwareVersion',
      status: 'Status',
      upBandwidth4G: 'UpBandwidth4G',
      upBandwidthWan: 'UpBandwidthWan',
      userCount: 'UserCount',
      vpnStatus: 'VpnStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateBandwidth: 'number',
      accessPointId: 'string',
      aclIds: 'string',
      applicationBandwidthPackageId: 'string',
      associatedCcnId: 'string',
      associatedCcnName: 'string',
      backupSoftwareVersion: 'string',
      backupStatus: 'string',
      cidrBlock: 'string',
      city: 'string',
      createTime: 'number',
      dataPlan: 'number',
      description: 'string',
      dpiMonitorStatus: 'string',
      dpiStatus: 'string',
      enableAdvancedMonitor: 'boolean',
      enableSoftwareConnectionAudit: 'boolean',
      endTime: 'number',
      enterpriseCode: 'string',
      hardwareVersion: 'string',
      IRIds: 'string',
      idaasApplicationId: 'string',
      idaasId: 'string',
      ipsecStatus: 'string',
      isp: 'string',
      links: DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinks,
      maxBandwidth: 'string',
      name: 'string',
      position: 'string',
      qosIds: 'string',
      resellerInstanceId: 'string',
      resellerUid: 'string',
      resourceGroupId: 'string',
      routingStrategy: 'string',
      securityLockThreshold: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
      smartAGUid: 'number',
      softwareVersion: 'string',
      status: 'string',
      upBandwidth4G: 'number',
      upBandwidthWan: 'number',
      userCount: 'number',
      vpnStatus: 'string',
    };
  }

  validate() {
    if(this.links && typeof (this.links as any).validate === 'function') {
      (this.links as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponseBodySmartAccessGateways extends $dara.Model {
  smartAccessGateway?: DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway[];
  static names(): { [key: string]: string } {
    return {
      smartAccessGateway: 'SmartAccessGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smartAccessGateway: { 'type': 'array', 'itemType': DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway },
    };
  }

  validate() {
    if(Array.isArray(this.smartAccessGateway)) {
      $dara.Model.validateArray(this.smartAccessGateway);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponseBody extends $dara.Model {
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
   * ADE68CEE-8E4F-4D0B-9EE9-2C2FFAABF41F
   */
  requestId?: string;
  smartAccessGateways?: DescribeSmartAccessGatewaysResponseBodySmartAccessGateways;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      smartAccessGateways: 'SmartAccessGateways',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      smartAccessGateways: DescribeSmartAccessGatewaysResponseBodySmartAccessGateways,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.smartAccessGateways && typeof (this.smartAccessGateways as any).validate === 'function') {
      (this.smartAccessGateways as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

