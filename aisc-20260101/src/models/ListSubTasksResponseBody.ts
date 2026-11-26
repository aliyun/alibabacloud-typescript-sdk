// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultAssetScan extends $dara.Model {
  /**
   * @remarks
   * The result description of the check item, such as the cause of failure, the cause of skipping, or the ID of the delivered policy.
   * 
   * @example
   * dispatched
   */
  message?: string;
  /**
   * @remarks
   * The progress percentage of the check item. Valid values: 0 to 100. This field is not used in the current version.
   * 
   * @example
   * 100
   */
  percent?: number;
  /**
   * @remarks
   * The status of the check item. Valid values: init, running, success, failed, timeout, and skipped.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the policy corresponding to the check item. This field is used only by health check items.
   * 
   * @example
   * 1001
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      percent: 'Percent',
      status: 'Status',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      percent: 'number',
      status: 'string',
      strategyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The result description of the check item, such as the cause of failure, the cause of skipping, or the ID of the delivered policy.
   * 
   * @example
   * strategyId=1001
   */
  message?: string;
  /**
   * @remarks
   * The progress percentage of the check item. Valid values: 0 to 100. This field is not used in the current version.
   * 
   * @example
   * 100
   */
  percent?: number;
  /**
   * @remarks
   * The status of the check item. Valid values: init, running, success, failed, timeout, and skipped.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the policy corresponding to the check item. This field is used only by health check items.
   * 
   * @example
   * 1001
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      percent: 'Percent',
      status: 'Status',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      percent: 'number',
      status: 'string',
      strategyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultMcpCheck extends $dara.Model {
  /**
   * @remarks
   * The result description of the check item, such as the cause of failure, the cause of skipping, or the ID of the delivered policy.
   * 
   * @example
   * mcp check task created, detector not implemented yet
   */
  message?: string;
  /**
   * @remarks
   * The progress percentage of the check item. Valid values: 0 to 100. This field is not used in the current version.
   * 
   * @example
   * 100
   */
  percent?: number;
  /**
   * @remarks
   * The status of the check item. Valid values: init, running, success, failed, timeout, and skipped.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the policy corresponding to the check item. This field is used only by health check items.
   * 
   * @example
   * 1001
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      percent: 'Percent',
      status: 'Status',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      percent: 'number',
      status: 'string',
      strategyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultMemoryCheck extends $dara.Model {
  /**
   * @remarks
   * The result description of the check item, such as the cause of failure, the cause of skipping, or the ID of the delivered policy.
   * 
   * @example
   * memory check task created, detector not implemented yet
   */
  message?: string;
  /**
   * @remarks
   * The progress percentage of the check item. Valid values: 0 to 100. This field is not used in the current version.
   * 
   * @example
   * 100
   */
  percent?: number;
  /**
   * @remarks
   * The status of the check item. Valid values: init, running, success, failed, timeout, and skipped.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the policy corresponding to the check item. This field is used only by health check items.
   * 
   * @example
   * 1001
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      percent: 'Percent',
      status: 'Status',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      percent: 'number',
      status: 'string',
      strategyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultSessionCheck extends $dara.Model {
  /**
   * @remarks
   * The result description of the check item, such as the cause of failure, the cause of skipping, or the ID of the delivered policy.
   * 
   * @example
   * session check task created, detector not implemented yet
   */
  message?: string;
  /**
   * @remarks
   * The progress percentage of the check item. Valid values: 0 to 100. This field is not used in the current version.
   * 
   * @example
   * 100
   */
  percent?: number;
  /**
   * @remarks
   * The status of the check item. Valid values: init, running, success, failed, timeout, and skipped.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the policy corresponding to the check item. This field is used only by health check items.
   * 
   * @example
   * 1001
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      percent: 'Percent',
      status: 'Status',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      percent: 'number',
      status: 'string',
      strategyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultSkillCheck extends $dara.Model {
  /**
   * @remarks
   * The result description of the check item, such as the cause of failure, the cause of skipping, or the ID of the delivered policy.
   * 
   * @example
   * dispatched
   */
  message?: string;
  /**
   * @remarks
   * The progress percentage of the check item. Valid values: 0 to 100. This field is not used in the current version.
   * 
   * @example
   * 100
   */
  percent?: number;
  /**
   * @remarks
   * The status of the check item. Valid values: init, running, success, failed, timeout, and skipped.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the policy corresponding to the check item. This field is used only by health check items.
   * 
   * @example
   * 1001
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      percent: 'Percent',
      status: 'Status',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      percent: 'number',
      status: 'string',
      strategyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultVulScan extends $dara.Model {
  /**
   * @remarks
   * The result description of the check item, such as the cause of failure, the cause of skipping, or the ID of the delivered policy.
   * 
   * @example
   * submitted
   */
  message?: string;
  /**
   * @remarks
   * The progress percentage of the check item. Valid values: 0 to 100. This field is not used in the current version.
   * 
   * @example
   * 100
   */
  percent?: number;
  /**
   * @remarks
   * The status of the check item. Valid values: init, running, success, failed, timeout, and skipped.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the policy corresponding to the check item. This field is used only by health check items.
   * 
   * @example
   * 1001
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      percent: 'Percent',
      status: 'Status',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      percent: 'number',
      status: 'string',
      strategyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageFullCheckResult extends $dara.Model {
  /**
   * @remarks
   * The result of the asset scanning check item.
   */
  assetScan?: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultAssetScan;
  /**
   * @remarks
   * The result of the health check item.
   */
  healthCheck?: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultHealthCheck;
  /**
   * @remarks
   * The result of the MCP check item. If the detector is not connected, the result defaults to success.
   */
  mcpCheck?: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultMcpCheck;
  /**
   * @remarks
   * The result of the memory check item. If the detector is not connected, the result defaults to success.
   */
  memoryCheck?: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultMemoryCheck;
  /**
   * @remarks
   * The result of the session check item. If the detector is not connected, the result defaults to success.
   */
  sessionCheck?: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultSessionCheck;
  /**
   * @remarks
   * The result of the Skill file check item.
   */
  skillCheck?: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultSkillCheck;
  /**
   * @remarks
   * The result of the vulnerability scanning check item.
   */
  vulScan?: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultVulScan;
  static names(): { [key: string]: string } {
    return {
      assetScan: 'AssetScan',
      healthCheck: 'HealthCheck',
      mcpCheck: 'McpCheck',
      memoryCheck: 'MemoryCheck',
      sessionCheck: 'SessionCheck',
      skillCheck: 'SkillCheck',
      vulScan: 'VulScan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetScan: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultAssetScan,
      healthCheck: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultHealthCheck,
      mcpCheck: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultMcpCheck,
      memoryCheck: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultMemoryCheck,
      sessionCheck: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultSessionCheck,
      skillCheck: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultSkillCheck,
      vulScan: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResultVulScan,
    };
  }

  validate() {
    if(this.assetScan && typeof (this.assetScan as any).validate === 'function') {
      (this.assetScan as any).validate();
    }
    if(this.healthCheck && typeof (this.healthCheck as any).validate === 'function') {
      (this.healthCheck as any).validate();
    }
    if(this.mcpCheck && typeof (this.mcpCheck as any).validate === 'function') {
      (this.mcpCheck as any).validate();
    }
    if(this.memoryCheck && typeof (this.memoryCheck as any).validate === 'function') {
      (this.memoryCheck as any).validate();
    }
    if(this.sessionCheck && typeof (this.sessionCheck as any).validate === 'function') {
      (this.sessionCheck as any).validate();
    }
    if(this.skillCheck && typeof (this.skillCheck as any).validate === 'function') {
      (this.skillCheck as any).validate();
    }
    if(this.vulScan && typeof (this.vulScan as any).validate === 'function') {
      (this.vulScan as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtConfigDetail extends $dara.Model {
  /**
   * @remarks
   * The matched content.
   * 
   * @example
   * allowed-tools: Bash(agent-browser:*)
   */
  content?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * The skill configuration allows Bash execution via agent-browser:* pattern without requiring user confirmation. This enables potentially dangerous command execution through the browser automation CLI.
   */
  description?: string;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * Dangerous Tools Without Confirmation
   */
  itemName?: string;
  /**
   * @remarks
   * The line number of the matched content.
   * 
   * @example
   * 2555
   */
  line?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      itemName: 'ItemName',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      itemName: 'string',
      line: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtConfig extends $dara.Model {
  /**
   * @remarks
   * The list of risk details.
   */
  detail?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtConfigDetail[];
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtConfigDetail },
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtGuardrailDetailResult extends $dara.Model {
  /**
   * @remarks
   * The confidence level. Valid values: 0 to 100.
   * 
   * @example
   * 25
   */
  confidence?: number;
  /**
   * @remarks
   * The result description.
   * 
   * @example
   * Suspicious attacks.
   */
  description?: string;
  /**
   * @remarks
   * The label information.
   * 
   * @example
   * attack
   */
  label?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * - **high**: High risk.
   * - **medium**: Medium risk.
   * - **low**: Low risk.
   * - **none**: No risk.
   * 
   * @example
   * high
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
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

export class ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtGuardrailDetail extends $dara.Model {
  /**
   * @remarks
   * The risk level. Valid values:
   * - **high**: High risk.
   * - **medium**: Medium risk.
   * - **low**: Low risk.
   * - **none**: No risk.
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * The list of result details.
   */
  result?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtGuardrailDetailResult[];
  /**
   * @remarks
   * The handling suggestion.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The risk type.
   * 
   * @example
   * promptAttack
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      result: 'Result',
      suggestion: 'Suggestion',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      result: { 'type': 'array', 'itemType': ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtGuardrailDetailResult },
      suggestion: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtGuardrail extends $dara.Model {
  /**
   * @remarks
   * The list of risk details.
   */
  detail?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtGuardrailDetail[];
  /**
   * @remarks
   * The handling suggestion.
   * 
   * @example
   * block
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtGuardrailDetail },
      suggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtSensitiveDetail extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * aliyun_ak_24
   */
  desc?: string;
  /**
   * @remarks
   * The list of sensitive information.
   */
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtSensitive extends $dara.Model {
  /**
   * @remarks
   * The list of risk details.
   */
  detail?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtSensitiveDetail[];
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtSensitiveDetail },
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtVirus extends $dara.Model {
  /**
   * @remarks
   * The extended information field, which is a reserved parameter.
   * 
   * @example
   * {}
   */
  ext?: string;
  /**
   * @remarks
   * The risk score. The maximum score is 100.
   * 
   * @example
   * 100
   */
  score?: number;
  /**
   * @remarks
   * The virus type.
   * 
   * @example
   * Backdoor
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      score: 'Score',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: 'string',
      score: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExt extends $dara.Model {
  /**
   * @remarks
   * The configuration check risk.
   */
  config?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtConfig;
  /**
   * @remarks
   * The security guardrail detection risk.
   */
  guardrail?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtGuardrail;
  /**
   * @remarks
   * The sensitive information risk.
   */
  sensitive?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtSensitive;
  /**
   * @remarks
   * The virus detection risk.
   */
  virus?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtVirus[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      guardrail: 'Guardrail',
      sensitive: 'Sensitive',
      virus: 'Virus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtConfig,
      guardrail: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtGuardrail,
      sensitive: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtSensitive,
      virus: { 'type': 'array', 'itemType': ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtVirus },
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.guardrail && typeof (this.guardrail as any).validate === 'function') {
      (this.guardrail as any).validate();
    }
    if(this.sensitive && typeof (this.sensitive as any).validate === 'function') {
      (this.sensitive as any).validate();
    }
    if(Array.isArray(this.virus)) {
      $dara.Model.validateArray(this.virus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfo extends $dara.Model {
  /**
   * @remarks
   * The list of file check risks.
   */
  ext?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExt;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /home/97e55e6af371836f/
   */
  path?: string;
  /**
   * @remarks
   * The type of the check result. Valid values:
   * - **0**: No risk.
   * - **1**: Risk detected.
   * 
   * @example
   * 1
   */
  resultType?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      path: 'Path',
      resultType: 'ResultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExt,
      path: 'string',
      resultType: 'string',
    };
  }

  validate() {
    if(this.ext && typeof (this.ext as any).validate === 'function') {
      (this.ext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResult extends $dara.Model {
  /**
   * @remarks
   * The file check risk information.
   */
  riskInfo?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfo[];
  static names(): { [key: string]: string } {
    return {
      riskInfo: 'RiskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskInfo: { 'type': 'array', 'itemType': ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfo },
    };
  }

  validate() {
    if(Array.isArray(this.riskInfo)) {
      $dara.Model.validateArray(this.riskInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyDataTaskResultMessage extends $dara.Model {
  /**
   * @remarks
   * The check results of the comprehensive health check task, which provides the status and description for each check item.
   */
  fullCheckResult?: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResult;
  /**
   * @remarks
   * The Skill check task result.
   */
  skillCheckResult?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResult;
  static names(): { [key: string]: string } {
    return {
      fullCheckResult: 'FullCheckResult',
      skillCheckResult: 'SkillCheckResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullCheckResult: ListSubTasksResponseBodyDataTaskResultMessageFullCheckResult,
      skillCheckResult: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResult,
    };
  }

  validate() {
    if(this.fullCheckResult && typeof (this.fullCheckResult as any).validate === 'function') {
      (this.fullCheckResult as any).validate();
    }
    if(this.skillCheckResult && typeof (this.skillCheckResult as any).validate === 'function') {
      (this.skillCheckResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The display name of the agent. It is parsed from the application information based on the target of the subtask. This field is empty if the application record is missing.
   * 
   * @example
   * agent-01
   */
  agentName?: string;
  /**
   * @remarks
   * The hash value of the uploaded file.
   * 
   * @example
   * 03d1f08455e965cac0351eaa59256fd9
   */
  fileHash?: string;
  /**
   * @remarks
   * The millisecond-level timestamp when the subtask finishes execution. This field is empty if the subtask has not finished.
   * 
   * @example
   * 1764036120000
   */
  gmtTaskFinished?: number;
  /**
   * @remarks
   * The millisecond-level timestamp when the subtask starts execution. This field is empty if the subtask has not started.
   * 
   * @example
   * 1764036000000
   */
  gmtTaskStart?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 4190063324899520
   */
  id?: number;
  /**
   * @remarks
   * The detection target.
   * 
   * @example
   * c7acb2f1264e4467887ef8f4c36c44ca1
   */
  target?: string;
  /**
   * @remarks
   * The task result message.
   */
  taskResultMessage?: ListSubTasksResponseBodyDataTaskResultMessage;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * success
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      fileHash: 'FileHash',
      gmtTaskFinished: 'GmtTaskFinished',
      gmtTaskStart: 'GmtTaskStart',
      id: 'Id',
      target: 'Target',
      taskResultMessage: 'TaskResultMessage',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      fileHash: 'string',
      gmtTaskFinished: 'number',
      gmtTaskStart: 'number',
      id: 'number',
      target: 'string',
      taskResultMessage: ListSubTasksResponseBodyDataTaskResultMessage,
      taskStatus: 'string',
    };
  }

  validate() {
    if(this.taskResultMessage && typeof (this.taskResultMessage as any).validate === 'function') {
      (this.taskResultMessage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 1
   */
  count?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records in the query result.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of task results.
   */
  data?: ListSubTasksResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListSubTasksResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9FDE3D6F-26BD-5937-B0E5-8F47962B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSubTasksResponseBodyData },
      pageInfo: ListSubTasksResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

