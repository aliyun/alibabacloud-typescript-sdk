// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OralEvaluationStatisticsConcurrentCountResponseProjectDataApplicationDataData } from "./OralEvaluationStatisticsConcurrentCountResponseProjectDataApplicationDataData";


export class OralEvaluationStatisticsConcurrentCountResponseProjectDataApplicationData extends $dara.Model {
  data?: OralEvaluationStatisticsConcurrentCountResponseProjectDataApplicationDataData[];
  /**
   * @remarks
   * This parameter is required.
   */
  applicationAccessId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      applicationAccessId: 'applicationAccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': OralEvaluationStatisticsConcurrentCountResponseProjectDataApplicationDataData },
      applicationAccessId: 'string',
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

