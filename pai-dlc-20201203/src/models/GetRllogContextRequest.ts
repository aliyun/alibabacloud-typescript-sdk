// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRLLogContextRequest extends $dara.Model {
  /**
   * @remarks
   * The text of the anchor log. The fallback path locates the log by prefix matching. This value is derived from Fatal[].RawMessage.
   * 
   * @example
   * [rank0]: torch.OutOfMemoryError: CUDA out of memory. Tried to allocate 2.00 GiB
   */
  anchorMessage?: string;
  /**
   * @remarks
   * The timestamp of the anchor log line in UTC RFC 3339 format with second precision.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-08-05T16:36:55Z
   */
  anchorTime?: string;
  /**
   * @remarks
   * The agent_collect_time of the anchor line as a nanosecond string. This value is derived from Fatal[].CollectNs. If provided, the exact path is used.
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

