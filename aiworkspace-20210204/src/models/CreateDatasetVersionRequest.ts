// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { UserMetricsEndpoint } from "./UserMetricsEndpoint";


export class CreateDatasetVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The number of files in the dataset.
   * 
   * @example
   * 300
   */
  dataCount?: number;
  /**
   * @remarks
   * The size of the space occupied by the dataset files. Unit: bytes.
   * 
   * @example
   * 19000
   */
  dataSize?: number;
  /**
   * @remarks
   * The data source type. Separate multiple values with commas. Valid values:
   * 
   * - NAS: Alibaba Cloud File Storage NAS.
   * 
   * - OSS: Alibaba Cloud Object Storage Service (OSS).
   * 
   * - CPFS
   * 
   * Note: The DataSourceType of the version must be the same as the DataSourceType of the dataset. The system validates this when you create the version.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * UserMetricsEndpoints
   * 
   * @example
   * acs:ram::1234567890123456:role/role-name
   */
  datasetTaskRamRole?: string;
  /**
   * @remarks
   * The custom description of the dataset version. You can use this description to distinguish between different dataset versions.
   * 
   * @example
   * This is a description of the dataset version.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run without actually creating the dataset version.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The storage import configuration of the dataset. OSS, NAS, and CPFS are supported.
   * 
   * <details>
   * <summary>OSS</summary>
   * {<BR>
   *   "region": "${region}",// The region ID.<BR>
   *   "bucket": "${bucket}",// The bucket name.<BR>
   *   "path": "${path}" // The file path.<BR>
   * }<BR>
   * </details>
   * 
   * <details>
   * <summary>NAS</summary>
   * {<BR>
   *   "region": "${region}",// The region ID.<BR>
   *   "fileSystemId": "${file_system_id}", // The file system ID.<BR>
   *   "path": "${path}", // The file system path.<BR>
   *   "mountTarget": "${mount_target}" // The mount target of the file system.<BR>
   * }<BR>
   * </details>
   * 
   * 
   * <details>
   * <summary>CPFS</summary>
   * {<BR>
   *   "region": "${region}",// The region ID.<BR>
   *   "fileSystemId": "${file_system_id}", // The file system ID.<BR>
   *   "protocolServiceId":"${protocol_service_id}", // The protocol service of the file system.<BR>
   *   "exportId": "${export_id}", // The export directory of the file system.<BR>
   *   "path": "${path}",  // The file system path.<BR>
   * }<BR>
   * </details>
   * 
   * <details>
   * <summary>CPFS for AI computing</summary>
   * {<BR>
   *   "region": "${region}",// The region ID.<BR>
   *   "fileSystemId": "${file_system_id}", // The file system ID.<BR>
   *   "path": "${path}",  // The file system path.<BR>
   *   "mountTarget": "${mount_target}" // The mount target of the file system. This parameter is specific to the AI computing edition.<BR>
   *   "isVpcMount": boolean, // Specifies whether the mount target is a VPC mount target. This parameter is specific to the AI computing edition.<BR>
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
   * The list of labels for the dataset version.
   */
  labels?: Label[];
  /**
   * @remarks
   * The extended field. The value is a JSON string. When DLC uses the dataset, you can configure the mountPath field to specify the default mount path for the dataset.
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
   * - FILE: file
   * - DIRECTORY: directory
   * 
   * This parameter is required.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @remarks
   * The source ID.
   * - If SourceType is set to USER, you can specify a custom SourceId.
   * - If SourceType is set to ITAG, the dataset is generated from the labeling results of the iTAG module, and SourceId is the task ID in iTAG.
   * - If SourceType is set to PAI_PUBLIC_DATASET, the dataset is created from a PAI public dataset, and SourceId is empty by default.
   * 
   * @example
   * d-a0xbe5n03bhqof46ce
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type. Default value: USER. Valid values:
   * - PAI-PUBLIC-DATASET: PAI public dataset.
   * - ITAG: dataset generated from the labeling results of the iTAG module.
   * - USER: user-registered dataset.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The URI. Configuration examples:
   * - If the data source type is OSS: `oss://bucket.endpoint/object`
   * - If the data source type is NAS:
   *   For general-purpose NAS, the format is `nas://<nasfisid>.region/subpath/to/dir/`.
   *   For CPFS 1.0, the format is `nas://<cpfs-fsid>.region/subpath/to/dir/`.
   *   For CPFS 2.0, the format is `nas://<cpfs-fsid>.region/<protocolserviceid>/`.
   *   CPFS 1.0 and CPFS 2.0 are distinguished by the format of the fsid: the format for CPFS 1.0 is cpfs-<8 ASCII characters>, and the format for CPFS 2.0 is cpfs-<16 ASCII characters>.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/
   */
  uri?: string;
  /**
   * @remarks
   * The list of user metric collection endpoints.
   */
  userMetricsEndpoints?: UserMetricsEndpoint[];
  static names(): { [key: string]: string } {
    return {
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      dataSourceType: 'DataSourceType',
      datasetTaskRamRole: 'DatasetTaskRamRole',
      description: 'Description',
      dryRun: 'DryRun',
      importInfo: 'ImportInfo',
      labels: 'Labels',
      options: 'Options',
      property: 'Property',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      uri: 'Uri',
      userMetricsEndpoints: 'UserMetricsEndpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCount: 'number',
      dataSize: 'number',
      dataSourceType: 'string',
      datasetTaskRamRole: 'string',
      description: 'string',
      dryRun: 'boolean',
      importInfo: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      options: 'string',
      property: 'string',
      sourceId: 'string',
      sourceType: 'string',
      uri: 'string',
      userMetricsEndpoints: { 'type': 'array', 'itemType': UserMetricsEndpoint },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.userMetricsEndpoints)) {
      $dara.Model.validateArray(this.userMetricsEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

