// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDataAgentAccuracyTestTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the accuracy test task.
   * 
   * @example
   * 692abb8f-xxx-77fec862db34
   */
  accuracyTestTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      accuracyTestTaskId: 'AccuracyTestTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accuracyTestTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDataAgentAccuracyTestTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: StartDataAgentAccuracyTestTaskResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D94F5232-xxx-EH0H28FGGI5I
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - True: The request was successful.                                 
   * - False: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: StartDataAgentAccuracyTestTaskResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

