// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudAssetSummaryRequestCloudAssetTypes extends $dara.Model {
  /**
   * @remarks
   * The subtype of the cloud service. The value is in the format of asset type - subtype. Valid values:
   * 
   * - **0**: Elastic Compute Service (ECS) server
   *     *  **1**: cloud disk (storage)
   *     *  **2**: security group
   *     *  **100**: instance
   * - **1**: load balancing
   *     *  **0**: load balancing
   *     *  **1**: Application Load Balancer (ALB)
   * - **3**: ApsaraDB RDS database
   *     *  **0**: instance
   * - **4**: ApsaraDB for MongoDB database
   *     *  **0**: instance
   * - **5**: Tair (Redis® OSS-Compatible) database
   *     *  **0**: instance
   * - **6**: Container Registry
   *     *  **1**: Enterprise Edition
   *     *  **2**: Personal Edition
   * - **8**: Container Service for Kubernetes (ACK)
   *     *  **0**: cluster
   * - **9**: Virtual Private Cloud (VPC)
   *     *  **0**: NAT gateway
   *     *  **1**: EIP
   *     *  **2**: VPN
   *     *  **3**: FLOW_LOG
   * - **11**: ActionTrail
   *     *  **0**: trail
   * - **12**: CDN
   *     *  **0**: instance
   * - **13**: Certificate Management Service (formerly SSL Certificates Service)
   *     *  **0**: certificate
   * - **14**: Apsara Devops
   *     *  **0**: organization
   * - **16**: Anti-DDoS
   *     *  **0**: instance
   * - **17**: Web Application Firewall (WAF)
   *     *  **0**: domain name
   * - **18**: Object Storage Service (OSS)
   *     *  **0**: Bucket
   * - **19**: cloud-native relational database PolarDB
   *     *  **0**: cluster
   * - **20**: ApsaraDB RDS for PostgreSQL database
   *     *  **0**: instance
   * - **21**: Microservices Engine (MSE)
   *     *  **0**: cluster
   * - **22**: Apsara File Storage NAS
   *     *  **0**: file system
   * - **23**: Data Security Center (DSC)
   *     *  **0**: instance
   * - **24**: Elastic IP Address (EIP)
   *     *  **0**: Anycast EIP
   * - **25**: Alibaba Cloud IDaaS EIAM
   *     *  **0**: instance
   * - **26**: PolarDB-X
   *     *  **0**: instance
   * - **27**: Elasticsearch
   *     *  **0**: instance
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * - **0**: Elastic Compute Service (ECS) server
   * - **1**: load balancing
   * - **3**: ApsaraDB RDS database
   * - **4**: ApsaraDB for MongoDB database
   * - **5**: Tair (Redis® OSS-Compatible) database
   * - **6**: Container Registry
   * - **8**: Container Service for Kubernetes (ACK)
   * - **9**: Virtual Private Cloud (VPC)
   * - **11**: ActionTrail
   * - **12**: CDN
   * - **13**: Certificate Management Service (formerly SSL Certificates Service)
   * - **14**: Apsara Devops
   * - **16**: Anti-DDoS
   * - **17**: Web Application Firewall (WAF)
   * - **18**: Object Storage Service (OSS)
   * - **19**: cloud-native relational database PolarDB
   * - **20**: ApsaraDB RDS for PostgreSQL database
   * - **21**: Microservices Engine (MSE)
   * - **22**: Apsara File Storage NAS
   * - **23**: Data Security Center (DSC)
   * - **24**: Elastic IP Address (EIP)
   * - **25**: Alibaba Cloud IDaaS EIAM
   * - **26**: PolarDB-X
   * - **27**: Elasticsearch
   * 
   * @example
   * 4
   */
  assetType?: number;
  /**
   * @remarks
   * The server vendor. Valid values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: non-cloud asset
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**: third-party cloud asset
   * - **8**: lightweight asset
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
   * The list of asset type information for cloud assets.
   */
  cloudAssetTypes?: GetCloudAssetSummaryRequestCloudAssetTypes[];
  /**
   * @remarks
   * Specifies whether to return sale-related data. Valid values:
   * - **true**: Returns sale-related data.
   * - **false**: Does not return sale-related data.
   * 
   * @example
   * true
   */
  isSaleData?: boolean;
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The list of cloud vendors to query.
   */
  vendors?: number[];
  static names(): { [key: string]: string } {
    return {
      cloudAssetTypes: 'CloudAssetTypes',
      isSaleData: 'IsSaleData',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      vendors: 'Vendors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssetTypes: { 'type': 'array', 'itemType': GetCloudAssetSummaryRequestCloudAssetTypes },
      isSaleData: 'boolean',
      resourceDirectoryAccountId: 'number',
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

