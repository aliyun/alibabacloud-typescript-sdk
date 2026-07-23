// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTrafficControlTaskDeployResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message returned for the Flink platform deployment operation.
   * 
   * @example
   * deploy job draft success
   */
  deployMessage?: string;
  /**
   * @remarks
   * The status of deploying the draft. Valid values:
   * - Failed: failed.
   * - Running: running.
   * - Success: succeeded.
   * 
   * @example
   * Success
   */
  deployStatus?: string;
  /**
   * @remarks
   * The message returned for pushing the draft to Flink.
   * 
   * @example
   * push draft success
   */
  draftMessage?: string;
  /**
   * @remarks
   * The status of pushing the draft to Flink. Valid values:
   * - Failed: failed.
   * - Running: running.
   * - Success: succeeded.
   * 
   * @example
   * Success
   */
  draftStatus?: string;
  /**
   * @remarks
   * The message returned for the preparation phase.
   * 
   * @example
   * success
   */
  prepareMessage?: string;
  /**
   * @remarks
   * The status of the preparation phase. Valid values:
   * - Failed: failed.
   * - Running: running.
   * - Success: succeeded.
   * 
   * @example
   * Success
   */
  prepareStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The message returned for starting the Flink task.
   * 
   * @example
   * start job success
   */
  startMessage?: string;
  /**
   * @remarks
   * The status of starting the Flink task. Valid values:
   * - Failed: failed.
   * - Running: running.
   * - Success: succeeded.
   * 
   * @example
   * Success
   */
  startStatus?: string;
  /**
   * @remarks
   * The stop details.
   * 
   * @example
   * ""
   */
  stopMessage?: string;
  /**
   * @remarks
   * The stop status.
   * 
   * @example
   * Success
   */
  stopStatus?: string;
  /**
   * @remarks
   * The traffic control task ID.
   * 
   * @example
   * 3
   */
  trafficControlTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      deployMessage: 'DeployMessage',
      deployStatus: 'DeployStatus',
      draftMessage: 'DraftMessage',
      draftStatus: 'DraftStatus',
      prepareMessage: 'PrepareMessage',
      prepareStatus: 'PrepareStatus',
      requestId: 'RequestId',
      startMessage: 'StartMessage',
      startStatus: 'StartStatus',
      stopMessage: 'StopMessage',
      stopStatus: 'StopStatus',
      trafficControlTaskId: 'TrafficControlTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMessage: 'string',
      deployStatus: 'string',
      draftMessage: 'string',
      draftStatus: 'string',
      prepareMessage: 'string',
      prepareStatus: 'string',
      requestId: 'string',
      startMessage: 'string',
      startStatus: 'string',
      stopMessage: 'string',
      stopStatus: 'string',
      trafficControlTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

