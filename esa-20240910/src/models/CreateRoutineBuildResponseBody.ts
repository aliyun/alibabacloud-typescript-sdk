// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineBuildResponseBody extends $dara.Model {
  /**
   * @remarks
   * The build ID in Yunxiao.
   * 
   * @example
   * 1
   */
  pipeLineRunId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the ER build task.
   * 
   * @example
   * 159782040838348
   */
  routineBuildId?: number;
  /**
   * @remarks
   * The status of the build task. A value of building indicates that the task is being built. A value of pending indicates that the task is queued. When the task is queued, the run ID is 0.
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

