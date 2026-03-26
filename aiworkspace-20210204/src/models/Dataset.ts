// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { DatasetVersion } from "./DatasetVersion";
import { DatasetShareRelationship } from "./DatasetShareRelationship";


export class DatasetSharingConfig extends $dara.Model {
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
   * The workspace accessibility. Valid values:
   * 
   * *   PRIVATE (default): The dataset is accessible only to you and the administrator of the workspace.
   * *   PUBLIC: The dataset is accessible to all members in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  accessibleRoleIdList?: string[];
  /**
   * @remarks
   * The data source type.
   * 
   * Valid values:
   * 
   * *   NAS
   * *   OSS
   * 
   * @example
   * NAS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * *   COMMON (default)
   * *   PIC
   * *   TEXT
   * *   Video
   * *   AUDIO
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
   * d-c0h44g3****j8o4348
   */
  datasetId?: string;
  /**
   * @remarks
   * The dataset description.
   */
  description?: string;
  /**
   * @example
   * BASIC
   */
  edition?: string;
  /**
   * @remarks
   * The time when the dataset was created.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the dataset was modified.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The dataset import information, such as OSS, NAS, and CPFS.
   * 
   * **OSS**
   * 
   * { "region": "${region}",//The region ID. "bucket": "${bucket}",//The bucket name. "path": "${path}" //The file path. }
   * 
   * **NAS**
   * 
   * **CPFS**
   * 
   * **CPFS for Lingjun**
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
  isShared?: boolean;
  /**
   * @remarks
   * The labels.
   */
  labels?: Label[];
  /**
   * @remarks
   * The latest dataset version.
   */
  latestVersion?: DatasetVersion;
  /**
   * @remarks
   * MountAccess
   * 
   * @example
   * RO RW
   */
  mountAccess?: string;
  /**
   * @remarks
   * The IDs of the roles that have read and write permissions on the dataset in the workspace. The IDs starting with PAI is the IDs of the basic roles, and the IDs starting with role- is the IDs of the custom roles. If the list contains "\\*", all roles have read and write permissions.
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
   * The extended field that can be used as an option. The value is a JSON string. When you use the dataset in Deep Learning Containers (DLC), you can use the mountPath field to specify the default mount path of the dataset.
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
   * The dataset property. Valid values:
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
   * The provider type of the dataset. Valid values:
   * 
   * *   Ecs (default)
   * *   Lingjun
   * 
   * @example
   * Ecs
   */
  providerType?: string;
  sharedFrom?: DatasetShareRelationship;
  sharingConfig?: DatasetSharingConfig;
  /**
   * @remarks
   * The ID of the source dataset for the labeled dataset.
   * 
   * @example
   * d-bvfasdfxxxxj8o411
   */
  sourceDatasetId?: string;
  /**
   * @remarks
   * The version of the source dataset for the labeled dataset.
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
   * Valid values:
   * 
   * *   PAI_PUBLIC_DATASET
   * *   ITAG
   * *   USER
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The labeling template of the iTAG labeled dataset.
   * 
   * @example
   * text-classification
   */
  tagTemplateType?: string;
  /**
   * @remarks
   * URI examples:
   * 
   * *   Object Storage Service (OSS) data source: `oss://bucket.endpoint/object`
   * *   File Storage NAS (NAS) data source: `nas://<nasfisid>.region/subpath/to/dir/`
   * *   Cloud Parallel File Storage (CPFS) 1.0 data source: `nas://<cpfs-fsid>.region/subpath/to/dir/`
   * *   CPFS 2.0 data source: `nas://<cpfs-fsid>.region/<protocolserviceid>/`
   * 
   * >  You can distinguish CPFS 1.0 and CPFS 2.0 file systems based on the format of the file system ID: The ID of the CPFS 1.0 file system is in the cpfs-<8-bit ASCII characters> format. The ID of the CPFS 2.0 file system is in the cpfs-<16-bit ASCII characters> format.
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

