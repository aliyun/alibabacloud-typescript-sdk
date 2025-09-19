// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExposedInstanceListResponseBodyExposedInstancesExposureComponentList extends $dara.Model {
  /**
   * @remarks
   * Expose component type.
   * 
   * @example
   * system_service
   */
  componentBizType?: string;
  /**
   * @remarks
   * Expose components.
   * 
   * @example
   * openssh
   */
  componentName?: string;
  /**
   * @remarks
   * Expose component version.
   * 
   * @example
   * 8.7p1
   */
  componentVersion?: string;
  /**
   * @remarks
   * Exposed port.
   * 
   * @example
   * 22
   */
  listenPort?: string;
  static names(): { [key: string]: string } {
    return {
      componentBizType: 'ComponentBizType',
      componentName: 'ComponentName',
      componentVersion: 'ComponentVersion',
      listenPort: 'ListenPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentBizType: 'string',
      componentName: 'string',
      componentVersion: 'string',
      listenPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceListResponseBodyExposedInstances extends $dara.Model {
  /**
   * @remarks
   * The number of high-severity vulnerabilities that are exposed on the Internet and can be exploited by attackers.
   * 
   * @example
   * 0
   */
  asapVulCount?: number;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **0**: an ECS instance.
   * *   **1**: a SLB instance.
   * *   **2**: a NAT gateway.
   * *   **3**: an ApsaraDB RDS instance.
   * *   **4**: an ApsaraDB for MongoDB instance.
   * *   **5**: an ApsaraDB for Redis instance.
   * *   **6**: a container image.
   * *   **7**: a container.
   * 
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * The JSON string that specifies the information about a database asset, which contains the following fields.
   * 
   * *   assetSubType: the asset subtype.
   * *   assetSubTypeName: the name of the asset subtype.
   * *   assetType: the type of the asset.
   * *   assetTypeName: the name of the asset type.
   * *   vendor: the service provider of the asset.
   * 
   * @example
   * {assetSubTypeName":"INSTANCE","assetType":3,"assetTypeName":"RDS","vendor":0}
   */
  cloudAssetInfo?: string;
  /**
   * @remarks
   * The number of CSPM risks.
   * 
   * @example
   * 0
   */
  cspmAlarmCount?: number;
  /**
   * @remarks
   * The number of weak password risks.
   * 
   * @example
   * 0
   */
  exploitHealthCount?: number;
  /**
   * @remarks
   * The server component that is exposed on the Internet.
   * 
   * @example
   * openssl,openssh
   */
  exposureComponent?: string;
  /**
   * @remarks
   * Expose component information list.
   */
  exposureComponentList?: DescribeExposedInstanceListResponseBodyExposedInstancesExposureComponentList[];
  /**
   * @remarks
   * The public IP address that is exposed on the Internet.
   * 
   * @example
   * 116.12.XX.XX
   */
  exposureIp?: string;
  /**
   * @remarks
   * The port that is exposed on the Internet.
   * 
   * @example
   * 22
   */
  exposurePort?: string;
  /**
   * @remarks
   * The resource from which the asset is exposed. Valid values:
   * 
   * *   **INTERNET_IP**: the public IP address of an ECS instance.
   * *   **SLB**: the public IP address of a Server Load Balancer (SLB) instance.
   * *   **EIP**: an elastic IP address (EIP).
   * *   **DNAT**: the NAT gateway that connects to the Internet by using the Destination Network Address Translation (DNAT) feature.
   * *   **DB_CONNECTION**: the public endpoint of a database.
   * 
   * @example
   * INTERNET_IP
   */
  exposureType?: string;
  /**
   * @remarks
   * The ID of the instance to which the resource belongs. The valid values of this parameter vary based on the value of the ExposureType parameter.
   * 
   * *   If the value of the ExposureType parameter is **INTERNET_IP**, this parameter is empty.
   * *   If the value of the ExposureType parameter is **SLB**, the value of this parameter is the ID of the SLB instance.
   * *   If the value of the ExposureType parameter is **EIP**, the value of this parameter is the ID of the EIP.
   * *   If the value of the ExposureType parameter is **DNAT**, the value of this parameter is the ID of the NAT gateway.
   * *   If the value of the ExposureType parameter is **DB_CONNECTION**, the value of this parameter is the ID of the database.
   * 
   * @example
   * i-ew11313a****
   */
  exposureTypeId?: string;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * 9469268
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the server group.
   * 
   * @example
   * testGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * i-bp1g6wxdwps7s9dz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * abc_centos7.2_005
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 116.12.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The number of medium-severity vulnerabilities that are exposed on the Internet and can be exploited by attackers.
   * 
   * @example
   * 0
   */
  laterVulCount?: number;
  /**
   * @remarks
   * The number of low-severity vulnerabilities that are exposed on the Internet and can be exploited by attackers.
   * 
   * @example
   * 0
   */
  nntfVulCount?: number;
  /**
   * @remarks
   * The ID of the region in which the asset resides.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The total number of vulnerabilities that are exposed on the Internet and can be exploited by attackers.
   * 
   * @example
   * 0
   */
  totalVulCount?: number;
  /**
   * @remarks
   * The UUID of the server or the instance ID of the cloud service.
   * 
   * @example
   * dd803d9e-a337-4add-9c5b-7d503e08****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      asapVulCount: 'AsapVulCount',
      assetType: 'AssetType',
      cloudAssetInfo: 'CloudAssetInfo',
      cspmAlarmCount: 'CspmAlarmCount',
      exploitHealthCount: 'ExploitHealthCount',
      exposureComponent: 'ExposureComponent',
      exposureComponentList: 'ExposureComponentList',
      exposureIp: 'ExposureIp',
      exposurePort: 'ExposurePort',
      exposureType: 'ExposureType',
      exposureTypeId: 'ExposureTypeId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      laterVulCount: 'LaterVulCount',
      nntfVulCount: 'NntfVulCount',
      regionId: 'RegionId',
      totalVulCount: 'TotalVulCount',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asapVulCount: 'number',
      assetType: 'number',
      cloudAssetInfo: 'string',
      cspmAlarmCount: 'number',
      exploitHealthCount: 'number',
      exposureComponent: 'string',
      exposureComponentList: { 'type': 'array', 'itemType': DescribeExposedInstanceListResponseBodyExposedInstancesExposureComponentList },
      exposureIp: 'string',
      exposurePort: 'string',
      exposureType: 'string',
      exposureTypeId: 'string',
      groupId: 'number',
      groupName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      laterVulCount: 'number',
      nntfVulCount: 'number',
      regionId: 'string',
      totalVulCount: 'number',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exposureComponentList)) {
      $dara.Model.validateArray(this.exposureComponentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
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

export class DescribeExposedInstanceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the exposures.
   */
  exposedInstances?: DescribeExposedInstanceListResponseBodyExposedInstances[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeExposedInstanceListResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 598A4A61-ABA7-456B-8725-7378258276D9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exposedInstances: 'ExposedInstances',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedInstances: { 'type': 'array', 'itemType': DescribeExposedInstanceListResponseBodyExposedInstances },
      pageInfo: DescribeExposedInstanceListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exposedInstances)) {
      $dara.Model.validateArray(this.exposedInstances);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

