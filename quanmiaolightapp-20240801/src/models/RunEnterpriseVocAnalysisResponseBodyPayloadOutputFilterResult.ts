// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResultFilterResults } from "./RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResultFilterResults";


export class RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResult extends $dara.Model {
  filterResults?: RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResultFilterResults[];
  static names(): { [key: string]: string } {
    return {
      filterResults: 'filterResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterResults: { 'type': 'array', 'itemType': RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResultFilterResults },
    };
  }

  validate() {
    if(Array.isArray(this.filterResults)) {
      $dara.Model.validateArray(this.filterResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

