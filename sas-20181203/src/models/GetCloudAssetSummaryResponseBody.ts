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
   * *   **15**: Resource Access Management (RAM)
   * *   **16**: Anti-DDoS
   * *   **17**: Web Application Firewall (WAF)
   * *   **18**: Object Storage Service (OSS)
   * *   **19**: PolarDB
   * *   **20**: ApsaraDB RDS for PostgreSQL
   * *   **21**: Microservices Engine (MSE)
   * *   **22**: File Storage NAS (NAS)
   * *   **23**: Data Security Center (DSC)
   * *   **24**: Elastic IP Address (EIP)
   * *   **25**: Identity as a Service (IDaaS) - Enterprise Identity Access Management (EIAM)
   * *   **26**: PolarDB for Xscale (PolarDB-X)
   * *   **27**: Elasticsearch
   * 
   * @example
   * 16
   */
  assetType?: number;
  /**
   * @remarks
   * The total number of cloud service instances of this type.
   * 
   * @example
   * 16
   */
  instanceCount?: number;
  /**
   * @remarks
   * The total number of cloud service instances that are at risk of this type.
   * 
   * @example
   * 5
   */
  instanceRiskCount?: number;
  /**
   * @remarks
   * The server type. Valid values:
   * 
   * *   **0**: an asset provided by Alibaba Cloud
   * *   **1**: an asset outside Alibaba Cloud
   * *   **2**: an asset in a data center
   * *   **3**, **4**, **5**, and **7**: an asset provided by a third-party service provider
   * *   **8**: a lightweight asset
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
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      instanceCount: 'number',
      instanceRiskCount: 'number',
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
   * The statistics of cloud services.
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
   * The total number of cloud service instances that are at risk.
   * 
   * @example
   * 544
   */
  instanceRiskCountTotal?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAssetSummaryMetas: 'CloudAssetSummaryMetas',
      instanceCountTotal: 'InstanceCountTotal',
      instanceRiskCountTotal: 'InstanceRiskCountTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssetSummaryMetas: { 'type': 'array', 'itemType': GetCloudAssetSummaryResponseBodyGroupedFieldsCloudAssetSummaryMetas },
      instanceCountTotal: 'number',
      instanceRiskCountTotal: 'number',
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
   * The summary of cloud services.
   */
  groupedFields?: GetCloudAssetSummaryResponseBodyGroupedFields;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

