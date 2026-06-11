// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtConfigDetail extends $dara.Model {
  /**
   * @example
   * allowed-tools: Bash(agent-browser:*)
   */
  content?: string;
  /**
   * @example
   * The skill configuration allows Bash execution via agent-browser:* pattern without requiring user confirmation. This enables potentially dangerous command execution through the browser automation CLI.
   */
  description?: string;
  /**
   * @example
   * Dangerous Tools Without Confirmation
   */
  itemName?: string;
  /**
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
   * @example
   * 25
   */
  confidence?: number;
  /**
   * @example
   * Suspicious attacks.
   */
  description?: string;
  /**
   * @example
   * attack
   */
  label?: string;
  /**
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
   * @example
   * high
   */
  level?: string;
  result?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtGuardrailDetailResult[];
  /**
   * @example
   * block
   */
  suggestion?: string;
  /**
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
  detail?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtGuardrailDetail[];
  /**
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
   * @example
   * aliyun_ak_24
   */
  desc?: string;
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
   * @example
   * {}
   */
  ext?: string;
  /**
   * @example
   * 100
   */
  score?: number;
  /**
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
  config?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtConfig;
  guardrail?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtGuardrail;
  sensitive?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExtSensitive;
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
  ext?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResultRiskInfoExt;
  /**
   * @example
   * /home/97e55e6af371836f/
   */
  path?: string;
  /**
   * @example
   * file
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
  skillCheckResult?: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResult;
  static names(): { [key: string]: string } {
    return {
      skillCheckResult: 'SkillCheckResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillCheckResult: ListSubTasksResponseBodyDataTaskResultMessageSkillCheckResult,
    };
  }

  validate() {
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
   * @example
   * 03d1f08455e965cac0351eaa59256fd9
   */
  fileHash?: string;
  /**
   * @example
   * 4190063324899520
   */
  id?: number;
  /**
   * @example
   * c7acb2f1264e4467887ef8f4c36c44ca1
   */
  target?: string;
  taskResultMessage?: ListSubTasksResponseBodyDataTaskResultMessage;
  /**
   * @example
   * success
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      fileHash: 'FileHash',
      id: 'Id',
      target: 'Target',
      taskResultMessage: 'TaskResultMessage',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileHash: 'string',
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
   * @example
   * 1
   */
  count?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
  data?: ListSubTasksResponseBodyData[];
  pageInfo?: ListSubTasksResponseBodyPageInfo;
  /**
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

