// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class GetDatasetVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of data records.
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
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * d-dkdbnnap0g7b6su4yg
   */
  datasetId?: string;
  /**
   * @remarks
   * The version description.
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
   * The dataset configurations to be imported to a storage, such as Object Storage Service (OSS), File Storage NAS (NAS), or Cloud Parallel File Storage (CPFS).
   * 
   * **OSS**
   * 
   * { "region": "${region}",// The region ID. $bucket = $options["bucket"]; // The bucket name. "path": "${path}" // The file path. }
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
  /**
   * @remarks
   * The resource tags.
   */
  labels?: Label[];
  /**
   * @remarks
   * The access permission on the dataset when the dataset is mounted. Valid values:
   * 
   * *   RO: read-only permissions
   * *   RW: read and write permissions
   * 
   * @example
   * RO
   */
  mountAccess?: string;
  /**
   * @remarks
   * The extended fields.
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
   * The ID of the source dataset.
   * 
   * @example
   * d-rbvg5wzljzjhc9ks92
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The sample URI of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://ai4d-br7hx9ngzelo2o6uip.oss-cn-shanghai.aliyuncs.com/365349/data-1157703270994901/datasets/aka108o/
   */
  uri?: string;
  /**
   * @remarks
   * The version name of the dataset.
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

