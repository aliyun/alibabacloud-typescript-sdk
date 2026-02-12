// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataSourceItem extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * data-20210114104214-xxxxxxx
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The data source type. Only File Storage NAS (NAS) file systems are supported.
   * 
   * @example
   * nas
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The data source description.
   * 
   * @example
   * data source of dlc examples
   */
  description?: string;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * nas-data
   */
  displayName?: string;
  /**
   * @remarks
   * The endpoint of the Alibaba Cloud OSS file system.
   * 
   * @example
   * oss-cn-beijing-internal.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The ID of the NAS file system. For more information, see [Alibaba Cloud documentation](https://help.aliyun.com/document_detail/185212.html).
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The time when the data source was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-12T14:35:00Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the data source was last modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The local path of the container that is attached to the runtime of the task.
   * 
   * @example
   * /root/data/
   */
  mountPath?: string;
  /**
   * @remarks
   * The configuration options of the Alibaba Cloud OSS file system.
   * 
   * @example
   * {"key": "value"}
   */
  options?: string;
  /**
   * @remarks
   * The path of the Alibaba Cloud Object Storage Service (OSS) file system.
   * 
   * @example
   * oss://mybucket/path/to/dir
   */
  path?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that creates the data source.
   * 
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

