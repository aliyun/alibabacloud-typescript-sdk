// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Workforce } from "./Workforce";


export class GetTaskWorkforceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return encoding. The default value is 0, indicating normal execution.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Details.
   * 
   * @example
   * null
   */
  details?: string;
  /**
   * @remarks
   * Error code.  
   * - When Success is false, returns a business error code.  
   * - When Success is true, returns an empty value.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 90ABA848-AD74-1F6E-84BC-4182A7F1****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded. Valid values:  
   * - true: Succeeded.  
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * List of workforce.
   */
  workforce?: Workforce[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      workforce: 'Workforce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      workforce: { 'type': 'array', 'itemType': Workforce },
    };
  }

  validate() {
    if(Array.isArray(this.workforce)) {
      $dara.Model.validateArray(this.workforce);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

