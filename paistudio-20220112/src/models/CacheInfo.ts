// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CacheInfo extends $dara.Model {
  /**
   * @remarks
   * The mount point address of the datasource for service registration in the cache service, such as an OSS Bucket path or a CPFS path.
   * 
   * @example
   * oss://your-bucket.oss-cn-wulanchabu-internal.aliyuncs.com/
   */
  mountPoint?: string;
  /**
   * @remarks
   * The port number that the cache service provides for external access to the datasource. The client must access cached data through this port.
   * 
   * @example
   * 10080
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      mountPoint: 'MountPoint',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoint: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

