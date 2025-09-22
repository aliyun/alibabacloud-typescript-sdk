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

export class GetReductionProposalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetReductionProposalResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetReductionProposalResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

