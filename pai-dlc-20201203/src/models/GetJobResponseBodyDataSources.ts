// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResponseBodyDataSources extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * d*******
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The local mount path. This parameter is optional. The default value is empty, which specifies that the mount path in the data source is used.
   * 
   * @example
   * /mnt/data/
   */
  mountPath?: string;
  /**
   * @remarks
   * The data source URL.
   * 
   * @example
   * oss://bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      mountPath: 'MountPath',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      mountPath: 'string',
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

