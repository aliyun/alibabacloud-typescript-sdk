// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { UserMetricsEndpoint } from "./UserMetricsEndpoint";


export class CreateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the workspace. Valid values:
   * - PRIVATE (default): visible only to yourself and administrators within the workspace.
   * - PUBLIC: visible to all users in the workspace.
   * - ROLE_PUBLIC: visible to specified workspace roles. For the role list, refer to AccessibleRoleIdList. Under this condition, the dataset owner and administrators always have visibility.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * Takes effect when Accessibility is set to ROLE_PUBLIC. The list of workspace role names that can view the dataset. IDs starting with PAI are basic role IDs, and IDs starting with role- are custom role IDs.
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
   * The size of space occupied by the dataset files. Unit: bytes.
   * 
   * @example
   * 10000
   */
  dataSize?: number;
  /**
   * @remarks
   * The data source type. Valid values:
   * - OSS: Alibaba Cloud Object Storage Service (OSS).
   * - NAS: Alibaba Cloud Apsara File Storage NAS General Purpose.
   * - EXTREMENAS: Alibaba Cloud Apsara File Storage NAS Extreme.
   * - CPFS: Alibaba Cloud Cloud Parallel File Storage (CPFS) General Purpose.
   * - BMCPFS: Alibaba Cloud Cloud Parallel File Storage (CPFS) AI Edition. 
   * - MAXCOMPUTE: Alibaba Cloud MaxCompute.
   * - URL: public HTTP/HTTPS URL.
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
   * - COMMON: common.
   * - PIC: image.
   * - TEXT: text.
   * - VIDEO: video.
   * - AUDIO: audio.
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
   * The custom description of the dataset to distinguish it from other datasets.
   * 
   * @example
   * This is a description of the dataset.
   */
  description?: string;
  /**
   * @remarks
   * The dataset type. Default value: BASIC. Valid values:
   * 
   * - BASIC: basic. Does not support dataset file metadata management.
   * - ADVANCED: advanced. Only supported for OSS type. Each version supports up to 1 million file metadata entries.
   * - LOGICAL: logical. Only supported for OSS type. Each version supports up to 3 million file metadata entries.
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
   * "region": "${region}",//Region ID<BR>
   * "bucket": "${bucket}",//Bucket name<BR>
   * "path": "${path}" //File path<BR>
   * }<BR>
   * </details>
   * 
   * <details>
   * <summary>NAS</summary>
   * {<BR>
   * "region": "${region}",//Region ID<BR>
   * "fileSystemId": "${file_system_id}", //File system ID<BR>
   * "path": "${path}", //File system path<BR>
   * "mountTarget": "${mount_target}" //File system mount target<BR>
   * }<BR>
   * </details>
   * 
   * <details>
   * <summary>CPFS</summary>
   * {<BR>
   * "region": "${region}",//Region ID<BR>
   * "fileSystemId": "${file_system_id}", //File system ID<BR>
   * "protocolServiceId":"${protocol_service_id}", //File system protocol service<BR>
   * "exportId": "${export_id}", //File system export directory<BR>
   * "path": "${path}", //File system path<BR>
   * }<BR>
   * </details>
   * 
   * <details>
   * <summary>AI Edition CPFS</summary>
   * {<BR>
   * "region": "${region}",//Region ID<BR>
   * "fileSystemId": "${file_system_id}", //File system ID<BR>
   * "path": "${path}", //File system path<BR>
   * "mountTarget": "${mount_target}" //File system mount target, specific to AI Edition<BR>
   * "isVpcMount": boolean, //Whether it is a VPC mount target, specific to AI Edition<BR>
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
   * The list of workspace role names that have read and write permissions when the dataset is mounted. IDs starting with PAI are basic role IDs, and IDs starting with role- are custom role IDs. If the list contains "*", all roles have read and write permissions.
   * - Specified roles: ["PAI.AlgoOperator", "role-hiuwpd01ncrokkgp21"]
   * - All accounts: ["*"]
   * - Dataset creator only: []
   */
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @remarks
   * The name of the dataset. Naming rules:
   * - Must start with a lowercase letter, uppercase letter, digit, or Chinese character.
   * - Can contain underscores (_) or hyphens (-).
   * - Must be 1 to 127 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The extended field in JsonString format.
   * When DLC uses the dataset, you can specify the default mount path of the dataset by configuring the mountPath field.
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
   * - FILE: file.
   * - DIRECTORY: folder.
   * 
   * This parameter is required.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @remarks
   * The dataset provider. Cannot be set to pai.
   * 
   * @example
   * Github
   */
  provider?: string;
  /**
   * @remarks
   * The data source provider type of the dataset. Valid values:
   * - Ecs (default)
   * - Lingjun
   * 
   * @example
   * Ecs
   */
  providerType?: string;
  /**
   * @remarks
   * The source dataset ID of the annotation dataset.
   * 
   * @example
   * d-bvfasdfxxxxj8o411
   */
  sourceDatasetId?: string;
  /**
   * @remarks
   * The source dataset version of the annotation dataset.
   * 
   * @example
   * v2
   */
  sourceDatasetVersion?: string;
  /**
   * @remarks
   * The data source ID.
   * - If SourceType is USER, SourceId can be customized.
   * - If SourceType is ITAG, which indicates a dataset generated from iTAG annotation results, SourceId is the iTAG task ID.
   * - If SourceType is PAI_PUBLIC_DATASET, which indicates a dataset created from a PAI public dataset, SourceId is empty by default.
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
   * Examples of Uri configurations:
   * - If the data source type is OSS: `oss://bucket.endpoint/object`
   * - If the data source type is NAS:
   * General Purpose NAS format: `nas://<nasfisid>.region/subpath/to/dir/`;
   * CPFS 1.0: `nas://<cpfs-fsid>.region/subpath/to/dir/`;
   * CPFS 2.0: `nas://<cpfs-fsid>.region/<protocolserviceid>/`.
   * CPFS 1.0 and CPFS 2.0 are distinguished by the fsid format: CPFS 1.0 format is cpfs-<8 ASCII characters>; CPFS 2.0 format is cpfs-<16 ASCII characters>.
   * 
   * This parameter is required.
   * 
   * @example
   * nas://09f****f2.cn-hangzhou/
   */
  uri?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the dataset owner. Workspace owners and administrators have permissions to create datasets for specified workspace members.
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
   * The ID of the workspace where the dataset resides. For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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
      datasetTaskRamRole: 'DatasetTaskRamRole',
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

