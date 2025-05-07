// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobRequestDataSources extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * d-cn9dl*******
   */
  dataSourceId?: string;
  dataSourceVersion?: string;
  mountAccess?: string;
  /**
   * @remarks
   * The path to which the job is mounted. By default, the mount path in the data source configuration is used. This parameter is optional.
   * 
   * @example
   * /root/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount attribute of the custom dataset. Set the value to OSS.
   * 
   * @example
   * {
   *   "fs.oss.download.thread.concurrency": "10",
   *   "fs.oss.upload.thread.concurrency": "10",
   *   "fs.jindo.args": "-oattr_timeout=3 -oentry_timeout=0 -onegative_timeout=0 -oauto_cache -ono_symlink"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The data source path.
   * 
   * @example
   * oss://bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      dataSourceVersion: 'DataSourceVersion',
      mountAccess: 'MountAccess',
      mountPath: 'MountPath',
      options: 'Options',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      dataSourceVersion: 'string',
      mountAccess: 'string',
      mountPath: 'string',
      options: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

