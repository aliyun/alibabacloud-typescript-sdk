// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyDataProjectsIpWhiteList extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist for the Internet and cloud service interconnection network.
   * 
   * > If you configure only the IP address whitelist for the Internet and cloud service interconnection network, access from the Internet and cloud service interconnection network is restricted by the configuration, and all access from VPCs is prohibited.
   * 
   * @example
   * 10.88.111.3
   */
  ipList?: string;
  /**
   * @remarks
   * The IP address whitelist for VPCs.
   * > If you configure only the IP address whitelist for VPCs, access from VPCs is restricted by the configuration, and all access from the Internet and cloud service interconnection network is prohibited.
   * 
   * @example
   * 10.88.111.3
   */
  vpcIpList?: string;
  static names(): { [key: string]: string } {
    return {
      ipList: 'ipList',
      vpcIpList: 'vpcIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: 'string',
      vpcIpList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsPropertiesEncryption extends $dara.Model {
  /**
   * @remarks
   * The data encryption algorithm. The encryption algorithms supported by the key include AES256, AESCTR, and RC4.
   * 
   * @example
   * AES256
   */
  algorithm?: string;
  /**
   * @remarks
   * Specifies whether to enable data encryption for the project. For more information about data encryption, see 
   * <props="china">[Storage encryption](https://www.alibabacloud.com/help/en/maxcompute/security-and-compliance/storage-encryption)
   * <props="intl">[Storage encryption](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/storage-encryption).
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The type of the key used for data encryption. Valid values include the default key (MaxCompute Default Key) and Bring Your Own Key (BYOK). The default key is a default key created internally by MaxCompute.
   * 
   * @example
   * dafault
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      enable: 'enable',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      enable: 'boolean',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsPropertiesExternalProjectProperties extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the project is an external project of <props="china">[Data Lakehouse Solution 2.0](https://www.alibabacloud.com/help/en/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide)
   * <props="intl">[Data Lakehouse Solution 2.0](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide).
   * 
   * @example
   * true
   */
  isExternalCatalogBound?: string;
  static names(): { [key: string]: string } {
    return {
      isExternalCatalogBound: 'isExternalCatalogBound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isExternalCatalogBound: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle extends $dara.Model {
  /**
   * @remarks
   * The lifecycle type. Valid values:
   * - **mandatory**: The LIFECYCLE clause is required. You must specify a lifecycle for the table.
   * - **optional**: The LIFECYCLE clause is optional when you create a table. If you do not specify a lifecycle for the table, the table never expires.
   * - **inherit**: If you do not specify a lifecycle for a table when you create the table, the lifecycle of the table is the value of the odps.table.lifecycle.value parameter.
   * 
   * @example
   * optional
   */
  type?: string;
  /**
   * @remarks
   * The lifecycle of the table. Unit: days. Valid values: 1 to 37231. Default value: 37231.
   * 
   * @example
   * 37231
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
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

export class ListProjectsResponseBodyDataProjectsProperties extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow full table scans in the project. Full table scans consume a large amount of resources. To improve processing efficiency, this feature is disabled by default.
   * 
   * @example
   * false
   */
  allowFullScan?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the DECIMAL data type of MaxCompute V2.0 for the project.
   * 
   * @example
   * true
   */
  enableDecimal2?: boolean;
  /**
   * @remarks
   * Specifies whether to enable EPS resource group routing for the data transfer service.
   * - true: Data transfer tasks submitted by default in the project use the bound EPS resource group for the data transfer service.
   * - false: Data transfer tasks submitted by default in the project use the shared EPS resource group for the data transfer service.
   * 
   * @example
   * true
   */
  enableTunnelQuotaRoute?: boolean;
  /**
   * @remarks
   * The storage encryption properties.
   */
  encryption?: ListProjectsResponseBodyDataProjectsPropertiesEncryption;
  /**
   * @remarks
   * The properties of the external project.
   */
  externalProjectProperties?: ListProjectsResponseBodyDataProjectsPropertiesExternalProjectProperties;
  /**
   * @remarks
   * The retention period of backup data in days. During this period, you can restore the current version to any backed-up data version. Valid values: 0 to 30. Default value: 1. A value of 0 indicates that the backup feature is disabled.
   * 
   * @example
   * 1
   */
  retentionDays?: number;
  /**
   * @remarks
   * The maximum threshold for the consumption of a single SQL statement. Unit: scanned data volume (GB) × complexity.
   * 
   * @example
   * 1500
   */
  sqlMeteringMax?: string;
  /**
   * @remarks
   * The lifecycle properties of tables.
   */
  tableLifecycle?: ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle;
  /**
   * @remarks
   * The time zone of the project, which is the odps.sql.timezone property.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The EPS resource group of the <props="china">[data transfer service](https://www.alibabacloud.com/help/en/maxcompute/user-guide/overview-of-dts)
   * <props="intl">[data transfer service](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/overview-of-dts) bound to the project.
   * 
   * - Default (shared EPS resource group for the data transfer service): The project is not allowed to use the subscription EPS resource group for the data transfer service. Regardless of the default EPS resource group setting, data transfer tasks submitted by default in this project automatically use the Default EPS resource group.
   * 
   * - Subscription EPS resource group for the data transfer service: The project is allowed to use the subscription EPS resource group for the data transfer service.
   * 
   * @example
   * Default
   */
  tunnelQuota?: string;
  /**
   * @remarks
   * The data type edition. Valid values:
   * - **1**: MaxCompute V1.0 data type edition
   * - **2**: MaxCompute V2.0 data type edition
   * - **hive**: Hive-compatible data type edition
   * 
   * For more information about the differences among the three data type editions, see <props="china">[Data type editions](https://www.alibabacloud.com/help/en/maxcompute/user-guide/data-type-editions)
   * <props="intl">[Data type editions](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/data-type-editions).
   * 
   * @example
   * 2
   */
  typeSystem?: string;
  static names(): { [key: string]: string } {
    return {
      allowFullScan: 'allowFullScan',
      enableDecimal2: 'enableDecimal2',
      enableTunnelQuotaRoute: 'enableTunnelQuotaRoute',
      encryption: 'encryption',
      externalProjectProperties: 'externalProjectProperties',
      retentionDays: 'retentionDays',
      sqlMeteringMax: 'sqlMeteringMax',
      tableLifecycle: 'tableLifecycle',
      timezone: 'timezone',
      tunnelQuota: 'tunnelQuota',
      typeSystem: 'typeSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFullScan: 'boolean',
      enableDecimal2: 'boolean',
      enableTunnelQuotaRoute: 'boolean',
      encryption: ListProjectsResponseBodyDataProjectsPropertiesEncryption,
      externalProjectProperties: ListProjectsResponseBodyDataProjectsPropertiesExternalProjectProperties,
      retentionDays: 'number',
      sqlMeteringMax: 'string',
      tableLifecycle: ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle,
      timezone: 'string',
      tunnelQuota: 'string',
      typeSystem: 'string',
    };
  }

  validate() {
    if(this.encryption && typeof (this.encryption as any).validate === 'function') {
      (this.encryption as any).validate();
    }
    if(this.externalProjectProperties && typeof (this.externalProjectProperties as any).validate === 'function') {
      (this.externalProjectProperties as any).validate();
    }
    if(this.tableLifecycle && typeof (this.tableLifecycle as any).validate === 'function') {
      (this.tableLifecycle as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsSaleTag extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the default compute quota.
   * 
   * @example
   * b7afb7d1-****-****-****-c393669c307b
   */
  resourceId?: string;
  /**
   * @remarks
   * The billing method of the default compute quota.
   * 
   * @example
   * PayAsYouGo
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsSecurityPropertiesProjectProtection extends $dara.Model {
  /**
   * @remarks
   * If you enable data protection for the project, you can configure exceptions or trusted projects to allow specified users to transfer data of specified objects to specified projects. All scenarios described in the exception policy can bypass the data protection mechanism.
   * 
   * @example
   * {
   *       "Version": "1",
   *       "Statement": [
   *             {
   *                   "Effect": "Allow",
   *                   "Principal": "",
   *                   "Action": [
   *                         "odps:[, , ...]"
   *                   ],
   *                   "Resource": "acs:odps:*:",
   *                   "Condition": {
   *                         "StringEquals": {
   *                               "odps:TaskType": [
   *                                     ""
   *                               ]
   *                         }
   *                   }
   *             }
   *       ]
   * }
   */
  exceptionPolicy?: string;
  /**
   * @remarks
   * Specifies whether to enable the <props="china">[data protection mechanism](https://www.alibabacloud.com/help/en/maxcompute/security-and-compliance/project-data-protection)
   * <props="intl">[data protection mechanism](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/project-data-protection) for the project to prohibit or allow data stream out of the project. The default enabling status is disabled.
   * 
   * @example
   * true
   */
  protected?: boolean;
  static names(): { [key: string]: string } {
    return {
      exceptionPolicy: 'exceptionPolicy',
      protected: 'protected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionPolicy: 'string',
      protected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsSecurityProperties extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use the <props="china">[download control](https://www.alibabacloud.com/help/en/maxcompute/user-guide/download-control)
   * <props="intl">[download control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/label-based-access-control) feature. By default, this feature is disabled.
   * 
   * @example
   * false
   */
  enableDownloadPrivilege?: boolean;
  /**
   * @remarks
   * Specifies whether to use the <props="china">[label-based access control](https://www.alibabacloud.com/help/en/maxcompute/user-guide/label-based-access-control)
   * <props="intl">[label-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/label-based-access-control) feature. By default, this feature is disabled.
   * 
   * @example
   * false
   */
  labelSecurity?: boolean;
  /**
   * @remarks
   * Specifies whether to allow object creators to have access permissions on the objects. By default, this is allowed.
   * 
   * @example
   * true
   */
  objectCreatorHasAccessPermission?: boolean;
  /**
   * @remarks
   * Specifies whether to allow object creators to have authorization permissions on the objects. By default, this is allowed.
   * 
   * @example
   * true
   */
  objectCreatorHasGrantPermission?: boolean;
  /**
   * @remarks
   * The <props="china">[data protection mechanism](https://www.alibabacloud.com/help/en/maxcompute/security-and-compliance/project-data-protection)
   * <props="intl">[data protection mechanism](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/project-data-protection) properties.
   */
  projectProtection?: ListProjectsResponseBodyDataProjectsSecurityPropertiesProjectProtection;
  /**
   * @remarks
   * Specifies whether to use the <props="china">[ACL-based access control](https://www.alibabacloud.com/help/en/maxcompute/user-guide/acl-based-access-control)
   * <props="intl">[ACL-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/acl-based-access-control) feature. By default, this feature is enabled.
   * 
   * @example
   * true
   */
  usingAcl?: boolean;
  /**
   * @remarks
   * Specifies whether to use the <props="china">[policy-based access control](https://www.alibabacloud.com/help/en/maxcompute/user-guide/policy-based-access-control-1)
   * <props="intl">[policy-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/policy-based-access-control-1) feature. By default, this feature is enabled.
   * 
   * @example
   * true
   */
  usingPolicy?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableDownloadPrivilege: 'enableDownloadPrivilege',
      labelSecurity: 'labelSecurity',
      objectCreatorHasAccessPermission: 'objectCreatorHasAccessPermission',
      objectCreatorHasGrantPermission: 'objectCreatorHasGrantPermission',
      projectProtection: 'projectProtection',
      usingAcl: 'usingAcl',
      usingPolicy: 'usingPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDownloadPrivilege: 'boolean',
      labelSecurity: 'boolean',
      objectCreatorHasAccessPermission: 'boolean',
      objectCreatorHasGrantPermission: 'boolean',
      projectProtection: ListProjectsResponseBodyDataProjectsSecurityPropertiesProjectProtection,
      usingAcl: 'boolean',
      usingPolicy: 'boolean',
    };
  }

  validate() {
    if(this.projectProtection && typeof (this.projectProtection as any).validate === 'function') {
      (this.projectProtection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjects extends $dara.Model {
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * BI_Analysis
   */
  comment?: string;
  /**
   * @remarks
   * The total storage size. This value indicates the current storage size of the project and is consistent with the billing metric. It represents the logical storage size after data compression at the project level.
   * 
   * @example
   * 16489027
   */
  costStorage?: string;
  /**
   * @remarks
   * The creation time. The time is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1704380838000
   */
  createdTime?: number;
  /**
   * @remarks
   * The default compute quota.
   * This is used to allocate compute resources. If no compute quota is specified, jobs initiated in the project consume resources from the default quota. For more information about how to use compute resources, see <props="china">[Use of computing resources](https://www.alibabacloud.com/help/en/maxcompute/user-guide/use-of-computing-resources)
   * <props="intl">[Use of computing resources](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/use-of-computing-resources).
   * 
   * @example
   * os_PayAsYouGoQuota
   */
  defaultQuota?: string;
  /**
   * @remarks
   * The IP address whitelist.
   */
  ipWhiteList?: ListProjectsResponseBodyDataProjectsIpWhiteList;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * odps_project
   */
  name?: string;
  /**
   * @remarks
   * The account information of the project owner.
   * 
   * @example
   * ALIYUN$odps****@aliyunid.com
   */
  owner?: string;
  /**
   * @remarks
   * The basic properties of the project.
   */
  properties?: ListProjectsResponseBodyDataProjectsProperties;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID and billing method of the default compute quota.
   */
  saleTag?: ListProjectsResponseBodyDataProjectsSaleTag;
  /**
   * @remarks
   * The security properties.
   */
  securityProperties?: ListProjectsResponseBodyDataProjectsSecurityProperties;
  /**
   * @remarks
   * The project status. Valid values:
   * - **AVAILABLE**: normal
   * - **READONLY**: read-only
   * - **FROZEN**: frozen
   * - **DELETING**: deleting
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether to support schema-based storage.
   * MaxCompute supports schemas, which are located under projects and used to classify objects such as tables, resources, and UDFs. A project can contain multiple schemas. For more information, see <props="china">[Schema-related operations](https://www.alibabacloud.com/help/en/maxcompute/user-guide/schema-related-operations)
   * <props="intl">[Schema-related operations](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/schema-related-operations).
   * 
   * @example
   * true
   */
  threeTierModel?: boolean;
  /**
   * @remarks
   * The project type. Valid values:
   * - **managed**: internal project
   * - **external**: external project
   * 
   * @example
   * managed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      costStorage: 'costStorage',
      createdTime: 'createdTime',
      defaultQuota: 'defaultQuota',
      ipWhiteList: 'ipWhiteList',
      name: 'name',
      owner: 'owner',
      properties: 'properties',
      regionId: 'regionId',
      saleTag: 'saleTag',
      securityProperties: 'securityProperties',
      status: 'status',
      threeTierModel: 'threeTierModel',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      costStorage: 'string',
      createdTime: 'number',
      defaultQuota: 'string',
      ipWhiteList: ListProjectsResponseBodyDataProjectsIpWhiteList,
      name: 'string',
      owner: 'string',
      properties: ListProjectsResponseBodyDataProjectsProperties,
      regionId: 'string',
      saleTag: ListProjectsResponseBodyDataProjectsSaleTag,
      securityProperties: ListProjectsResponseBodyDataProjectsSecurityProperties,
      status: 'string',
      threeTierModel: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.ipWhiteList && typeof (this.ipWhiteList as any).validate === 'function') {
      (this.ipWhiteList as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.saleTag && typeof (this.saleTag as any).validate === 'function') {
      (this.saleTag as any).validate();
    }
    if(this.securityProperties && typeof (this.securityProperties as any).validate === 'function') {
      (this.securityProperties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination token. The current operation only supports sequential pagination. A non-empty nextToken value indicates that more data is available. You can use the nextToken value as a parameter to query the next page.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kvikyUl3ChyRxN+qLPvtOb
   */
  nextToken?: string;
  /**
   * @remarks
   * The marker used to specify the starting point of the returned results. The results are sorted in alphabetical order and returned starting from the first item after the marker.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The list of projects.
   */
  projects?: ListProjectsResponseBodyDataProjects[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      marker: 'marker',
      maxItem: 'maxItem',
      projects: 'projects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      marker: 'string',
      maxItem: 'number',
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyDataProjects },
    };
  }

  validate() {
    if(Array.isArray(this.projects)) {
      $dara.Model.validateArray(this.projects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   */
  data?: ListProjectsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b16399216671970335563173e2340
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListProjectsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

