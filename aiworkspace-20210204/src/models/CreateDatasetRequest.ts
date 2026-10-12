// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { UserMetricsEndpoint } from "./UserMetricsEndpoint";


export class CreateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace visibility. Valid values:
   * - PRIVATE: Visible only to the creator and administrators in the workspace. This is the default value.
   * - PUBLIC: Visible to all users in the workspace.
   * - ROLE_PUBLIC: Visible to specified workspace roles. For the role list, refer to AccessibleRoleIdList. The dataset owner and administrators always have visibility regardless of the specified roles.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * Takes effect only when Accessibility is set to ROLE_PUBLIC. The list of workspace role names that have visibility to the dataset. Role IDs starting with PAI are basic role IDs, and those starting with role- are custom role IDs.
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
   * The storage space occupied by the dataset files. Unit: bytes.
   * 
   * @example
   * 10000
   */
  dataSize?: number;
  /**
   * @remarks
   * The data source type. Valid values:
   * - OSS: Alibaba Cloud Object Storage Service (OSS).
   * - NAS: Alibaba Cloud File Storage NAS (General-purpose).
   * - EXTREMENAS: Alibaba Cloud File Storage NAS (Extreme).
   * - CPFS: Alibaba Cloud Cloud Paralleled File System (CPFS) (General-purpose).
   * - BMCPFS: Alibaba Cloud Cloud Paralleled File System (CPFS) (AI-optimized). 
   * - MAXCOMPUTE: Alibaba Cloud MaxCompute.
   * - URL: A public HTTP or HTTPS URL.
   * 
   * This parameter is required.
   * 
   * @example
   * NAS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The data type of the dataset. Default value: COMMON. Valid values:
   * - COMMON: Common data.
   * - PIC: Image data.
   * - TEXT: Text data.
   * - VIDEO: Video data.
   * - AUDIO: Audio data.
   * 
   * @example
   * COMMON
   */
  dataType?: string;
  /**
   * @remarks
   * DatasetTaskRamRole
   * 
   * @example
   * acs:ram::1234567890123456:role/role-name
   */
  datasetTaskRamRole?: string;
  /**
   * @remarks
   * The custom description of the dataset, which is used to distinguish it from other datasets.
   * 
   * @example
   * This is a description of the dataset.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run without actually creating the dataset.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The dataset edition. Default value: BASIC. Valid values:
   * - BASIC: Basic edition. Does not support file metadata management for the dataset.
   * - ADVANCED: Advanced edition. Only OSS datasets are supported. Each version supports metadata management for up to 1 million files.
   * - LOGICAL: Logical edition. Only OSS datasets are supported. Each version supports metadata management for up to 3 million files.
   * 
   * @example
   * ADVANCED
   */
  edition?: string;
  /**
   * @remarks
   * The storage import configuration of the dataset. OSS, NAS, and CPFS are supported.
   * 
   * <details>
   * <summary>OSS</summary>
   * {<BR>
   * "region": "${region}",// The region ID.<BR>
   * "bucket": "${bucket}",// The bucket name.<BR>
   * "path": "${path}" // The file path.<BR>
   * }<BR>
   * </details>
   * 
   * <details>
   * <summary>NAS</summary>
   * {<BR>
   * "region": "${region}",// The region ID.<BR>
   * "fileSystemId": "${file_system_id}", // The file system ID.<BR>
   * "path": "${path}", // The file system path.<BR>
   * "mountTarget": "${mount_target}" // The mount target of the file system.<BR>
   * }<BR>
   * </details>
   * 
   * <details>
   * <summary>CPFS</summary>
   * {<BR>
   * "region": "${region}",// The region ID.<BR>
   * "fileSystemId": "${file_system_id}", // The file system ID.<BR>
   * "protocolServiceId":"${protocol_service_id}", // The protocol service of the file system.<BR>
   * "exportId": "${export_id}", // The export directory of the file system.<BR>
   * "path": "${path}", // The file system path.<BR>
   * }<BR>
   * </details>
   * 
   * <details>
   * <summary>AI-optimized CPFS</summary>
   * {<BR>
   * "region": "${region}",// The region ID.<BR>
   * "fileSystemId": "${file_system_id}", // The file system ID.<BR>
   * "path": "${path}", // The file system path.<BR>
   * "mountTarget": "${mount_target}", // The mount target of the file system. Specific to the AI-optimized edition.<BR>
   * "isVpcMount": boolean, // Specifies whether the mount target is a VPC mount target. Specific to the AI-optimized edition.<BR>
   * }<BR>
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
   * The list of labels.
   */
  labels?: Label[];
  /**
   * @remarks
   * The list of workspace role names that have read and write permissions when the dataset is mounted. Role IDs starting with PAI are basic role IDs, and those starting with role- are custom role IDs. If the list contains an asterisk (*), all roles have read and write permissions.
   * - Specified roles: ["PAI.AlgoOperator", "role-hiuwpd01ncrokkgp21"]
   * - All roles: ["*"]
   * - Dataset creator only: []
   */
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @remarks
   * The name of the dataset. The naming rules are as follows:
   * - The name must start with a lowercase letter, an uppercase letter, a digit, or a Chinese character.
   * - The name can contain underscores (_) and hyphens (-).
   * - The name must be 1 to 127 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The extended fields in JSON string format. When DLC uses the dataset, you can configure the mountPath field to specify the default mount path of the dataset.
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
   * - FILE: File.
   * - DIRECTORY: Directory.
   * 
   * This parameter is required.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @remarks
   * The provider of the dataset. You cannot set this parameter to pai.
   * 
   * @example
   * Github
   */
  provider?: string;
  /**
   * @remarks
   * The data source type of the dataset. Valid values:
   * - Ecs: Elastic Compute Service (ECS). This is the default value.
   * - Lingjun: Lingjun.
   * 
   * @example
   * Ecs
   */
  providerType?: string;
  /**
   * @remarks
   * The ID of the source dataset from which the labeled dataset is generated.
   * 
   * @example
   * d-bvfasdfxxxxj8o411
   */
  sourceDatasetId?: string;
  /**
   * @remarks
   * The version of the source dataset from which the labeled dataset is generated.
   * 
   * @example
   * v2
   */
  sourceDatasetVersion?: string;
  /**
   * @remarks
   * The ID of the data source.
   * - When SourceType is set to USER, SourceId can be customized.
   * - When SourceType is set to ITAG, which indicates that the dataset is generated from the labeling results of the iTAG module, SourceId is the iTAG task ID.
   * - When SourceType is set to PAI_PUBLIC_DATASET, which indicates that the dataset is created from a PAI public dataset, SourceId is empty by default.
   * 
   * @example
   * jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @remarks
   * The data source type. Default value: USER.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The URI configuration examples are as follows:
   * - If the data source type is OSS: `oss://bucket.endpoint/object`
   * - If the data source type is NAS:
   * For general-purpose NAS, the format is `nas://<nasfisid>.region/subpath/to/dir/`.
   * For CPFS 1.0, the format is `nas://<cpfs-fsid>.region/subpath/to/dir/`.
   * For CPFS 2.0, the format is `nas://<cpfs-fsid>.region/<protocolserviceid>/`.
   * CPFS 1.0 and CPFS 2.0 are distinguished by the format of the fsid: the format for CPFS 1.0 is cpfs-<8 ASCII characters>, and the format for CPFS 2.0 is cpfs-<16 ASCII characters>.
   * 
   * This parameter is required.
   * 
   * @example
   * nas://09f****f2.cn-hangzhou/
   */
  uri?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the dataset owner. The workspace owner and administrators have the permissions to create datasets for specified workspace members.
   * 
   * @example
   * 2485765****023475
   */
  userId?: string;
  /**
   * @remarks
   * UserMetricsEndpoints
   */
  userMetricsEndpoints?: UserMetricsEndpoint[];
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
   * The list of labels for the initial version.
   */
  versionLabels?: Label[];
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs. For more information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * If you do not configure this parameter, the default workspace is used. If the default workspace does not exist, an error is reported.
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
      datasetTaskRamRole: 'DatasetTaskRamRole',
      description: 'Description',
      dryRun: 'DryRun',
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
      userMetricsEndpoints: 'UserMetricsEndpoints',
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
      datasetTaskRamRole: 'string',
      description: 'string',
      dryRun: 'boolean',
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
      userMetricsEndpoints: { 'type': 'array', 'itemType': UserMetricsEndpoint },
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
    if(Array.isArray(this.userMetricsEndpoints)) {
      $dara.Model.validateArray(this.userMetricsEndpoints);
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

