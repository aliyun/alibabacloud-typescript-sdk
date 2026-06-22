// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudAssetSummaryRequestCloudAssetTypes extends $dara.Model {
  /**
   * @remarks
   * The subtype of the cloud service.
   * The asset type-subtype. Valid values:
   * 
   * - **0**: Elastic Compute Service (ECS) 
   *     *  **1**: Disk (Storage)
   *     *  **2**: Security Group
   *     *  **100**: Instance
   * - **1**: Server Load Balancer
   *     *  **0**: Server Load Balancer (SLB)
   *     *  **1**: Application Load Balancer (ALB)
   * - **3**: ApsaraDB RDS
   *     *  **0**: Instance
   * - **4**: ApsaraDB for MongoDB
   *     *  **0**: Instance
   * - **5**: ApsaraDB for Tair (compatible with Redis)
   *     *  **0**: Instance
   * - **6**: Container Registry
   *     *  **1**: Enterprise Edition
   *     *  **2**: Personal Edition
   * - **8**: Container Service for Kubernetes (ACK)
   *     *  **0**: Cluster
   * - **9**: Virtual Private Cloud (VPC)
   *     *  **0**: NAT Gateway
   *     *  **1**: EIP
   *     *  **2**: VPN
   *     *  **3**: FLOW_LOG
   * - **11**: ActionTrail
   *     *  **0**: Trail
   * - **12**: Alibaba Cloud CDN
   *     *  **0**: Instance
   * - **13**: Certificate Management Service (formerly SSL Certificates Service)
   *     *  **0**: Certificate
   * - **14**: Apsara Devops
   *     *  **0**: Organization
   * - **16**: Anti-DDoS
   *     *  **0**: Instance
   * - **17**: Web Application Firewall (WAF)
   *     *  **0**: Domain name
   * - **18**: Object Storage Service (OSS)
   *     *  **0**: Bucket
   * - **19**: PolarDB
   *     *  **0**: Cluster
   * - **20**: ApsaraDB RDS for PostgreSQL
   *     *  **0**: Instance
   * - **21**: Microservices Engine (MSE)
   *     *  **0**: Cluster
   * - **22**: Apsara File Storage NAS
   *     *  **0**: File system
   * - **23**: Data Security Center (DSC)
   *     *  **0**: Instance
   * - **24**: Elastic IP Address (EIP)
   *     *  **0**: Anycast EIP
   * - **25**: Identity as a Service - EIAM
   *     *  **0**: Instance
   * - **26**: PolarDB-X
   *     *  **0**: Instance
   * - **27**: Elasticsearch
   *     *  **0**: Instance
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of asset. Valid values:
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
   * 4
   */
  assetType?: number;
  /**
   * @remarks
   * Server vendor. Valid values:
   * 
   * - **0**: Alibaba Cloud assets
   * - **1**: Off-cloud assets
   * - **2**: IDC assets
   * - **3**, **4**, **5**, **7**: Other cloud assets
   * - **8**: Lightweight assets
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

export class GetCloudAssetSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The list of asset type information of cloud assets.
   */
  cloudAssetTypes?: GetCloudAssetSummaryRequestCloudAssetTypes[];
  isSaleData?: boolean;
  /**
   * @remarks
   * The list of cloud vendors to query.
   */
  vendors?: number[];
  static names(): { [key: string]: string } {
    return {
      cloudAssetTypes: 'CloudAssetTypes',
      isSaleData: 'IsSaleData',
      vendors: 'Vendors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssetTypes: { 'type': 'array', 'itemType': GetCloudAssetSummaryRequestCloudAssetTypes },
      isSaleData: 'boolean',
      vendors: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.cloudAssetTypes)) {
      $dara.Model.validateArray(this.cloudAssetTypes);
    }
    if(Array.isArray(this.vendors)) {
      $dara.Model.validateArray(this.vendors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

