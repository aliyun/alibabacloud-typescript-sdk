// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExposedInstanceListResponseBodyExposedInstancesExposureComponentList extends $dara.Model {
  /**
   * @remarks
   * The type of the exposed component.
   * 
   * @example
   * system_service
   */
  componentBizType?: string;
  /**
   * @remarks
   * The exposed component.
   * 
   * @example
   * openssh
   */
  componentName?: string;
  /**
   * @remarks
   * The version of the exposed component.
   * 
   * @example
   * 8.7p1
   */
  componentVersion?: string;
  /**
   * @remarks
   * The exposed port.
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
   * The number of high-severity vulnerabilities exposed on the Internet that can be exploited by attackers.
   * 
   * @example
   * 0
   */
  asapVulCount?: number;
  /**
   * @remarks
   * The asset type. Valid values:  
   * - **0**: Elastic Computing Service (ECS) server
   * - **1**: load balancing (SLB)
   * - **2**: NAT gateway
   * - **3**: ApsaraDB RDS database
   * - **4**: MongoDB database
   * - **5**: Redis database
   * - **6**: container image (IMAGE)
   * - **7**: container (CONTAINER).
   * 
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * The JSON string of cloud service information for database-type assets. The fields include:
   * 
   * - assetSubType: the asset subtype
   * - assetSubTypeName: the name of the asset subtype
   * - assetType: the asset type
   * - assetTypeName: the name of the asset type
   * - vendor: the asset vendor.
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
   * The number of baseline weak password risks.
   * 
   * @example
   * 0
   */
  exploitHealthCount?: number;
  /**
   * @remarks
   * The system component exposed on the Internet.
   * 
   * @example
   * openssl,openssh
   */
  exposureComponent?: string;
  /**
   * @remarks
   * The list of exposed component information.
   */
  exposureComponentList?: DescribeExposedInstanceListResponseBodyExposedInstancesExposureComponentList[];
  /**
   * @remarks
   * The public IP address exposed on the Internet.
   * 
   * @example
   * 116.12.XX.XX
   */
  exposureIp?: string;
  /**
   * @remarks
   * The port exposed on the Internet.
   * 
   * @example
   * 22
   */
  exposurePort?: string;
  /**
   * @remarks
   * The expose type. Valid values:
   * - **INTERNET_IP**: public IP addresses of Elastic Compute Service (ECS) instances
   * - **SLB**: public IP address of a load balancing SLB instance
   * - **EIP**: elastic IP address (EIP)
   * - **DNAT**: NAT gateway that uses the DNAT feature to connect to the Internet
   * 
   * - **DB_CONNECTION**: public network connection of a database.
   * 
   * @example
   * INTERNET_IP
   */
  exposureType?: string;
  /**
   * @remarks
   * The instance ID that corresponds to the expose type. Different expose types correspond to different instance IDs. Valid values:
   * - If ExposureType is **INTERNET_IP**: the value is empty.
   * - If ExposureType is **SLB**: the value is the ID of the load balancing public instance.
   * - If ExposureType is **EIP**: the value is the ID of the EIP instance.
   * - If ExposureType is **DNAT**: the value is the ID of the NAT gateway instance.
   * - If ExposureType is **DB_CONNECTION**: the value is the ID of the database instance.
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
   * The number of medium-severity vulnerabilities exposed on the Internet that can be exploited by attackers.
   * 
   * @example
   * 0
   */
  laterVulCount?: number;
  /**
   * @remarks
   * The number of low-severity vulnerabilities exposed on the Internet that can be exploited by attackers.
   * 
   * @example
   * 0
   */
  nntfVulCount?: number;
  /**
   * @remarks
   * The ID of the region where the asset resides.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The total number of vulnerabilities exposed on the Internet that can be exploited by attackers.
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
   * The number of entries returned on the current page in a paged query.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of Internet-exposed assets.
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
   * The list of asset exposure analysis results.
   */
  exposedInstances?: DescribeExposedInstanceListResponseBodyExposedInstances[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeExposedInstanceListResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
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

