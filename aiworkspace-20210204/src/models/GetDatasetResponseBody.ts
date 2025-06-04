// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { DatasetVersion } from "./DatasetVersion";


export class GetDatasetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The visibility of the workspace. Valid values:
   * 
   * *   PRIVATE: The workspace is visible only to you and the administrator of the workspace.
   * *   PUBLIC: The workspace is visible to all users.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   OSS: Object Storage Service (OSS)
   * *   NAS: File Storage NAS (NAS)
   * 
   * @example
   * NAS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * *   COMMON: common
   * *   PIC: picture
   * *   TEXT: text
   * *   VIDEO: video
   * *   AUDIO: audio
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
   */
  description?: string;
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
   * The dataset configurations to be imported to a storage, such as OSS, NAS, or CPFS.
   * 
   * **OSS**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "bucket": "${bucket}",// The bucket name\\
   * "path": "${path}" // The file path\\
   * }\\
   * 
   * 
   * **NAS**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "fileSystemId": "${file_system_id}", // The file system ID\\
   * "path": "${path}", // The file system path\\
   * "mountTarget": "${mount_target}" // The mount point of the file system\\
   * }\\
   * 
   * 
   * **CPFS**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "fileSystemId": "${file_system_id}", // The file system ID\\
   * "protocolServiceId":"${protocol_service_id}", // The file system protocol service\\
   * "exportId": "${export_id}", // The file system export directory\\
   * "path": "${path}", // The file system path\\
   * }\\
   * 
   * 
   * **CPFS for Lingjun**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "fileSystemId": "${file_system_id}", // The file system ID\\
   * "path": "${path}", // The file system path\\
   * "mountTarget": "${mount_target}" // The mount point of the file system, CPFS for Lingjun only\\
   * "isVpcMount": boolean, // Whether the mount point is a VPC mount point, CPFS for Lingjun only\\
   * }\\
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
   * The tags.
   */
  labels?: Label[];
  /**
   * @remarks
   * The latest version of the dataset.
   */
  latestVersion?: DatasetVersion;
  /**
   * @remarks
   * The access permission on the dataset when the dataset is mounted. Valid values:
   * 
   * *   RO: read-only permissions
   * *   RW: read and write permissions
   * 
   * @example
   * RW
   */
  mountAccess?: string;
  /**
   * @remarks
   * The list of role names in the workspace that have read and write permissions on the mounted database. The names start with PAI are basic role names and the names start with role- are custom role names. If the list contains asterisks (\\*), all roles have read and write permissions.
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
   * The extended fields of the dataset v1 (initial version). The value is a JSON string. When you use the dataset in Deep Learning Containers (DLC), you can use the mountPath field to specify the default mount path of the dataset.
   * 
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The ID of the Alibaba Could account.
   * 
   * @example
   * 1631044****3440
   */
  ownerId?: string;
  /**
   * @remarks
   * The property of the dataset of the initial version v1. Valid values:
   * 
   * *   FILE
   * *   DIRECTORY
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @remarks
   * The dataset provider. If the value pai is returned, the dataset is a public dataset in PAI.
   * 
   * @example
   * pai
   */
  provider?: string;
  /**
   * @remarks
   * The type of the data source for the dataset. Valid values:
   * 
   * *   Ecs (default)
   * *   Lingjun
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
   * The ID of the source dataset generated from a labeling job of iTAG.
   * 
   * @example
   * d-rcdg3wxxxxxhc5jk87
   */
  sourceDatasetId?: string;
  /**
   * @remarks
   * The version of the source dataset generated from a labeling job of iTAG.
   * 
   * @example
   * v2
   */
  sourceDatasetVersion?: string;
  /**
   * @remarks
   * The ID of the source for the dataset v1 (initial version). Valid values:
   * 
   * *   If SourceType is set to USER, the value of SourceId can be a custom string.
   * *   If SourceType is set to ITAG, the value of SourceId is the ID of the labeling job of iTAG.
   * *   If SourceType is set to PAI_PUBLIC_DATASET, SourceId is empty by default.
   * 
   * @example
   * jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the source for the dataset v1 (initial version). Valid values:
   * 
   * *   PAI-PUBLIC-DATASET: a public dataset of Platform for AI (PAI).
   * *   ITAG: a dataset generated from a labeling job of iTAG.
   * *   USER: a dataset registered by a user.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The labeling template for the source dataset generated from a labeling job of iTAG.
   * 
   * @example
   * TextClassification
   */
  tagTemplateType?: string;
  /**
   * @remarks
   * The URI of the initial version v1.
   * 
   * *   Sample format for the OSS data source: `oss://bucket.endpoint/object`
   * *   Sample formats for the NAS data source: `nas://<nasfisid>.region/subpath/to/dir/`: General-purpose NAS. `nas://<cpfs-fsid>.region/subpath/to/dir/`: Cloud Parallel File Storage (CPFS) 1.0. `nas://<cpfs-fsid>.region/<protocolserviceid>/`: CPFS 2.0. You can distinguish CPFS 1.0 and CPFS 2.0 file systems based on the format of the file system ID. The ID for CPFS 1.0 is in the cpfs-<8-bit ASCII characters> format. The ID for CPFS 2.0 is in the cpfs-<16-bit ASCII characters> format.
   * 
   * @example
   * nas://09f****f2.cn-hangzhou/
   */
  uri?: string;
  /**
   * @remarks
   * The ID of the user to which the dataset belongs.
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
      dataSourceType: 'DataSourceType',
      dataType: 'DataType',
      datasetId: 'DatasetId',
      description: 'Description',
      edition: 'Edition',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      importInfo: 'ImportInfo',
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
      dataSourceType: 'string',
      dataType: 'string',
      datasetId: 'string',
      description: 'string',
      edition: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      importInfo: 'string',
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
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.latestVersion && typeof (this.latestVersion as any).validate === 'function') {
      (this.latestVersion as any).validate();
    }
    if(Array.isArray(this.mountAccessReadWriteRoleIdList)) {
      $dara.Model.validateArray(this.mountAccessReadWriteRoleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

