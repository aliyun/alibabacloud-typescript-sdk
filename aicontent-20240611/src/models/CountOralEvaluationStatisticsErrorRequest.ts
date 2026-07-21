// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OralEvaluationStatisticsErrorCountRequest } from "./OralEvaluationStatisticsErrorCountRequest";


export class CountOralEvaluationStatisticsErrorRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for retrieving error statistics for the oral evaluation service.
   */
  body?: OralEvaluationStatisticsErrorCountRequest;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: OralEvaluationStatisticsErrorCountRequest,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

