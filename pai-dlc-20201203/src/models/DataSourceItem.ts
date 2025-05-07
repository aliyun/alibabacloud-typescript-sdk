// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataSourceItem extends $dara.Model {
  /**
   * @example
   * data-20210114104214-vf9lowjt3pso
   */
  dataSourceId?: string;
  /**
   * @example
   * nas
   */
  dataSourceType?: string;
  /**
   * @example
   * data source of dlc examples
   */
  description?: string;
  /**
   * @example
   * nas-data
   */
  displayName?: string;
  /**
   * @example
   * oss-cn-beijing-internal.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @example
   * 2021-01-12T14:35:00Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * /root/data/
   */
  mountPath?: string;
  /**
   * @example
   * {"key": "value"}
   */
  options?: string;
  /**
   * @example
   * oss://mybucket/path/to/dir
   */
  path?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      dataSourceType: 'DataSourceType',
      description: 'Description',
      displayName: 'DisplayName',
      endpoint: 'Endpoint',
      fileSystemId: 'FileSystemId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      mountPath: 'MountPath',
      options: 'Options',
      path: 'Path',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      dataSourceType: 'string',
      description: 'string',
      displayName: 'string',
      endpoint: 'string',
      fileSystemId: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      mountPath: 'string',
      options: 'string',
      path: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

