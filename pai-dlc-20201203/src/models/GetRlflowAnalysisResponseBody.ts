// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLFlowFunnelStage } from "./RlflowFunnelStage";
import { RLFlowMilestoneCount } from "./RlflowMilestoneCount";
import { RLFlowSankey } from "./RlflowSankey";
import { RLFlowStep } from "./RlflowStep";
import { RLFlowStuckItem } from "./RlflowStuckItem";
import { RLFlowTotals } from "./RlflowTotals";
import { RLFlowTransition } from "./RlflowTransition";
import { RLFlowTurns } from "./RlflowTurns";
import { RLFlowWaste } from "./RlflowWaste";


export class GetRLFlowAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether trajectory data exists within the query window.
   * 
   * @example
   * true
   */
  found?: boolean;
  /**
   * @remarks
   * The 6-level funnel: traj → dispatch → run → push → selected → trained.
   */
  funnel?: RLFlowFunnelStage[];
  /**
   * @remarks
   * The count of in-flight trajectories by milestone, sorted in descending order of Count.
   */
  inflightByMilestone?: RLFlowMilestoneCount[];
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-xxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The offset of the Megatron global_step relative to the FORM_BATCH batch_id. Valid values: 0 or 1.
   * 
   * @example
   * 0
   */
  megaStepOffset?: number;
  /**
   * @remarks
   * The server observation time in milliseconds, calculated as min(EndTime, now). This value serves as the baseline for calculating in-flight idle time.
   * 
   * @example
   * 1787475397000
   */
  nowMs?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The Sankey diagram.
   * 
   * **if can be null:**
   * true
   */
  sankey?: RLFlowSankey;
  /**
   * @remarks
   * The time source for steps. A value of progress indicates that the time is extracted from the step markers in the task logs. A value of trace indicates that the time is grouped by global_step in the trace. An empty value indicates that no step data is available.
   * 
   * @example
   * progress
   */
  stepSource?: string;
  /**
   * @remarks
   * The step production-consumption view.
   */
  steps?: RLFlowStep[];
  /**
   * @remarks
   * The top 100 in-flight stuck points, sorted in descending order of IdleSec.
   */
  stuck?: RLFlowStuckItem[];
  /**
   * @remarks
   * The total statistics.
   * 
   * @example
   * {\"Sampled\": 0, \"Uids\": 0, \"Inflight\": 0, \"Trained\": 0, \"Trajs\": 0, \"Rewarded\": 0}
   * 
   * **if can be null:**
   * true
   */
  totals?: RLFlowTotals;
  /**
   * @remarks
   * The percentile statistics for the duration in seconds of 8 stages.
   */
  transitions?: RLFlowTransition[];
  /**
   * @remarks
   * The distribution of generation turns.
   * 
   * @example
   * {\"Count\": 0, \"Max\": None, \"Avg\": None, \"P50\": None, \"P90\": None}
   * 
   * **if can be null:**
   * true
   */
  turns?: RLFlowTurns;
  /**
   * @remarks
   * The oversampling waste.
   * 
   * @example
   * {\"UsefulSec\": 0}
   * 
   * **if can be null:**
   * true
   */
  waste?: RLFlowWaste;
  static names(): { [key: string]: string } {
    return {
      found: 'Found',
      funnel: 'Funnel',
      inflightByMilestone: 'InflightByMilestone',
      jobId: 'JobId',
      megaStepOffset: 'MegaStepOffset',
      nowMs: 'NowMs',
      requestId: 'RequestId',
      sankey: 'Sankey',
      stepSource: 'StepSource',
      steps: 'Steps',
      stuck: 'Stuck',
      totals: 'Totals',
      transitions: 'Transitions',
      turns: 'Turns',
      waste: 'Waste',
    };
  }

  static types(): { [key: string]: any } {
    return {
      found: 'boolean',
      funnel: { 'type': 'array', 'itemType': RLFlowFunnelStage },
      inflightByMilestone: { 'type': 'array', 'itemType': RLFlowMilestoneCount },
      jobId: 'string',
      megaStepOffset: 'number',
      nowMs: 'number',
      requestId: 'string',
      sankey: RLFlowSankey,
      stepSource: 'string',
      steps: { 'type': 'array', 'itemType': RLFlowStep },
      stuck: { 'type': 'array', 'itemType': RLFlowStuckItem },
      totals: RLFlowTotals,
      transitions: { 'type': 'array', 'itemType': RLFlowTransition },
      turns: RLFlowTurns,
      waste: RLFlowWaste,
    };
  }

  validate() {
    if(Array.isArray(this.funnel)) {
      $dara.Model.validateArray(this.funnel);
    }
    if(Array.isArray(this.inflightByMilestone)) {
      $dara.Model.validateArray(this.inflightByMilestone);
    }
    if(this.sankey && typeof (this.sankey as any).validate === 'function') {
      (this.sankey as any).validate();
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    if(Array.isArray(this.stuck)) {
      $dara.Model.validateArray(this.stuck);
    }
    if(this.totals && typeof (this.totals as any).validate === 'function') {
      (this.totals as any).validate();
    }
    if(Array.isArray(this.transitions)) {
      $dara.Model.validateArray(this.transitions);
    }
    if(this.turns && typeof (this.turns as any).validate === 'function') {
      (this.turns as any).validate();
    }
    if(this.waste && typeof (this.waste as any).validate === 'function') {
      (this.waste as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

