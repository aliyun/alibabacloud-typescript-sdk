// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { DatasetVersion } from "./DatasetVersion";
import { DatasetShareRelationship } from "./DatasetShareRelationship";


export class GetDatasetResponseBodySharingConfig extends $dara.Model {
  /**
   * @remarks
   * The list of sharing configuration relationships.
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
   * The workspace visibility. Valid values:
   * - PRIVATE: Only the dataset owner and administrators in the workspace can access the dataset.
   * - PUBLIC: All members in the workspace can access the dataset.
   * - ROLE_PUBLIC: Only specified workspace roles can access the dataset. For the role list, see AccessibleRoleIdList. The dataset owner and administrators always have access under this condition.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The list of workspace role names that can access the dataset. This field takes effect when Accessibility is ROLE_PUBLIC. IDs starting with PAI are basic role IDs, and IDs starting with role- are custom role IDs.
   */
  accessibleRoleIdList?: string[];
  /**
   * @remarks
   * The data source type. Valid values:
   * - OSS: Alibaba Cloud Object Storage Service (OSS).
   * - NAS: Alibaba Cloud Apsara File Storage NAS (NAS).
   * 
   * @example
   * NAS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The data type of the dataset. Valid values:
   * 
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
   * The dataset ID.
   * 
   * @example
   * d-rbvg5wz****c9ks92
   */
  datasetId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Data for labeling
   */
  description?: string;
  /**
   * @remarks
   * The dataset type. Valid values:
   * 
   * - BASIC: Basic. Does not support dataset file metadata management.
   * 
   *  
   * 
   * - ADVANCED: Advanced. Only supported for OSS type. Each version supports metadata management for up to 1 million files.
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
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
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
   * <summary>Lingjun CPFS</summary>
   * {<BR>
   * "region": "${region}",//Region ID<BR>
   * "fileSystemId": "${file_system_id}", //File system ID<BR>
   * "path": "${path}", //File system path<BR>
   * "mountTarget": "${mount_target}" //File system mount target, specific to Lingjun edition<BR>
   * "isVpcMount": boolean, //Whether it is a VPC mount target, specific to Lingjun edition<BR>
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
   * Indicates whether the dataset is a shared dataset.
   * 
   * @example
   * false
   */
  isShared?: boolean;
  /**
   * @remarks
   * The list of labels.
   */
  labels?: Label[];
  /**
   * @remarks
   * The latest version of the dataset.
   */
  latestVersion?: DatasetVersion;
  /**
   * @remarks
   * The permission when the dataset is mounted. Valid values:
   * - RO: read-only mount.
   * - RW: read-write mount.
   * 
   * @example
   * RW
   */
  mountAccess?: string;
  /**
   * @remarks
   * The list of workspace role names that have read and write permission on the dataset. IDs starting with PAI are basic role IDs, and IDs starting with role- are custom role IDs. If the list contains "*", all roles have read and write permission.
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
   * The extension field of the initial version v1, in JsonString format.
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
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1631044****3440
   */
  ownerId?: string;
  /**
   * @remarks
   * The property of the initial dataset version v1. Valid values:
   * - FILE: file.
   * - DIRECTORY: folder.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @remarks
   * The dataset provider. If the value is "pai", the dataset is a PAI platform public dataset.
   * 
   * @example
   * pai
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
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The source relationship of the shared dataset. This field is valid only when IsShared is true.
   */
  sharedFrom?: DatasetShareRelationship;
  /**
   * @remarks
   * The sharing configuration of the current dataset.
   */
  sharingConfig?: GetDatasetResponseBodySharingConfig;
  /**
   * @remarks
   * The source dataset ID of the iTag labeling dataset.
   * 
   * @example
   * d-rcdg3wxxxxxhc5jk87
   */
  sourceDatasetId?: string;
  /**
   * @remarks
   * The source dataset version of the labeling dataset.
   * 
   * @example
   * v2
   */
  sourceDatasetVersion?: string;
  /**
   * @remarks
   * The source ID of the initial version v1. Valid values:
   * - If SourceType is USER, SourceId can be customized.
   * - If SourceType is ITAG, which indicates a dataset generated from iTAG labeling results, SourceId is the iTAG task ID.
   * - If SourceType is PAI_PUBLIC_DATASET, which indicates a dataset created from a PAI public dataset, SourceId is empty by default.
   * 
   * @example
   * jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type of the initial version v1.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The labeling template of the iTag labeling dataset.
   * 
   * @example
   * TextClassification
   */
  tagTemplateType?: string;
  /**
   * @remarks
   * The URI of the initial version v1. Example formats:
   * - If the data source type is OSS: `oss://bucket.endpoint/object`.
   * - If the data source type is NAS:
   * General-purpose NAS format: `nas://<nasfisid>.region/subpath/to/dir/`.
   * CPFS 1.0: `nas://<cpfs-fsid>.region/subpath/to/dir/`.
   * CPFS 2.0: `nas://<cpfs-fsid>.region/<protocolserviceid>/`.
   * CPFS 1.0 and CPFS 2.0 are distinguished by the format of the fsid:
   * CPFS 1.0 format: cpfs-<8 ASCII characters>.
   * CPFS 2.0 format: cpfs-<16 ASCII characters>.
   * 
   * @example
   * nas://09f****f2.cn-hangzhou/
   */
  uri?: string;
  /**
   * @remarks
   * The ID of the user to whom the dataset belongs.
   * 
   * @example
   * 2485765****023475
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs.
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

