// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the check items.
   */
  checkIds?: number[];
  /**
   * @remarks
   * The key that you want to use to search for check items in fuzzy match mode.
   * 
   * @example
   * OSS
   */
  checkKey?: string;
  /**
   * @remarks
   * Source type of the situation awareness check item.
   */
  checkTypes?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the check item supports custom parameters. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  customParam?: boolean;
  /**
   * @remarks
   * The instance IDs of the cloud services that you want to query. Separate multiple IDs with commas (,).
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The asset type of the cloud services. Valid values:
   * 
   * *   **ECS**: Elastic Compute Service (ECS)
   * *   **SLB**: Server Load Balancer (SLB)
   * *   **RDS**: ApsaraDB RDS
   * *   **MONGODB**: ApsaraDB for MongoDB (MongoDB)
   * *   **KVSTORE**: ApsaraDB for Redis (Redis)
   * *   **ACR**: Container Registry
   * *   **CSK**: Container Service for Kubernetes (ACK)
   * *   **VPC**: Virtual Private Cloud (VPC)
   * *   **ACTIONTRAIL**: ActionTrail
   * *   **CDN**: Alibaba Cloud CDN (CDN)
   * *   **CAS**: Certificate Management Service (formerly SSL Certificates Service)
   * *   **RDC**: Apsara Devops
   * *   **RAM**: Resource Access Management (RAM)
   * *   **DDOS**: Anti-DDoS
   * *   **WAF**: Web Application Firewall (WAF)
   * *   **OSS**: Object Storage Service (OSS)
   * *   **POLARDB**: PolarDB
   * *   **POSTGRESQL**: ApsaraDB RDS for PostgreSQL
   * *   **MSE**: Microservices Engine (MSE)
   * *   **NAS**: File Storage NAS (NAS)
   * *   **SDDP**: Sensitive Data Discovery and Protection (SDDP)
   * *   **EIP**: Elastic IP Address (EIP)
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether fixing is supported. Valid values:
   * 
   * *   **SUPPORT_REPAIR**
   * *   **NOT_SUPPORT_REPAIR**
   */
  operationTypes?: string[];
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance. Valid values:
   * 
   * *   **cn-hangzhou**: International
   * *   **ap-southeast-1**: Singapore
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the requirements.
   */
  requirementIds?: number[];
  /**
   * @remarks
   * The risk levels of check items. Separate multiple risk levels with commas (,). Valid values:
   * 
   * *   **HIGH**
   * *   **MEDIUM**
   * *   **LOW**
   */
  riskLevels?: string[];
  /**
   * @remarks
   * The types of the conditions based on which check items are sorted. Valid values:
   * 
   * *   **RISK_LEVEL**: risk level
   * *   **STATUS**: status
   */
  sortTypes?: string[];
  /**
   * @remarks
   * The standard IDs.
   */
  standardIds?: number[];
  /**
   * @remarks
   * The statuses of check items. Separate multiple statuses with commas (,). Valid values:
   * 
   * *   **PASS**
   * *   **NOT_PASS**
   * *   **CHECKING**
   * *   **NOT_CHECK**
   * *   **WHITELIST**
   */
  statuses?: string[];
  /**
   * @remarks
   * Delete the custom category in a custom inspection item.
   */
  taskSources?: string[];
  /**
   * @remarks
   * The types of check standards.
   */
  types?: string[];
  /**
   * @remarks
   * The cloud service providers. Valid values:
   * 
   * *   **ALIYUN**: Alibaba Cloud
   * *   **TENCENT**: Tencent Cloud
   * *   **AWS**: Amazon Web Services (AWS)
   * *   **MICROSOFT**: Microsoft Azure
   */
  vendors?: string[];
  static names(): { [key: string]: string } {
    return {
      checkIds: 'CheckIds',
      checkKey: 'CheckKey',
      checkTypes: 'CheckTypes',
      currentPage: 'CurrentPage',
      customParam: 'CustomParam',
      instanceIds: 'InstanceIds',
      instanceTypes: 'InstanceTypes',
      lang: 'Lang',
      operationTypes: 'OperationTypes',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requirementIds: 'RequirementIds',
      riskLevels: 'RiskLevels',
      sortTypes: 'SortTypes',
      standardIds: 'StandardIds',
      statuses: 'Statuses',
      taskSources: 'TaskSources',
      types: 'Types',
      vendors: 'Vendors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIds: { 'type': 'array', 'itemType': 'number' },
      checkKey: 'string',
      checkTypes: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'number',
      customParam: 'boolean',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      operationTypes: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'number',
      regionId: 'string',
      requirementIds: { 'type': 'array', 'itemType': 'number' },
      riskLevels: { 'type': 'array', 'itemType': 'string' },
      sortTypes: { 'type': 'array', 'itemType': 'string' },
      standardIds: { 'type': 'array', 'itemType': 'number' },
      statuses: { 'type': 'array', 'itemType': 'string' },
      taskSources: { 'type': 'array', 'itemType': 'string' },
      types: { 'type': 'array', 'itemType': 'string' },
      vendors: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.checkIds)) {
      $dara.Model.validateArray(this.checkIds);
    }
    if(Array.isArray(this.checkTypes)) {
      $dara.Model.validateArray(this.checkTypes);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    if(Array.isArray(this.operationTypes)) {
      $dara.Model.validateArray(this.operationTypes);
    }
    if(Array.isArray(this.requirementIds)) {
      $dara.Model.validateArray(this.requirementIds);
    }
    if(Array.isArray(this.riskLevels)) {
      $dara.Model.validateArray(this.riskLevels);
    }
    if(Array.isArray(this.sortTypes)) {
      $dara.Model.validateArray(this.sortTypes);
    }
    if(Array.isArray(this.standardIds)) {
      $dara.Model.validateArray(this.standardIds);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    if(Array.isArray(this.taskSources)) {
      $dara.Model.validateArray(this.taskSources);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
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

