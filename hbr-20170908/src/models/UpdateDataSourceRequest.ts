// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the client group used to access the data source.
   * 
   * @example
   * cl-000**************hg9
   */
  clusterId?: string;
  /**
   * @remarks
   * The connection information for the data source. Examples:
   * 
   * - On-premises NAS data source:
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
   * - Intelligent Computing CPFS data source:
   *   {"vpcMountTarget":"cpfs-010wn\\*\\*\\*wy-vpc-ta\\*\\*\\*8.cn-shanghai.cpfs.aliyuncs.com","sharePath":"/"}
   * 
   * - Other large-scale file system data sources:
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
   * The access credentials for the data source. This parameter is used for on-premises NAS data sources that use the SMB protocol, and for OSS and S3 protocol-compatible data sources. Examples:
   * 
   * - On-premises NAS data source (SMB protocol):
   *   {
   *   "mountUsername": "\\*\\*\\*\\*\\*",
   *   "mountPassword": "\\*\\*\\*\\*\\*"
   *   }
   * 
   * - OSS protocol-compatible data source/S3 protocol-compatible data source:
   *   {
   *   "accessKeyId": "\\*\\*\\*\\*\\*",
   *   "accessKeySecret": "\\*\\*\\*\\*\\*"
   *   }
   * 
   * @example
   * {"mountUsername":"***","mountPassword":"***"}
   */
  credential?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * ds-0006xo****dtle
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * MyLocalNas
   */
  dataSourceName?: string;
  /**
   * @remarks
   * A filter to specify which files to exclude. This parameter applies only to the archive feature.
   * 
   * @example
   * ["/home/alice/log/"]
   */
  exclude?: string;
  /**
   * @remarks
   * A filter to specify which files to include. This parameter applies only to the archive feature.
   * 
   * @example
   * ["/home/alice/", "/home/bob/"]
   */
  include?: string;
  /**
   * @remarks
   * The index level for data source analysis. This parameter applies only to the archive feature.
   * 
   * - OFF: No index is created.
   * 
   * - META: A metadata index is created.
   * 
   * - ALL: A full-text index is created. (Deprecated)
   * 
   * @example
   * META
   */
  indexLevel?: string;
  /**
   * @remarks
   * The options for data source analysis. This parameter applies only to the archive feature.
   * 
   * @example
   * {}
   */
  options?: string;
  /**
   * @remarks
   * A list of paths for data source analysis. This parameter applies only to the archive feature.
   */
  path?: string[];
  /**
   * @remarks
   * The schedule for data source analysis. This parameter applies only to the archive feature. The format is `I|{startTime}|{interval}`. This specifies a task that starts at `{startTime}` and repeats at the specified `{interval}`. `startTime` is a Unix time value in seconds. `interval` is an ISO 8601 time interval. For example, `PT1H` indicates a one-hour interval, and `P1D` indicates a one-day interval.
   * 
   * @example
   * I|1729493847|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The rate limiting configuration for data source analysis. This parameter applies only to the archive feature.
   * 
   * @example
   * 0:24:102400
   */
  speedLimit?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      connectionInfo: 'ConnectionInfo',
      credential: 'Credential',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
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
      dataSourceId: 'string',
      dataSourceName: 'string',
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

