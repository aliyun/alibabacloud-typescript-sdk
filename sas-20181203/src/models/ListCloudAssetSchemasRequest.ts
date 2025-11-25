// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAssetSchemasRequestCloudAssetTypes extends $dara.Model {
  /**
   * @remarks
   * The subtype of the cloud service or asset. Valid values:
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
   * *   **4**: MongoDB
   * 
   *     *   **0**: instance
   * 
   * *   **5**: Redis
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
   *     *   **1**: Elastic IP address (EIP)
   *     *   **2**: VPN
   *     *   **3**: VPC Flow Logs
   * 
   * *   **11**: ActionTrail
   * 
   *     *   **0**: trail
   * 
   * *   **12**: CDN
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
  assetSubType?: number;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **0**: Elastic Compute Service (ECS)
   * *   **1**: Server Load Balancer (SLB)
   * *   **3**: ApsaraDB RDS
   * *   **4**: ApsaraDB for MongoDB (MongoDB)
   * *   **5**: ApsaraDB for Redis (Redis)
   * *   **6**: Container Registry
   * *   **8**: Container Service for Kubernetes (ACK)
   * *   **9**: Virtual Private Cloud (VPC)
   * *   **11**: ActionTrail
   * *   **12**: Alibaba Cloud CDN (CDN)
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
   * *   **25**: IDaaS EIAM
   * *   **26**: PolarDB-X
   * *   **27**: Elasticsearch
   * 
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * The server type. Valid values:
   * 
   * *   **0**: a cloud asset provided by Alibaba Cloud
   * *   **1**: a cloud asset outside Alibaba Cloud
   * *   **2**: a cloud asset in a data center
   * *   **3**, **4**, **5**, and **7**: a cloud asset provided by a third-party service provider
   * *   **8**: a lightweight cloud asset
   * 
   * @example
   * 0
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      assetSubType: 'AssetSubType',
      assetType: 'AssetType',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAssetSchemasRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to filter out attributes that can be associated with other assets.
   * 
   * @example
   * true
   */
  associatedDataOnly?: boolean;
  /**
   * @remarks
   * The types of cloud assets.
   */
  cloudAssetTypes?: ListCloudAssetSchemasRequestCloudAssetTypes[];
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * List of asset data names
   */
  dataNames?: string[];
  /**
   * @remarks
   * The language type for requesting and receiving messages, with a default value of **zh**. The values can be: - **zh**: Chinese - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      associatedDataOnly: 'AssociatedDataOnly',
      cloudAssetTypes: 'CloudAssetTypes',
      currentPage: 'CurrentPage',
      dataNames: 'DataNames',
      lang: 'Lang',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedDataOnly: 'boolean',
      cloudAssetTypes: { 'type': 'array', 'itemType': ListCloudAssetSchemasRequestCloudAssetTypes },
      currentPage: 'number',
      dataNames: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAssetTypes)) {
      $dara.Model.validateArray(this.cloudAssetTypes);
    }
    if(Array.isArray(this.dataNames)) {
      $dara.Model.validateArray(this.dataNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

