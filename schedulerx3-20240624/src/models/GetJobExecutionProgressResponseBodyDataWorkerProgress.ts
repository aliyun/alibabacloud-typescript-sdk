// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobExecutionProgressResponseBodyDataWorkerProgress extends $dara.Model {
  /**
   * @example
   * 20
   */
  failed?: number;
  /**
   * @example
   * 20
   */
  pulled?: number;
  /**
   * @example
   * 20
   */
  queue?: number;
  /**
   * @example
   * 20
   */
  running?: number;
  /**
   * @example
   * 20
   */
  success?: number;
  /**
   * @example
   * 100
   */
  total?: number;
  /**
   * @example
   * 1a0e97fb17244665327205402dbd6d
   */
  traceId?: string;
  /**
   * @example
   * 10.10.116.53:61941
   */
  workerAddr?: string;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      pulled: 'Pulled',
      queue: 'Queue',
      running: 'Running',
      success: 'Success',
      total: 'Total',
      traceId: 'TraceId',
      workerAddr: 'WorkerAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      pulled: 'number',
      queue: 'number',
      running: 'number',
      success: 'number',
      total: 'number',
      traceId: 'string',
      workerAddr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

