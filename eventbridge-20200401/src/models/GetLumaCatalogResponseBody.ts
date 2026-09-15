// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Catalog } from "./Catalog";


export class GetLumaCatalogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of Success indicates a successful call. A specific error code is returned if the call fails.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The details of the data catalog bound to the Agent.
   */
  data?: Catalog;
  /**
   * @remarks
   * The message returned by the operation. The value is Operation success when the call succeeds, or a specific error description when the call fails.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, used for troubleshooting and ticket submission.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of true indicates success.
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
      code: 'string',
      data: Catalog,
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

