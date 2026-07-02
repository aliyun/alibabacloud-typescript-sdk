// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVmcoreDiagnosisTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the created diagnostic task.
   * 
   * @example
   * bbe94a98-4192-4172-b856-95777e0a55d7
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateVmcoreDiagnosisTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - If code is Success, the authorization is successful.
   * - Other status codes indicate that the authorization has failed. Check the message field for the detailed fault message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateVmcoreDiagnosisTaskResponseBodyData;
  /**
   * @remarks
   * The error message.
   * - If code is Success, this field is empty.
   * - Otherwise, this field contains the error message for the request.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateVmcoreDiagnosisTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
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

