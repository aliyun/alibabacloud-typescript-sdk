// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchCondition } from "./SearchCondition";


export class SubmitAnalysisTaskRequest extends $dara.Model {
  analyseType?: string;
  requestId?: string;
  searchCondition?: SearchCondition;
  teamHashId?: string;
  static names(): { [key: string]: string } {
    return {
      analyseType: 'analyseType',
      requestId: 'requestId',
      searchCondition: 'searchCondition',
      teamHashId: 'teamHashId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyseType: 'string',
      requestId: 'string',
      searchCondition: SearchCondition,
      teamHashId: 'string',
    };
  }

  validate() {
    if(this.searchCondition && typeof (this.searchCondition as any).validate === 'function') {
      (this.searchCondition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

