// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateTraceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code. This parameter is returned if an exception occurred.
   * 
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @remarks
   * the task ID of the evaluation task to which the trace belongs.
   * 
   * @example
   * 6000043e103011f0922edec44617e03c
   */
  evaluationId?: string;
  /**
   * @remarks
   * The error message. This parameter is returned if an exception occurred.
   * 
   * @example
   * eval_request missing dataset id or times
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F1AB295E-0D1F-5ECE-9FFA-98ABB4CB5DF5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      evaluationId: 'EvaluationId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      evaluationId: 'string',
      message: 'string',
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

