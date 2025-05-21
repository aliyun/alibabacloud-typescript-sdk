// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAICoachTaskResponseBody extends $dara.Model {
  /**
   * @example
   * Deduct.DeductTaskAlreadySuccess
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 821882330423951360
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

