// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckItemResponseBodyCheckItemsCustomConfigs extends $dara.Model {
  /**
   * @remarks
   * The default value string of the custom configuration item for the check item.
   * 
   * @example
   * 0
   */
  defaultValue?: string;
  /**
   * @remarks
   * The name of the custom check configuration.
   * 
   * @example
   * IPList
   */
  name?: string;
  /**
   * @remarks
   * The display name of the custom check configuration.
   * 
   * @example
   * IP List
   */
  showName?: string;
  /**
   * @remarks
   * The JSON string that defines the type of the custom configuration item for the check item.
   * 
   * @example
   * {\\"type\\":\\"LIST\\",\\"range\\":[1,512],\\"listType\\":{\\"type\\":\\"STRING\\",\\"range\\":[0,22]}}
   */
  typeDefine?: string;
  /**
   * @remarks
   * The user-configured value string of the custom configuration item for the check item.
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
   * The type of the check description property. Valid values:
   * 
   * - **text**: text
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The text content when the description type of the check item risk is text.
   * 
   * @example
   * Checks whether strict access control policies are configured. Requirements: 1. If no blacklists and whitelist are configured, configure a whitelist first. 2. If a blacklist is configured, find the blacklist in the list of access control policies. We recommend that you do not configure an empty blacklist. 3. If a whitelist is configured, find the whitelist in the list of access control policies. We recommend that you do not configure an empty whitelist. Make sure that the whitelist does not contain 0.0.0.0. You can add the following IP addresses to the whitelist: ${IPList}.
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
   * IPv4 Access Control
   */
  checkShowName?: string;
  /**
   * @remarks
   * The source type of the Threat Detection Service check item. Valid values:
   *  - **CUSTOM**: user-defined
   *  - **SYSTEM**: predefined by the Threat Detection Service platform
   * 
   * @example
   * SYSTEM
   */
  checkType?: string;
  /**
   * @remarks
   * The list of custom check configuration information.
   */
  customConfigs?: ListCheckItemResponseBodyCheckItemsCustomConfigs[];
  /**
   * @remarks
   * The description of the check item.
   */
  description?: ListCheckItemResponseBodyCheckItemsDescription;
  /**
   * @remarks
   * The estimated number of authorizations that the check item will consume.
   * 
   * @example
   * 30
   */
  estimatedCount?: number;
  instanceEstimatedCount?: number;
  /**
   * @remarks
   * The asset subtype of the cloud service. Valid values:
   * 
   * - If **InstanceType** is set to **ECS**, valid values of this parameter:
   *     - **INSTANCE**
   *     - **DISK**
   *     - **SECURITY_GROUP**
   * - If **InstanceType** is set to **ACR**, valid values of this parameter:
   *     - **REPOSITORY_ENTERPRISE**
   *     - **REPOSITORY_PERSON**
   * - If **InstanceType** is set to **RAM**, valid values of this parameter:
   *     - **ALIAS**
   *     - **USER**
   *     - **POLICY**
   *     - **GROUP**
   * - If **InstanceType** is set to **WAF**, valid values of this parameter:
   *     - **DOMAIN**
   * - If **InstanceType** is set to other values, valid values of this parameter:
   *     - **INSTANCE**
   * 
   * @example
   * INSTANCE
   */
  instanceSubType?: string;
  /**
   * @remarks
   * The asset type of the cloud service. Valid values:
   * 
   * - **ECS**: Elastic Compute Service server
   * - **SLB**: load balancing
   * - **RDS**: ApsaraDB RDS database
   * - **MONGODB**: ApsaraDB for MongoDB database
   * - **KVSTORE**: ApsaraDB for Redis database
   * - **ACR**: ACR
   * - **CSK**: CSK
   * - **VPC**: VPC
   * - **ACTIONTRAIL**: ActionTrail
   * - **CDN**: CDN
   * - **CAS**: Certificate Management Service (formerly SSL Certificates)
   * - **RDC**: Apsara Devops
   * - **RAM**: RAM
   * - **DDOS**: distributed deny-of-service
   * - **WAF**: WAF
   * - **OSS**: Access Control
   * - **POLARDB**: POLARDB
   * - **POSTGRESQL**: PostgreSQL
   * - **MSE**: MSE
   * - **NAS**: NAS
   * - **SDDP**: SDDP
   * - **EIP**: EIP
   * 
   * @example
   * API_GATEWAY
   */
  instanceType?: string;
  /**
   * @remarks
   * The risk level of the check item. Valid values:
   * - **HIGH**: high
   * - **MEDIUM**: medium
   * - **LOW**: low
   * 
   * @example
   * HIGH
   */
  riskLevel?: string;
  /**
   * @remarks
   * The list of section IDs associated with the check item.
   */
  sectionIds?: number[];
  /**
   * @remarks
   * The cloud asset vendor. Valid values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: asset outside the cloud
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**: other cloud assets
   * - **8**: simple application server
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
      instanceEstimatedCount: 'InstanceEstimatedCount',
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
      instanceEstimatedCount: 'number',
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
   * The number of entries on the current page in a paged query.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
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
   * The list of check item information.
   */
  checkItems?: ListCheckItemResponseBodyCheckItems[];
  /**
   * @remarks
   * The page information in a paged query.
   */
  pageInfo?: ListCheckItemResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
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

