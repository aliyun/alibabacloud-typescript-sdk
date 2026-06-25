// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


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
   * The type of the data source. If you specify multiple types, separate them with commas (,). Valid values:
   * 
   * - NAS: The data is stored in Alibaba Cloud File Storage (NAS).
   * 
   * - OSS: The data is stored in Alibaba Cloud Object Storage Service (OSS).
   * 
   * - CPFS
   * 
   * Note: The DataSourceType of the version must be the same as the DataSourceType of the dataset. The system verifies this consistency when you create the version.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * A custom description for the dataset version. This helps distinguish different dataset versions.
   * 
   * @example
   * This is a description of the dataset version.
   */
  description?: string;
  /**
   * @remarks
   * The storage import configuration of the dataset. Supported storage types include OSS, NAS, and CPFS.
   * 
   * <details>
   * 
   * <summary>
   * 
   * OSS
   * 
   * </summary>
   * 
   * {<br>
   * "region": "${region}",// The region ID.<br>
   * "bucket": "${bucket}",// The bucket name.<br>
   * "path": "${path}" // The file path.<br>
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
   * {<br>
   * "region": "${region}",// The region ID.<br>
   * "fileSystemId": "${file_system_id}", // The file system ID.<br>
   * "path": "${path}", // The file system path.<br>
   * "mountTarget": "${mount_target}" // The mount target of the file system.<br>
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
   * {<br>
   * "region": "${region}",// The region ID.<br>
   * "fileSystemId": "${file_system_id}", // The file system ID.<br>
   * "protocolServiceId":"${protocol_service_id}", // The protocol service of the file system.<br>
   * "exportId": "${export_id}", // The exported directory of the file system.<br>
   * "path": "${path}", // The file system path.<br>
   * }
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
   * {<br>
   * "region": "${region}",// The region ID.<br>
   * "fileSystemId": "${file_system_id}", // The file system ID.<br>
   * "path": "${path}", // The file system path.<br>
   * "mountTarget": "${mount_target}", // The mount target of the file system. This parameter is specific to the Intelligent Computing edition.<br>
   * "isVpcMount": boolean, // Specifies whether the mount target is in a VPC. This parameter is specific to the Intelligent Computing edition.<br>
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
   * A list of tags for the dataset version.
   */
  labels?: Label[];
  /**
   * @remarks
   * The extended field, which is a JSON string.
   * When DLC uses the dataset, you can configure the mountPath field to specify the default mount path for the dataset.
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
   * - DIRECTORY: A folder.
   * 
   * This parameter is required.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * - If SourceType is set to USER, you can customize the SourceId.
   * 
   * - If SourceType is set to ITAG, which indicates a dataset generated from the annotation results of the iTAG module, SourceId is the task ID from iTAG.
   * 
   * - If SourceType is set to PAI_PUBLIC_DATASET, which indicates a dataset created from a public PAI dataset, SourceId is empty by default.
   * 
   * @example
   * d-a0xbe5n03bhqof46ce
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the data source. The default value is USER. Valid values:
   * 
   * - PAI-PUBLIC-DATASET: a public dataset from PAI.
   * 
   * - ITAG: a dataset generated from the annotation results of the iTAG module.
   * 
   * - USER: a dataset registered by a user.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The following examples show how to configure the URI:
   * 
   * - If the data source type is OSS: `oss://bucket.endpoint/object`
   * 
   * - If the data source type is NAS:
   *   The format for a general-purpose NAS file system is `nas://<nasfisid>.region/subpath/to/dir/`.
   *   CPFS 1.0: `nas://<cpfs-fsid>.region/subpath/to/dir/`.
   *   CPFS 2.0: `nas://<cpfs-fsid>.region/<protocolserviceid>/`.
   *   CPFS 1.0 and CPFS 2.0 are distinguished by the format of the fsid. The format for CPFS 1.0 is cpfs-<8 ASCII characters>. The format for CPFS 2.0 is cpfs-<16 ASCII characters>.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      dataSourceType: 'DataSourceType',
      description: 'Description',
      importInfo: 'ImportInfo',
      labels: 'Labels',
      options: 'Options',
      property: 'Property',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCount: 'number',
      dataSize: 'number',
      dataSourceType: 'string',
      description: 'string',
      importInfo: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      options: 'string',
      property: 'string',
      sourceId: 'string',
      sourceType: 'string',
      uri: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

