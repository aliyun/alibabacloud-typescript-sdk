// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { UserMetricsEndpoint } from "./UserMetricsEndpoint";


export class DatasetVersion extends $dara.Model {
  /**
   * @remarks
   * DataCount
   * 
   * @example
   * 10000
   */
  dataCount?: number;
  /**
   * @remarks
   * DataSize
   * 
   * @example
   * 10000
   */
  dataSize?: number;
  /**
   * @remarks
   * DataSourceType
   * 
   * @example
   * OSS
   */
  dataSourceType?: string;
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
   * Description
   * 
   * @example
   * base model v1
   */
  description?: string;
  /**
   * @remarks
   * create time
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * modify time
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * ImportInfo
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
   * Labels
   */
  labels?: Label[];
  /**
   * @remarks
   * MountAccess
   * 
   * @example
   * RO
   */
  mountAccess?: string;
  /**
   * @remarks
   * Options
   * 
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @remarks
   * property
   * 
   * @example
   * FILE
   */
  property?: string;
  /**
   * @remarks
   * SourceId
   * 
   * @example
   * d-65mrsr5fub4u74lej3
   */
  sourceId?: string;
  /**
   * @remarks
   * SourceType
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * Uri
   * 
   * @example
   * OSS://xxx
   */
  uri?: string;
  /**
   * @remarks
   * UserMetricsEndpoints
   */
  userMetricsEndpoints?: UserMetricsEndpoint[];
  /**
   * @remarks
   * version name
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
      datasetTaskRamRole: 'DatasetTaskRamRole',
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
      userMetricsEndpoints: 'UserMetricsEndpoints',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCount: 'number',
      dataSize: 'number',
      dataSourceType: 'string',
      datasetTaskRamRole: 'string',
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

