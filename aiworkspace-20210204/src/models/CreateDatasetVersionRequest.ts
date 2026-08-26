// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { UserMetricsEndpoint } from "./UserMetricsEndpoint";


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
   * The size of space occupied by dataset files. Unit: bytes.
   * 
   * @example
   * 19000
   */
  dataSize?: number;
  /**
   * @remarks
   * The data source type. Separate multiple values with commas (,). Valid values:
   * 
   * - NAS: Alibaba Cloud Network Attached Storage (NAS).
   * 
   * - OSS: Alibaba Cloud Object Storage Service (OSS).
   * 
   * - CPFS
   * 
   * > The DataSourceType of the version must be consistent with the DataSourceType of the dataset. Validation is performed against the dataset when a version is created.
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
   * The custom description of the dataset version, used to distinguish different dataset versions.
   * 
   * @example
   * This is a description of the dataset version.
   */
  description?: string;
  /**
   * @remarks
   * The storage import configuration of the dataset. OSS, NAS, and CPFS are supported.
   * 
   * <details>
   * <summary>OSS</summary>
   * {<BR>
   *   "region": "${region}",//Region ID<BR>
   *   "bucket": "${bucket}",//Bucket name<BR>
   *   "path": "${path}" //File path<BR>
   * }<BR>
   * </details>
   * 
   * <details>
   * <summary>NAS</summary>
   * {<BR>
   *   "region": "${region}",//Region ID<BR>
   *   "fileSystemId": "${file_system_id}", //File system ID<BR>
   *   "path": "${path}", //File system path<BR>
   *   "mountTarget": "${mount_target}" //File system mount target<BR>
   * }<BR>
   * </details>
   * 
   * 
   * <details>
   * <summary>CPFS</summary>
   * {<BR>
   *   "region": "${region}",//Region ID<BR>
   *   "fileSystemId": "${file_system_id}", //File system ID<BR>
   *   "protocolServiceId":"${protocol_service_id}", //File system protocol service<BR>
   *   "exportId": "${export_id}", //File system export directory<BR>
   *   "path": "${path}",  //File system path<BR>
   * }<BR>
   * </details>
   * 
   * <details>
   * <summary>Lingjun CPFS</summary>
   * {<BR>
   *   "region": "${region}",//Region ID<BR>
   *   "fileSystemId": "${file_system_id}", //File system ID<BR>
   *   "path": "${path}",  //File system path<BR>
   *   "mountTarget": "${mount_target}" //File system mount target, specific to Lingjun edition<BR>
   *   "isVpcMount": boolean, //Whether it is a VPC mount target, specific to Lingjun edition<BR>
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
   * The list of dataset version labels.
   */
  labels?: Label[];
  /**
   * @remarks
   * The extended field in JsonString format.
   * When DLC uses a dataset, you can specify the default mount path of the dataset by configuring the mountPath field.
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
   * The data source ID.
   * - If SourceType is USER, SourceId can be customized.
   * - If SourceType is ITAG, which indicates a dataset generated from iTAG annotation results, SourceId is the iTAG task ID.
   * - If SourceType is PAI_PUBLIC_DATASET, which indicates a dataset created from a PAI public dataset, SourceId is empty by default.
   * 
   * @example
   * d-a0xbe5n03bhqof46ce
   */
  sourceId?: string;
  /**
   * @remarks
   * The data source type. Default value: USER. Valid values:
   * - PAI-PUBLIC-DATASET: PAI public dataset.
   * - ITAG: dataset generated from iTAG annotation results.
   * - USER: user-registered dataset.
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
   * General-purpose NAS format: `nas://<nasfisid>.region/subpath/to/dir/`;
   * CPFS 1.0: `nas://<cpfs-fsid>.region/subpath/to/dir/`;
   * CPFS 2.0: `nas://<cpfs-fsid>.region/<protocolserviceid>/`.
   * CPFS 1.0 and CPFS 2.0 are distinguished by the format of the fsid: CPFS 1.0 format is cpfs-<8 ASCII characters>; CPFS 2.0 format is cpfs-<16 ASCII characters>.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/
   */
  uri?: string;
  userMetricsEndpoints?: UserMetricsEndpoint[];
  static names(): { [key: string]: string } {
    return {
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      dataSourceType: 'DataSourceType',
      datasetTaskRamRole: 'DatasetTaskRamRole',
      description: 'Description',
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

