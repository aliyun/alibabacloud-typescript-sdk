// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReDoRoutineBuildResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Yunxiao build task.
   * 
   * @example
   * 70
   */
  pipeLineRunId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8AA0364-0FDB-4AD5-AC74-D69FAB8924ED
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the ER build task.
   * 
   * @example
   * 156773519472872
   */
  routineBuildId?: number;
  /**
   * @remarks
   * The status of the build task. Valid values: building: The build is in progress. pending: The build is queued. A successful submission does not indicate that the pipeline has been created. The run ID is 0 when the task is queued.
   * 
   * @example
   * pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pipeLineRunId: 'PipeLineRunId',
      requestId: 'RequestId',
      routineBuildId: 'RoutineBuildId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeLineRunId: 'number',
      requestId: 'string',
      routineBuildId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

