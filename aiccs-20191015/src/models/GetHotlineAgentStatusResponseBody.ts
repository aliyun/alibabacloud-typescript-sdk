// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineAgentStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A value of "Success" indicates that the request succeeded.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Agent status. Valid values:  
   * - **Offline**  
   * - **Idle**  
   * - **Post-processing**  
   * - **In Call**  
   * - **Break - Rest**  
   * - **Break - Meal**  
   * - **Break - Meeting**  
   * - **Break - Training**  
   * - **Break - Coaching**
   * 
   * @example
   * 通话中
   */
  data?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded. Valid values:  
   * - **true**: Succeeded.  
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
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

