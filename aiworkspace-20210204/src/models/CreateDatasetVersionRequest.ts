// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class CreateDatasetVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The number of dataset files.
   * 
   * @example
   * 300
   */
  dataCount?: number;
  /**
   * @remarks
   * The size of the dataset file. Unit: bytes.
   * 
   * @example
   * 19000
   */
  dataSize?: number;
  /**
   * @remarks
   * The type of the data source. Separate multiple types with commas (,). Valid values:
   * 
   * *   NAS: File Storage NAS (NAS).
   * *   OSS: Object Storage Service (OSS).
   * *   CPFS
   * 
   * Note: The DataSourceType value of a dataset version must be the same as that of the dataset. When you create a dataset version, the system checks whether the values are the same.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The description of the dataset. Descriptions are used to differentiate datasets.
   */
  description?: string;
  /**
   * @remarks
   * The dataset storage import configurations, such as OSS, NAS, and CPFS.
   * 
   * **OSS**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "bucket": "${bucket}",//The bucket name\\
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
   * "path": "${path}", // The ile system path\\
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
   * The tags of the dataset version.
   */
  labels?: Label[];
  /**
   * @remarks
   * The extended field, which is of the JsonString type. When you use the dataset in Deep Learning Containers (DLC), you can use the mountPath field to specify the default mount path of the dataset.
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
   * The ID of the data source.
   * 
   * *   If SourceType is set to USER, the value of SourceId can be a custom string.
   * *   If SourceType is set to ITAG, the value of SourceId is the ID of the labeling job of iTAG.
   * *   If SourceType is set to PAI_PUBLIC_DATASET, SourceId is empty by default.
   * 
   * @example
   * d-a0xbe5n03bhqof46ce
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the data source. Default value: USER. Valid values:
   * 
   * *   PAI-PUBLIC-DATASET: a public dataset of Platform for AI (PAI).
   * *   ITAG: a dataset generated from a labeling job of iTAG.
   * *   USER: a dataset registered by a user.
   * 
   * For each job type:
   * 
   * *   PAI_PUBLIC_DATASET: PAI_PUBLIC_DATASET.
   * *   ITAG: ITAG.
   * *   USER: USER.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * Example format:
   * 
   * *   Value format when DataSourceType is set to OSS: `oss://bucket.endpoint/object`.
   * *   Value formats when DataSourceType is set to NAS: General-purpose NAS: `nas://<nasfisid>.region/subpath/to/dir/`. CPFS 1.0: `nas://<cpfs-fsid>.region/subpath/to/dir/`. CPFS 2.0: `nas://<cpfs-fsid>.region/<protocolserviceid>/`. You can distinguish CPFS 1.0 and CPFS 2.0 file systems based on the format of the file system ID: The ID for CPFS 1.0 is in the cpfs-<8-bit ASCII characters> format. The ID for CPFS 2.0 is in the cpfs-<16-bit ASCII characters> format.
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

