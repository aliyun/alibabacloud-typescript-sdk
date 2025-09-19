// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAntiBruteForceRuleResponseBodyCreateAntiBruteForceRule extends $dara.Model {
  /**
   * @remarks
   * The ID of the defense rule.
   * 
   * @example
   * 65778
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntiBruteForceRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the defense rule.
   */
  createAntiBruteForceRule?: CreateAntiBruteForceRuleResponseBodyCreateAntiBruteForceRule;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D0760E840
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createAntiBruteForceRule: 'CreateAntiBruteForceRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createAntiBruteForceRule: CreateAntiBruteForceRuleResponseBodyCreateAntiBruteForceRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.createAntiBruteForceRule && typeof (this.createAntiBruteForceRule as any).validate === 'function') {
      (this.createAntiBruteForceRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

