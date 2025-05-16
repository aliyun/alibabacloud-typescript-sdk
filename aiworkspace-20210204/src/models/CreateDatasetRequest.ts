// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class CreateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace accessibility. Valid values:
   * 
   * *   PRIVATE: The workspace is accessible only to you and the administrator of the workspace. This is the default value.
   * *   PUBLIC: The workspace is accessible to all users.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The number of dataset files.
   * 
   * @example
   * 500
   */
  dataCount?: number;
  /**
   * @remarks
   * The size of the dataset file. Unit: bytes.
   * 
   * @example
   * 10000
   */
  dataSize?: number;
  /**
   * @remarks
   * The data source type. Valid values:
   * 
   * *   OSS: Object Storage Service (OSS).
   * *   NAS: File Storage NAS (NAS).
   * 
   * This parameter is required.
   * 
   * @example
   * NAS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The type of the dataset. Default value: COMMON. Valid values:
   * 
   * *   COMMON: common
   * *   PIC: picture
   * *   TEXT: text
   * *   Video: video
   * *   AUDIO: audio
   * 
   * @example
   * COMMON
   */
  dataType?: string;
  /**
   * @remarks
   * The description of the dataset. Descriptions are used to differentiate datasets.
   */
  description?: string;
  /**
   * @remarks
   * The dataset configurations to be imported to a storage, such as OSS, NAS, or Cloud Parallel File Storage (CPFS).
   * 
   * **OSS**
   * 
   * {\\
   * "region": "${region}",// The region ID.\\
   * "bucket": "${bucket}",//The bucket name.\\
   * "path": "${path}" // The file path.\\
   * }\\
   * 
   * 
   * **NAS**
   * 
   * {\\
   * "region": "${region}",// The region ID.\\
   * "fileSystemId": "${file_system_id}", // The file system ID.\\
   * "path": "${path}", // The file system path.\\
   * "mountTarget": "${mount_target}" // The mount point of the file system.\\
   * }\\
   * 
   * 
   * **CPFS**
   * 
   * {\\
   * "region": "${region}",// The region ID.\\
   * "fileSystemId": "${file_system_id}", // The file system ID.\\
   * "protocolServiceId":"${protocol_service_id}", // The file system protocol service.\\
   * "exportId": "${export_id}", // The file system export directory.\\
   * "path": "${path}", // The file system path.\\
   * }\\
   * 
   * 
   * **CPFS for Lingjun**
   * 
   * {\\
   * "region": "${region}",// The region ID.\\
   * "fileSystemId": "${file_system_id}", // The file system ID.\\
   * "path": "${path}", // The file system path.\\
   * "mountTarget": "${mount_target}" // The mount point of the file system, CPFS for Lingjun only.\\
   * "isVpcMount": boolean, // Whether the mount point is a virtual private cloud (VPC) mount point, CPFS for Lingjun only.\\
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
   * The list of role names in the workspace that have read and write permissions on the mounted database. The names start with PAI are basic role names and the names start with role- are custom role names. If the list contains asterisks (\\*), all roles have read and write permissions.
   * 
   * *   If you set the value to ["PAI.AlgoOperator", "role-hiuwpd01ncrokkgp21"], the account of the specified role is granted the read and write permissions.
   * *   If you set the value to ["\\*"], all accounts are granted the read and write permissions.
   * *   If you set the value to [], only the creator of the dataset has the read and write permissions.
   */
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @remarks
   * The dataset name. The name must meet the following requirements:
   * 
   * *   The name must start with a letter, digit, or Chinese character.
   * *   The name can contain underscores (_) and hyphens (-).
   * *   The name must be 1 to 127 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The extended field, which is a JSON string. When you use the dataset in Deep Learning Containers (DLC), you can configure the mountPath field to specify the default mount path of the dataset.
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
   * *   FILE
   * *   DIRECTORY
   * 
   * This parameter is required.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @remarks
   * The dataset provider. The value cannot be set to pai.
   * 
   * @example
   * Github
   */
  provider?: string;
  /**
   * @remarks
   * The source type of the dataset. Valid values:
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
   * The data source ID.
   * 
   * *   If SourceType is set to USER, the value of SourceId is a custom string.
   * *   If SourceType is set to ITAG, the value of SourceId is the ID of the labeling job of iTAG.
   * *   If SourceType is set to PAI_PUBLIC_DATASET, SourceId is empty by default.
   * 
   * @example
   * jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the data source. Default value: USER.
   * 
   * Valid values:
   * 
   * *   PAI_PUBLIC_DATASET: a public dataset of PAI.
   * *   ITAG: a dataset generated from a labeling job of iTAG.
   * *   USER: a dataset registered by a user.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The URI of the data source.
   * 
   * *   Value format if DataSourceType is set to OSS: `oss://bucket.endpoint/object`.
   * *   Value formats if DataSourceType is set to NAS: General-purpose NAS: `nas://<nasfisid>.region/subpath/to/dir/`. CPFS 1.0: `nas://<cpfs-fsid>.region/subpath/to/dir/`. CPFS 2.0: `nas://<cpfs-fsid>.region/<protocolserviceid>/`. You can distinguish CPFS 1.0 and CPFS 2.0 file systems based on the format of the file system ID: The ID for CPFS 1.0 is in the cpfs-<8-bit ASCII characters> format. The ID for CPFS 2.0 is in the cpfs-<16-bit ASCII characters> format.
   * 
   * This parameter is required.
   * 
   * @example
   * nas://09f****f2.cn-hangzhou/
   */
  uri?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the dataset belongs. The workspace owner and administrator have permissions to create datasets for specified members in the workspace.
   * 
   * @example
   * 2485765****023475
   */
  userId?: string;
  /**
   * @remarks
   * The description of the dataset of the initial version.
   * 
   * @example
   * The initial version
   */
  versionDescription?: string;
  /**
   * @remarks
   * The list of tags to be added to the dataset of the initial version.
   */
  versionLabels?: Label[];
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID. If you do not specify this parameter, the default workspace is used. If the default workspace does not exist, an error is reported.
   * 
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      dataSourceType: 'DataSourceType',
      dataType: 'DataType',
      description: 'Description',
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
      dataCount: 'number',
      dataSize: 'number',
      dataSourceType: 'string',
      dataType: 'string',
      description: 'string',
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

