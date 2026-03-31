// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartConfigRuleEvaluationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D31EEAD7-BF1E-5927-977A-AFF9342A7273
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * *   true
   * *   false
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

