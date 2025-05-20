// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReductionProposalResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Proactive carbon reduction recommendations and advice.
   * 
   * @example
   * Reduce one-drop usage
   */
  reduction?: string;
  /**
   * @remarks
   * Active carbon reduction assessment.
   * 
   * @example
   * Trying Energy Expert for a more detailed assessment.
   */
  reductionEvaluation?: string;
  static names(): { [key: string]: string } {
    return {
      reduction: 'reduction',
      reductionEvaluation: 'reductionEvaluation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reduction: 'string',
      reductionEvaluation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

