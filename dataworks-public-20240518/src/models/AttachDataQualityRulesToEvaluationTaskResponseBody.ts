// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDataQualityRulesToEvaluationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E6F0DBDD-5AD8-4870-A6A0
   */
  requestId?: string;
  /**
   * @remarks
   * The value of the association is as follows:
   * - true: The call is successful.
   * - false: the call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

