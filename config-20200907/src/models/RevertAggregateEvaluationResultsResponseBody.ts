// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevertAggregateEvaluationResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BB11CBF2-0B0B-59F2-9E84-07B38267AD12
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

