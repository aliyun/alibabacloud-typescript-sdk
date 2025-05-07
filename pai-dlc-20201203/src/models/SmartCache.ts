// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartCache extends $dara.Model {
  /**
   * @example
   * 10
   */
  cacheWorkerNum?: number;
  /**
   * @example
   * 100
   */
  cacheWorkerSize?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * test
   */
  displayName?: string;
  /**
   * @example
   * 123456
   */
  duration?: string;
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
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T23:36:01Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * /root/data/
   */
  mountPath?: string;
  /**
   * @example
   * {"num_threads": 32}
   */
  options?: string;
  /**
   * @example
   * oss://buc/path/to/dir
   */
  path?: string;
  /**
   * @example
   * smartcache-20210114104214-vf9lowjt3pso
   */
  smartCacheId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * oss
   */
  type?: string;
  /**
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

