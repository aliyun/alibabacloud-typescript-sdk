// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEvaluationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDB324E2-A202-5FE4-A9BC-31E2C34F78A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the evaluation results of the custom rule are submitted. Valid values:
   * 
   * *   true: The evaluation results are submitted.
   * *   false: The evaluation results fail to be submitted.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

