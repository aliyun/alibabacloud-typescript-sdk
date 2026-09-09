// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyDataProjectsIpWhiteList extends $dara.Model {
  /**
   * @remarks
   * The IP whitelist for access over the public network and from other Alibaba Cloud services.
   * 
   * > If you configure only this IP whitelist, access over the public network and from other Alibaba Cloud services is restricted based on the whitelist, and all access from VPCs is denied.
   * 
   * @example
   * 10.88.111.3
   */
  ipList?: string;
  /**
   * @remarks
   * The IP whitelist for access from VPCs.
   * 
   * > If you configure only the VPC IP whitelist, access from VPCs is restricted based on the whitelist, and all access over the public network and from other Alibaba Cloud services is denied.
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
   * The data encryption algorithm. Supported algorithms include AES256, AESCTR, and RC4.
   * 
   * @example
   * AES256
   */
  algorithm?: string;
  /**
   * @remarks
   * Specifies whether to enable storage encryption for the project. For more information, see
   * <props="intl">[Storage encryption](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/storage-encryption).
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The key for data encryption. You can use the default MaxCompute-managed key or a custom key with the Bring Your Own Key (BYOK) feature.
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
   * Specifies whether the project is an external project for <props="intl">[Integrated Lakehouse](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide).
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
   * The type of the lifecycle. Valid values:
   * 
   * - **mandatory**: A lifecycle must be configured for each table.
   * 
   * - **optional**: The lifecycle is optional. If unspecified for a table, the table does not expire.
   * 
   * - **inherit**: If no lifecycle is specified for a table, the table inherits its lifecycle from the `odps.table.lifecycle.value` property.
   * 
   * @example
   * optional
   */
  type?: string;
  /**
   * @remarks
   * The lifecycle of the table, in days. Valid values: `1` to `37231`. Default value: `37231`.
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
   * Specifies whether to allow a full table scan in the project. This feature is disabled by default because a full table scan can consume a large amount of computing resources.
   * 
   * @example
   * false
   */
  allowFullScan?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the MaxCompute 2.0 Decimal data type in the project.
   * 
   * @example
   * true
   */
  enableDecimal2?: boolean;
  /**
   * @remarks
   * Specifies whether to enable routing for the Data Transmission Service resource group.
   * 
   * - true: Data transmission jobs submitted by default from the project use the bound Data Transmission Service resource group.
   * 
   * - false: Data transmission jobs submitted by default from the project use the shared Data Transmission Service resource group.
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
   * The number of retention days for backup data. You can restore data to any backup version that is created within the retention period. Valid values: `0` to `30`. Default value: `1`. A value of `0` indicates that the backup feature is disabled.
   * 
   * @example
   * 1
   */
  retentionDays?: number;
  /**
   * @remarks
   * The maximum metered cost for a single SQL statement. The cost is calculated by using the formula: (scanned data in GB) × (complexity).
   * 
   * @example
   * 1500
   */
  sqlMeteringMax?: string;
  /**
   * @remarks
   * The table lifecycle properties.
   */
  tableLifecycle?: ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle;
  /**
   * @remarks
   * The time zone of the project. This parameter corresponds to the `odps.sql.timezone` property.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The <props="intl">[Data Transmission Service](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/overview-of-dts) resource group that is bound to the project.
   * 
   * - Default (shared Data Transmission Service resource group): The project cannot use subscription Data Transmission Service resource groups. Data Transmission Service jobs submitted from this project automatically use the Default resource group, regardless of the default setting for the Data Transmission Service resource group.
   * 
   * - Subscription Data Transmission Service resource group: The project can use a subscription Data Transmission Service resource group.
   * 
   * @example
   * Default
   */
  tunnelQuota?: string;
  /**
   * @remarks
   * The data type version. Valid values:
   * 
   * - **1**: Version 1.0.
   * 
   * - **2**: Version 2.0.
   * 
   * - **hive**: A Hive-compatible type.
   * 
   * For more information about the differences between the data type versions, see <props="intl">[Data type versions](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/data-type-editions).
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
   * If project data protection is enabled, you can configure an exception policy. This policy allows specified users to export data from specified objects to trusted projects, bypassing the data protection mechanism.
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
   * Specifies whether to enable <props="intl">[project data protection](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/project-data-protection) to prevent data from being exported from the project. Default value: `false`.
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
   * Specifies whether to enable <props="intl">[download control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/label-based-access-control). Default value: `false`.
   * 
   * @example
   * false
   */
  enableDownloadPrivilege?: boolean;
  /**
   * @remarks
   * Specifies whether to enable <props="intl">[label-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/label-based-access-control). Default value: `false`.
   * 
   * @example
   * false
   */
  labelSecurity?: boolean;
  /**
   * @remarks
   * Specifies whether the creator of an object can access it. Default value: `true`.
   * 
   * @example
   * true
   */
  objectCreatorHasAccessPermission?: boolean;
  /**
   * @remarks
   * Specifies whether the creator of an object can grant other users permissions on it. Default value: `true`.
   * 
   * @example
   * true
   */
  objectCreatorHasGrantPermission?: boolean;
  /**
   * @remarks
   * The <props="intl">[project data protection](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/project-data-protection) properties.
   */
  projectProtection?: ListProjectsResponseBodyDataProjectsSecurityPropertiesProjectProtection;
  /**
   * @remarks
   * Specifies whether to enable <props="intl">[ACL-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/acl-based-access-control). Default value: `true`.
   * 
   * @example
   * true
   */
  usingAcl?: boolean;
  /**
   * @remarks
   * Specifies whether to enable <props="intl">[policy-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/policy-based-access-control-1). Default value: `true`.
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
   * The description of the project.
   * 
   * @example
   * BI_Analysis
   */
  comment?: string;
  /**
   * @remarks
   * The total storage usage of the project, which represents the compressed, logical data size used for metering.
   * 
   * @example
   * 16489027
   */
  costStorage?: string;
  /**
   * @remarks
   * The time when the project was created, as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1704380838000
   */
  createdTime?: number;
  /**
   * @remarks
   * The default compute quota. If you do not specify a quota for a job, the job consumes computing resources from this default quota. For more information about how to use computing resources, see <props="intl">[Use of computing resources](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/use-of-computing-resources).
   * 
   * @example
   * os_PayAsYouGoQuota
   */
  defaultQuota?: string;
  /**
   * @remarks
   * The IP whitelist.
   */
  ipWhiteList?: ListProjectsResponseBodyDataProjectsIpWhiteList;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * odps_project
   */
  name?: string;
  /**
   * @remarks
   * The owner of the project.
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
   * The security-related properties.
   */
  securityProperties?: ListProjectsResponseBodyDataProjectsSecurityProperties;
  /**
   * @remarks
   * The status of the project. Valid values:
   * 
   * - **AVAILABLE**: The project is running as expected.
   * 
   * - **READONLY**: The project is read-only.
   * 
   * - **FROZEN**: The project is frozen.
   * 
   * - **DELETING**: The project is being deleted.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether the project uses a three-tier model (project > schema > object). In this model, schemas are used within a project to organize objects such as tables, resources, and user-defined functions (UDFs). For more information, see <props="intl">[Schema operations](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/schema-related-operations).
   * 
   * @example
   * true
   */
  threeTierModel?: boolean;
  /**
   * @remarks
   * The type of the project. Valid values:
   * 
   * - **managed**: An internal project.
   * 
   * - **external**: An external project.
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
   * The token for retrieving the next page of results. If this parameter is empty, all results have been returned.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kvikyUl3ChyRxN+qLPvtOb
   */
  nextToken?: string;
  /**
   * @remarks
   * A pagination marker used to retrieve the next page of results. This parameter is returned when the response is truncated.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page.
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
   * The returned data.
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

