// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class GetDatasetVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of data entries.
   * 
   * @example
   * 10000
   */
  dataCount?: number;
  /**
   * @remarks
   * The size of the dataset.
   * 
   * @example
   * 10000
   */
  dataSize?: number;
  /**
   * @remarks
   * The type of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * @example
   * d-dkdbnnap0g7b6su4yg
   */
  datasetId?: string;
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * This is a description of the dataset version.
   */
  description?: string;
  /**
   * @remarks
   * The time when the dataset version was created.
   * 
   * @example
   * 2023-12-13T10:22:05.694Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the dataset version was last modified.
   * 
   * @example
   * 2023-12-13T10:22:05.694Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The storage import configuration of the dataset. Supported storage services include OSS, NAS, and CPFS.
   * 
   * <details>
   * 
   * <summary>
   * 
   * OSS
   * 
   * </summary>
   * 
   * {
   * "region": "${region}",// Region ID
   * "bucket": "${bucket}",// Bucket name
   * "path": "${path}" // File path
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
   * Block content
   * 
   * </details>
   * 
   * <details>
   * 
   * <summary>
   * 
   * AI Computing CPFS
   * 
   * </summary>
   * 
   * Block content
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
   * The tags of the resource.
   */
  labels?: Label[];
  /**
   * @remarks
   * The access permissions when the dataset is mounted.
   * 
   * - RO: Read-only mount
   * 
   * - RW: Read-write mount
   * 
   * @example
   * RO
   */
  mountAccess?: string;
  /**
   * @remarks
   * Additional options.
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
   * The ID of the request.
   * 
   * @example
   * C55DF3DA-F120-5E37-A374-F49365531701
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the dataset source.
   * 
   * @example
   * d-rbvg5wzljzjhc9ks92
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The URI of the dataset version.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://ai4d-br7hx9ngzelo2o6uip.oss-cn-shanghai.aliyuncs.com/365349/data-1157703270994901/datasets/aka108o/
   */
  uri?: string;
  /**
   * @remarks
   * The name of the dataset version.
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
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCount: 'number',
      dataSize: 'number',
      dataSourceType: 'string',
      datasetId: 'string',
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
      versionName: 'string',
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

