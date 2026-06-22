// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAssetInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the cloud asset has security alerts. Valid values:
   * - **YES**: Security alerts exist.
   * - **NO**: No security alerts exist.
   * 
   * @example
   * NO
   */
  alarmStatus?: string;
  /**
   * @remarks
   * The subtype of the cloud service.
   * The asset type-subtype. Valid values:
   * 
   * - **0**: Elastic Compute Service (ECS)
   * 
   *     * **0**: Instance
   *     * **1**: Disk (storage)
   *     * **2**: Security group
   * - **1**: Server Load Balancer (SLB)
   *     * **0**: Server Load Balancer
   *     * **1**: Application Load Balancer
   * - **3**: ApsaraDB RDS
   *     * **0**: Instance
   * - **4**: ApsaraDB for MongoDB
   *     * **0**: Instance
   * - **5**: ApsaraDB for Tair (compatible with Redis)
   *     * **0**: Instance
   * - **6**: Container Registry
   *     * **1**: Enterprise Edition
   *     * **2**: Personal Edition
   * - **8**: Container Service for Kubernetes (ACK)
   *     * **0**: Cluster
   * - **9**: Virtual Private Cloud (VPC)
   *     * **0**: NAT gateway
   *     * **1**: EIP
   *     * **2**: VPN
   *     * **3**: FLOW_LOG
   * - **11**: ActionTrail
   *     * **0**: Trail
   * - **12**: Alibaba Cloud CDN
   *     * **0**: Instance
   * - **13**: Certificate Management Service (formerly SSL Certificates Service)
   *     * **0**: Certificate
   * - **14**: Apsara Devops
   *     * **0**: Organization
   * - **16**: Anti-DDoS
   *     * **0**: Instance
   * - **17**: Web Application Firewall (WAF)
   *      * **0**: Domain name
   * - **18**: Object Storage Service (OSS)
   *     * **0**: Bucket
   * - **19**: PolarDB
   *     * **0**: Cluster
   * - **20**: ApsaraDB RDS for PostgreSQL
   *     * **0**: Instance
   * - **21**: Microservices Engine (MSE)
   *     * **0**: Cluster
   * - **22**: Apsara File Storage NAS
   *     * **0**: File system
   * - **23**: Data Security Center (DSC)
   *     * **0**: Instance
   * - **24**: Elastic IP Address (EIP)
   *     * **0**: Anycast EIP
   * - **25**: Identity as a Service - EIAM
   *     * **0**: Instance
   * - **26**: PolarDB-X
   *     * **0**: Instance
   * - **27**: Elasticsearch
   *     * **0**: Instance
   * 
   * @example
   * 0
   */
  assetSubType?: string;
  /**
   * @remarks
   * The name of the cloud asset subtype.
   * 
   * @example
   * SECURITY_GROUP
   */
  assetSubTypeName?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * - **0**: Elastic Compute Service (ECS)
   * - **1**: Server Load Balancer (SLB)
   * - **3**: ApsaraDB RDS
   * - **4**: ApsaraDB for MongoDB
   * - **5**: ApsaraDB for Tair (compatible with Redis)
   * - **6**: Container Registry
   * - **8**: Container Service for Kubernetes (ACK)
   * - **9**: Virtual Private Cloud (VPC)
   * - **11**: ActionTrail
   * - **12**: Alibaba Cloud CDN
   * - **13**: Certificate Management Service (formerly SSL Certificates Service)
   * - **14**: Apsara Devops
   * - **16**: Anti-DDoS
   * - **17**: Web Application Firewall (WAF)
   * - **18**: Object Storage Service (OSS)
   * - **19**: PolarDB
   * - **20**: ApsaraDB RDS for PostgreSQL
   * - **21**: Microservices Engine (MSE)
   * - **22**: Apsara File Storage NAS
   * - **23**: Data Security Center (DSC)
   * - **24**: Elastic IP Address (EIP)
   * - **25**: Identity as a Service - EIAM
   * - **26**: PolarDB-X
   * - **27**: Elasticsearch
   * 
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * The name of the cloud asset type.
   * 
   * @example
   * ECS
   */
  assetTypeName?: string;
  assetUuid?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1607365213000
   */
  createdTime?: number;
  /**
   * @remarks
   * The ID of the cloud asset instance.
   * 
   * @example
   * d-uf60vevzkztnflx7cny5
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name of the asset.
   * 
   * @example
   * yztest-l***
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 1.2.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The ID of the region to which the asset instance belongs.
   * 
   * @example
   * cn-hanghzou
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether the cloud asset has security risks. Valid values:
   * - **YES**: Exists.
   * - **NO**: Does not exist.
   * 
   * @example
   * NO
   */
  riskStatus?: string;
  saleCspm?: number;
  saleType?: number;
  /**
   * @remarks
   * The security information of the cloud asset.
   * 
   * @example
   * {"seriousNum":0,"appNum":0,"baselineMedium":0,"remindNum":0,"imageVulNntf":0,"cveNum":0,"vul":0,"uuid":"yuejia-test","emgNum":0,"weakPWNum":0,"imageMaliciousFileRemind":0,"imageBaselineMedium":0,"laterVulCount":0,"cmsNum":0,"imageMaliciousFileSerious":0,"agentlessMalicious":0,"suspNum":0,"imageBaselineHigh":0,"asapVulCount":0,"imageVulLater":0,"agentlessAll":0,"sysNum":0,"containerLater":0,"containerSuspicious":0,"imageBaselineNum":0,"newSuspicious":0,"nntfVulCount":0,"scaNum":0,"containerNntf":0,"health":0,"trojan":0,"suspicious":0,"imageMaliciousFileSuspicious":0,"containerRemind":0,"baselineLow":0,"imageVulAsap":0,"imageBaselineLow":0,"containerAsap":0,"agentlessBaseline":0,"agentlessVulSca":0,"agentlessVulCve":0,"containerSerious":0,"baselineHigh":0,"account":0,"baselineNum":5}
   */
  securityInfo?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: string[];
  /**
   * @remarks
   * The server vendor. Valid values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: Off-cloud asset
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**: Other cloud assets
   * - **8**: Lightweight asset
   * 
   * @example
   * 0
   */
  vendor?: number;
  /**
   * @remarks
   * The account ID of the multi-cloud instance.
   * 
   * @example
   * 123xxx
   */
  vendorUid?: string;
  /**
   * @remarks
   * The username of the multi-cloud instance.
   * 
   * @example
   * testxxx
   */
  vendorUserName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      assetSubType: 'AssetSubType',
      assetSubTypeName: 'AssetSubTypeName',
      assetType: 'AssetType',
      assetTypeName: 'AssetTypeName',
      assetUuid: 'AssetUuid',
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      regionId: 'RegionId',
      riskStatus: 'RiskStatus',
      saleCspm: 'SaleCspm',
      saleType: 'SaleType',
      securityInfo: 'SecurityInfo',
      tags: 'Tags',
      vendor: 'Vendor',
      vendorUid: 'VendorUid',
      vendorUserName: 'VendorUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: 'string',
      assetSubType: 'string',
      assetSubTypeName: 'string',
      assetType: 'number',
      assetTypeName: 'string',
      assetUuid: 'string',
      createdTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      regionId: 'string',
      riskStatus: 'string',
      saleCspm: 'number',
      saleType: 'number',
      securityInfo: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      vendor: 'number',
      vendorUid: 'string',
      vendorUserName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAssetInstancesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of data entries displayed on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in paginated queries.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of cloud assets.
   * 
   * @example
   * 69
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

export class ListCloudAssetInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of detailed cloud asset information.
   */
  instances?: ListCloudAssetInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCloudAssetInstancesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of this request, which is a unique identifier generated by Alibaba Cloud for the request. It can be used to troubleshoot and locate issues.
   * 
   * @example
   * 028CF634-5268-5660-9575-48C9ED6BF880
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - **true**: The API call was successful.
   * - **false**: The API call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListCloudAssetInstancesResponseBodyInstances },
      pageInfo: ListCloudAssetInstancesResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
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

