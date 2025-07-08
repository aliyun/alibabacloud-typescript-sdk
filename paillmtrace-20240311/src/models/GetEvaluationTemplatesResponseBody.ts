// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEvaluationTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Internal error code. Set only when the response has an error.
   * 
   * @example
   * ExecutionFailure
   */
  code?: string;
  /**
   * @remarks
   * A series of templates used internally by the evaluation system to construct LLM interaction information.
   */
  evaluationTemplates?: any[];
  /**
   * @remarks
   * Response error message. Set only when the response has an error.
   * 
   * @example
   * cannot get data back.
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 6A87228C-969A-1381-98CF-AE07AE630FA5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      evaluationTemplates: 'EvaluationTemplates',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      evaluationTemplates: { 'type': 'array', 'itemType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.evaluationTemplates)) {
      $dara.Model.validateArray(this.evaluationTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

