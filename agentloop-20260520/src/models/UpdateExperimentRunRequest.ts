// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExperimentRunRequest extends $dara.Model {
  /**
   * @remarks
   * The experiment completion time. This value is a millisecond-level UNIX timestamp.
   * 
   * @example
   * 1784719989371
   */
  completedAt?: number;
  /**
   * @remarks
   * The number of completed tasks.
   * 
   * @example
   * 10
   */
  completedTasks?: number;
  /**
   * @remarks
   * The experiment execution time. This value is a millisecond-level UNIX timestamp.
   * 
   * @example
   * 1784719439255
   */
  executedAt?: number;
  /**
   * @remarks
   * The number of failed tasks.
   * 
   * @example
   * 0
   */
  failedTasks?: number;
  /**
   * @remarks
   * The experiment record name.
   * 
   * @example
   * rca_benchmark_eval_experiment 2026/07/22 19:23:59
   */
  recordName?: string;
  /**
   * @remarks
   * The experiment record status. Set this parameter to cancelled to cancel the execution.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 20
   */
  totalTasks?: number;
  /**
   * @remarks
   * Optional.
   * 
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      completedAt: 'completedAt',
      completedTasks: 'completedTasks',
      executedAt: 'executedAt',
      failedTasks: 'failedTasks',
      recordName: 'recordName',
      status: 'status',
      totalTasks: 'totalTasks',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedAt: 'number',
      completedTasks: 'number',
      executedAt: 'number',
      failedTasks: 'number',
      recordName: 'string',
      status: 'string',
      totalTasks: 'number',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

