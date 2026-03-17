// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTagsHitTag extends $dara.Model {
  key?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
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

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTags extends $dara.Model {
  hitTag?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTagsHitTag[];
  static names(): { [key: string]: string } {
    return {
      hitTag: 'HitTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitTag: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTagsHitTag },
    };
  }

  validate() {
    if(Array.isArray(this.hitTag)) {
      $dara.Model.validateArray(this.hitTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetailTableNames extends $dara.Model {
  tableName?: string[];
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableName)) {
      $dara.Model.validateArray(this.tableName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetail extends $dara.Model {
  tableNames?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetailTableNames;
  static names(): { [key: string]: string } {
    return {
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableNames: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetailTableNames,
    };
  }

  validate() {
    if(this.tableNames && typeof (this.tableNames as any).validate === 'function') {
      (this.tableNames as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanPaths extends $dara.Model {
  path?: string[];
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanResourcesResource extends $dara.Model {
  extra?: string;
  resourceId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      resourceId: 'ResourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      resourceId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanResources extends $dara.Model {
  resource?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlanResourcesResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanRulesRule extends $dara.Model {
  backupType?: string;
  destinationRegionId?: string;
  destinationRetention?: number;
  disabled?: boolean;
  doCopy?: boolean;
  retention?: number;
  ruleId?: string;
  ruleName?: string;
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      destinationRegionId: 'DestinationRegionId',
      destinationRetention: 'DestinationRetention',
      disabled: 'Disabled',
      doCopy: 'DoCopy',
      retention: 'Retention',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      destinationRegionId: 'string',
      destinationRetention: 'number',
      disabled: 'boolean',
      doCopy: 'boolean',
      retention: 'number',
      ruleId: 'string',
      ruleName: 'string',
      schedule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanRules extends $dara.Model {
  rule?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlanRulesRule },
    };
  }

  validate() {
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanTrialInfo extends $dara.Model {
  keepAfterTrialExpiration?: boolean;
  trialExpireTime?: number;
  trialStartTime?: number;
  trialVaultReleaseTime?: number;
  static names(): { [key: string]: string } {
    return {
      keepAfterTrialExpiration: 'KeepAfterTrialExpiration',
      trialExpireTime: 'TrialExpireTime',
      trialStartTime: 'TrialStartTime',
      trialVaultReleaseTime: 'TrialVaultReleaseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepAfterTrialExpiration: 'boolean',
      trialExpireTime: 'number',
      trialStartTime: 'number',
      trialVaultReleaseTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlan extends $dara.Model {
  backupSourceGroupId?: string;
  backupType?: string;
  bucket?: string;
  businessStatus?: string;
  changeListPath?: string;
  clientId?: string;
  clusterId?: string;
  createTime?: number;
  createdByTag?: boolean;
  createdTime?: number;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  dataSourceId?: string;
  destDataSourceDetail?: string;
  destDataSourceId?: string;
  destSourceType?: string;
  detail?: string;
  disabled?: boolean;
  exclude?: string;
  fileSystemId?: string;
  hitTags?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTags;
  include?: string;
  instanceGroupId?: string;
  instanceId?: string;
  instanceName?: string;
  keepLatestSnapshots?: number;
  latestExecuteJobId?: string;
  /**
   * @example
   * job-00**************9khz
   */
  latestFinishJobId?: string;
  options?: string;
  otsDetail?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetail;
  paths?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanPaths;
  planId?: string;
  planName?: string;
  prefix?: string;
  resources?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanResources;
  retention?: number;
  rules?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanRules;
  schedule?: string;
  sourceType?: string;
  speedLimit?: string;
  trialInfo?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanTrialInfo;
  updatedTime?: number;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSourceGroupId: 'BackupSourceGroupId',
      backupType: 'BackupType',
      bucket: 'Bucket',
      businessStatus: 'BusinessStatus',
      changeListPath: 'ChangeListPath',
      clientId: 'ClientId',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      createdByTag: 'CreatedByTag',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      dataSourceId: 'DataSourceId',
      destDataSourceDetail: 'DestDataSourceDetail',
      destDataSourceId: 'DestDataSourceId',
      destSourceType: 'DestSourceType',
      detail: 'Detail',
      disabled: 'Disabled',
      exclude: 'Exclude',
      fileSystemId: 'FileSystemId',
      hitTags: 'HitTags',
      include: 'Include',
      instanceGroupId: 'InstanceGroupId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      latestExecuteJobId: 'LatestExecuteJobId',
      latestFinishJobId: 'LatestFinishJobId',
      options: 'Options',
      otsDetail: 'OtsDetail',
      paths: 'Paths',
      planId: 'PlanId',
      planName: 'PlanName',
      prefix: 'Prefix',
      resources: 'Resources',
      retention: 'Retention',
      rules: 'Rules',
      schedule: 'Schedule',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      trialInfo: 'TrialInfo',
      updatedTime: 'UpdatedTime',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSourceGroupId: 'string',
      backupType: 'string',
      bucket: 'string',
      businessStatus: 'string',
      changeListPath: 'string',
      clientId: 'string',
      clusterId: 'string',
      createTime: 'number',
      createdByTag: 'boolean',
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      dataSourceId: 'string',
      destDataSourceDetail: 'string',
      destDataSourceId: 'string',
      destSourceType: 'string',
      detail: 'string',
      disabled: 'boolean',
      exclude: 'string',
      fileSystemId: 'string',
      hitTags: DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTags,
      include: 'string',
      instanceGroupId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      keepLatestSnapshots: 'number',
      latestExecuteJobId: 'string',
      latestFinishJobId: 'string',
      options: 'string',
      otsDetail: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetail,
      paths: DescribeBackupPlansResponseBodyBackupPlansBackupPlanPaths,
      planId: 'string',
      planName: 'string',
      prefix: 'string',
      resources: DescribeBackupPlansResponseBodyBackupPlansBackupPlanResources,
      retention: 'number',
      rules: DescribeBackupPlansResponseBodyBackupPlansBackupPlanRules,
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      trialInfo: DescribeBackupPlansResponseBodyBackupPlansBackupPlanTrialInfo,
      updatedTime: 'number',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.hitTags && typeof (this.hitTags as any).validate === 'function') {
      (this.hitTags as any).validate();
    }
    if(this.otsDetail && typeof (this.otsDetail as any).validate === 'function') {
      (this.otsDetail as any).validate();
    }
    if(this.paths && typeof (this.paths as any).validate === 'function') {
      (this.paths as any).validate();
    }
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    if(this.trialInfo && typeof (this.trialInfo as any).validate === 'function') {
      (this.trialInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlans extends $dara.Model {
  backupPlan?: DescribeBackupPlansResponseBodyBackupPlansBackupPlan[];
  static names(): { [key: string]: string } {
    return {
      backupPlan: 'BackupPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlan: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlan },
    };
  }

  validate() {
    if(Array.isArray(this.backupPlan)) {
      $dara.Model.validateArray(this.backupPlan);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBody extends $dara.Model {
  backupPlans?: DescribeBackupPlansResponseBodyBackupPlans;
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned backup plans that meet the specified conditions.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backupPlans: 'BackupPlans',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlans: DescribeBackupPlansResponseBodyBackupPlans,
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.backupPlans && typeof (this.backupPlans as any).validate === 'function') {
      (this.backupPlans as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

