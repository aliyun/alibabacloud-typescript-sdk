// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLLogContextLine } from "./RllogContextLine";


export class GetRLLogContextResponseBody extends $dara.Model {
  /**
   * @remarks
   * Lines 数组中用于定位的参考行下标，从 0 开始；可能对应锚点或其邻近日志，不保证与原始锚点消息精确匹配。未提供时表示本次未返回可用的参考下标。
   * 
   * @example
   * 100
   */
  anchorIndex?: number;
  /**
   * @remarks
   * 作业 ID
   * 
   * @example
   * dlc-20210126170216-xxxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * 按定位时间升序排列的上下文日志。采集时间定位最多返回 201 行；日志时间定位返回锚点前后 5 秒范围内的日志，并可能缩小返回范围。结果不保证包含原始锚点日志。
   */
  lines?: RLLogContextLine[];
  /**
   * @remarks
   * 日志定位方式。agent_collect_time 表示按采集时间定位，raw_time_cluster 表示按日志时间定位；定位方式本身不保证精确命中锚点。
   * 
   * @example
   * agent_collect_time
   */
  mode?: string;
  /**
   * @remarks
   * 请求 ID
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * 日志时间定位是否触及 5000 条的数量限制，为 true 时上下文可能不完整；采集时间定位时为 false，不能据此判断全部日志是否已完整返回。
   * 
   * @example
   * False
   */
  truncated?: boolean;
  static names(): { [key: string]: string } {
    return {
      anchorIndex: 'AnchorIndex',
      jobId: 'JobId',
      lines: 'Lines',
      mode: 'Mode',
      requestId: 'RequestId',
      truncated: 'Truncated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorIndex: 'number',
      jobId: 'string',
      lines: { 'type': 'array', 'itemType': RLLogContextLine },
      mode: 'string',
      requestId: 'string',
      truncated: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.lines)) {
      $dara.Model.validateArray(this.lines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

