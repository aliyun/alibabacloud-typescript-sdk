// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class CreateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the dataset in the workspace. Valid values:
   * 
   * - PRIVATE (default): The dataset is visible only to its owner and administrators in the workspace.
   * 
   * - PUBLIC: The dataset is visible to all users in the workspace.
   * 
   * - ROLE_PUBLIC: The dataset is visible to users with specific workspace roles. The list of roles is specified in the `AccessibleRoleIdList` parameter. The dataset owner and administrators always retain visibility.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * This parameter takes effect only when `Accessibility` is set to `ROLE_PUBLIC`. This parameter specifies a list of workspace role IDs that can view this dataset. Role IDs that start with `PAI.` are built-in roles, and role IDs that start with `role-` are custom roles.
   */
  accessibleRoleIdList?: string[];
  /**
   * @remarks
   * The number of files in the dataset.
   * 
   * @example
   * 500
   */
  dataCount?: number;
  /**
   * @remarks
   * The size of the dataset files, in bytes.
   * 
   * @example
   * 10000
   */
  dataSize?: number;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - OSS: Object Storage Service (OSS).
   * 
   * - NAS: general-purpose Apsara File Storage NAS.
   * 
   * - EXTREMENAS: Extreme NAS.
   * 
   * - CPFS: general-purpose Cloud Parallel File Storage (CPFS).
   * 
   * - BMCPFS: AI Computing Edition of CPFS.
   * 
   * - MAXCOMPUTE: MaxCompute.
   * 
   * - URL: a public HTTP or HTTPS URL.
   * 
   * This parameter is required.
   * 
   * @example
   * NAS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The data type of the dataset. The default value is `COMMON`. Valid values:
   * 
   * - COMMON: common
   * 
   * - PIC: image
   * 
   * - TEXT: text
   * 
   * - VIDEO: video
   * 
   * - AUDIO: audio
   * 
   * @example
   * COMMON
   */
  dataType?: string;
  /**
   * @remarks
   * A custom description to distinguish the dataset from other datasets.
   * 
   * @example
   * This is a description of the dataset.
   */
  description?: string;
  /**
   * @remarks
   * The edition of the dataset. The default value is BASIC. Valid values:
   * 
   * - BASIC: Basic. Does not support dataset file metadata management.
   * 
   * - ADVANCED: Advanced. Supported only for OSS datasets. Each version supports metadata management for up to 1 million files.
   * 
   * - LOGICAL: Logical. Supported only for OSS datasets. Each version supports metadata management for up to 3 million files.
   * 
   * @example
   * ADVANCED
   */
  edition?: string;
  /**
   * @remarks
   * The storage import configuration of the dataset. `OSS`, `NAS`, and `CPFS` are supported.
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
   * "path": "${path}" // The file path.\\
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
   * "path": "${path}", // The file system path.\\
   * "mountTarget": "${mount_target}" // The mount target of the file system.\\
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
   * "protocolServiceId":"${protocol_service_id}", // The protocol service of the file system.\\
   * "exportId": "${export_id}", // The exported directory of the file system.\\
   * "path": "${path}", // The file system path.\\
   * }
   * 
   * </details>
   * 
   * <details>
   * 
   * <summary>
   * 
   * CPFS (AI Computing Edition)
   * 
   * </summary>
   * 
   * {\\
   * "region": "${region}",// The region ID.\\
   * "fileSystemId": "${file_system_id}", // The file system ID.\\
   * "path": "${path}", // The file system path.\\
   * "mountTarget": "${mount_target}", // The mount target of the file system. This parameter is specific to the AI Computing Edition.\\
   * "isVpcMount": boolean, // Specifies whether the mount target is in a VPC. This parameter is specific to the AI Computing Edition.\\
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
   * A list of labels.
   */
  labels?: Label[];
  /**
   * @remarks
   * A list of workspace role IDs that are granted read and write permissions when the dataset is mounted. Role IDs that start with `PAI.` are built-in roles, and role IDs that start with `role-` are custom roles. If the list contains an asterisk (\\*), all roles are granted read and write permissions.
   * 
   * - Accounts with specified roles: `["PAI.AlgoOperator", "role-hiuwpd01ncrokkgp21"]`
   * 
   * - All accounts: `["*"]`
   * 
   * - Dataset creator only: `[]`
   */
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @remarks
   * The name of the dataset. The name must meet the following requirements:
   * 
   * - Starts with a lowercase letter, an uppercase letter, a number, or a Chinese character.
   * 
   * - Can contain underscores (_) and hyphens (-).
   * 
   * - Must be 1 to 127 characters long.
   * 
   * This parameter is required.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The extended fields, which are a JSON string.
   * When a Data Lake Compute (DLC) job uses the dataset, you can configure the `mountPath` field to specify the default mount path of the dataset.
   * 
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The property of the dataset. Valid values:
   * 
   * - FILE: A file.
   * 
   * - DIRECTORY: A directory.
   * 
   * This parameter is required.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @remarks
   * The provider of the dataset. You cannot set this parameter to `pai`.
   * 
   * @example
   * Github
   */
  provider?: string;
  /**
   * @remarks
   * The type of the data source provider. Valid values:
   * 
   * - Ecs (default)
   * 
   * - Lingjun
   * 
   * @example
   * Ecs
   */
  providerType?: string;
  /**
   * @remarks
   * The ID of the source dataset for a labeled dataset.
   * 
   * @example
   * d-bvfasdfxxxxj8o411
   */
  sourceDatasetId?: string;
  /**
   * @remarks
   * The version of the source dataset for a labeled dataset.
   * 
   * @example
   * v2
   */
  sourceDatasetVersion?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * - If `SourceType` is `USER`, you can specify a custom value for `SourceId`.
   * 
   * - If `SourceType` is `ITAG`, this parameter specifies the iTAG task ID from which the dataset was generated.
   * 
   * - If `SourceType` is `PAI_PUBLIC_DATASET`, the dataset is from a public PAI dataset, and this parameter is empty by default.
   * 
   * @example
   * jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @remarks
   * The source of the data. The default value is USER.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The URI of the data. The URI format varies based on the `DataSourceType` value.
   * 
   * - For an `OSS` data source: `oss://bucket.endpoint/object`
   * 
   * - For a `NAS` data source:
   *   For general-purpose `NAS`: `nas://<nasfisid>.region/subpath/to/dir/`.
   *   For `CPFS` 1.0: `nas://<cpfs-fsid>.region/subpath/to/dir/`.
   *   For `CPFS` 2.0: `nas://<cpfs-fsid>.region/<protocolserviceid>/`.
   *   `CPFS` 1.0 and `CPFS` 2.0 are distinguished by the format of the file system ID (fsid). The fsid for `CPFS` 1.0 is in the `cpfs-<8-character ASCII string>` format. The fsid for `CPFS` 2.0 is in the `cpfs-<16-character ASCII string>` format.
   * 
   * This parameter is required.
   * 
   * @example
   * nas://09f****f2.cn-hangzhou/
   */
  uri?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the dataset owner. Workspace owners and administrators can create datasets for specified members of a workspace.
   * 
   * @example
   * 2485765****023475
   */
  userId?: string;
  /**
   * @remarks
   * The description of the initial version of the dataset.
   * 
   * @example
   * This is a description of the first dataset version.
   */
  versionDescription?: string;
  /**
   * @remarks
   * A list of labels for the initial version.
   */
  versionLabels?: Label[];
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs. For more information about how to obtain a workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * If this parameter is not specified, the default workspace is used. If the default workspace does not exist, an error is returned.
   * 
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      accessibleRoleIdList: 'AccessibleRoleIdList',
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      dataSourceType: 'DataSourceType',
      dataType: 'DataType',
      description: 'Description',
      edition: 'Edition',
      importInfo: 'ImportInfo',
      labels: 'Labels',
      mountAccessReadWriteRoleIdList: 'MountAccessReadWriteRoleIdList',
      name: 'Name',
      options: 'Options',
      property: 'Property',
      provider: 'Provider',
      providerType: 'ProviderType',
      sourceDatasetId: 'SourceDatasetId',
      sourceDatasetVersion: 'SourceDatasetVersion',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      uri: 'Uri',
      userId: 'UserId',
      versionDescription: 'VersionDescription',
      versionLabels: 'VersionLabels',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      accessibleRoleIdList: { 'type': 'array', 'itemType': 'string' },
      dataCount: 'number',
      dataSize: 'number',
      dataSourceType: 'string',
      dataType: 'string',
      description: 'string',
      edition: 'string',
      importInfo: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      mountAccessReadWriteRoleIdList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      options: 'string',
      property: 'string',
      provider: 'string',
      providerType: 'string',
      sourceDatasetId: 'string',
      sourceDatasetVersion: 'string',
      sourceId: 'string',
      sourceType: 'string',
      uri: 'string',
      userId: 'string',
      versionDescription: 'string',
      versionLabels: { 'type': 'array', 'itemType': Label },
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
    if(Array.isArray(this.mountAccessReadWriteRoleIdList)) {
      $dara.Model.validateArray(this.mountAccessReadWriteRoleIdList);
    }
    if(Array.isArray(this.versionLabels)) {
      $dara.Model.validateArray(this.versionLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

