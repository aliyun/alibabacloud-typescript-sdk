// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SingleTenant } from "./SingleTenant";


export class GetTenantResponseBody extends $dara.Model {
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
   * -
   */
  details?: string;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * -
   */
  errorCode?: string;
  /**
   * @remarks
   * Response message of the request.
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
   * Indicates whether the operation succeeded. Possible values:
   * - true: The request succeeded.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Tenant information.
   */
  tenant?: SingleTenant;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tenant: 'Tenant',
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
      tenant: SingleTenant,
    };
  }

  validate() {
    if(this.tenant && typeof (this.tenant as any).validate === 'function') {
      (this.tenant as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

