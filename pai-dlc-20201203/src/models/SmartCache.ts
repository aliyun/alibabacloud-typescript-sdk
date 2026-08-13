// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartCache extends $dara.Model {
  /**
   * @remarks
   * The number of cache workers.
   * 
   * @example
   * 10
   */
  cacheWorkerNum?: number;
  /**
   * @remarks
   * The cache size per cache worker. Unit: GB.
   * 
   * @example
   * 100
   */
  cacheWorkerSize?: number;
  /**
   * @remarks
   * The SmartCache description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The SmartCache name.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The running duration.
   * 
   * @example
   * 123456
   */
  duration?: string;
  /**
   * @remarks
   * OSS Endpoint
   * 
   * @example
   * oss-cn-beijing-internal.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The Alibaba Cloud NAS file system ID.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time in UTC.
   * 
   * @example
   * 2021-01-12T23:36:01Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The local mount directory of the data source.
   * 
   * @example
   * /root/data/
   */
  mountPath?: string;
  /**
   * @remarks
   * The optional hyperparameters.
   * 
   * @example
   * {"num_threads": 32}
   */
  options?: string;
  /**
   * @remarks
   * The OSS data source path.
   * 
   * @example
   * oss://buc/path/to/dir
   */
  path?: string;
  /**
   * @remarks
   * SmartCacheId
   * 
   * @example
   * smartcache-20210114104214-vf9lowjt3pso
   */
  smartCacheId?: string;
  /**
   * @remarks
   * The running status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The mounted data type.
   * 
   * @example
   * oss
   */
  type?: string;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 189xxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheWorkerNum: 'CacheWorkerNum',
      cacheWorkerSize: 'CacheWorkerSize',
      description: 'Description',
      displayName: 'DisplayName',
      duration: 'Duration',
      endpoint: 'Endpoint',
      fileSystemId: 'FileSystemId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      mountPath: 'MountPath',
      options: 'Options',
      path: 'Path',
      smartCacheId: 'SmartCacheId',
      status: 'Status',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheWorkerNum: 'number',
      cacheWorkerSize: 'number',
      description: 'string',
      displayName: 'string',
      duration: 'string',
      endpoint: 'string',
      fileSystemId: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      mountPath: 'string',
      options: 'string',
      path: 'string',
      smartCacheId: 'string',
      status: 'string',
      type: 'string',
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

