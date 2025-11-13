// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunContractResultGenerationResponseBodyOutputResultSubRisks extends $dara.Model {
  originalContent?: string;
  resultContent?: string;
  resultType?: string;
  riskBrief?: string;
  riskClause?: string;
  riskExplain?: string;
  standardOriginalContent?: string;
  static names(): { [key: string]: string } {
    return {
      originalContent: 'originalContent',
      resultContent: 'resultContent',
      resultType: 'resultType',
      riskBrief: 'riskBrief',
      riskClause: 'riskClause',
      riskExplain: 'riskExplain',
      standardOriginalContent: 'standardOriginalContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalContent: 'string',
      resultContent: 'string',
      resultType: 'string',
      riskBrief: 'string',
      riskClause: 'string',
      riskExplain: 'string',
      standardOriginalContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationResponseBodyOutputResult extends $dara.Model {
  examineBrief?: string;
  examineResult?: string;
  /**
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @example
   * 1.1
   */
  ruleSequence?: string;
  ruleTag?: string;
  ruleTitle?: string;
  subRisks?: RunContractResultGenerationResponseBodyOutputResultSubRisks[];
  static names(): { [key: string]: string } {
    return {
      examineBrief: 'examineBrief',
      examineResult: 'examineResult',
      riskLevel: 'riskLevel',
      ruleSequence: 'ruleSequence',
      ruleTag: 'ruleTag',
      ruleTitle: 'ruleTitle',
      subRisks: 'subRisks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      examineBrief: 'string',
      examineResult: 'string',
      riskLevel: 'string',
      ruleSequence: 'string',
      ruleTag: 'string',
      ruleTitle: 'string',
      subRisks: { 'type': 'array', 'itemType': RunContractResultGenerationResponseBodyOutputResultSubRisks },
    };
  }

  validate() {
    if(Array.isArray(this.subRisks)) {
      $dara.Model.validateArray(this.subRisks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationResponseBodyOutput extends $dara.Model {
  result?: RunContractResultGenerationResponseBodyOutputResult;
  /**
   * @example
   * eaa56e1e-e205-4f5e-926e-5e2269ae7f68
   */
  resultTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      resultTaskId: 'resultTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: RunContractResultGenerationResponseBodyOutputResult,
      resultTaskId: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationResponseBodyUsage extends $dara.Model {
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

export class RunContractResultGenerationResponseBody extends $dara.Model {
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
  output?: RunContractResultGenerationResponseBodyOutput;
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
  usage?: RunContractResultGenerationResponseBodyUsage;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
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
      output: RunContractResultGenerationResponseBodyOutput,
      requestId: 'string',
      success: 'boolean',
      usage: RunContractResultGenerationResponseBodyUsage,
      httpStatusCode: 'string',
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

