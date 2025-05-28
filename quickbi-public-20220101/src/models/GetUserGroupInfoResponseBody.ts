// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserGroupInfoResponseBodyResult } from "./GetUserGroupInfoResponseBodyResult";


export class GetUserGroupInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D7980306-1F08-5A88-9FE7-ECB8B9C4C0F5
   */
  requestId?: string;
  /**
   * @remarks
   * User group information.
   */
  result?: GetUserGroupInfoResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
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
      result: { 'type': 'array', 'itemType': GetUserGroupInfoResponseBodyResult },
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

