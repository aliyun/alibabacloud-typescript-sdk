// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudAssetSummaryRequestCloudAssetTypes extends $dara.Model {
  /**
   * @remarks
   * Subtypes of cloud products. Asset type-subtype. Values:
   * - **0**: ECS (Elastic Compute Service)
   *   *  **1**: Disk (Storage)
   *   *  **2**: Security Group
   *   *  **100**: Instance
   * - **1**: Load Balancer 
   *   *  **0**: Load Balancer 
   *   *  **1**: Application Load Balancer 
   * - **3**: ApsaraDB RDS 
   *   *  **0**: Instance 
   * - **4**: ApsaraDB for MongoDB 
   *   *  **0**: Instance 
   * - **5**: ApsaraDB Tair (Redis Compatible) 
   *   *  **0**: Instance 
   * - **6**: Container Registry 
   *   *  **1**: Enterprise Edition 
   *   *  **2**: Personal Edition 
   * - **8**: Container Service for Kubernetes 
   *   *  **0**: Cluster 
   * - **9**: Virtual Private Cloud (VPC) 
   *   *  **0**: NAT Gateway 
   *   *  **1**: EIP (Elastic IP) 
   *   *  **2**: VPN 
   *   *  **3**: FLOW_LOG 
   * - **11**: ActionTrail 
   *   *  **0**: Trail 
   * - **12**: CDN 
   *   *  **0**: Instance 
   * - **13**: Digital Certificate Management Service (formerly SSL Certificates) 
   *   *  **0**: Certificate 
   * - **14**: DevOps 
   *   *  **0**: Organization 
   * - **16**: DDoS Protection 
   *   *  **0**: Instance 
   * - **17**: Web Application Firewall 
   *   *  **0**: Domain 
   * - **18**: Object Storage 
   *   *  **0**: Bucket 
   * - **19**: PolarDB (Cloud-Native Relational Database) 
   *   *  **0**: Cluster 
   * - **20**: ApsaraDB for PostgreSQL 
   *   *  **0**: Instance 
   * - **21**: Microservices Engine 
   *   *  **0**: Cluster 
   * - **22**: File Storage NAS 
   *   *  **0**: File System 
   * - **23**: Data Security Center 
   *   *  **0**: Instance 
   * - **24**: Elastic Public IP 
   *   *  **0**: Anycast Elastic Public IP 
   * - **25**: Cloud Identity Service - EIAM 
   *   *  **0**: Instance 
   * - **26**: PolarDB-X 
   *   *  **0**: Instance 
   * - **27**: Elasticsearch 
   *   *  **0**: Instance
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of asset. Values:
   * - **0**: Elastic Compute Service (ECS) 
   * - **1**: Load Balancer 
   * - **3**: ApsaraDB for RDS 
   * - **4**: ApsaraDB for MongoDB 
   * - **5**: ApsaraDB for Tair (Redis compatible) 
   * - **6**: Container Registry 
   * - **8**: Container Service for Kubernetes 
   * - **9**: Virtual Private Cloud (VPC) 
   * - **11**: ActionTrail 
   * - **12**: Content Delivery Network (CDN) 
   * - **13**: SSL Certificates (now known as Certificate Management Service) 
   * - **14**: DevOps 
   * - **16**: DDoS Protection 
   * - **17**: Web Application Firewall 
   * - **18**: Object Storage Service (OSS) 
   * - **19**: PolarDB 
   * - **20**: ApsaraDB for PostgreSQL 
   * - **21**: Microservices Engine 
   * - **22**: File Storage NAS 
   * - **23**: Data Security Center 
   * - **24**: Elastic IP Address 
   * - **25**: Cloud Identity Service - EIAM 
   * - **26**: PolarDB-X 
   * - **27**: Elasticsearch
   * 
   * @example
   * 4
   */
  assetType?: number;
  /**
   * @remarks
   * Server vendor. Values:
   * - **0**: Alibaba Cloud Asset 
   * - **1**: Non-cloud Asset 
   * - **2**: IDC Asset 
   * - **3**, **4**, **5**, **7**: Other Cloud Assets 
   * - **8**: Lightweight Asset
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
   * List of asset type information for cloud assets
   */
  cloudAssetTypes?: GetCloudAssetSummaryRequestCloudAssetTypes[];
  /**
   * @remarks
   * List of cloud vendors to be queried.
   */
  vendors?: number[];
  static names(): { [key: string]: string } {
    return {
      cloudAssetTypes: 'CloudAssetTypes',
      vendors: 'Vendors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssetTypes: { 'type': 'array', 'itemType': GetCloudAssetSummaryRequestCloudAssetTypes },
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

