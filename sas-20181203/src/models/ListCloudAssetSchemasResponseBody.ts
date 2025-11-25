// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAssetSchemasResponseBodyCloudAssetSchemas extends $dara.Model {
  /**
   * @remarks
   * Subtype of the cloud product.
   * 
   * @example
   * 1
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
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * Asset structure definition name
   * 
   * @example
   * ACS_ECS_Disk
   */
  dataName?: string;
  /**
   * @remarks
   * Current asset structure definition text.
   * 
   * @example
   * [{\\"associatedData\\":[{\\"assetSubType\\":100,\\"assetType\\":0,\\"dataName\\":\\"ACS_ECS_Instance\\",\\"properties\\":[{\\"name\\":\\"InstanceId\\",\\"path\\":\\"InstanceId\\"}],\\"vendor\\":0}],\\"description\\":\\"The ID of the instance to which the disk is attached.\\",\\"example\\":\\"i-bp67acfmxazb4q****\\",\\"name\\":\\"InstanceId\\",\\"type\\":\\"STRING\\",\\"withAssociatedData\\":true},{\\"description\\":\\"Disk name\\",\\"example\\":\\"testDiskName\\",\\"name\\":\\"DiskName\\",\\"type\\":\\"STRING\\"},{\\"description\\":\\"Only encrypted disks\\",\\"example\\":\\"false\\",\\"name\\":\\"Encrypted\\",\\"type\\":\\"BOOLEAN\\"},{\\"description\\":\\"Disk status\\",\\"example\\":\\"In_use\\",\\"name\\":\\"Status\\",\\"type\\":\\"STRING\\"},{\\"description\\":\\"Disk category\\",\\"example\\":\\"cloud_ssd\\",\\"name\\":\\"Category\\",\\"type\\":\\"STRING\\"},{\\"description\\":\\"Disk type\\",\\"example\\":\\"system\\",\\"name\\":\\"Type\\",\\"type\\":\\"STRING\\"},{\\"description\\":\\"Specifies whether to set an automatic snapshot policy for the disk.\\",\\"example\\":\\"false\\",\\"name\\":\\"EnableAutomatedSnapshotPolicy\\",\\"type\\":\\"BOOLEAN\\"},{\\"description\\":\\"The ID of the automatic snapshot policy.\\",\\"example\\":\\"sp-bp67acfmxazb4p****\\",\\"name\\":\\"AutoSnapshotPolicyId\\",\\"type\\":\\"STRING\\"},{\\"description\\":\\"Disk, local disk, or elastic ephemeral disk ID\\",\\"example\\":\\"d-bp18um4r4f2fve24****\\",\\"name\\":\\"DiskId\\",\\"type\\":\\"STRING\\"}]
   */
  properties?: string;
  /**
   * @remarks
   * The source of the server. Valid values:
   * 
   * *   **0**: an asset provided by Alibaba Cloud.
   * *   **1**: a third-party cloud server
   * *   **2**: a server in a data center
   * *   **3**, **4**, **5**, and **7**: other cloud asset
   * *   **8**: a lightweight asset
   * 
   * @example
   * 0
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      assetSubType: 'AssetSubType',
      assetType: 'AssetType',
      dataName: 'DataName',
      properties: 'Properties',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      dataName: 'string',
      properties: 'string',
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

export class ListCloudAssetSchemasResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 54
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

export class ListCloudAssetSchemasResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of asset structure definitions
   */
  cloudAssetSchemas?: ListCloudAssetSchemasResponseBodyCloudAssetSchemas[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCloudAssetSchemasResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Values: 
   * - **true**: The call was successful. 
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      cloudAssetSchemas: 'CloudAssetSchemas',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssetSchemas: { 'type': 'array', 'itemType': ListCloudAssetSchemasResponseBodyCloudAssetSchemas },
      pageInfo: ListCloudAssetSchemasResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAssetSchemas)) {
      $dara.Model.validateArray(this.cloudAssetSchemas);
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

