// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAssetInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the cloud asset has security alerts. Valid values:
   * - **YES**: The asset has security alerts.
   * - **NO**: The asset has no security alerts.
   * 
   * @example
   * NO
   */
  alarmStatus?: string;
  /**
   * @remarks
   * The subtype of the cloud product. The asset type-subtype mapping. Valid values:
   * 
   * - **0**: ECS
   * 
   *     * **0**: instance
   *     * **1**: cloud disk (storage)
   *     * **2**: security group
   * - **1**: load balancing
   *     * **0**: Classic Load Balancer
   *     * **1**: Application Load Balancer
   * - **3**: ApsaraDB RDS
   *     * **0**: instance
   * - **4**: ApsaraDB for MongoDB
   *     * **0**: instance
   * - **5**: Tair (Redis® OSS-Compatible)
   *     * **0**: instance
   * - **6**: Container Registry
   *     * **1**: Enterprise Edition
   *     * **2**: Personal Edition
   * - **8**: Container Service for Kubernetes
   *     * **0**: cluster
   * - **9**: Virtual Private Cloud (VPC)
   *     * **0**: NAT gateway
   *     * **1**: EIP
   *     * **2**: VPN
   *     * **3**: FLOW_LOG
   * - **11**: ActionTrail
   *     * **0**: trail
   * - **12**: CDN
   *     * **0**: instance
   * - **13**: SSL Certificates Service
   *     * **0**: certificate
   * - **14**: Yunxiao
   *     * **0**: organization
   * - **16**: Anti-DDoS
   *     * **0**: instance
   * - **17**: Web Application Firewall
   *      * **0**: domain name
   * - **18**: Object Storage Service
   *     * **0**: bucket
   * - **19**: cloud-native relational database PolarDB
   *     * **0**: cluster
   * - **20**: ApsaraDB RDS for PostgreSQL
   *     * **0**: instance
   * - **21**: Microservices Engine (MSE)
   *     * **0**: cluster
   * - **22**: Apsara File Storage NAS
   *     * **0**: file system
   * - **23**: Data Security Center
   *     * **0**: instance
   * - **24**: Elastic IP Address
   *     * **0**: anycast elastic IP address
   * - **25**: EIAM
   *     * **0**: instance
   * - **26**: PolarDB-X
   *     * **0**: instance
   * - **27**: Elasticsearch
   *     * **0**: instance
   * 
   * @example
   * 0
   */
  assetSubType?: string;
  /**
   * @remarks
   * The subtype name of the cloud asset.
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
   * - **1**: load balancing
   * - **3**: ApsaraDB RDS
   * - **4**: ApsaraDB for MongoDB
   * - **5**: Tair (Redis® OSS-Compatible)
   * - **6**: Container Registry
   * - **8**: Container Service for Kubernetes
   * - **9**: Virtual Private Cloud (VPC)
   * - **11**: ActionTrail
   * - **12**: CDN
   * - **13**: SSL Certificates Service (formerly Digital Certificate Management Service)
   * - **14**: Yunxiao
   * - **16**: Anti-DDoS
   * - **17**: Web Application Firewall
   * - **18**: Object Storage Service
   * - **19**: cloud-native relational database PolarDB
   * - **20**: ApsaraDB RDS for PostgreSQL
   * - **21**: Microservices Engine (MSE)
   * - **22**: Apsara File Storage NAS
   * - **23**: Data Security Center
   * - **24**: Elastic IP Address
   * - **25**: EIAM
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
  /**
   * @remarks
   * The UUID of the asset.
   */
  assetUuid?: string;
  /**
   * @remarks
   * The time when the instance was created. The value is a UNIX timestamp in milliseconds.
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
   * The name of the asset instance.
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
   * The ID of the region where the asset instance resides.
   * 
   * @example
   * cn-hanghzou
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether the cloud asset has security risks. Valid values:
   * - **YES**: The asset has security risks.
   * - **NO**: The asset has no security risks.
   * 
   * @example
   * NO
   */
  riskStatus?: string;
  /**
   * @remarks
   * The Cloud Security Posture Management (CSPM) sale identifier.
   * 
   * @example
   * 0
   */
  saleCspm?: number;
  /**
   * @remarks
   * The sale type.
   * 
   * @example
   * 0
   */
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
   * The list of tags.
   */
  tags?: string[];
  /**
   * @remarks
   * The asset vendor. Valid values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: off-cloud asset
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**: other cloud assets
   * - **8**: lightweight asset
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
   * The current page number in a paged query.
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
   * The list of detailed information about cloud assets.
   */
  instances?: ListCloudAssetInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCloudAssetInstancesResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID. This is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot and locate issues.
   * 
   * @example
   * 028CF634-5268-5660-9575-48C9ED6BF880
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
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

