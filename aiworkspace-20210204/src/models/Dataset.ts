// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { DatasetVersion } from "./DatasetVersion";
import { DatasetShareRelationship } from "./DatasetShareRelationship";


export class DatasetSharingConfig extends $dara.Model {
  /**
   * @remarks
   * A list of sharing relationships.
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

export class Dataset extends $dara.Model {
  /**
   * @remarks
   * The visibility of the dataset in the workspace. Valid values:
   * 
   * - `PRIVATE`: Visible only to the dataset\\"s owner and administrators.
   * 
   * - `PUBLIC`: The dataset is visible to all users in the workspace.
   * 
   * - `ROLE_PUBLIC`: Visible to specified workspace roles (see `AccessibleRoleIdList`). The owner and administrators also have visibility.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * If `Accessibility` is `ROLE_PUBLIC`, this parameter lists the IDs of workspace roles that can view the dataset. Role IDs that start with `PAI` are built-in roles, and those that start with `role-` are custom roles.
   */
  accessibleRoleIdList?: string[];
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * NAS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The data type of the dataset. Valid values:
   * 
   * - `COMMON`: (Default) Common data.
   * 
   * - `PIC`: Images.
   * 
   * - `TEXT`: Text.
   * 
   * - `VIDEO`: Videos.
   * 
   * - `AUDIO`: Audio.
   * 
   * @example
   * COMMON
   */
  dataType?: string;
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * @example
   * d-c0h44g3****j8o4348
   */
  datasetId?: string;
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * This is a description of a dataset.
   */
  description?: string;
  /**
   * @remarks
   * The edition of the dataset. Valid values:
   * 
   * `BASIC`: The basic edition. This edition does not support file metadata management.
   * `ADVANCED`: The advanced edition. This edition is supported only for OSS datasets and allows metadata management for up to 1 million files per version.
   * 
   * @example
   * BASIC
   */
  edition?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The configuration for importing data from a storage source. Supported sources include OSS, NAS, and CPFS.
   * 
   * <details>
   * 
   * <summary>
   * 
   * OSS
   * 
   * </summary>
   * 
   * {
   * "region": "${region}",// The region ID.
   * "bucket": "${bucket}",// The bucket name.
   * "path": "${path}" // The file path.
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
   * Content
   * 
   * </details>
   * 
   * <details>
   * 
   * <summary>
   * 
   * Intelligent Computing CPFS
   * 
   * </summary>
   * 
   * Content
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
   * Indicates whether the dataset is shared.
   * 
   * @example
   * false
   */
  isShared?: boolean;
  /**
   * @remarks
   * A list of labels.
   */
  labels?: Label[];
  /**
   * @remarks
   * Details of the latest dataset version.
   */
  latestVersion?: DatasetVersion;
  /**
   * @remarks
   * The mount access permissions.
   * 
   * @example
   * RO RW
   */
  mountAccess?: string;
  /**
   * @remarks
   * A list of IDs for workspace roles with read and write permissions on the dataset. Role IDs that start with `PAI` are built-in roles, and role IDs that start with `role-` are custom roles. An asterisk (`*`) indicates that all roles have read and write permissions.
   */
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * A JSON string of extended options. When you use the dataset in a Data Lake Compute job, you can configure the `mountPath` field to specify the default mount path for the dataset.
   * 
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1631044****3440
   */
  ownerId?: string;
  /**
   * @remarks
   * Indicates whether the dataset corresponds to a single file or a directory. Valid values:
   * 
   * - `FILE`: The dataset is a file.
   * 
   * - `DIRECTORY`: The dataset is a directory.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @remarks
   * The type of the data source provider. Valid values:
   * 
   * - `ECS` (Default)
   * 
   * - `Lingjun`
   * 
   * @example
   * Ecs
   */
  providerType?: string;
  /**
   * @remarks
   * The source of the shared dataset. This parameter is valid only when `IsShared` is `true`.
   */
  sharedFrom?: DatasetShareRelationship;
  /**
   * @remarks
   * The sharing configuration for the dataset.
   */
  sharingConfig?: DatasetSharingConfig;
  /**
   * @remarks
   * The ID of the source dataset for the annotated dataset.
   * 
   * @example
   * d-bvfasdfxxxxj8o411
   */
  sourceDatasetId?: string;
  /**
   * @remarks
   * The version of the source dataset for the annotated dataset.
   * 
   * @example
   * v2
   */
  sourceDatasetVersion?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The annotation template for the iTAG annotated dataset.
   * 
   * @example
   * text-classification
   */
  tagTemplateType?: string;
  /**
   * @remarks
   * URI examples:
   * 
   * - OSS data source:
   *   `oss://bucket.endpoint/object`
   * 
   * - General-purpose NAS data source:
   *   `nas://<nasfisid>.region/subpath/to/dir/`
   * 
   * - CPFS 1.0 data source:
   *   `nas://<cpfs-fsid>.region/subpath/to/dir/`
   * 
   * - CPFS 2.0 data source:
   *   `nas://<cpfs-fsid>.region/<protocolserviceid>/`
   * 
   * > The format of the `fsid` distinguishes CPFS 1.0 from CPFS 2.0. A CPFS 1.0 `fsid` has the format `cpfs-<8-character ASCII string>`, and a CPFS 2.0 `fsid` has the format `cpfs-<16-character ASCII string>`.
   * 
   * @example
   * nas://09f****f2.cn-hangzhou/
   */
  uri?: string;
  /**
   * @remarks
   * The user ID.
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
      providerType: 'ProviderType',
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
      providerType: 'string',
      sharedFrom: DatasetShareRelationship,
      sharingConfig: DatasetSharingConfig,
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

