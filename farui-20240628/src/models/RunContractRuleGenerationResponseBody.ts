// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunContractRuleGenerationResponseBodyOutputRules extends $dara.Model {
  /**
   * @example
   * medium
   */
  riskLevel?: string;
  /**
   * @example
   * 1.1
   */
  ruleSequence?: string;
  ruleTag?: string;
  ruleTitle?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'riskLevel',
      ruleSequence: 'ruleSequence',
      ruleTag: 'ruleTag',
      ruleTitle: 'ruleTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      ruleSequence: 'string',
      ruleTag: 'string',
      ruleTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractRuleGenerationResponseBodyOutput extends $dara.Model {
  /**
   * @example
   * b265b416-ca1f-425d-9340-c968f39624e9
   */
  ruleTaskId?: string;
  rules?: RunContractRuleGenerationResponseBodyOutputRules[];
  static names(): { [key: string]: string } {
    return {
      ruleTaskId: 'ruleTaskId',
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleTaskId: 'string',
      rules: { 'type': 'array', 'itemType': RunContractRuleGenerationResponseBodyOutputRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractRuleGenerationResponseBodyUsage extends $dara.Model {
  /**
   * @example
   * 5
   */
  input?: number;
  /**
   * @example
   * page
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractRuleGenerationResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  message?: string;
  output?: RunContractRuleGenerationResponseBodyOutput;
  /**
   * @example
   * 744419D0-671A-5997-9840-E8AE48356194
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  usage?: RunContractRuleGenerationResponseBodyUsage;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      output: 'Output',
      requestId: 'RequestId',
      success: 'Success',
      usage: 'Usage',
      httpStatusCode: 'httpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      output: RunContractRuleGenerationResponseBodyOutput,
      requestId: 'string',
      success: 'boolean',
      usage: RunContractRuleGenerationResponseBodyUsage,
      httpStatusCode: 'number',
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

