// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudAssetSummaryResponseBodyGroupedFieldsCloudAssetSummaryMetas extends $dara.Model {
  /**
   * @remarks
   * The subtype of the cloud service.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the cloud service. Valid values:
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
   * - **15**: Resource Access Management (RAM)
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
   * 16
   */
  assetType?: number;
  /**
   * @remarks
   * The total number of instances of this cloud service type.
   * 
   * @example
   * 16
   */
  instanceCount?: number;
  /**
   * @remarks
   * The total number of at-risk instances of this cloud service type.
   * 
   * @example
   * 5
   */
  instanceRiskCount?: number;
  /**
   * @remarks
   * The number of assets billed by instance.
   * 
   * @example
   * 1
   */
  instanceSaleCount?: number;
  /**
   * @remarks
   * Indicates whether the asset is billed by instance. Valid values:
   * - **true**: Billed by instance.
   * - **false**: Not billed by instance.
   */
  isInstanceSale?: boolean;
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
   * 3
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      assetSubType: 'AssetSubType',
      assetType: 'AssetType',
      instanceCount: 'InstanceCount',
      instanceRiskCount: 'InstanceRiskCount',
      instanceSaleCount: 'InstanceSaleCount',
      isInstanceSale: 'IsInstanceSale',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      instanceCount: 'number',
      instanceRiskCount: 'number',
      instanceSaleCount: 'number',
      isInstanceSale: 'boolean',
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

export class GetCloudAssetSummaryResponseBodyGroupedFields extends $dara.Model {
  /**
   * @remarks
   * The list of cloud service statistics information.
   */
  cloudAssetSummaryMetas?: GetCloudAssetSummaryResponseBodyGroupedFieldsCloudAssetSummaryMetas[];
  /**
   * @remarks
   * The total number of cloud service instances.
   * 
   * @example
   * 919
   */
  instanceCountTotal?: number;
  /**
   * @remarks
   * The total number of at-risk cloud service instances.
   * 
   * @example
   * 544
   */
  instanceRiskCountTotal?: number;
  /**
   * @remarks
   * The total number of cloud services billed by instance.
   * 
   * @example
   * 10
   */
  instanceSaleCountTotal?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAssetSummaryMetas: 'CloudAssetSummaryMetas',
      instanceCountTotal: 'InstanceCountTotal',
      instanceRiskCountTotal: 'InstanceRiskCountTotal',
      instanceSaleCountTotal: 'InstanceSaleCountTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssetSummaryMetas: { 'type': 'array', 'itemType': GetCloudAssetSummaryResponseBodyGroupedFieldsCloudAssetSummaryMetas },
      instanceCountTotal: 'number',
      instanceRiskCountTotal: 'number',
      instanceSaleCountTotal: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAssetSummaryMetas)) {
      $dara.Model.validateArray(this.cloudAssetSummaryMetas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAssetSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud asset summary information.
   */
  groupedFields?: GetCloudAssetSummaryResponseBodyGroupedFields;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * F5CF78A7-30AA-59DB-847F-13EE3AE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupedFields: 'GroupedFields',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupedFields: GetCloudAssetSummaryResponseBodyGroupedFields,
      requestId: 'string',
    };
  }

  validate() {
    if(this.groupedFields && typeof (this.groupedFields as any).validate === 'function') {
      (this.groupedFields as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

