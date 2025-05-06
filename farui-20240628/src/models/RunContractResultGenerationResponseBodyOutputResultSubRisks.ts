// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunContractResultGenerationResponseBodyOutputResultSubRisks extends $dara.Model {
  originalContent?: string;
  resultContent?: string;
  resultType?: string;
  riskBrief?: string;
  riskClause?: string;
  riskExplain?: string;
  static names(): { [key: string]: string } {
    return {
      originalContent: 'originalContent',
      resultContent: 'resultContent',
      resultType: 'resultType',
      riskBrief: 'riskBrief',
      riskClause: 'riskClause',
      riskExplain: 'riskExplain',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

