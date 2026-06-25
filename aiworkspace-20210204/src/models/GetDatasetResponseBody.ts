// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { DatasetVersion } from "./DatasetVersion";
import { DatasetShareRelationship } from "./DatasetShareRelationship";


export class GetDatasetResponseBodySharingConfig extends $dara.Model {
  /**
   * @remarks
   * A list of relationships indicating to whom the dataset is shared.
   */
  sharedTo?: DatasetShareRelationship[];
  static names(): { [key: string]: string } {
    return {
      sharedTo: 'SharedTo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sharedTo: { 'type': 'array', 'itemType': DatasetShareRelationship },
    };
  }

  validate() {
    if(Array.isArray(this.sharedTo)) {
      $dara.Model.validateArray(this.sharedTo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The visibility of the dataset in the workspace. Valid values:
   * 
   * - `PRIVATE`: The dataset is visible only to its owner and workspace administrators.
   * 
   * - `PUBLIC`: The dataset is visible to all members in the workspace.
   * 
   * - `ROLE_PUBLIC`: The dataset is visible to specific workspace roles. For the list of roles, see the `AccessibleRoleIdList` parameter. The dataset owner and workspace administrators can always view the dataset.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * A list of workspace role IDs that can view the dataset. This parameter takes effect only when `Accessibility` is set to `ROLE_PUBLIC`. A role ID that starts with `PAI` is a basic role ID. A role ID that starts with `role-` is a custom role ID.
   */
  accessibleRoleIdList?: string[];
  /**
   * @remarks
   * The data source type. Valid values:
   * 
   * - `OSS`: Object Storage Service (OSS).
   * 
   * - `NAS`: Apsara File Storage NAS.
   * 
   * @example
   * NAS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The data type of the dataset. Valid values:
   * 
   * - `COMMON`: General data
   * 
   * - `PIC`: images
   * 
   * - `TEXT`: text
   * 
   * - `VIDEO`: videos
   * 
   * - `AUDIO`: audio
   * 
   * @example
   * COMMON
   */
  dataType?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * d-rbvg5wz****c9ks92
   */
  datasetId?: string;
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * 用于标注的数据。
   */
  description?: string;
  /**
   * @remarks
   * The edition of the dataset. Valid values:
   * 
   * - `BASIC`: The basic edition, which does not support file metadata management.
   * 
   * - `ADVANCED`: The advanced edition, which is supported only for OSS datasets and allows you to manage metadata for up to 1 million files per version.
   * 
   * @example
   * BASIC
   */
  edition?: string;
  /**
   * @remarks
   * The time when the dataset was created.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the dataset was last updated.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The storage import configuration of the dataset. Storage services such as OSS, NAS, and CPFS are supported.
   * 
   * <details>
   * 
   * <summary>
   * 
   * OSS
   * 
   * </summary>
   * 
   * {\\
   * "region": "${region}",// The region ID.\\
   * "bucket": "${bucket}",// The bucket name.\\
   * "path": "${path}" // The path to the file or folder.\\
   * }
   * 
   * </details>
   * 
   * <details>
   * 
   * <summary>
   * 
   * NAS
   * 
   * </summary>
   * 
   * {\\
   * "region": "${region}",// The region ID.\\
   * "fileSystemId": "${file_system_id}", // The file system ID.\\
   * "path": "${path}", // The path in the file system.\\
   * "mountTarget": "${mount_target}" // The file system mount target.\\
   * }
   * 
   * </details>
   * 
   * <details>
   * 
   * <summary>
   * 
   * CPFS
   * 
   * </summary>
   * 
   * {\\
   * "region": "${region}",// The region ID.\\
   * "fileSystemId": "${file_system_id}", // The file system ID.\\
   * "protocolServiceId":"${protocol_service_id}", // The protocol service ID.\\
   * "exportId": "${export_id}", // The export directory ID.\\
   * "path": "${path}", // The path in the file system.\\
   * }
   * 
   * </details>
   * 
   * <details>
   * 
   * <summary>
   * 
   * CPFS for Intelligent Computing
   * 
   * </summary>
   * 
   * {\\
   * "region": "${region}",// The region ID.\\
   * "fileSystemId": "${file_system_id}", // The file system ID.\\
   * "path": "${path}", // The path in the file system.\\
   * "mountTarget": "${mount_target}" // The file system mount target. This parameter is specific to CPFS for Intelligent Computing.\\
   * "isVpcMount": boolean, // Specifies whether the mount target is a VPC mount target. Specific to CPFS for Intelligent Computing.\\
   * }
   * 
   * </details>
   * 
   * @example
   * {
   *     "region": "cn-wulanchabu",
   *     "fileSystemId": "bmcpfs-xxxxxxxxxxx",
   *     "path": "/mnt",
   *     "mountTarget": "cpfs-xxxxxxxxxxxx-vpc-gacs9f.cn-wulanchabu.cpfs.aliyuncs.com",
   *     "isVpcMount": true
   * }
   */
  importInfo?: string;
  /**
   * @remarks
   * Indicates whether the dataset is a shared dataset.
   * 
   * @example
   * false
   */
  isShared?: boolean;
  /**
   * @remarks
   * The labels attached to the dataset.
   */
  labels?: Label[];
  /**
   * @remarks
   * The latest version of the dataset.
   */
  latestVersion?: DatasetVersion;
  /**
   * @remarks
   * The mount permissions for the dataset. Valid values:
   * 
   * - `RO`: read-only mount
   * 
   * - `RW`: read and write mount
   * 
   * @example
   * RW
   */
  mountAccess?: string;
  /**
   * @remarks
   * A list of workspace role IDs granted read/write permissions for the dataset. A role ID that starts with `PAI` is a basic role ID. A role ID that starts with `role-` is a custom role ID. If the list contains `*`, all roles have read and write permissions.
   */
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * Extended properties for the initial dataset version (v1), in JSON string format. For example, when using the dataset in a DLC job, you can set the `mountPath` field to specify the default mount path.
   * 
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The owner ID.
   * 
   * @example
   * 1631044****3440
   */
  ownerId?: string;
  /**
   * @remarks
   * The property of the initial dataset version (v1). Valid values:
   * 
   * - `FILE`: The dataset is a file.
   * 
   * - `DIRECTORY`: The dataset is a folder.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @remarks
   * The provider of the dataset. If the value is `pai`, the dataset is a PAI public dataset.
   * 
   * @example
   * pai
   */
  provider?: string;
  /**
   * @remarks
   * The type of the data source provider. Valid values:
   * 
   * - `ECS` (default)
   * 
   * - `Lingjun`
   * 
   * @example
   * Ecs
   */
  providerType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The source from which the dataset was shared. This parameter is returned only if `IsShared` is `true`.
   */
  sharedFrom?: DatasetShareRelationship;
  /**
   * @remarks
   * The sharing configuration for the dataset.
   */
  sharingConfig?: GetDatasetResponseBodySharingConfig;
  /**
   * @remarks
   * The ID of the source dataset for the iTAG annotation set.
   * 
   * @example
   * d-rcdg3wxxxxxhc5jk87
   */
  sourceDatasetId?: string;
  /**
   * @remarks
   * The version of the source dataset for the annotation set.
   * 
   * @example
   * v2
   */
  sourceDatasetVersion?: string;
  /**
   * @remarks
   * The ID of the data source for the initial version (v1). The meaning of this parameter varies based on the `SourceType` value.
   * 
   * - If `SourceType` is `USER`, you can specify a custom value for `SourceId`.
   * 
   * - If `SourceType` is `ITAG`, the dataset is generated from an iTAG annotation task, and `SourceId` is the task ID.
   * 
   * - If `SourceType` is `PAI_PUBLIC_DATASET`, the dataset is created from a PAI public dataset. In this case, `SourceId` is empty.
   * 
   * @example
   * jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type of the initial dataset version (v1).
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The annotation template of the iTAG annotation set.
   * 
   * @example
   * TextClassification
   */
  tagTemplateType?: string;
  /**
   * @remarks
   * The URI of the initial dataset version (v1). The supported formats are as follows:
   * 
   * - For an OSS data source: `oss://bucket.endpoint/object`.
   * 
   * - For a NAS data source, the format varies by NAS type:
   * 
   *   CPFS 1.0 and CPFS 2.0 are distinguished by the format of the file system ID ():
   * 
   * @example
   * nas://09f****f2.cn-hangzhou/
   */
  uri?: string;
  /**
   * @remarks
   * The user ID of the dataset owner.
   * 
   * @example
   * 2485765****023475
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace where the dataset is located.
   * 
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      accessibleRoleIdList: 'AccessibleRoleIdList',
      dataSourceType: 'DataSourceType',
      dataType: 'DataType',
      datasetId: 'DatasetId',
      description: 'Description',
      edition: 'Edition',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      importInfo: 'ImportInfo',
      isShared: 'IsShared',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      mountAccess: 'MountAccess',
      mountAccessReadWriteRoleIdList: 'MountAccessReadWriteRoleIdList',
      name: 'Name',
      options: 'Options',
      ownerId: 'OwnerId',
      property: 'Property',
      provider: 'Provider',
      providerType: 'ProviderType',
      requestId: 'RequestId',
      sharedFrom: 'SharedFrom',
      sharingConfig: 'SharingConfig',
      sourceDatasetId: 'SourceDatasetId',
      sourceDatasetVersion: 'SourceDatasetVersion',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      tagTemplateType: 'TagTemplateType',
      uri: 'Uri',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      accessibleRoleIdList: { 'type': 'array', 'itemType': 'string' },
      dataSourceType: 'string',
      dataType: 'string',
      datasetId: 'string',
      description: 'string',
      edition: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      importInfo: 'string',
      isShared: 'boolean',
      labels: { 'type': 'array', 'itemType': Label },
      latestVersion: DatasetVersion,
      mountAccess: 'string',
      mountAccessReadWriteRoleIdList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      options: 'string',
      ownerId: 'string',
      property: 'string',
      provider: 'string',
      providerType: 'string',
      requestId: 'string',
      sharedFrom: DatasetShareRelationship,
      sharingConfig: GetDatasetResponseBodySharingConfig,
      sourceDatasetId: 'string',
      sourceDatasetVersion: 'string',
      sourceId: 'string',
      sourceType: 'string',
      tagTemplateType: 'string',
      uri: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessibleRoleIdList)) {
      $dara.Model.validateArray(this.accessibleRoleIdList);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.latestVersion && typeof (this.latestVersion as any).validate === 'function') {
      (this.latestVersion as any).validate();
    }
    if(Array.isArray(this.mountAccessReadWriteRoleIdList)) {
      $dara.Model.validateArray(this.mountAccessReadWriteRoleIdList);
    }
    if(this.sharedFrom && typeof (this.sharedFrom as any).validate === 'function') {
      (this.sharedFrom as any).validate();
    }
    if(this.sharingConfig && typeof (this.sharingConfig as any).validate === 'function') {
      (this.sharingConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

