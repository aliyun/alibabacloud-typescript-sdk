// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code  
   * - If `code == Success`, authorization succeeded.  
   * - Any other status code indicates authorization failed. When authorization fails, view the `message` field to obtain the detailed error message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   * 
   * @example
   * {
   *     "NODE": {
   *       "饱和度": [
   *         "节点CPU使用率检测",
   *         "节点内核态CPU使用检测",
   *         "节点软中断CPU使用检测",
   *         "节点内存使用检测",
   *         "节点内核内存使用检测",
   *         "节点文件描述符使用检测",
   *         "节点根文件系统使用检测",
   *         "节点cgroup泄漏检测",
   *         "节点Sockets使用检测",
   *         "节点TCP内存使用检测"
   *       ],
   *       "延时": [
   *         "节点调度延时检测",
   *         "节点网络延时检测",
   *         "节点磁盘写入延迟检测",
   *         "节点磁盘读取延迟检测"
   *       ],
   *       "负载": [
   *         "节点磁盘IO流量检测",
   *         "节点load average检测"
   *       ],
   *       "错误": [
   *         "节点网络丢包检测",
   *         "节点OOM夯机预测及检测"
   *       ]
   *     },
   *     "POD": {
   *       "饱和度": [
   *         "Pod内存使用检测",
   *         "Pod CPU使用率检测"
   *       ],
   *       "错误": [
   *         "Pod CPU限流检测",
   *         "Pod OOM事件检测"
   *       ]
   *     }
   * }
   */
  data?: any;
  /**
   * @remarks
   * Error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

