// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { UserMetricsEndpoint } from "./UserMetricsEndpoint";


export class GetDatasetVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data volume.
   * 
   * @example
   * 10000
   */
  dataCount?: number;
  /**
   * @remarks
   * The dataset size.
   * 
   * @example
   * 10000
   */
  dataSize?: number;
  /**
   * @remarks
   * The data source type.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The primary resource ID.
   * 
   * @example
   * d-dkdbnnap0g7b6su4yg
   */
  datasetId?: string;
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
   * The version description.
   * 
   * @example
   * This is a description of the dataset version.
   */
  description?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-12-13T10:22:05.694Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2023-12-13T10:22:05.694Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The storage import configuration of the dataset. OSS, NAS, and CPFS are supported.
   * 
   * <details>
   * <summary>OSS</summary>
   * {
   * "region": "${region}",//The region ID.
   * "bucket": "${bucket}",//The bucket name.
   * "path": "${path}" //The file path.
   * }
   * </details>
   * 
   * <details>
   * <summary>NAS</summary>
   * 
   * </details>
   * 
   * <details>
   * <summary>CPFS</summary>
   * Block content
   * </details>
   * 
   * 
   * <details>
   * <summary>Intelligent computing CPFS</summary>
   * Block content
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
   * The resource labels.
   */
  labels?: Label[];
  /**
   * @remarks
   * The permission when the dataset is mounted. Valid values:
   * - RO: read-only mount
   * - RW: read and write mount
   * 
   * @example
   * RO
   */
  mountAccess?: string;
  /**
   * @remarks
   * The extension field.
   * 
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The property of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C55DF3DA-F120-5E37-A374-F49365531701
   */
  requestId?: string;
  /**
   * @remarks
   * The dataset source ID.
   * 
   * @example
   * d-rbvg5wzljzjhc9ks92
   */
  sourceId?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The URI configuration example.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://ai4d-br7hx9ngzelo2o6uip.oss-cn-shanghai.aliyuncs.com/365349/data-1157703270994901/datasets/aka108o/
   */
  uri?: string;
  userMetricsEndpoints?: UserMetricsEndpoint[];
  /**
   * @remarks
   * The dataset version.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      dataSourceType: 'DataSourceType',
      datasetId: 'DatasetId',
      datasetTaskRamRole: 'DatasetTaskRamRole',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      importInfo: 'ImportInfo',
      labels: 'Labels',
      mountAccess: 'MountAccess',
      options: 'Options',
      property: 'Property',
      requestId: 'RequestId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      uri: 'Uri',
      userMetricsEndpoints: 'UserMetricsEndpoints',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCount: 'number',
      dataSize: 'number',
      dataSourceType: 'string',
      datasetId: 'string',
      datasetTaskRamRole: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      importInfo: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      mountAccess: 'string',
      options: 'string',
      property: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      uri: 'string',
      userMetricsEndpoints: { 'type': 'array', 'itemType': UserMetricsEndpoint },
      versionName: 'string',
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

