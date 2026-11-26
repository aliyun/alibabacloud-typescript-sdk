// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLProgressBuffer } from "./RlprogressBuffer";
import { RLProgressConfig } from "./RlprogressConfig";
import { RLProgressEval } from "./RlprogressEval";
import { RLProgressFatal } from "./RlprogressFatal";
import { RLProgressRollout } from "./RlprogressRollout";
import { RLProgressSlow } from "./RlprogressSlow";
import { RLProgressStages } from "./RlprogressStages";
import { RLProgressStep } from "./RlprogressStep";
import { RLProgressTrainer } from "./RlprogressTrainer";


export class GetRLTrainingProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The readiness of the data buffer. The ETA is estimated by using the rollout completion rate as a proxy.
   * 
   * **if can be null:**
   * true
   */
  buffer?: RLProgressBuffer;
  /**
   * @remarks
   * The parsing result of the training configuration dump. Unparsed fields are empty.
   * 
   * @example
   * {}
   * 
   * **if can be null:**
   * true
   */
  config?: RLProgressConfig;
  /**
   * @remarks
   * The readiness of the eval buffer (tag=-1).
   * 
   * **if can be null:**
   * true
   */
  eval?: RLProgressEval;
  /**
   * @remarks
   * The fatal errors. A maximum of 5 errors are included, and sandbox business noise is excluded.
   */
  fatal?: RLProgressFatal[];
  /**
   * @remarks
   * Indicates whether master-0 has logs within the window. If the value is false, other fields use default values.
   * 
   * @example
   * true
   */
  found?: boolean;
  /**
   * @remarks
   * Indicates whether no fatal errors are found. The value is true if Fatal is empty.
   * 
   * @example
   * true
   */
  healthOk?: boolean;
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
   * The time of the last log in UNIX seconds.
   * 
   * @example
   * 1787474487
   */
  lastLogTime?: number;
  /**
   * @remarks
   * The original text of the latest trainer phase marker.
   * 
   * @example
   * disagg: actor generate sequences
   */
  phase?: string;
  /**
   * @remarks
   * The time of the phase marker in UNIX seconds, used by the frontend to calculate the dwell time.
   * 
   * @example
   * 1787474487
   */
  phaseTime?: number;
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
   * The rollout throughput.
   * 
   * **if can be null:**
   * true
   */
  rollout?: RLProgressRollout;
  /**
   * @remarks
   * The current server time in UNIX seconds, used by the frontend to calculate the time since the last log.
   * 
   * @example
   * 1787475398
   */
  serverNow?: number;
  /**
   * @remarks
   * The soft alerts for slow inference. A maximum of 20 details are included.
   * 
   * **if can be null:**
   * true
   */
  slow?: RLProgressSlow;
  /**
   * @remarks
   * The phase pipeline.
   * 
   * @example
   * [{\"Index\": \"Group0-Stage0\", \"StageInfo\": {\"Status\": \"FAIL\", \"EndTime\": 0, \"Jobs\": [{\"Id\": 477917255}], \"Name\": u\"\u9636\u6bb51\", \"StartTime\": 1784858533000}, \"Name\": u\"\u9636\u6bb51\"}]
   * 
   * **if can be null:**
   * true
   */
  stages?: RLProgressStages;
  /**
   * @remarks
   * The step progress. Pace is calculated based on the difference between two adjacent Step markers. ETA = (Total - Current) × Pace.
   * 
   * @example
   * 1
   * 
   * **if can be null:**
   * true
   */
  step?: RLProgressStep;
  /**
   * @remarks
   * The latest generation throughput in tokens per second.
   * 
   * @example
   * 1200
   */
  throughput?: number;
  /**
   * @remarks
   * The training mode. Valid values: disagg (decoupled training and inference), colocate (integrated training and inference), or an empty string (unrecognized).
   * 
   * @example
   * disagg
   */
  trainMode?: string;
  /**
   * @remarks
   * The internal status of the trainer, such as mini-batch, micro-batch, or parameter synchronization.
   * 
   * **if can be null:**
   * true
   */
  trainer?: RLProgressTrainer;
  static names(): { [key: string]: string } {
    return {
      buffer: 'Buffer',
      config: 'Config',
      eval: 'Eval',
      fatal: 'Fatal',
      found: 'Found',
      healthOk: 'HealthOk',
      jobId: 'JobId',
      lastLogTime: 'LastLogTime',
      phase: 'Phase',
      phaseTime: 'PhaseTime',
      requestId: 'RequestId',
      rollout: 'Rollout',
      serverNow: 'ServerNow',
      slow: 'Slow',
      stages: 'Stages',
      step: 'Step',
      throughput: 'Throughput',
      trainMode: 'TrainMode',
      trainer: 'Trainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buffer: RLProgressBuffer,
      config: RLProgressConfig,
      eval: RLProgressEval,
      fatal: { 'type': 'array', 'itemType': RLProgressFatal },
      found: 'boolean',
      healthOk: 'boolean',
      jobId: 'string',
      lastLogTime: 'number',
      phase: 'string',
      phaseTime: 'number',
      requestId: 'string',
      rollout: RLProgressRollout,
      serverNow: 'number',
      slow: RLProgressSlow,
      stages: RLProgressStages,
      step: RLProgressStep,
      throughput: 'number',
      trainMode: 'string',
      trainer: RLProgressTrainer,
    };
  }

  validate() {
    if(this.buffer && typeof (this.buffer as any).validate === 'function') {
      (this.buffer as any).validate();
    }
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.eval && typeof (this.eval as any).validate === 'function') {
      (this.eval as any).validate();
    }
    if(Array.isArray(this.fatal)) {
      $dara.Model.validateArray(this.fatal);
    }
    if(this.rollout && typeof (this.rollout as any).validate === 'function') {
      (this.rollout as any).validate();
    }
    if(this.slow && typeof (this.slow as any).validate === 'function') {
      (this.slow as any).validate();
    }
    if(this.stages && typeof (this.stages as any).validate === 'function') {
      (this.stages as any).validate();
    }
    if(this.step && typeof (this.step as any).validate === 'function') {
      (this.step as any).validate();
    }
    if(this.trainer && typeof (this.trainer as any).validate === 'function') {
      (this.trainer as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

