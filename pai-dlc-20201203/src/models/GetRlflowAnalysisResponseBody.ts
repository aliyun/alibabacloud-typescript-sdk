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
   * 窗口内是否有轨迹数据
   * 
   * @example
   * true
   */
  found?: boolean;
  /**
   * @remarks
   * 轨迹流转漏斗，按 traj → dispatch → run → rollout → reward → sampled → trained 的七级顺序返回。各级按已观测到的事件独立计数，不保证逐级递减。
   */
  funnel?: RLFlowFunnelStage[];
  /**
   * @remarks
   * 在途轨迹按环节计数（按 Count 降序）
   */
  inflightByMilestone?: RLFlowMilestoneCount[];
  /**
   * @remarks
   * 作业 ID
   * 
   * @example
   * dlc-20210126170216-xxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * megatron 侧 step 编号相对 global_step 的偏移，取值为 0 或 1；缺少可用对齐信息时返回 0。
   * 
   * @example
   * 0
   */
  megaStepOffset?: number;
  /**
   * @remarks
   * 服务端观察时刻（毫秒，= min(EndTime, now)），在途 idle 计算基准
   * 
   * @example
   * 1787475397000
   */
  nowMs?: number;
  /**
   * @remarks
   * 请求 ID
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * 桑基图
   * 
   * **if can be null:**
   * true
   */
  sankey?: RLFlowSankey;
  /**
   * @remarks
   * Steps 的时刻来源：progress 表示取自任务日志的 Step 标记，trace 表示按 trace 里的 global_step 归步，空表示无 step 数据
   * 
   * @example
   * progress
   */
  stepSource?: string;
  /**
   * @remarks
   * step 生产-消费视图
   */
  steps?: RLFlowStep[];
  /**
   * @remarks
   * 在途卡点 Top100（按 IdleSec 降序）
   */
  stuck?: RLFlowStuckItem[];
  /**
   * @remarks
   * 总量统计
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
   * 12 个阶段的耗时分位统计，耗时单位为秒。
   */
  transitions?: RLFlowTransition[];
  /**
   * @remarks
   * 生成轮数分布
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
   * 有效算力统计。UsefulSec 为已完成训练轨迹的累计执行耗时，单位为整数秒；可包含重叠时段，不等同于作业运行时长或训练更新耗时。
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

