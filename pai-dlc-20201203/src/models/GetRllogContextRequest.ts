// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRLLogContextRequest extends $dara.Model {
  /**
   * @remarks
   * 用于辅助定位的锚点日志消息，可取自 GetRLTrainingProgress 返回的 Fatal[].RawMessage。
   * 
   * @example
   * [rank0]: torch.OutOfMemoryError: CUDA out of memory. Tried to allocate 2.00 GiB
   */
  anchorMessage?: string;
  /**
   * @remarks
   * 锚点日志行的时间，采用 RFC3339 格式。
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-08-05T16:36:55Z
   */
  anchorTime?: string;
  /**
   * @remarks
   * 锚点日志采集时间，采用纯数字的纳秒时间戳字符串，可取自 GetRLTrainingProgress 返回的 Fatal[].CollectNs，用于辅助定位上下文。实际定位方式由 Mode 返回，结果不保证包含原始锚点日志。
   * 
   * @example
   * 1785947815190122847
   */
  collectTime?: string;
  static names(): { [key: string]: string } {
    return {
      anchorMessage: 'AnchorMessage',
      anchorTime: 'AnchorTime',
      collectTime: 'CollectTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorMessage: 'string',
      anchorTime: 'string',
      collectTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

