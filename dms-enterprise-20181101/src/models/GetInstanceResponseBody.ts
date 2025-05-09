// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceResponseBodyInstance } from "./GetInstanceResponseBodyInstance";


export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The details of the database instance.
   */
  instance?: GetInstanceResponseBodyInstance;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F6C80B69-3203-56AC-8021-18BA72A6F4E1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instance: 'Instance',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      instance: GetInstanceResponseBodyInstance,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

