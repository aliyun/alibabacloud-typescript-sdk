// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLLogContextLine extends $dara.Model {
  /**
   * @remarks
   * The log text (<= 2000 characters, with ANSI escape codes stripped).
   * 
   * @example
   * CUDA out of memory. Tried to allocate 2.00 GiB
   */
  message?: string;
  /**
   * @remarks
   * The millisecond timestamp of the log line.
   * 
   * @example
   * 1787293208012
   */
  timestampMs?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      timestampMs: 'TimestampMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      timestampMs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

