// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLProgressFatal extends $dara.Model {
  /**
   * @remarks
   * The agent_collect_time of the anchor line, represented as a nanosecond string that exceeds the JavaScript safe integer limit.
   * 
   * @example
   * 1787474487713456789
   */
  collectNs?: string;
  /**
   * @remarks
   * The error message, truncated to 500 characters.
   * 
   * @example
   * CUDA out of memory. Tried to allocate 2.00 GiB
   */
  message?: string;
  /**
   * @remarks
   * The raw log line, truncated to 2000 characters. It is passed as AnchorMessage when calling GetRLLogContext.
   * 
   * @example
   * [rank0]: torch.OutOfMemoryError: CUDA out of memory. Tried to allocate 2.00 GiB
   */
  rawMessage?: string;
  /**
   * @remarks
   * The nanosecond offset within the same second, used for sorting logs within the same second.
   * 
   * @example
   * 123456789
   */
  subsecNs?: number;
  /**
   * @remarks
   * The log time in UNIX seconds.
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

