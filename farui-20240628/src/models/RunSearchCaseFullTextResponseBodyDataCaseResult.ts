// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchCaseFullTextResponseBodyDataCaseResultCaseDomain } from "./RunSearchCaseFullTextResponseBodyDataCaseResultCaseDomain";


export class RunSearchCaseFullTextResponseBodyDataCaseResult extends $dara.Model {
  caseDomain?: RunSearchCaseFullTextResponseBodyDataCaseResultCaseDomain;
  mode?: string;
  /**
   * @example
   * 0.88
   */
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      caseDomain: 'caseDomain',
      mode: 'mode',
      similarity: 'similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseDomain: RunSearchCaseFullTextResponseBodyDataCaseResultCaseDomain,
      mode: 'string',
      similarity: 'string',
    };
  }

  validate() {
    if(this.caseDomain && typeof (this.caseDomain as any).validate === 'function') {
      (this.caseDomain as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

