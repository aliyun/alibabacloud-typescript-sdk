// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTagMiningAnalysisTaskResponseBodyDataResults } from "./GetTagMiningAnalysisTaskResponseBodyDataResults";


export class GetTagMiningAnalysisTaskResponseBodyData extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  results?: GetTagMiningAnalysisTaskResponseBodyDataResults[];
  /**
   * @example
   * RUNNIN
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      results: 'results',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      results: { 'type': 'array', 'itemType': GetTagMiningAnalysisTaskResponseBodyDataResults },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

