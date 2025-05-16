// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OralEvaluationStatisticsConcurrentCountRequest } from "./OralEvaluationStatisticsConcurrentCountRequest";


export class CountOralEvaluationStatisticsConcurrentRequest extends $dara.Model {
  body?: OralEvaluationStatisticsConcurrentCountRequest;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: OralEvaluationStatisticsConcurrentCountRequest,
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

