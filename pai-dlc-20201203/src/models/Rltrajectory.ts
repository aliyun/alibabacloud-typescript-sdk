// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLTrajectory extends $dara.Model {
  /**
   * @remarks
   * The latest event millisecond UNIX timestamp.
   * 
   * @example
   * 1787293215480
   */
  latestTimestampMs?: number;
  /**
   * @remarks
   * The trajectory ordinal number.
   * 
   * @example
   * 2
   */
  sampleIndex?: string;
  /**
   * @remarks
   * The desired state. Valid values:
   * - trained: Training is complete.
   * - Empty string: In progress.
   * 
   * The current frame does not perform oversampling, so discarded and cancelled do not occur.
   * 
   * @example
   * trained
   */
  terminalState?: string;
  /**
   * @remarks
   * The number of trace rows.
   * 
   * @example
   * 10
   */
  traceCount?: number;
  static names(): { [key: string]: string } {
    return {
      latestTimestampMs: 'LatestTimestampMs',
      sampleIndex: 'SampleIndex',
      terminalState: 'TerminalState',
      traceCount: 'TraceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestTimestampMs: 'number',
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

