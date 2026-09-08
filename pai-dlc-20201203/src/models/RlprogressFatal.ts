// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLProgressFatal extends $dara.Model {
  /**
   * @remarks
   * 锚点行 agent_collect_time（纳秒字符串，超 JS 安全整数）
   * 
   * @example
   * 1787474487713456789
   */
  collectNs?: string;
  /**
   * @remarks
   * 错误文案（截断至 500 字符）
   * 
   * @example
   * CUDA out of memory. Tried to allocate 2.00 GiB
   */
  message?: string;
  /**
   * @remarks
   * 原始日志行（截断至 2000 字符）；调用 GetRLLogContext 时作为 AnchorMessage 传入
   * 
   * @example
   * [rank0]: torch.OutOfMemoryError: CUDA out of memory. Tried to allocate 2.00 GiB
   */
  rawMessage?: string;
  /**
   * @remarks
   * 同秒内的纳秒偏移，用于同秒日志排序
   * 
   * @example
   * 123456789
   */
  subsecNs?: number;
  /**
   * @remarks
   * 日志时间（unix 秒）
   * 
   * @example
   * 1787474487
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      collectNs: 'CollectNs',
      message: 'Message',
      rawMessage: 'RawMessage',
      subsecNs: 'SubsecNs',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectNs: 'string',
      message: 'string',
      rawMessage: 'string',
      subsecNs: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

