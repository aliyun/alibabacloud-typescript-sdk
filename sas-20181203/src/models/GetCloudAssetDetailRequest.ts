// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudAssetDetailRequestCloudAssetInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the cloud asset.
   * 
   * @example
   * sg-wz9hf86vbzbrrde7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the cloud asset resides.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAssetDetailRequest extends $dara.Model {
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
   * The type of the cloud asset. Valid values:
   * 
   * *   **0**: Elastic Compute Service (ECS).
   * *   **1**: Server Load Balancer (SLB).
   * *   **3**: ApsaraDB RDS.
   * *   **4**: ApsaraDB for MongoDB.
   * *   **5**: ApsaraDB for Redis.
   * *   **6**: Container Registry.
   * *   **8**: Container Service for Kubernetes.
   * *   **9**: Virtual Private Cloud (VPC).
   * *   **11**: ActionTrail.
   * *   **12**: Alibaba Cloud CDN (CDN).
   * *   **13**: Certificate Management Service.
   * *   **14**: Apsara Devops.
   * *   **15**: Resource Access Management (RAM).
   * *   **16**: Anti-DDoS.
   * *   **17**: Web Application Firewall (WAF).
   * *   **18**: Object Storage Service (OSS).
   * *   **19**: PolarDB.
   * *   **20**: ApsaraDB RDS for PostgreSQL.
   * *   **21**: Microservices Engine (MSE).
   * *   **22**: File Storage NAS (NAS).
   * *   **23**: Data Security Center (DSC).
   * *   **24**: Elastic IP Address (EIP).
   * *   **25**: Identity as a Service (IDaaS)-Employee Identity and Access Management (EIAM).
   * *   **26**: PolarDB-X.
   * *   **27**: Elasticsearch.
   * 
   * @example
   * 14
   */
  assetType?: number;
  /**
   * @remarks
   * The details of the assets.
   */
  cloudAssetInstances?: GetCloudAssetDetailRequestCloudAssetInstances[];
  /**
   * @remarks
   * The service provider of the cloud asset. Valid values:
   * 
   * *   **0**: Alibaba Cloud.
   * *   **1**: service provider that is unrecognized.
   * *   **2**: data center.
   * *   **3**, **4**, **5**, and **7**: third-party service provider.
   * *   **8**: simple application server.
   * 
   * @example
   * 0
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      assetSubType: 'AssetSubType',
      assetType: 'AssetType',
      cloudAssetInstances: 'CloudAssetInstances',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      cloudAssetInstances: { 'type': 'array', 'itemType': GetCloudAssetDetailRequestCloudAssetInstances },
      vendor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAssetInstances)) {
      $dara.Model.validateArray(this.cloudAssetInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

