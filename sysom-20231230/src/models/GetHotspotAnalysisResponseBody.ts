// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * error code
   * 
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  /**
   * @remarks
   * Returned Data
   * 
   * @example
   * "AliYunDun:1657494进程(1657494):根据提供的热点调用栈信息，热点主要集中在`__nanosleep_nocancel`以及相关的系统调用`SyS_nanosleep`上，这表明进程在等待特定的时间间隔。通常这是由于应用中存在长时间的睡眠或高频率的定时操作导致的，比如定时任务、心跳检测等。\\n\\n应用代码在需要定期执行某些检查或等待外部事件时会使用`nanosleep`来实现精确的延时控制。为了优化这种情况，可以考虑以下方案：\\n- 评估是否可以减少定时任务的频率。\\n- 使用条件变量替代单纯的睡眠等待，以响应更快的事件触发。\\n- 如果是I/O密集型操作等待，考虑优化I/O路径或提升I/O效率。建议使用SysOM平台的IO诊断工具来进一步定位具体的I/O瓶颈。"
   */
  data?: string;
  /**
   * @remarks
   * Response message
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
  /**
   * @remarks
   * Indicates whether the invocation is successful
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

