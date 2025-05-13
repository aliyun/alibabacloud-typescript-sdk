// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkFlowResponseBodyData } from "./GetWorkFlowResponseBodyData";


export class GetWorkFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error codes
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data of the workflow.
   */
  data?: GetWorkFlowResponseBodyData;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * workflow is not existed
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 45678xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the API call.
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
      data: GetWorkFlowResponseBodyData,
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

