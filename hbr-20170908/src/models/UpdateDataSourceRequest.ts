// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceRequest extends $dara.Model {
  /**
   * @example
   * cl-000**************hg9
   */
  clusterId?: string;
  /**
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
   * @example
   * {"mountUsername":"***","mountPassword":"***"}
   */
  credential?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ds-0006xo****dtle
   */
  dataSourceId?: string;
  /**
   * @example
   * MyLocalNas
   */
  dataSourceName?: string;
  /**
   * @example
   * ["/home/alice/log/"]
   */
  exclude?: string;
  /**
   * @example
   * ["/home/alice/", "/home/bob/"]
   */
  include?: string;
  /**
   * @example
   * META
   */
  indexLevel?: string;
  /**
   * @example
   * {}
   */
  options?: string;
  path?: string[];
  /**
   * @example
   * I|1729493847|P1D
   */
  schedule?: string;
  /**
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

