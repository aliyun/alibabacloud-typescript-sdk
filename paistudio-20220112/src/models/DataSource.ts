// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataSource extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * data-source-1
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The mount path of the data source.
   * 
   * @example
   * /mnt/data/
   */
  mountPath?: string;
  /**
   * @remarks
   * The URI of the data source.
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/to/model/output/
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

