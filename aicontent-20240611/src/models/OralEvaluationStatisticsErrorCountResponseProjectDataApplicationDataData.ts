// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OralEvaluationStatisticsErrorCountResponseProjectDataApplicationDataDataData } from "./OralEvaluationStatisticsErrorCountResponseProjectDataApplicationDataDataData";


export class OralEvaluationStatisticsErrorCountResponseProjectDataApplicationDataData extends $dara.Model {
  data?: OralEvaluationStatisticsErrorCountResponseProjectDataApplicationDataDataData[];
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': OralEvaluationStatisticsErrorCountResponseProjectDataApplicationDataDataData },
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

