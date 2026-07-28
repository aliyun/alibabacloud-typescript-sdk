// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AutopilotPolicyAdvancedRules extends $dara.Model {
  enabled?: boolean;
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
  coolDownMinutes?: number;
  jobMaxCpu?: number;
  jobMaxMemory?: string;
  jobMaxParallelism?: number;
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
  enabled?: boolean;
  memUsageScaleDownSampleInterval?: string;
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
  enabled?: boolean;
  slotBusyScaleDownSampleInterval?: string;
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
  memoryScaleDownRule?: AutopilotPolicyScaleDownRulesMemoryScaleDownRule;
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
  delaySampleInterval?: string;
  delayThreshold?: string;
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
  enabled?: boolean;
  gcSampleInterval?: string;
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
  enabled?: boolean;
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
  enabled?: boolean;
  slotBusyScaleUpSampleInterval?: string;
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
  delayRule?: AutopilotPolicyScaleUpRulesDelayRule;
  gcRule?: AutopilotPolicyScaleUpRulesGcRule;
  memoryScaleUpRule?: AutopilotPolicyScaleUpRulesMemoryScaleUpRule;
  oomScaleUpRule?: AutopilotPolicyScaleUpRulesOomScaleUpRule;
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
  beginTime?: number;
  endTime?: number;
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
  enabled?: boolean;
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
  advancedRules?: AutopilotPolicyAdvancedRules;
  limits?: AutopilotPolicyLimits;
  scaleDownRules?: AutopilotPolicyScaleDownRules;
  scaleUpRules?: AutopilotPolicyScaleUpRules;
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

