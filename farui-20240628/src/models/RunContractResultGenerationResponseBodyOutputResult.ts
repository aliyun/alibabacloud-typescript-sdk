// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunContractResultGenerationResponseBodyOutputResultSubRisks } from "./RunContractResultGenerationResponseBodyOutputResultSubRisks";


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

