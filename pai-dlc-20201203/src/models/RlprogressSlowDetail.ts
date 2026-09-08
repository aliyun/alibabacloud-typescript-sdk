// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLProgressSlowDetail extends $dara.Model {
  /**
   * @remarks
   * The elapsed time of the request, in seconds.
   * 
   * @example
   * 42.5
   */
  elapsed?: number;
  /**
   * @remarks
   * worker IP
   * 
   * @example
   * 192.168.0.12
   */
  ip?: string;
  /**
   * @remarks
   * The IPC channel identifier, which corresponds to the ipc field in the log.
   * 
   * @example
   * ipc://worker-0
   */
  ipc?: string;
  /**
   * @remarks
   * Indicates whether the request is paused. This is the raw value of the is_pause field in the log.
   * 
   * @example
   * false
   */
  isPause?: string;
  /**
   * @remarks
   * The log message, truncated to 700 characters.
   * 
   * @example
   * CUDA out of memory. Tried to allocate 2.00 GiB
   */
  message?: string;
  /**
   * @remarks
   * The output queue length. This is the raw value of the out_queue field in the log.
   * 
   * @example
   * 3
   */
  outQueue?: string;
  /**
   * @remarks
   * The name of the pod.
   * 
   * @example
   * dlc193cpaitk8eny-master-0
   */
  pod?: string;
  /**
   * @remarks
   * The training rank.
   * 
   * @example
   * 0
   */
  rank?: number;
  /**
   * @remarks
   * The inference request ID, which corresponds to the rid field in the log.
   * 
   * @example
   * req-8f3a2c1d
   */
  rid?: string;
  /**
   * @remarks
   * Indicates whether the state is present. This is the raw value of the state_present field in the log.
   * 
   * @example
   * true
   */
  statePresent?: string;
  /**
   * @remarks
   * The log time, in UNIX seconds.
   * 
   * @example
   * 1787474487
   */
  time?: number;
  /**
   * @remarks
   * The tokenizer process ID, which corresponds to the pid field in the log.
   * 
   * @example
   * 12360
   */
  tokenizerPid?: string;
  /**
   * @remarks
   * The worker process ID.
   * 
   * @example
   * 12345
   */
  workerPid?: number;
  static names(): { [key: string]: string } {
    return {
      elapsed: 'Elapsed',
      ip: 'Ip',
      ipc: 'Ipc',
      isPause: 'IsPause',
      message: 'Message',
      outQueue: 'OutQueue',
      pod: 'Pod',
      rank: 'Rank',
      rid: 'Rid',
      statePresent: 'StatePresent',
      time: 'Time',
      tokenizerPid: 'TokenizerPid',
      workerPid: 'WorkerPid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elapsed: 'number',
      ip: 'string',
      ipc: 'string',
      isPause: 'string',
      message: 'string',
      outQueue: 'string',
      pod: 'string',
      rank: 'number',
      rid: 'string',
      statePresent: 'string',
      time: 'number',
      tokenizerPid: 'string',
      workerPid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

