// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResult } from "./RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResult";


export class RunEnterpriseVocAnalysisResponseBodyPayloadOutput extends $dara.Model {
  filterResult?: RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResult;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      filterResult: 'filterResult',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterResult: RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResult,
      text: 'string',
    };
  }

  validate() {
    if(this.filterResult && typeof (this.filterResult as any).validate === 'function') {
      (this.filterResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

