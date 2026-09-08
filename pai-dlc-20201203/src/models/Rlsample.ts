// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLSample extends $dara.Model {
  /**
   * @remarks
   * The detail of the latest event.
   * 
   * @example
   * actor_parameters_updated
   */
  latestDetail?: string;
  /**
   * @remarks
   * The stage of the latest event.
   * 
   * @example
   * TRAIN_UPDATE
   */
  latestStage?: string;
  /**
   * @remarks
   * The latest sample_status.
   * 
   * @example
   * COMPLETE
   */
  latestStatus?: string;
  /**
   * @remarks
   * The millisecond timestamp of the latest event.
   * 
   * @example
   * 1787293215480
   */
  latestTimestampMs?: number;
  /**
   * @remarks
   * The sample UID.
   * 
   * @example
   * 321fa56f-e1e5-4eb3-8047-db7a230c9a75
   */
  promptUid?: string;
  /**
   * @remarks
   * The trajectory ordinal number (numeric string).
   * 
   * @example
   * 2
   */
  sampleIndex?: string;
  /**
   * @remarks
   * The desired state. Valid values: trained (training completed) and empty string (in progress). The current frame does not perform oversampling, so discarded and cancelled do not occur.
   * 
   * @example
   * trained
   */
  terminalState?: string;
  /**
   * @remarks
   * The number of trace rows for the trajectory, including B/C type allocations.
   * 
   * @example
   * 10
   */
  traceCount?: number;
  static names(): { [key: string]: string } {
    return {
      latestDetail: 'LatestDetail',
      latestStage: 'LatestStage',
      latestStatus: 'LatestStatus',
      latestTimestampMs: 'LatestTimestampMs',
      promptUid: 'PromptUid',
      sampleIndex: 'SampleIndex',
      terminalState: 'TerminalState',
      traceCount: 'TraceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestDetail: 'string',
      latestStage: 'string',
      latestStatus: 'string',
      latestTimestampMs: 'number',
      promptUid: 'string',
      sampleIndex: 'string',
      terminalState: 'string',
      traceCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

