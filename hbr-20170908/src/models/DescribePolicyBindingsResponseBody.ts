// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonFileSystemDetail extends $dara.Model {
  /**
   * @remarks
   * Backup shard size (number of files).
   * 
   * @example
   * 100000
   */
  fetchSliceSize?: number;
  /**
   * @remarks
   * Whether to switch to a full backup when an incremental backup fails. Values:
   * - **true**: Switch to full backup on failure.
   * - **false**: Do not switch to full backup on failure.
   * 
   * @example
   * true
   */
  fullOnIncrementFail?: boolean;
  static names(): { [key: string]: string } {
    return {
      fetchSliceSize: 'FetchSliceSize',
      fullOnIncrementFail: 'FullOnIncrementFail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchSliceSize: 'number',
      fullOnIncrementFail: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonNasDetail extends $dara.Model {
  /**
   * @remarks
   * Backup client ID.
   * 
   * @example
   * c-0001eg6mcvjs93f46s2d
   */
  clientId?: string;
  /**
   * @remarks
   * Client group ID.
   * 
   * @example
   * cl-000gkcofngi04j6k680a
   */
  clusterId?: string;
  /**
   * @remarks
   * Backup slice size (number of files).
   * 
   * @example
   * 100000
   */
  fetchSliceSize?: number;
  /**
   * @remarks
   * Whether to switch to a full backup when an incremental backup fails. Values:
   * - **true**: Switch to full backup on failure.
   * - **false**: Do not switch to full backup on failure.
   * 
   * @example
   * true
   */
  fullOnIncrementFail?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clusterId: 'ClusterId',
      fetchSliceSize: 'FetchSliceSize',
      fullOnIncrementFail: 'FullOnIncrementFail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clusterId: 'string',
      fetchSliceSize: 'number',
      fullOnIncrementFail: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsFileDetail extends $dara.Model {
  /**
   * @remarks
   * Whether to use advanced policies. Values:
   * - **true**: Use.
   * - **false**: Do not use.
   * 
   * @example
   * false
   */
  advPolicy?: boolean;
  /**
   * @remarks
   * Whether to enable VSS (Windows) functionality. Values:
   * - **true**: Enable.
   * - **false**: Disable.
   * 
   * @example
   * false
   */
  useVSS?: boolean;
  static names(): { [key: string]: string } {
    return {
      advPolicy: 'AdvPolicy',
      useVSS: 'UseVSS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advPolicy: 'boolean',
      useVSS: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsOssDetail extends $dara.Model {
  /**
   * @remarks
   * Do not prompt for archive-type objects in the task statistics and failed file list.
   * 
   * @example
   * true
   */
  ignoreArchiveObject?: boolean;
  /**
   * @remarks
   * Whether to delete the inventory file after the backup. This is only effective when using an OSS inventory. Supported values:
   * - **NO_CLEANUP**: Do not delete.
   * - **DELETE_CURRENT**: Delete the current file.
   * - **DELETE_CURRENT_AND_PREVIOUS**: Delete all files.
   * 
   * @example
   * DELETE_CURRENT_AND_PREVIOUS
   */
  inventoryCleanupPolicy?: string;
  /**
   * @remarks
   * The name of the OSS inventory. If this value is not empty, the OSS inventory will be used for performance optimization.
   * - It is recommended to use an inventory for backing up more than 100 million OSS objects to improve incremental performance. Storage costs for the inventory files are charged separately by the OSS service.
   * - The generation of the OSS inventory file takes time, and the backup may fail before the inventory file is generated. You can wait for the next cycle to execute.
   * 
   * @example
   * inventory_test
   */
  inventoryId?: string;
  static names(): { [key: string]: string } {
    return {
      ignoreArchiveObject: 'IgnoreArchiveObject',
      inventoryCleanupPolicy: 'InventoryCleanupPolicy',
      inventoryId: 'InventoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreArchiveObject: 'boolean',
      inventoryCleanupPolicy: 'string',
      inventoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsUdmDetail extends $dara.Model {
  /**
   * @remarks
   * 是否创建应用一致性。仅云盘类型全部为ESSD时，支持创建快照应用一致性。
   * 
   * @example
   * false
   */
  appConsistent?: boolean;
  /**
   * @remarks
   * The custom KMS key ID in the destination region. When this field is not empty and cross-region replication is enabled, the specified key will be used for encrypting the cross-region replication.
   * 
   * @example
   * 4ed37b1e-da51-4187-aceb-9db4f9b7148b
   */
  destinationKmsKeyId?: string;
  /**
   * @remarks
   * List of disk IDs that need protection. This value is empty when protecting all disks.
   */
  diskIdList?: string[];
  /**
   * @remarks
   * This parameter is required when **AppConsistent** is **true**. It indicates whether to use the Linux FsFreeze mechanism to ensure the file system is in a read-only consistent state before creating an application-consistent snapshot. The default value is true.
   * 
   * @example
   * true
   */
  enableFsFreeze?: boolean;
  /**
   * @remarks
   * This parameter is required when **AppConsistent** is **true**. It determines whether to set an application-consistent snapshot:
   * - **true**: Create an application-consistent snapshot
   * - **false**: Create a file system-consistent snapshot
   * 
   * The default value is true.
   * 
   * @example
   * true
   */
  enableWriters?: boolean;
  /**
   * @remarks
   * List of disk IDs that do not need protection. This parameter is ignored if DiskIdList is not empty.
   */
  excludeDiskIdList?: string[];
  /**
   * @remarks
   * This parameter is required when **AppConsistent** is **true**. It specifies the path of the unfreeze script to be executed after creating an application-consistent snapshot.
   * 
   * @example
   * /tmp/postscript.sh
   */
  postScriptPath?: string;
  /**
   * @remarks
   * This parameter is required when **AppConsistent** is **true**. It specifies the path of the freeze script to be executed before creating an application-consistent snapshot.
   * 
   * @example
   * /tmp/prescript.sh
   */
  preScriptPath?: string;
  /**
   * @remarks
   * This parameter is required when **AppConsistent** is **true**. It specifies the RAM role name needed for creating an application-consistent snapshot.
   * 
   * @example
   * AliyunECSInstanceForHbrRole
   */
  ramRoleName?: string;
  /**
   * @remarks
   * Indicates whether to create a snapshot consistency group. Only supported when all disk types are ESSD.
   * 
   * @example
   * true
   */
  snapshotGroup?: boolean;
  /**
   * @remarks
   * This parameter is required when **AppConsistent** is **true**. It specifies the IO freeze timeout duration. The default value is 30 seconds.
   * 
   * @example
   * 30
   */
  timeoutInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      appConsistent: 'AppConsistent',
      destinationKmsKeyId: 'DestinationKmsKeyId',
      diskIdList: 'DiskIdList',
      enableFsFreeze: 'EnableFsFreeze',
      enableWriters: 'EnableWriters',
      excludeDiskIdList: 'ExcludeDiskIdList',
      postScriptPath: 'PostScriptPath',
      preScriptPath: 'PreScriptPath',
      ramRoleName: 'RamRoleName',
      snapshotGroup: 'SnapshotGroup',
      timeoutInSeconds: 'TimeoutInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConsistent: 'boolean',
      destinationKmsKeyId: 'string',
      diskIdList: { 'type': 'array', 'itemType': 'string' },
      enableFsFreeze: 'boolean',
      enableWriters: 'boolean',
      excludeDiskIdList: { 'type': 'array', 'itemType': 'string' },
      postScriptPath: 'string',
      preScriptPath: 'string',
      ramRoleName: 'string',
      snapshotGroup: 'boolean',
      timeoutInSeconds: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.diskIdList)) {
      $dara.Model.validateArray(this.diskIdList);
    }
    if(Array.isArray(this.excludeDiskIdList)) {
      $dara.Model.validateArray(this.excludeDiskIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptions extends $dara.Model {
  /**
   * @remarks
   * Advanced options for large-scale file system backup.
   */
  commonFileSystemDetail?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonFileSystemDetail;
  /**
   * @remarks
   * Advanced options for local NAS.
   */
  commonNasDetail?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonNasDetail;
  /**
   * @remarks
   * Advanced options for file backup.
   */
  fileDetail?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsFileDetail;
  /**
   * @remarks
   * Advanced options for OSS backup.
   */
  ossDetail?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsOssDetail;
  /**
   * @remarks
   * Advanced options for full machine backup.
   */
  udmDetail?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsUdmDetail;
  static names(): { [key: string]: string } {
    return {
      commonFileSystemDetail: 'CommonFileSystemDetail',
      commonNasDetail: 'CommonNasDetail',
      fileDetail: 'FileDetail',
      ossDetail: 'OssDetail',
      udmDetail: 'UdmDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonFileSystemDetail: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonFileSystemDetail,
      commonNasDetail: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonNasDetail,
      fileDetail: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsFileDetail,
      ossDetail: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsOssDetail,
      udmDetail: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsUdmDetail,
    };
  }

  validate() {
    if(this.commonFileSystemDetail && typeof (this.commonFileSystemDetail as any).validate === 'function') {
      (this.commonFileSystemDetail as any).validate();
    }
    if(this.commonNasDetail && typeof (this.commonNasDetail as any).validate === 'function') {
      (this.commonNasDetail as any).validate();
    }
    if(this.fileDetail && typeof (this.fileDetail as any).validate === 'function') {
      (this.fileDetail as any).validate();
    }
    if(this.ossDetail && typeof (this.ossDetail as any).validate === 'function') {
      (this.ossDetail as any).validate();
    }
    if(this.udmDetail && typeof (this.udmDetail as any).validate === 'function') {
      (this.udmDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBodyPolicyBindingsHitTags extends $dara.Model {
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * Tag matching rule.
   * - **EQUAL**: Matches both the tag key and tag value.
   * - **NOT**: Matches the tag key but not the tag value.
   * 
   * @example
   * EQUAL
   */
  operator?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * prod
   */
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

export class DescribePolicyBindingsResponseBodyPolicyBindings extends $dara.Model {
  /**
   * @remarks
   * Advanced options.
   */
  advancedOptions?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptions;
  /**
   * @remarks
   * Whether the resource is automatically associated through the backup policy resource tag.
   * 
   * @example
   * false
   */
  createdByTag?: boolean;
  /**
   * @remarks
   * Creation time. UNIX timestamp, in seconds.
   * 
   * @example
   * 1661399570
   */
  createdTime?: number;
  /**
   * @remarks
   * The name of the role created in the RAM of the original account for cross-account backup.
   * 
   * @example
   * hbrcrossrole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Cross-account backup type. Supported values: 
   * - SELF_ACCOUNT: Backup within the same account
   * - CROSS_ACCOUNT: Cross-account backup
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the original account for cross-account backup.
   * 
   * @example
   * 1480************
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * i-8vb************5ly
   */
  dataSourceId?: string;
  /**
   * @remarks
   * Whether the policy is disbaled for this data source.
   * - true: disabled
   * - false: Not disabled
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is **ECS_FILE** or **File**. It specifies the file types that should not be backed up, and all files of these types will be excluded. Supports up to 255 characters.
   * 
   * @example
   * [\\"*.doc\\",\\"*.xltm\\"]
   */
  exclude?: string;
  /**
   * @remarks
   * Hit tag rules.
   */
  hitTags?: DescribePolicyBindingsResponseBodyPolicyBindingsHitTags[];
  /**
   * @remarks
   * This parameter is required only when **SourceType** is **ECS_FILE** or **File**. It specifies the file types to be backed up, and all files of these types will be backed up. Supports up to 255 characters.
   * 
   * @example
   * [\\"*.doc\\",\\"*.xltm\\"]
   */
  include?: string;
  /**
   * @remarks
   * Bound policy description.
   * 
   * @example
   * po-000************eslc-i-uf6************y5g
   */
  policyBindingDescription?: string;
  /**
   * @remarks
   * Bound policy ID.
   * 
   * @example
   * pd-000************slc
   */
  policyBindingId?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * po-000************56y
   */
  policyId?: string;
  /**
   * @remarks
   * - When **SourceType** is **OSS**, it indicates the prefix to be backed up. If not specified, it means backing up the entire root directory of the Bucket.
   * - When **SourceType** is **ECS_FILE** or **File**, it indicates the file directory to be backed up. If not specified, it means backing up all directories.
   * 
   * @example
   * backup/
   */
  source?: string;
  /**
   * @remarks
   * Data source type, with the value range:
   * - **UDM_ECS**: indicates ECS full machine backup
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is **ECS_FILE** or **File**. It specifies the backup traffic control. The format is `{start}{end}{bandwidth}`. Multiple traffic control configurations are separated by commas, and the configured times must not overlap.
   * 
   * - **start**: Start hour.
   * - **end**: End hour.
   * - **bandwidth**: Limit rate, in KB/s.
   * 
   * @example
   * 0:24:10240
   */
  speedLimit?: string;
  /**
   * @remarks
   * Update time. UNIX timestamp, in seconds.
   * 
   * @example
   * 1653611573
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      advancedOptions: 'AdvancedOptions',
      createdByTag: 'CreatedByTag',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      dataSourceId: 'DataSourceId',
      disabled: 'Disabled',
      exclude: 'Exclude',
      hitTags: 'HitTags',
      include: 'Include',
      policyBindingDescription: 'PolicyBindingDescription',
      policyBindingId: 'PolicyBindingId',
      policyId: 'PolicyId',
      source: 'Source',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedOptions: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptions,
      createdByTag: 'boolean',
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      dataSourceId: 'string',
      disabled: 'boolean',
      exclude: 'string',
      hitTags: { 'type': 'array', 'itemType': DescribePolicyBindingsResponseBodyPolicyBindingsHitTags },
      include: 'string',
      policyBindingDescription: 'string',
      policyBindingId: 'string',
      policyId: 'string',
      source: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      updatedTime: 'number',
    };
  }

  validate() {
    if(this.advancedOptions && typeof (this.advancedOptions as any).validate === 'function') {
      (this.advancedOptions as any).validate();
    }
    if(Array.isArray(this.hitTags)) {
      $dara.Model.validateArray(this.hitTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code, 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of results per query.
   * 
   * Range: 10~100. Default: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Description of the return message. A successful response usually returns \\"successful\\", while an error will return a corresponding error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The token required to fetch the next page of policy and data source bindings.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a
   */
  nextToken?: string;
  /**
   * @remarks
   * List of bound policies.
   */
  policyBindings?: DescribePolicyBindingsResponseBodyPolicyBindings[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 5225929A-4EBD-55EE-9FE1-4A130E582A76
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - true: Success
   * - false: Failure
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 38
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      policyBindings: 'PolicyBindings',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      policyBindings: { 'type': 'array', 'itemType': DescribePolicyBindingsResponseBodyPolicyBindings },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policyBindings)) {
      $dara.Model.validateArray(this.policyBindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

