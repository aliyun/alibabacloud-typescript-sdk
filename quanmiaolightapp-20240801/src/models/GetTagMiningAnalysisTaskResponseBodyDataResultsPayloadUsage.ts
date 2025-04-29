// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputToken?: number;
  /**
   * @example
   * 200
   */
  outputToken?: number;
  /**
   * @example
   * 300
   */
  totalToken?: number;
  static names(): { [key: string]: string } {
    return {
      inputToken: 'inputToken',
      outputToken: 'outputToken',
      totalToken: 'totalToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputToken: 'number',
      outputToken: 'number',
      totalToken: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

