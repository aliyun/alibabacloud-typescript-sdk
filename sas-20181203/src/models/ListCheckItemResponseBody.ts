// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckItemResponseBodyCheckItemsCustomConfigs extends $dara.Model {
  /**
   * @remarks
   * The default value of the check item. The value is a string.
   * 
   * @example
   * 0
   */
  defaultValue?: string;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * IPList
   */
  name?: string;
  /**
   * @remarks
   * The display name of the check item.
   * 
   * @example
   * Ensure RAM password policy prevents password reuse
   */
  showName?: string;
  /**
   * @remarks
   * The type of the check item. The value is a JSON string.
   * 
   * @example
   * {\\"type\\":\\"LIST\\",\\"range\\":[1,512],\\"listType\\":{\\"type\\":\\"STRING\\",\\"range\\":[0,22]}}
   */
  typeDefine?: string;
  /**
   * @remarks
   * The specified value of the check item. The value is a string.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      name: 'Name',
      showName: 'ShowName',
      typeDefine: 'TypeDefine',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      name: 'string',
      showName: 'string',
      typeDefine: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckItemResponseBodyCheckItemsDescription extends $dara.Model {
  /**
   * @remarks
   * The type of the description of the check item. Valid value:
   * 
   * *   **text**
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The content of the description for the check item when the Type parameter is text.
   * 
   * @example
   * The download of query results that are returned by SELECT statements in DataStudio must be prohibited at the MaxCompute level.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckItemResponseBodyCheckItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 21
   */
  checkId?: number;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * Enable deletion protection
   */
  checkShowName?: string;
  /**
   * @remarks
   * The source type of the Situation Awareness check item: 
   * - **CUSTOM**: User-defined 
   * - **SYSTEM**: Predefined by the Situation Awareness platform
   * 
   * @example
   * SYSTEM
   */
  checkType?: string;
  /**
   * @remarks
   * The check items.
   */
  customConfigs?: ListCheckItemResponseBodyCheckItemsCustomConfigs[];
  /**
   * @remarks
   * The description of the check item.
   */
  description?: ListCheckItemResponseBodyCheckItemsDescription;
  /**
   * @remarks
   * The estimated quota that will be consumed by this check item.
   * 
   * @example
   * 30
   */
  estimatedCount?: number;
  /**
   * @remarks
   * The asset subtype of the cloud service. Valid values:
   * 
   * *   If **InstanceType** is set to **ECS**, this parameter supports the following valid values:
   * 
   *     *   **INSTANCE**
   *     *   **DISK**
   *     *   **SECURITY_GROUP**
   * 
   * *   If **InstanceType** is set to **ACR**, this parameter supports the following valid values:
   * 
   *     *   **REPOSITORY_ENTERPRISE**
   *     *   **REPOSITORY_PERSON**
   * 
   * *   If **InstanceType** is set to **RAM**, this parameter supports the following valid values:
   * 
   *     *   **ALIAS**
   *     *   **USER**
   *     *   **POLICY**
   *     *   **GROUP**
   * 
   * *   If **InstanceType** is set to **WAF**, this parameter supports the following valid value:
   * 
   *     *   **DOMAIN**
   * 
   * *   If **InstanceType** is set to other values, this parameter supports the following valid values:
   * 
   *     *   **INSTANCE**
   * 
   * @example
   * ECS
   */
  instanceSubType?: string;
  /**
   * @remarks
   * The asset type of the cloud service. Valid values:
   * 
   * *   **ECS**: Elastic Compute Service (ECS).
   * *   **SLB**: Server Load Balancer (SLB).
   * *   **RDS**: ApsaraDB RDS.
   * *   **MONGODB**: ApsaraDB for MongoDB (MongoDB).
   * *   **KVSTORE**: ApsaraDB for Redis (Redis).
   * *   **ACR**: Container Registry.
   * *   **CSK**: Container Service for Kubernetes (ACK).
   * *   **VPC**: Virtual Private Cloud (VPC).
   * *   **ACTIONTRAIL**: ActionTrail.
   * *   **CDN**: Alibaba Cloud CDN (CDN).
   * *   **CAS**: Certificate Management Service (formerly SSL Certificates Service).
   * *   **RDC**: Apsara Devops.
   * *   **RAM**: Resource Access Management (RAM).
   * *   **DDOS**: Anti-DDoS.
   * *   **WAF**: Web Application Firewall (WAF).
   * *   **OSS**: Object Storage Service (OSS).
   * *   **POLARDB**: PolarDB.
   * *   **POSTGRESQL**: ApsaraDB RDS for PostgreSQL.
   * *   **MSE**: Microservices Engine (MSE).
   * *   **NAS**: File Storage NAS (NAS).
   * *   **SDDP**: Sensitive Data Discovery and Protection (SDDP).
   * *   **EIP**: Elastic IP Address (EIP).
   * 
   * @example
   * OSS
   */
  instanceType?: string;
  /**
   * @remarks
   * The risk level of the check item. Valid values:
   * 
   * *   **HIGH**
   * *   **MEDIUM**
   * *   **LOW**
   * 
   * @example
   * HIGH
   */
  riskLevel?: string;
  /**
   * @remarks
   * The IDs of the sections associated with the check items.
   */
  sectionIds?: number[];
  /**
   * @remarks
   * The type of the cloud asset. Valid values:
   * 
   * *   **0**: an asset provided by Alibaba Cloud.
   * *   **1**: an asset outside Alibaba Cloud.
   * *   **2**: an asset in a data center.
   * *   **3**, **4**, **5**, and **7**: other cloud asset.
   * *   **8**: a simple application server.
   * 
   * @example
   * 0
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkShowName: 'CheckShowName',
      checkType: 'CheckType',
      customConfigs: 'CustomConfigs',
      description: 'Description',
      estimatedCount: 'EstimatedCount',
      instanceSubType: 'InstanceSubType',
      instanceType: 'InstanceType',
      riskLevel: 'RiskLevel',
      sectionIds: 'SectionIds',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      checkShowName: 'string',
      checkType: 'string',
      customConfigs: { 'type': 'array', 'itemType': ListCheckItemResponseBodyCheckItemsCustomConfigs },
      description: ListCheckItemResponseBodyCheckItemsDescription,
      estimatedCount: 'number',
      instanceSubType: 'string',
      instanceType: 'string',
      riskLevel: 'string',
      sectionIds: { 'type': 'array', 'itemType': 'number' },
      vendor: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customConfigs)) {
      $dara.Model.validateArray(this.customConfigs);
    }
    if(this.description && typeof (this.description as any).validate === 'function') {
      (this.description as any).validate();
    }
    if(Array.isArray(this.sectionIds)) {
      $dara.Model.validateArray(this.sectionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckItemResponseBodyPageInfo extends $dara.Model {
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * 149
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

export class ListCheckItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The check items.
   */
  checkItems?: ListCheckItemResponseBodyCheckItems[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCheckItemResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9F4E6157-9600-5588-86B9-38F09067****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkItems: 'CheckItems',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItems: { 'type': 'array', 'itemType': ListCheckItemResponseBodyCheckItems },
      pageInfo: ListCheckItemResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkItems)) {
      $dara.Model.validateArray(this.checkItems);
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

