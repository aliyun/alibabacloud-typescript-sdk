// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SmartqAuthorizeResponseBodyResult } from "./SmartqAuthorizeResponseBodyResult";


export class SmartqAuthorizeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 617277C****************ABA47E31
   */
  requestId?: string;
  /**
   * @remarks
   * Array of failed user information.
   */
  result?: SmartqAuthorizeResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. The value range is as follows:
   * 
   * - true: Request succeeded
   * - false: Request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': SmartqAuthorizeResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

