// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class DatasetVersion extends $dara.Model {
  /**
   * @remarks
   * The total number of data items in the version.
   * 
   * @example
   * 10000
   */
  dataCount?: number;
  /**
   * @remarks
   * The total size of the data in the version, in bytes.
   * 
   * @example
   * 10000
   */
  dataSize?: number;
  /**
   * @remarks
   * The data source type. For example, the value `OSS` indicates Object Storage Service.
   * 
   * @example
   * OSS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * A custom description for the dataset version.
   * 
   * @example
   * base model v1
   */
  description?: string;
  /**
   * @remarks
   * The creation time of the dataset version, in UTC.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time the dataset version was last modified, in UTC.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Information about the import source, in JSON format.
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
   * A list of labels applied to the dataset version.
   */
  labels?: Label[];
  /**
   * @remarks
   * The access permission for the mounted dataset. For example, `RO` means read-only.
   * 
   * @example
   * RO
   */
  mountAccess?: string;
  /**
   * @remarks
   * Additional configurations for the dataset version, in JSON format.
   * 
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The data format of the dataset.
   * 
   * @example
   * FILE
   */
  property?: string;
  /**
   * @remarks
   * The ID of the source from which the version was created.
   * 
   * @example
   * d-65mrsr5fub4u74lej3
   */
  sourceId?: string;
  /**
   * @remarks
   * The method used to create the dataset version.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The URI of the data source.
   * 
   * @example
   * OSS://xxx
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
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      importInfo: 'ImportInfo',
      labels: 'Labels',
      mountAccess: 'MountAccess',
      options: 'Options',
      property: 'Property',
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
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      importInfo: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      mountAccess: 'string',
      options: 'string',
      property: 'string',
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

