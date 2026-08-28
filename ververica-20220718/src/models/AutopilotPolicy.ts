// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AutopilotPolicyAdvancedRules extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable advanced rules.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The advanced rule parameters. An empty map indicates that internal default parameters are used. You can override specific internal parameters by using key-value pairs. The entire map is replaced.
   */
  parameters?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutopilotPolicyLimits extends $dara.Model {
  /**
   * @remarks
   * The minimum cool-down time between two tuning operations, in minutes.
   * 
   * @example
   * 10
   */
  coolDownMinutes?: number;
  /**
   * @remarks
   * The maximum CPU.
   * 
   * @example
   * 16
   */
  jobMaxCpu?: number;
  /**
   * @remarks
   * The maximum memory. Format examples: 4Gi, 256GiB.
   * 
   * @example
   * 64GiB
   */
  jobMaxMemory?: string;
  /**
   * @remarks
   * The maximum parallelism.
   * 
   * @example
   * 10
   */
  jobMaxParallelism?: number;
  /**
   * @remarks
   * The minimum parallelism.
   * 
   * @example
   * 1
   */
  jobMinParallelism?: number;
  static names(): { [key: string]: string } {
    return {
      coolDownMinutes: 'coolDownMinutes',
      jobMaxCpu: 'jobMaxCpu',
      jobMaxMemory: 'jobMaxMemory',
      jobMaxParallelism: 'jobMaxParallelism',
      jobMinParallelism: 'jobMinParallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coolDownMinutes: 'number',
      jobMaxCpu: 'number',
      jobMaxMemory: 'string',
      jobMaxParallelism: 'number',
      jobMinParallelism: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutopilotPolicyScaleDownRulesMemoryScaleDownRule extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable memory scale-down.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The memory scale-down sampling interval. Format examples: 4h, 5m.
   * 
   * @example
   * 25h
   */
  memUsageScaleDownSampleInterval?: string;
  /**
   * @remarks
   * The memory scale-down threshold. Valid values: 0.0 to 1.0. Scale-down is triggered when memory usage falls below this value. This value must be less than the scale-up threshold.
   * 
   * @example
   * 0.3
   */
  memUsageScaleDownThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      memUsageScaleDownSampleInterval: 'memUsageScaleDownSampleInterval',
      memUsageScaleDownThreshold: 'memUsageScaleDownThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      memUsageScaleDownSampleInterval: 'string',
      memUsageScaleDownThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutopilotPolicyScaleDownRulesSlotBusyScaleDownRule extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable slot idle scale-down.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The slot idle sampling interval. Format examples: 4h, 5m.
   * 
   * @example
   * 24h
   */
  slotBusyScaleDownSampleInterval?: string;
  /**
   * @remarks
   * The slot idle scale-down threshold. Valid values: 0.0 to 1.0. Scale-down is triggered when the slot busy ratio falls below this value. This value must be less than the scale-up threshold.
   * 
   * @example
   * 0.2
   */
  slotBusyScaleDownThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      slotBusyScaleDownSampleInterval: 'slotBusyScaleDownSampleInterval',
      slotBusyScaleDownThreshold: 'slotBusyScaleDownThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      slotBusyScaleDownSampleInterval: 'string',
      slotBusyScaleDownThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutopilotPolicyScaleDownRules extends $dara.Model {
  /**
   * @remarks
   * The memory scale-down rule. Scale-down is triggered when memory usage falls below the threshold.
   */
  memoryScaleDownRule?: AutopilotPolicyScaleDownRulesMemoryScaleDownRule;
  /**
   * @remarks
   * The slot idle scale-down rule. Scale-down is triggered when the slot busy ratio falls below the threshold.
   */
  slotBusyScaleDownRule?: AutopilotPolicyScaleDownRulesSlotBusyScaleDownRule;
  static names(): { [key: string]: string } {
    return {
      memoryScaleDownRule: 'memoryScaleDownRule',
      slotBusyScaleDownRule: 'slotBusyScaleDownRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memoryScaleDownRule: AutopilotPolicyScaleDownRulesMemoryScaleDownRule,
      slotBusyScaleDownRule: AutopilotPolicyScaleDownRulesSlotBusyScaleDownRule,
    };
  }

  validate() {
    if(this.memoryScaleDownRule && typeof (this.memoryScaleDownRule as any).validate === 'function') {
      (this.memoryScaleDownRule as any).validate();
    }
    if(this.slotBusyScaleDownRule && typeof (this.slotBusyScaleDownRule as any).validate === 'function') {
      (this.slotBusyScaleDownRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutopilotPolicyScaleUpRulesDelayRule extends $dara.Model {
  /**
   * @remarks
   * The delay sampling interval. Format examples: 3min, 5m, 1h.
   * 
   * @example
   * 3min
   */
  delaySampleInterval?: string;
  /**
   * @remarks
   * The latency threshold. Format examples: 1min, 10m. Scale-up is triggered when the delay continuously exceeds this threshold.
   * 
   * @example
   * 1min
   */
  delayThreshold?: string;
  /**
   * @remarks
   * Specifies whether to enable delay detection scale-up.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      delaySampleInterval: 'delaySampleInterval',
      delayThreshold: 'delayThreshold',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delaySampleInterval: 'string',
      delayThreshold: 'string',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutopilotPolicyScaleUpRulesGcRule extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable GC tuning.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The GC sampling interval. Format examples: 3min, 5m.
   * 
   * @example
   * 3min
   */
  gcSampleInterval?: string;
  /**
   * @remarks
   * The GC time ratio threshold. Valid values: 0.0 to 1.0. Scale-up is triggered when the GC time ratio exceeds this value.
   * 
   * @example
   * 0.2
   */
  gcTimeRatioThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      gcSampleInterval: 'gcSampleInterval',
      gcTimeRatioThreshold: 'gcTimeRatioThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      gcSampleInterval: 'string',
      gcTimeRatioThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutopilotPolicyScaleUpRulesMemoryScaleUpRule extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable memory scale-up.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The memory scale-up threshold. Valid values: 0.0 to 1.0. Scale-up is triggered when memory usage exceeds this value.
   * 
   * @example
   * 0.95
   */
  memUsageScaleUpThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      memUsageScaleUpThreshold: 'memUsageScaleUpThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      memUsageScaleUpThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutopilotPolicyScaleUpRulesOomScaleUpRule extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable OOM scale-up.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutopilotPolicyScaleUpRulesSlotBusyScaleUpRule extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable slot busy scale-up.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The slot busy sampling interval. Format examples: 6min, 5m.
   * 
   * @example
   * 6min
   */
  slotBusyScaleUpSampleInterval?: string;
  /**
   * @remarks
   * The slot busy scale-up threshold. Valid values: 0.0 to 1.0. Scale-up is triggered when the slot busy ratio exceeds this value.
   * 
   * @example
   * 0.8
   */
  slotBusyScaleUpThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      slotBusyScaleUpSampleInterval: 'slotBusyScaleUpSampleInterval',
      slotBusyScaleUpThreshold: 'slotBusyScaleUpThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      slotBusyScaleUpSampleInterval: 'string',
      slotBusyScaleUpThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutopilotPolicyScaleUpRules extends $dara.Model {
  /**
   * @remarks
   * The delay detection scale-up rule. Scale-up is triggered when the job delay exceeds the threshold.
   */
  delayRule?: AutopilotPolicyScaleUpRulesDelayRule;
  /**
   * @remarks
   * The GC tuning rule. Scale-up is triggered when the GC time ratio exceeds the threshold.
   */
  gcRule?: AutopilotPolicyScaleUpRulesGcRule;
  /**
   * @remarks
   * The memory scale-up rule. Scale-up is triggered when memory usage exceeds the threshold.
   */
  memoryScaleUpRule?: AutopilotPolicyScaleUpRulesMemoryScaleUpRule;
  /**
   * @remarks
   * The OOM scale-up rule. Scale-up is triggered when an OOM risk is detected.
   */
  oomScaleUpRule?: AutopilotPolicyScaleUpRulesOomScaleUpRule;
  /**
   * @remarks
   * The slot busy scale-up rule. Scale-up is triggered when the slot busy ratio exceeds the threshold.
   */
  slotBusyScaleUpRule?: AutopilotPolicyScaleUpRulesSlotBusyScaleUpRule;
  static names(): { [key: string]: string } {
    return {
      delayRule: 'delayRule',
      gcRule: 'gcRule',
      memoryScaleUpRule: 'memoryScaleUpRule',
      oomScaleUpRule: 'oomScaleUpRule',
      slotBusyScaleUpRule: 'slotBusyScaleUpRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayRule: AutopilotPolicyScaleUpRulesDelayRule,
      gcRule: AutopilotPolicyScaleUpRulesGcRule,
      memoryScaleUpRule: AutopilotPolicyScaleUpRulesMemoryScaleUpRule,
      oomScaleUpRule: AutopilotPolicyScaleUpRulesOomScaleUpRule,
      slotBusyScaleUpRule: AutopilotPolicyScaleUpRulesSlotBusyScaleUpRule,
    };
  }

  validate() {
    if(this.delayRule && typeof (this.delayRule as any).validate === 'function') {
      (this.delayRule as any).validate();
    }
    if(this.gcRule && typeof (this.gcRule as any).validate === 'function') {
      (this.gcRule as any).validate();
    }
    if(this.memoryScaleUpRule && typeof (this.memoryScaleUpRule as any).validate === 'function') {
      (this.memoryScaleUpRule as any).validate();
    }
    if(this.oomScaleUpRule && typeof (this.oomScaleUpRule as any).validate === 'function') {
      (this.oomScaleUpRule as any).validate();
    }
    if(this.slotBusyScaleUpRule && typeof (this.slotBusyScaleUpRule as any).validate === 'function') {
      (this.slotBusyScaleUpRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutopilotPolicySilentPeriodConfigSilentPeriods extends $dara.Model {
  /**
   * @remarks
   * The start time. For the DAY level: 0-1439, representing the minute offset of the day (for example, 540 represents 9:00). For the WEEK level: 1-7, representing the day of the week (ISO 8601, 1=Monday, 7=Sunday).
   * 
   * @example
   * 540
   */
  beginTime?: number;
  /**
   * @remarks
   * The end time. The format is the same as beginTime. For the WEEK level, if endTime is less than beginTime, it indicates a cross-week period (for example, beginTime=6, endTime=2 means silent from Saturday to the following Tuesday).
   * 
   * @example
   * 1080
   */
  endTime?: number;
  /**
   * @remarks
   * The silent level. DAY indicates daily repetition. WEEK indicates weekly repetition.
   * 
   * @example
   * DAY
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'beginTime',
      endTime: 'endTime',
      level: 'level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutopilotPolicySilentPeriodConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable silent periods.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of silent periods. This is a full replacement, not an append operation.
   */
  silentPeriods?: AutopilotPolicySilentPeriodConfigSilentPeriods[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      silentPeriods: 'silentPeriods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      silentPeriods: { 'type': 'array', 'itemType': AutopilotPolicySilentPeriodConfigSilentPeriods },
    };
  }

  validate() {
    if(Array.isArray(this.silentPeriods)) {
      $dara.Model.validateArray(this.silentPeriods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutopilotPolicy extends $dara.Model {
  /**
   * @remarks
   * The advanced rule configuration. This includes advanced parameters such as chain-break optimization, minimum parallelism, and TM CPU scaling. Disabled by default and must be explicitly enabled.
   */
  advancedRules?: AutopilotPolicyAdvancedRules;
  /**
   * @remarks
   * The upper and lower limits for tuning resources.
   */
  limits?: AutopilotPolicyLimits;
  /**
   * @remarks
   * The scale-down rule configuration.
   */
  scaleDownRules?: AutopilotPolicyScaleDownRules;
  /**
   * @remarks
   * The scale-up rule configuration.
   */
  scaleUpRules?: AutopilotPolicyScaleUpRules;
  /**
   * @remarks
   * The silent period configuration. Automatic tuning operations are not performed during silent periods.
   */
  silentPeriodConfig?: AutopilotPolicySilentPeriodConfig;
  static names(): { [key: string]: string } {
    return {
      advancedRules: 'advancedRules',
      limits: 'limits',
      scaleDownRules: 'scaleDownRules',
      scaleUpRules: 'scaleUpRules',
      silentPeriodConfig: 'silentPeriodConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedRules: AutopilotPolicyAdvancedRules,
      limits: AutopilotPolicyLimits,
      scaleDownRules: AutopilotPolicyScaleDownRules,
      scaleUpRules: AutopilotPolicyScaleUpRules,
      silentPeriodConfig: AutopilotPolicySilentPeriodConfig,
    };
  }

  validate() {
    if(this.advancedRules && typeof (this.advancedRules as any).validate === 'function') {
      (this.advancedRules as any).validate();
    }
    if(this.limits && typeof (this.limits as any).validate === 'function') {
      (this.limits as any).validate();
    }
    if(this.scaleDownRules && typeof (this.scaleDownRules as any).validate === 'function') {
      (this.scaleDownRules as any).validate();
    }
    if(this.scaleUpRules && typeof (this.scaleUpRules as any).validate === 'function') {
      (this.scaleUpRules as any).validate();
    }
    if(this.silentPeriodConfig && typeof (this.silentPeriodConfig as any).validate === 'function') {
      (this.silentPeriodConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

