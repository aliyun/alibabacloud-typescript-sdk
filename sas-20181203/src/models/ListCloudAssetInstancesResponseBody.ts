// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAssetInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * Indicates whether alerts are generated for the cloud asset. Valid values:
   * 
   * *   **YES**
   * *   **NO**
   * 
   * @example
   * NO
   */
  alarmStatus?: string;
  /**
   * @remarks
   * The subtype of the cloud service. The subtype of the cloud asset. Valid values:
   * 
   * *   **0**: ECS
   * 
   *     *   **0**: instance
   *     *   **1**: disk (storage)
   *     *   **2**: security group
   * 
   * *   **1**: SLB
   * 
   *     *   **0**: SLB
   *     *   **1**: Application Load Balancer (ALB)
   * 
   * *   **3**: ApsaraDB RDS
   * 
   *     *   **0**: instance
   * 
   * *   **4**: ApsaraDB for MongoDB
   * 
   *     *   **0**: instance
   * 
   * *   **5**: ApsaraDB for Redis
   * 
   *     *   **0**: instance
   * 
   * *   **6**: Container Registry
   * 
   *     *   **1**: Enterprise Edition
   *     *   **2**: Personal Edition
   * 
   * *   **8**: ACK
   * 
   *     *   **0**: cluster
   * 
   * *   **9**: VPC
   * 
   *     *   **0**: NAT gateway
   *     *   **1**: EIP
   *     *   **2**: VPN
   *     *   **3**: FLOW_LOG
   * 
   * *   **11**: ActionTrail
   * 
   *     *   **0**: trail
   * 
   * *   **12**: Alibaba Cloud CDN
   * 
   *     *   **0**: instance
   * 
   * *   **13**: Certificate Management Service (formerly SSL Certificates Service)
   * 
   *     *   **0**: certificate
   * 
   * *   **14**: Apsara Devops
   * 
   *     *   **0**: organization
   * 
   * *   **16**: Anti-DDoS
   * 
   *     *   **0**: instance
   * 
   * *   **17**: WAF
   * 
   *     *   **0**: domain name
   * 
   * *   **18**: OSS
   * 
   *     *   **0**: bucket
   * 
   * *   **19**: PolarDB
   * 
   *     *   **0**: cluster
   * 
   * *   **20**: ApsaraDB RDS for PostgreSQL
   * 
   *     *   **0**: instance
   * 
   * *   **21**: MSE
   * 
   *     *   **0**: cluster
   * 
   * *   **22**: NAS
   * 
   *     *   **0**: file system
   * 
   * *   **23**: DSC
   * 
   *     *   **0**: instance
   * 
   * *   **24**: EIP
   * 
   *     *   **0**: Anycast EIP
   * 
   * *   **25**: IDaaS EIAM
   * 
   *     *   **0**: instance
   * 
   * *   **26**: PolarDB-X
   * 
   *     *   **0**: instance
   * 
   * *   **27**: Elasticsearch
   * 
   *     *   **0**: instance
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
   * The type of the cloud asset. Valid values:
   * 
   * *   **0**: Elastic Compute Service (ECS)
   * *   **1**: Server Load Balancer (SLB)
   * *   **3**: ApsaraDB RDS
   * *   **4**: ApsaraDB for MongoDB
   * *   **5**: ApsaraDB for Redis
   * *   **6**: Container Registry
   * *   **8**: Container Service for Kubernetes (ACK)
   * *   **9**: Virtual Private Cloud (VPC)
   * *   **11**: ActionTrail
   * *   **12**: Alibaba Cloud CDN
   * *   **13**: Certificate Management Service (formerly SSL Certificates Service)
   * *   **14**: Apsara Devops
   * *   **16**: Anti-DDoS
   * *   **17**: Web Application Firewall (WAF)
   * *   **18**: Object Storage Service (OSS)
   * *   **19**: PolarDB
   * *   **20**: ApsaraDB RDS for PostgreSQL
   * *   **21**: Microservices Engine (MSE)
   * *   **22**: File Storage NAS (NAS)
   * *   **23**: Data Security Center (DSC)
   * *   **24**: Elastic IP Address (EIP)
   * *   **25**: Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM)
   * *   **26**: PolarDB-X
   * *   **27**: Elasticsearch
   * 
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * The type name of the cloud asset.
   * 
   * @example
   * ECS
   */
  assetTypeName?: string;
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
   * The instance ID of the cloud asset.
   * 
   * @example
   * d-uf60vevzkztnflx7cny5
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name of the cloud asset.
   * 
   * @example
   * yztest-l***
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the cloud asset.
   * 
   * @example
   * 1.2.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The ID of the region to which the cloud asset belongs.
   * 
   * @example
   * cn-hanghzou
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether risks are detected on the cloud asset. Valid values:
   * 
   * *   **YES**
   * *   **NO**
   * 
   * @example
   * NO
   */
  riskStatus?: string;
  /**
   * @remarks
   * The security information about the cloud asset.
   * 
   * @example
   * {"seriousNum":0,"appNum":0,"baselineMedium":0,"remindNum":0,"imageVulNntf":0,"cveNum":0,"vul":0,"uuid":"yuejia-test","emgNum":0,"weakPWNum":0,"imageMaliciousFileRemind":0,"imageBaselineMedium":0,"laterVulCount":0,"cmsNum":0,"imageMaliciousFileSerious":0,"agentlessMalicious":0,"suspNum":0,"imageBaselineHigh":0,"asapVulCount":0,"imageVulLater":0,"agentlessAll":0,"sysNum":0,"containerLater":0,"containerSuspicious":0,"imageBaselineNum":0,"newSuspicious":0,"nntfVulCount":0,"scaNum":0,"containerNntf":0,"health":0,"trojan":0,"suspicious":0,"imageMaliciousFileSuspicious":0,"containerRemind":0,"baselineLow":0,"imageVulAsap":0,"imageBaselineLow":0,"containerAsap":0,"agentlessBaseline":0,"agentlessVulSca":0,"agentlessVulCve":0,"containerSerious":0,"baselineHigh":0,"account":0,"baselineNum":5}
   */
  securityInfo?: string;
  /**
   * @remarks
   * Tag list.
   */
  tags?: string[];
  /**
   * @remarks
   * The service provider (SP) of the cloud asset. Valid values:
   * 
   * *   **0**: a cloud asset provided by Alibaba Cloud
   * *   **1**: a third-party cloud asset
   * *   **2**: a cloud asset in a data center
   * *   **3**, **4**, **5**, and **7**: other cloud asset
   * *   **8**: a lightweight cloud asset
   * 
   * @example
   * 0
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      assetSubType: 'AssetSubType',
      assetSubTypeName: 'AssetSubTypeName',
      assetType: 'AssetType',
      assetTypeName: 'AssetTypeName',
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      regionId: 'RegionId',
      riskStatus: 'RiskStatus',
      securityInfo: 'SecurityInfo',
      tags: 'Tags',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: 'string',
      assetSubType: 'string',
      assetSubTypeName: 'string',
      assetType: 'number',
      assetTypeName: 'string',
      createdTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      regionId: 'string',
      riskStatus: 'string',
      securityInfo: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      vendor: 'number',
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * The details of the cloud assets.
   */
  instances?: ListCloudAssetInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCloudAssetInstancesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 028CF634-5268-5660-9575-48C9ED6BF880
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
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

