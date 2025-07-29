// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteWorkflowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The workflow instance ID.
   * 
   * @example
   * 111111
   */
  wfInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      wfInstanceId: 'WfInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wfInstanceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * If the request is successful, the ID of the workflow instance is returned.
   */
  data?: ExecuteWorkflowResponseBodyData;
  /**
   * @remarks
   * The error message that is returned only if the corresponding error occurs.
   * 
   * @example
   * Cannot find product according to your domain.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ExecuteWorkflowResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

