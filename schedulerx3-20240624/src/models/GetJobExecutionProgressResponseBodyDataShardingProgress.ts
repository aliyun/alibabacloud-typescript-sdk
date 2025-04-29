// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobExecutionProgressResponseBodyDataShardingProgressStatusType } from "./GetJobExecutionProgressResponseBodyDataShardingProgressStatusType";


export class GetJobExecutionProgressResponseBodyDataShardingProgress extends $dara.Model {
  /**
   * @remarks
   * id
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1306189481388277762
   */
  jobExecutionId?: string;
  /**
   * @example
   * 2,4,6,8,10
   */
  result?: string;
  /**
   * @example
   * 5
   */
  status?: number;
  statusType?: GetJobExecutionProgressResponseBodyDataShardingProgressStatusType;
  /**
   * @example
   * http://192.168.1.9:9999/
   */
  workerAddr?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jobExecutionId: 'JobExecutionId',
      result: 'Result',
      status: 'Status',
      statusType: 'StatusType',
      workerAddr: 'WorkerAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      jobExecutionId: 'string',
      result: 'string',
      status: 'number',
      statusType: GetJobExecutionProgressResponseBodyDataShardingProgressStatusType,
      workerAddr: 'string',
    };
  }

  validate() {
    if(this.statusType && typeof (this.statusType as any).validate === 'function') {
      (this.statusType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

