// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataSourceRequest extends $dara.Model {
  /**
   * @example
   * cl-0004i0nlngorvgjpl7ck
   */
  clusterId?: string;
  /**
   * @example
   * {\\"dataServerAddresses\\":[{\\"host\\":\\"111\\",\\"port\\":\\"\\"}],\\"sharePath\\":\\"/share\\",\\"mountOptions\\":\\"\\",\\"fileSystemType\\":\\"nfs\\"}
   */
  connectionInfo?: string;
  /**
   * @example
   * {}
   */
  credential?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbr_detection_source-nas-20250710101315
   */
  dataSourceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * COMMON_NAS
   */
  dataSourceType?: string;
  /**
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @example
   * META
   */
  indexLevel?: string;
  /**
   * @example
   * {\\"includes\\":[],\\"excludes\\":[],\\"conflictPolicy\\":\\"OVERWRITE_EXISTING\\"}
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
   * 0:24:5120
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

