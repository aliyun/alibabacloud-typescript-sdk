// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteWorkflowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the workflow instance.
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
   * The return code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned for a successful request. It contains the workflow instance ID.
   */
  data?: ExecuteWorkflowResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is returned only if the request fails.
   * 
   * @example
   * Cannot find product according to your domain.
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID.
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

