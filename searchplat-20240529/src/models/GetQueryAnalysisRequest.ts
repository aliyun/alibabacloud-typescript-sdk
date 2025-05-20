// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQueryAnalysisRequestFunctions } from "./GetQueryAnalysisRequestFunctions";
import { GetQueryAnalysisRequestHistory } from "./GetQueryAnalysisRequestHistory";


export class GetQueryAnalysisRequest extends $dara.Model {
  functions?: GetQueryAnalysisRequestFunctions[];
  history?: GetQueryAnalysisRequestHistory[];
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      functions: 'functions',
      history: 'history',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': GetQueryAnalysisRequestFunctions },
      history: { 'type': 'array', 'itemType': GetQueryAnalysisRequestHistory },
      query: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.functions)) {
      $dara.Model.validateArray(this.functions);
    }
    if(Array.isArray(this.history)) {
      $dara.Model.validateArray(this.history);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

