// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the client group used to access the data source.
   * 
   * @example
   * cl-0004i0nlngorvgjpl7ck
   */
  clusterId?: string;
  /**
   * @remarks
   * The connection information for the data source. Examples:
   * 
   * - Local NAS data source:
   *   {
   *   "dataServerAddresses": [
   *   {
   *   "host": "123.123.123.123",
   *   "port": "8080"
   *   }
   *   ],
   *   "sharePath": "/share",
   *   "mountOptions": "vers=3",
   *   "fileSystemType": "nfs"
   *   }
   * 
   * - CPFS AI-Computing Edition data source:
   *   {"vpcMountTarget":"cpfs-010wn\\*\\*\\*wy-vpc-ta\\*\\*\\*8.cn-shanghai.cpfs.aliyuncs.com","sharePath":"/"}
   * 
   * - Other large-scale file system data source:
   *   {"path":"/mnt"}
   * 
   * @example
   * {
   *     "dataServerAddresses": [
   *         {
   *             "host": "123.123.123.123",
   *             "port": "8080"
   *         }
   *     ],
   *     "sharePath": "/share",
   *     "mountOptions": "vers=3",
   *     "fileSystemType": "nfs"
   * }
   */
  connectionInfo?: string;
  /**
   * @remarks
   * The access credential for the data source. This parameter is required for local NAS (SMB) data sources and for OSS- or S3-compatible data sources. Examples:
   * 
   * - Local NAS data source (SMB protocol):
   *   {
   *   "mountUsername": "\\*\\*\\*\\*\\*",
   *   "mountPassword": "\\*\\*\\*\\*\\*"
   *   }
   * 
   * - OSS-compatible or S3-compatible data source:
   *   {
   *   "accessKeyId": "\\*\\*\\*\\*\\*",
   *   "accessKeySecret": "\\*\\*\\*\\*\\*"
   *   }
   * 
   * @example
   * {
   *     "mountUsername": "*****",
   *     "mountPassword": "*****"
   * }
   */
  credential?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * MyLocalNas
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * COMMON_NAS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * A filter that specifies the files to exclude. This parameter applies only to data source analysis with the archive feature.
   * 
   * @example
   * ["/home/alice/log"]
   */
  exclude?: string;
  /**
   * @remarks
   * A filter that specifies the files to include. This parameter applies only to data source analysis with the archive feature.
   * 
   * @example
   * ["/home/alice", "/home/bob"]
   */
  include?: string;
  /**
   * @remarks
   * The index level. This parameter applies only to data source analysis with the archive feature.
   * 
   * - `OFF`: No index is created.
   * 
   * - `META`: A metadata index is created.
   * 
   * - `ALL`: A full-text index is created. (Deprecated)
   * 
   * @example
   * META
   */
  indexLevel?: string;
  /**
   * @remarks
   * The options for data source analysis. This parameter applies only to data source analysis with the archive feature.
   * 
   * @example
   * {}
   */
  options?: string;
  /**
   * @remarks
   * A list of paths for data source analysis. This parameter applies only to data source analysis with the archive feature.
   */
  path?: string[];
  /**
   * @remarks
   * The execution schedule. This parameter applies only to data source analysis with the archive feature. The format `I|{startTime}|{interval}` specifies a task that runs at a defined interval starting from `{startTime}`. `{interval}` is an ISO 8601 duration. For example, `PT1H` specifies a one-hour interval, and `P1D` specifies a one-day interval.
   * 
   * @example
   * I|1729493847|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The rate limiting settings. This parameter applies only to data source analysis with the archive feature.
   * 
   * @example
   * 6:21:10240
   */
  speedLimit?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      connectionInfo: 'ConnectionInfo',
      credential: 'Credential',
      dataSourceName: 'DataSourceName',
      dataSourceType: 'DataSourceType',
      exclude: 'Exclude',
      include: 'Include',
      indexLevel: 'IndexLevel',
      options: 'Options',
      path: 'Path',
      schedule: 'Schedule',
      speedLimit: 'SpeedLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      connectionInfo: 'string',
      credential: 'string',
      dataSourceName: 'string',
      dataSourceType: 'string',
      exclude: 'string',
      include: 'string',
      indexLevel: 'string',
      options: 'string',
      path: { 'type': 'array', 'itemType': 'string' },
      schedule: 'string',
      speedLimit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

